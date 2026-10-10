import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="flex min-h-[50vh] items-center justify-center px-3 py-6 text-center sm:py-10">
      <div>
        <h1 className="text-4xl font-bold text-green-600 sm:text-6xl">
          404
        </h1>

        <h2 className="mt-3 text-base font-semibold text-gray-800 sm:text-xl">
          পণ্যটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mt-2 text-xs text-gray-500 sm:text-sm">
          পণ্যটি সরিয়ে ফেলা হয়েছে অথবা এর ঠিকানা ভুল।
        </p>

        <Link
          href="/"
          className="mt-5 inline-block rounded-lg bg-green-600 px-4 py-2 text-xs text-white hover:bg-green-700 sm:text-sm"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}