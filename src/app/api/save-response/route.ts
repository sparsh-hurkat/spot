import { connectToDB } from "@/app/db/dbConfig";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const conn = connectToDB();
  let body = await request.json();
  const { query, response } = body;
  const istString = response.createdAt.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });
  const istDate = new Date(istString);
  try {
    const rows = await new Promise<any>((resolve, reject) => {
      conn.query(
        "INSERT INTO spot (`messages`, `responses`, `date`) VALUES (?, ?, ?);",
        [query, response.content, istDate],
        (err, ok) => {
          if (err) {
            reject(err);
          } else {
            resolve(ok.insertId);
          }
        }
      );
    });
    conn.end();
    return NextResponse.json({ data: rows, status: "SUCCESS" });
  } catch (error) {
    conn.end();
    return NextResponse.json({
      data: [],
      error,
      status: "ERROR",
    });
  }
}
