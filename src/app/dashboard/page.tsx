import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserRole } from "@prisma/client";
import { getOrCreateAppUser } from "@/lib/users";

function getDashboardPath(role: UserRole) {
  switch (role) {
    case UserRole.ADMIN:
      return "/admin";
    case UserRole.TUTOR:
      return "/tutor";
    case UserRole.ORGANIZATION_ADMIN:
      return "/organizations";
    case UserRole.CLIENT:
    default:
      return "/client";
  }
}

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/sign-in");
  }

  const email = clerkUser.emailAddresses[0]?.emailAddress;

  if (!email) {
    redirect("/client");
  }

  const user = await getOrCreateAppUser({
    clerkId: userId,
    email,
    firstName: clerkUser.firstName,
    lastName: clerkUser.lastName,
  });

  redirect(getDashboardPath(user.role));
}