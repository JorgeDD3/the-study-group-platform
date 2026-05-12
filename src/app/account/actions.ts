"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateProfile(formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();

  await prisma.user.update({
    where: {
      clerkId: userId,
    },
    data: {
      firstName: firstName || null,
      lastName: lastName || null,
    },
  });

  revalidatePath("/account");
  redirect("/account?updated=1");
}