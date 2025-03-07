import cassandra from "cassandra-driver";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import os from "os";

dotenv.config();

// Decode and write to a temporary file
const secureBundleBase64 = process.env.ASTRA_DB_SECURE_BUNDLE || "";
const secureBundlePath = path.join(os.tmpdir(), "secure-connect-database.zip");

// Convert Base64 to Uint8Array
const decodedBundle = Uint8Array.from(
  Buffer.from(secureBundleBase64, "base64")
);

// Write to a temporary file
try {
  fs.writeFileSync(secureBundlePath, decodedBundle);
} catch (err) {
  throw new Error(err);
}

const client = new cassandra.Client({
  cloud: { secureConnectBundle: secureBundlePath },
  credentials: {
    username: process.env.ASTRA_DB_CLIENT_ID,
    password: process.env.ASTRA_DB_CLIENT_SECRET,
  },
  keyspace: process.env.ASTRA_DB_NAMESPACE,
});

let isConnected = false;

export async function connectToDB() {
  if (!isConnected) {
    try {
      await client.connect();
      isConnected = true;
      console.log("Connected to AstraDB successfully!");
    } catch (error) {
      console.error("Failed to connect to AstraDB", error);
      throw error;
    }
  }
  return client;
}
