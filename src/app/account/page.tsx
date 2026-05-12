import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getOrCreateAppUser } from "@/lib/users";

export default async function AccountPage() {
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
    redirect("/dashboard");
  }

  const appUser = await getOrCreateAppUser({
    clerkId: userId,
    email,
    firstName: clerkUser.firstName,
    lastName: clerkUser.lastName,
  });

  return (
    <main className="min-h-screen bg-[#f7f3ec] px-6 py-16 text-[#241f1a]">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a2b]">
          Account
        </p>

        <h1 className="mt-3 text-4xl font-semibold">Account Settings</h1>

        <p className="mt-4 max-w-2xl text-[#5f574f]">
          This is where users will manage their profile, contact details, and
          account preferences.
        </p>

        <div className="mt-10 rounded-3xl border border-[#e2d6c4] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Profile</h2>

          <dl className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-[#5f574f]">Name</dt>
              <dd className="mt-1 font-semibold">
                {[appUser.firstName, appUser.lastName].filter(Boolean).join(" ") ||
                  "Not provided"}
              </dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-[#5f574f]">Email</dt>
              <dd className="mt-1 font-semibold">{appUser.email}</dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-[#5f574f]">App role</dt>
              <dd className="mt-1 font-semibold">{appUser.role}</dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-[#5f574f]">Clerk user ID</dt>
              <dd className="mt-1 break-all font-mono text-sm">{appUser.clerkId}</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
