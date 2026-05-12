import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";

type CreateAppUserInput = {
  clerkId: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  role?: UserRole;
};

export async function getUserByClerkId(clerkId: string) {
  return prisma.user.findUnique({
    where: {
      clerkId,
    },
  });
}

export async function createAppUser({
  clerkId,
  email,
  firstName,
  lastName,
  role = UserRole.CLIENT,
}: CreateAppUserInput) {
  return prisma.user.create({
    data: {
      clerkId,
      email,
      firstName,
      lastName,
      role,
    },
  });
}

export async function getOrCreateAppUser(input: CreateAppUserInput) {
  const existingUser = await getUserByClerkId(input.clerkId);

  if (existingUser) {
    return existingUser;
  }

  return createAppUser(input);
}
