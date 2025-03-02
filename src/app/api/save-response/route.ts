import { connectToDB } from "@/app/db/dbConfig";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const client = await connectToDB(); // Ensure the client is connected

    let body = await request.json();
    const { query, response } = body;

    // Convert timestamp to ISO format for Cassandra
    const istDate = new Date().toISOString();

    // Insert data into AstraDB
    const insertQuery = `
      INSERT INTO spot (id, messages, responses, date) 
      VALUES (uuid(), ?, ?, ?);
    `;

    await client.execute(insertQuery, [query, response, istDate], {
      prepare: true,
    });

    return NextResponse.json({ status: "SUCCESS" });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: "ERROR" });
  }
}
