import { NextRequest, NextResponse } from "next/server";

const RAD_BACKEND_URL = process.env.RAD_BACKEND_URL;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { category, title, description, steps, contact } = body;

  if (!title || !description || !category) {
    return NextResponse.json(
      { error: "Title, description, and category are required" },
      { status: 400 }
    );
  }

  // Build the issue body for rad
  const labels = [category];
  let issueBody = `**Category:** ${category}\n\n${description}`;
  if (steps) {
    issueBody += `\n\n**Steps to Reproduce:**\n${steps}`;
  }
  if (contact) {
    issueBody += `\n\n**Contact:** ${contact}`;
  }

  if (!RAD_BACKEND_URL) {
    return NextResponse.json(
      { error: "Issue tracking backend is not configured" },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(`${RAD_BACKEND_URL}/api/issues`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.RAD_BACKEND_SECRET && {
          Authorization: `Bearer ${process.env.RAD_BACKEND_SECRET}`,
        }),
      },
      body: JSON.stringify({ title, body: issueBody, labels }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || `Backend responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to create issue:", err);
    return NextResponse.json(
      { error: "Failed to create issue. Please try again later." },
      { status: 502 }
    );
  }
}
