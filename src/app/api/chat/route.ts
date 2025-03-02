import { PromptTemplate } from "@langchain/core/prompts";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import { StreamingTextResponse } from "ai";
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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages }: { messages: Messages[] } = body;

    // Get the last user message
    const userQuery =
      messages[messages.length - 1]?.content || "What would you like to ask?";

    // Initialize vector store
    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: GOOGLE_API_KEY,
      model: "text-embedding-004", // 768-dimensional embeddings
    });

    const testEmbedding = await embeddings.embedQuery("test query");
    console.log(testEmbedding);

    const vectorStore = await AstraDBVectorStore.fromExistingIndex(embeddings, {
      token: ASTRA_DB_APPLICATION_TOKEN,
      endpoint: ASTRA_DB_API_ENDPOINT,
      collection: ASTRA_DB_COLLECTION,
      namespace: ASTRA_DB_NAMESPACE,
      collectionOptions: {
        vector: {
          dimension: 768,
          metric: "dot_product",
        },
      },
    });
    const vectorStoreRetriever = vectorStore.asRetriever({
      k: 7, // Top 7 vectors
    });
    const retrievedDocs = await vectorStoreRetriever._getRelevantDocuments(
      userQuery
    );
    const initialDocs = await vectorStore.similaritySearch(userQuery, 20);
    console.log(initialDocs);
    const docEmbeddings = initialDocs.map((doc) => doc.metadata?.embedding);
    console.log(docEmbeddings);

    // Initialize the chat model with streaming enabled
    const model = new ChatGoogleGenerativeAI({
      apiKey: GOOGLE_API_KEY,
      modelName: "gemini-2.0-flash",
      streaming: true,
    });

    // Define the structured prompt
    const prompt = PromptTemplate.fromTemplate(`
      The context below will provide you with all of my professional and academic information.
      ---------
      START CONTEXT
      {context}
      END CONTEXT
      ---------

      Here is the conversation so far:
      ---------
      START CHAT HISTORY
      {chatHistory}
      END CHAT HISTORY
      ---------
      
      Follow these instructions to generate your responses
      ---------
      PERSONA : You are spot, a chatbot assistant for my, Sparsh Hurkat's, personal portfolio.
      you will answer questions exclusively about me like i would answer them myself in a professional interview.
      ---------
      START INSTRUCTIONS
      Introduce yourself as Spot, Sparsh's virtual assistant if there is no chat history
      Speak of me from a third person's perspective.
      Whenever someone asks for my experience or journey answer the question and then end the response with “THISISJOURNEYKEY”.
      Whenever someone asks for my projects answer the question and then end the response with “THISISPROJECTSKEY”.
      Whenever someone asks for my skills answer the question normally and then end the response with “THISISSKILLSKEY”.
      Whenever someone asks a personal question about me answer the question normally and then end the response with “THISISABOUTKEY”.
      Whenever someone asks for my resume/cv in pdf format, you will tell them “sure, here it is” and then end the response with “THISISRESUMEKEY”.
      END INSTRUCTIONS
      ---------

      USER QUERY: {userQuery}
    `);

    // Define the chain to retrieve context, format, and pass to the model
    const chain = RunnableSequence.from([
      {
        context: new RunnablePassthrough(),
        chatHistory: new RunnablePassthrough(),
        userQuery: new RunnablePassthrough(),
      },
      prompt, // Apply structured prompt
      model, // Generate response with streaming
    ]);

    // Get the AI response stream
    const parser = new StringOutputParser();
    const chatHistory = messages
      .slice(0, -1) // Exclude the latest message
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n");
    // const retrievedDocs = await vectorStoreRetriever.invoke(userQuery);
    const context = formatDocumentsAsString(retrievedDocs);
    const finalPrompt = await prompt.format({
      context,
      chatHistory,
      userQuery,
    });
    console.log(finalPrompt);
    const responseStream = await chain.pipe(parser).stream({
      context,
      chatHistory,
      userQuery,
    });
    return new StreamingTextResponse(responseStream);
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
