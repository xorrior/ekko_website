import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { category, title, description, steps, contact } = body;

  if (!title || !description || !category) {
    return NextResponse.json(
      { error: "Title, description, and category are required" },
      { status: 400 }
    );
  }

  if (!GITHUB_TOKEN || !GITHUB_REPO) {
    return NextResponse.json(
      { error: "Issue tracking is not configured" },
      { status: 503 }
    );
  }

  let issueBody = `**Category:** ${category}\n\n${description}`;
  if (steps) {
    issueBody += `\n\n**Steps to Reproduce:**\n${steps}`;
  }
  if (contact) {
    issueBody += `\n\n**Contact:** ${contact}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/issues`,
      {
        method: "POST",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
        body: JSON.stringify({
          title,
          body: issueBody,
          labels: [category],
        }),
      }
    );

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.message || `GitHub responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to create GitHub issue:", err);
    return NextResponse.json(
      { error: "Failed to create issue. Please try again later." },
      { status: 502 }
    );
  }
}
