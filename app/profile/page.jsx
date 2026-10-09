"use client";
import { signOut, useSession } from "../lib/auth-client";
import Link from "next/link";

export default function Profile() {
  const { data: session } = useSession();

  if (session) {
    const user = session.user;

    async function handleSignOut() {
   signOut();
     window.location.href = "/";

}
    return (
      <main className="min-h-screen bg-green-50 px-4 py-8 sm:py-12">
        <div className="mx-auto w-full md:w-3/5">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Manage your personal information and account settings.
          </p>

          <section className="mt-6 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-md sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white sm:h-20 sm:w-20 sm:text-2xl">
                {user.name?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                  {user.name}
                </h2>

                <p className="text-sm text-gray-500 sm:text-base">
                  {user.email}
                </p>
              </div>
            </div>

            <button
              onClick={handleSignOut}
              className="w-full rounded-lg border border-red-500 px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white sm:w-auto sm:px-4 sm:text-base"
            >
              Sign out
            </button>
          </section>

          <section className="mt-5 rounded-2xl bg-white p-4 shadow-md sm:mt-6 sm:p-6">
            <div className="w-full sm:w-4/5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700 sm:text-base"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                defaultValue={user.name}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-green-600 focus:ring-2 focus:ring-green-200 sm:text-base"
              />

              <button
                type="button"
                className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 sm:text-base"
              >
                Update
              </button>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return null;
}