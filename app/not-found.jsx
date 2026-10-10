// import Link from "next/link";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-3 py-8 sm:px-5 sm:py-12">
      <div className="w-full max-w-md text-center">
        <h1 className="text-5xl font-extrabold text-green-600 sm:text-7xl">
          404
        </h1>

        <h2 className="mt-3 text-base font-bold text-gray-800 sm:mt-4 sm:text-xl">
          দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি।
        </h2>

        <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
          আপনি যে পেজটি খুঁজছেন, সেটি নেই অথবা সরিয়ে ফেলা হয়েছে।
        </p>

        <Link
          href="/"
          className="mt-5 inline-flex rounded-lg bg-green-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-green-700 sm:mt-6 sm:px-5 sm:py-3 sm:text-sm"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}