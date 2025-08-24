import { connectToDB } from "@/app/db/dbConfig";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const client = await connectToDB();
    const body = await request.json();
    const { sessionId, chatHistory } = body;

    if (!sessionId || !Array.isArray(chatHistory) || chatHistory.length === 0) {
      return NextResponse.json({
        status: "ERROR",
        error: "Invalid request: sessionId and chatHistory are required",
      });
    }

    const chatHistoryJSON = JSON.stringify(chatHistory);
    const istDate = new Date().toISOString();

    // Use sessionId for consistency, update if exists
    const insertQuery = `
      INSERT INTO spot (id, chat_history, date)
      VALUES (?, ?, ?);
    `;

    await client.execute(insertQuery, [sessionId, chatHistoryJSON, istDate], {
      prepare: true,
    });

    return NextResponse.json({ status: "SUCCESS" });
  } catch (error: any) {
    console.error("Error inserting into spot:", error);
    return NextResponse.json({ status: "ERROR", error: error.message });
  }
}

