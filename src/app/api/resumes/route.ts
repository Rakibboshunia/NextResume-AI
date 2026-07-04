import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

// GET /api/resumes — fetch all resumes for the logged-in user
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const resumes = await prisma.resume.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true, updatedAt: true },
  });
  return NextResponse.json(resumes);
}

// POST /api/resumes — save a new resume
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { title, content } = await req.json();
  if (!title || !content) {
    return NextResponse.json({ error: "Title and content are required." }, { status: 400 });
  }
  const resume = await prisma.resume.create({
    data: { userId: session.user.id, title, content },
  });
  return NextResponse.json(resume, { status: 201 });
}
