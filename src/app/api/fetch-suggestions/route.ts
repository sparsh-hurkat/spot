import { connectToDB } from "@/app/db/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
  const conn = connectToDB();
  try {
    const rows = await new Promise<any>((resolve, reject) => {
      conn.query("SELECT prompts from suggestions;", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
    conn.end();
    return NextResponse.json({
      data: rows.map((item) => item.prompts),
      status: "SUCCESS",
    });
  } catch (error) {
    conn.end();
    return NextResponse.json({
      error,
      status: "SUCCESS",
    });
  }
}
