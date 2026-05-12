import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getOrCreateAppUser } from "@/lib/users";
import { updateProfile } from "./actions";

type AccountPageProps = {
  searchParams: Promise<{
    updated?: string;
  }>;
};

export default async function AccountPage({ searchParams }: AccountPageProps) {
  const params = await searchParams;
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

        {params.updated === "1" ? (
  <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
    Profile saved.
  </div>
) : null}

        <div className="mt-10 rounded-3xl border border-[#e2d6c4] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Profile</h2>

          <form action={updateProfile} className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-[#5f574f]"
              >
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                defaultValue={appUser.firstName ?? ""}
                className="mt-2 w-full rounded-2xl border border-[#d8cbb8] bg-white px-4 py-3 outline-none focus:border-[#8a5a2b]"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-[#5f574f]"
              >
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                defaultValue={appUser.lastName ?? ""}
                className="mt-2 w-full rounded-2xl border border-[#d8cbb8] bg-white px-4 py-3 outline-none focus:border-[#8a5a2b]"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-[#5f574f]">Email</p>
              <p className="mt-2 rounded-2xl border border-[#e2d6c4] bg-[#f7f3ec] px-4 py-3 font-semibold">
                {appUser.email}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#5f574f]">App role</p>
              <p className="mt-2 rounded-2xl border border-[#e2d6c4] bg-[#f7f3ec] px-4 py-3 font-semibold">
                {appUser.role}
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-sm font-medium text-[#5f574f]">
                Clerk user ID
              </p>
              <p className="mt-2 break-all rounded-2xl border border-[#e2d6c4] bg-[#f7f3ec] px-4 py-3 font-mono text-sm">
                {appUser.clerkId}
              </p>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-[#241f1a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3a332b]"
              >
                Save profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}