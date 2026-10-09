"use client";

import { signUp,signIn } from "../../lib/auth-client";
import Link from "next/link";
export default function SignUp() {

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const entries = Object.fromEntries(formData.entries());
 if (entries.password !== entries.confirmPassword) {
  toast.error("Passwords do not match.");
  return;
}
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
toast.success("Login successful!");
setTimeout(() => {
  window.location.href = "/";
}, 600);

}


const HandleGoogleSignIn = async () => {
  const data = await signIn.social({
    provider: "google",
  });
  console.log('after goog sign in', data);
};
const HandleGithubSignIn = async () => {
  const data = await signIn.social({
    provider: "github",
  });
  console.log("after github sign in", data);
};
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-green-50 px-4 py-12">
   
   
    <h1 className="text-3xl font-bold text-gray-900">Sign up</h1>
          <p className="mt-2 text-sm text-gray-500 mb-3">
            Create your account and start exploring our platform.
          </p>
          
           <section className="w-full max-w-md rounded-2xl bg-white p-4 shadow-xl">
        <div className="mb-6 text-center">
          {/* <h1 className="text-3xl font-bold text-gray-900">Sign up</h1>
          <p className="mt-2 text-sm text-gray-500">
            Create your account and start exploring our platform.
          </p> */}
        </div>

    <form onSubmit={onSubmit} className="flex flex-col gap-4">
  <div className="flex flex-col gap-1.5">
    <label htmlFor="name" className="text-sm font-medium text-gray-700">
      Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      placeholder="example: Omi shil"
      required
      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200"
    />
  </div>

  <div className="flex flex-col gap-1.5">
    <label htmlFor="email" className="text-sm font-medium text-gray-700">
      Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      placeholder="example: Omi@gmail.com"
      required
      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200"
    />
  </div>

  <div className="flex flex-col gap-1.5">
    <label htmlFor="password" className="text-sm font-medium text-gray-700">
      Password
    </label>
    <input
      id="password"
      name="password"
      type="password"
      placeholder="at least of 8 words"
      required
      minLength={8}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200"
    />
  </div>

  <div className="flex flex-col gap-1.5">
    <label
      htmlFor="confirmPassword"
      className="text-sm font-medium text-gray-700"
    >
      Confirm password
    </label>
    <input
      id="confirmPassword"
      name="confirmPassword"
      type="password"
      placeholder="Confirm password"
      required
      minLength={8}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-2 focus:ring-green-200"
    />
  </div>

  <button
    type="submit"
    className="rounded-lg bg-green-600 px-4 py-2.5 font-semibold text-white hover:bg-green-700"
  >
    Sign up
  </button>

  <p className="text-center text-sm text-gray-600">
    Do you have an account?{" "}
    <Link
      href="/SignIn"
      className="font-semibold text-green-600 hover:underline"
    >
      Sign in
    </Link>
  </p>

  <p className="mt-2 text-center text-sm text-gray-500 sm:text-base">
    Or sign up with
  </p>

  <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
    <button
      type="button"
      onClick={HandleGoogleSignIn}
      className="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 sm:text-base"
    >
      Google
    </button>

    <button
      type="button"
      onClick={HandleGithubSignIn}
      className="w-full rounded-lg bg-gray-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-900 sm:text-base"
    >
      GitHub
    </button>
  </div>
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