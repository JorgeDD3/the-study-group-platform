import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserRole } from "@prisma/client";
import { getUserByClerkId } from "@/lib/users";

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

  const user = await getUserByClerkId(userId);

  if (!user) {
    redirect("/client");
  }

  redirect(getDashboardPath(user.role));
}
