import "dotenv/config";
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { MarkdownTextSplitter } from "@langchain/textsplitters";
import { DataAPIClient } from "@datastax/astra-db-ts";

const {
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  GOOGLE_API_KEY,
} = process.env;

let vectorStore: AstraDBVectorStore | null = null;

export async function seedCollection() {
  // Delete old collection if it exists (dimension mismatch)
  const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN!);
  const db = client.db(ASTRA_DB_API_ENDPOINT!, { keyspace: ASTRA_DB_NAMESPACE });
  try {
    await db.dropCollection(ASTRA_DB_COLLECTION!);
    console.log(`Dropped existing collection: ${ASTRA_DB_COLLECTION}`);
  } catch {
    console.log("No existing collection to drop, creating fresh.");
  }

  const loader = new TextLoader("server_files/Sparsh_Hurkat_data.md");
  const document = await loader.load();

  const splitter = new MarkdownTextSplitter({
    chunkSize: 1024,
    chunkOverlap: 100,
  });
  const chunks = await splitter.splitDocuments(document);
  console.log(`Split into ${chunks.length} chunks.`);

  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: GOOGLE_API_KEY,
    model: "gemini-embedding-001",
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
        dimension: 3072,
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
