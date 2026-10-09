"use client";

import { signUp,signIn } from "../../lib/auth-client";
import Link from "next/link";
export default function SignUp() {

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const entries = Object.fromEntries(formData.entries());

  console.log('data from the form', entries);

  const {entries: resData, error}= await signUp.email({
    name : entries.name,
    email: entries.email,
    password: entries.password,
    callbackURL: '/'
  })
    console.log("Signup successful:", resData);

  
  if (error) {
    console.error("Signup failed:", error.message);
    return;
  }

}


const HandleGoogleSignIn = async () => {
  const data = await signIn.social({
    provider: "google",
  });
  console.log('after goog sign in', data);
};
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Sign up</h1>
          <p className="mt-2 text-sm text-gray-500">
            Create your account and start exploring our platform.
          </p>
        </div>

     <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="example: Omi shil"
            required
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200"
          />

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
            placeholder="at least of 8 words"
            required
            minLength={8}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200"
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            required
            minLength={8}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200"
          />

          <button
            type="submit"
            className="rounded-lg bg-green-600 px-4 py-2.5 font-semibold text-white hover:bg-green-700"
          >
            Sign up
          </button>

          <p className="text-center text-sm text-gray-600">
            Do you have an account?{" "}
            <Link href="/SignIn" className="font-semibold text-green-600">
              Sign in
            </Link>
          </p>
        </form>
      </section>
<p>sign up with google</p>      
<button onClick={HandleGoogleSignIn} className="bg-blue-400">google</button>
    </main>
  );
}