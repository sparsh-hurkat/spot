import "dotenv/config";
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { MarkdownTextSplitter } from "@langchain/textsplitters";

// Retrieve necessary environment variables
const {
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  GOOGLE_API_KEY,
} = process.env;

let vectorStore: AstraDBVectorStore | null = null;

// Main seeding function
export async function seedCollection() {
  // Your sample data to seed into the vector store
  const loader = new TextLoader("server_files/Sparsh_Hurkat_data.md");
  const document = await loader.load();

  const splitter = new MarkdownTextSplitter({
    chunkSize: 1024,
    chunkOverlap: 100,
  });
  const chunks = await splitter.splitDocuments(document);

  // 2. Initialize your embeddings
  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: GOOGLE_API_KEY,
    model: "text-embedding-004", // 768-dimensional embeddings
    taskType: TaskType.RETRIEVAL_DOCUMENT,
    title: "Document title",
  });

  // 3. Create (or connect to) the collection and add documents.
  // This call will create the collection if it doesn't exist, and then insert the document vectors.
  vectorStore = await AstraDBVectorStore.fromDocuments(chunks, embeddings, {
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

  console.log("Vector store created and documents added successfully.");
  return vectorStore;
}

export const getVectorStore = () => {
  console.log(vectorStore);
  return vectorStore;
};

// Run the seeding script
seedCollection().catch((err) => {
  console.error("Error seeding collection:", err);
});
