import { connectToDB } from "@/app/db/dbConfig";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ a: "Hey" });
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const conn = connectToDB();
  let body = await request.json();
  const { query, response } = body;
  const istString = response.createdAt.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });
  const istDate = new Date(istString);
  conn.query(
    "INSERT INTO spot (`messages`, `responses`, `date`) VALUES (?, ?, ?);",
    [query, response.content, istDate],
    (err, ok) => {
      if (err) {
        console.log(err);
      } else {
        console.log(ok.insertId);
      }
    }
  );
  conn.end();

  return NextResponse.json({ status: "SUCCESS" });
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
