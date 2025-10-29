import "dotenv/config";
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { MarkdownTextSplitter } from "@langchain/textsplitters";

const {
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  GOOGLE_API_KEY,
} = process.env;

let vectorStore: AstraDBVectorStore | null = null;

export async function seedCollection() {
  const loader = new TextLoader("server_files/Sparsh_Hurkat_data.md");
  const document = await loader.load();

  const splitter = new MarkdownTextSplitter({
    chunkSize: 1024,
    chunkOverlap: 100,
  });
  const chunks = await splitter.splitDocuments(document);

  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: GOOGLE_API_KEY,
    model: "text-embedding-004", // 768-dimensional embeddings
    taskType: TaskType.RETRIEVAL_DOCUMENT,
    title: "Document title",
  });

  vectorStore = await AstraDBVectorStore.fromDocuments(chunks, embeddings, {
    token: ASTRA_DB_APPLICATION_TOKEN,
    endpoint: ASTRA_DB_API_ENDPOINT,
    collection: ASTRA_DB_COLLECTION,
    keyspace: ASTRA_DB_NAMESPACE,
    collectionOptions: {
      vector: {
        dimension: 768,
        metric: "dot_product",
      },
    },
  });

  console.log("Vector store created and documents added successfully.");
  return vectorStore;
}

export const getVectorStore = () => {
  console.log(vectorStore);
  return vectorStore;
};

seedCollection().catch((err) => {
  console.error("Error seeding collection:", err);
});
