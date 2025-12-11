import { PromptTemplate } from "@langchain/core/prompts";
import { RunnablePassthrough, RunnableSequence } from "@langchain/core/runnables";
import { streamText } from "ai";
import {
  ChatGoogleGenerativeAI,
  GoogleGenerativeAIEmbeddings,
} from "@langchain/google-genai";
import { formatDocumentsAsString } from "langchain/util/document";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { Messages } from "@/app/hooks/useChat";
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";

const {
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  GOOGLE_API_KEY,
} = process.env;

function withTimeout<T>(promise: Promise<T>, ms: number, errorMessage: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(errorMessage)), ms);
    promise
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages }: { messages: Messages[] } = body;

    const chatHistory = messages
      .slice(0, -1)
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n");
    const userQuery = messages[messages.length - 1].content;

    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: GOOGLE_API_KEY!,
      model: "text-embedding-004",
    });

    const vectorStore = await AstraDBVectorStore.fromExistingIndex(embeddings, {
      token: ASTRA_DB_APPLICATION_TOKEN!,
      endpoint: ASTRA_DB_API_ENDPOINT!,
      collection: ASTRA_DB_COLLECTION!,
      keyspace: ASTRA_DB_NAMESPACE!,
      collectionOptions: { vector: { dimension: 768, metric: "dot_product" } },
    });

    const retriever = vectorStore.asRetriever({ k: 7 });
    const retrievedDocs = await retriever._getRelevantDocuments(userQuery);

    const model = new ChatGoogleGenerativeAI({
      apiKey: GOOGLE_API_KEY!,
      model: "gemini-2.5-flash",
      streaming: true,
    });

    const prompt = PromptTemplate.fromTemplate(`
      You are Spot, a chatbot assistant for Sparsh Hurkat's personal portfolio. 
- Always introduce yourself as Spot. 
- Speak of Sparsh in third person when answering user questions about his experience, projects, skills, or journey. 
- Always refer to the assistant as Spot, not Sparsh.

Context:
{context}

Chat History:
{chatHistory}

Instructions:
- Introduce yourself as Spot if this is the first message.
- Use context to answer questions.
- Append keys when relevant:
  - Journey/Experience → "THISISJOURNEYKEY"
  - Projects → "THISISPROJECTSKEY"
  - Skills/Technical → "THISISSKILLSKEY"
  - Personal/About → "THISISABOUTKEY"
  - Masters application → "THISISMASTERSKEY"
  - Resume request → "sure, here it is" + "THISISRESUMEKEY"

User Question:
{userQuery}

    `);

    const chain = RunnableSequence.from([
      {
        context: new RunnablePassthrough(),
        chatHistory: new RunnablePassthrough(),
        userQuery: new RunnablePassthrough(),
      },
      prompt,
      model,
    ]);

    const parser = new StringOutputParser();
    const context = formatDocumentsAsString(retrievedDocs);

    const streamIterable = await chain.pipe(parser).stream({
      context,
      chatHistory,
      userQuery,
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of streamIterable) {
            controller.enqueue(new TextEncoder().encode(chunk));
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readableStream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error: any) {
    console.error("Error processing request:", error);

    let message =
      "Internal Slumber Error: Since SPOT is free, it falls asleep every now and then... Try again in some time, SPOT will be back up!!";

    if (
      error.message === "VALIDATOR_TIMEOUT" ||
      error.message === "RESPONSE_TIMEOUT"
    ) {
      message = "SPOT is busy with too many requests. Please try again later!!";
    }

    return new Response(message, {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
