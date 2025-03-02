import { connectToDB } from "@/app/db/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await connectToDB(); // Ensure connection

    const selectQuery = `SELECT prompts FROM suggestions;`;
    const result = await client.execute(selectQuery);

    return NextResponse.json({
      data: result.rows.map((row) => row.prompts), // Extract prompts
      status: "SUCCESS",
    });
  } catch (error) {
    return NextResponse.json({
      data: [],
      error: error.message,
      status: "ERROR",
    });
  }
}
