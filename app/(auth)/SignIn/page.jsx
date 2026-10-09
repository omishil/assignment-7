"use client";

import { signIn } from "../../lib/auth-client";
import Link from "next/link";
export default function SignIn() {
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const entries = Object.fromEntries(formData.entries());

    const { data, error } = await signIn.email({
      email: entries.email,
      password: entries.password,
      callbackURL:'/',
    });

    console.log("Signed in:", data);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-50 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>

          <p className="mt-2 text-sm text-gray-500">
            Welcome back. Sign in to continue.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            placeholder="example: Omi@gmail.com"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200"
          />

          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200"
          />

          <button
            type="submit"
            className="rounded-lg bg-green-600 px-4 py-2.5 font-semibold text-white hover:bg-green-700"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?
            <Link
              href="/Signup"
              className="font-semibold text-green-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </section>

      <Link
        href="/"
        className="mt-5 rounded-lg border border-green-600 px-5 py-2 font-medium text-green-700 transition hover:bg-green-600 hover:text-white"
      >
        Home
      </Link>
    </main>
  );
}