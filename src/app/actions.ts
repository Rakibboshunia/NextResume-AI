"use server";

import { prisma } from "@/lib/prisma";

export async function saveResumeDraft(userId: string, title: string, content: any) {
  try {
    const resume = await prisma.resume.create({
      data: { userId, title, content },
    });
    return { success: true, data: resume };
  } catch (error: any) {
    console.error("Error saving resume:", error);
    return { success: false, error: error.message };
  }
}

export async function getResumes(userId: string) {
  try {
    const resumes = await prisma.resume.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
    });
    return { success: true, data: resumes };
  } catch (error: any) {
    console.error("Error fetching resumes:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteResume(id: string) {
  try {
    await prisma.resume.delete({ where: { id } });
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting resume:", error);
    return { success: false, error: error.message };
  }
}
