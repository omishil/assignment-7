"use client";

import Link from "next/link";
import { useState } from "react";

export default function CategoryProducts({ products }) {
  const [sort, setSort] = useState("default");

  const category = products[0];

  const sortedProducts = [...products];

  if (sort === "low") {
    sortedProducts.sort((a, b) => Number(a.today) - Number(b.today));
  }

  if (sort === "high") {
    sortedProducts.sort((a, b) => Number(b.today) - Number(a.today));
  }

  if (!category) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-green-50 px-4">
        <section className="rounded-2xl bg-white p-8 text-center shadow-md">
          <h1 className="text-2xl font-bold text-gray-900">
            কোনো পণ্য পাওয়া যায়নি
          </h1>

          <p className="mt-2 text-gray-500">
            এই ক্যাটাগরিতে কোনো পণ্য নেই।
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white hover:bg-green-700"
          >
            হোম পেজে ফিরে যান
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-green-50 px-4 py-6 sm:py-8">
      <section className="mx-auto w-4/5">
        <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-5">
          <span className="text-4xl sm:text-6xl">
            {category.categoryIcon}
          </span>

          <div>
            <h1 className="text-lg font-bold text-gray-900 sm:text-2xl">
              {category.categoryNameBn}
            </h1>

            <p className="mt-1 text-[10px] text-gray-500 sm:text-sm">
              মোট {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-end gap-2 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:mt-6 sm:p-4">
          <span className="text-sm font-medium text-gray-700">সাজান:</span>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">কম থেকে বেশি</option>
            <option value="high">বেশি থেকে কম</option>
          </select>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {sortedProducts.map((product) => {
            const isUp = product.change?.dir === "up";
            const isDown = product.change?.dir === "down";

            const changeIcon = isUp ? "🔺" : isDown ? "🔻" : "—";
            const changeColor = isUp
              ? "text-red-500"
              : isDown
                ? "text-green-600"
                : "text-gray-500";

            return (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="relative flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-3 pb-8 shadow-sm transition hover:shadow-md sm:p-4 sm:pb-8"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl sm:text-4xl">
                      {product.image}
                    </span>

                    <div>
                      <h2 className="text-xs font-semibold text-gray-900 sm:text-base">
                        {product.nameBn}
                      </h2>

                      <p className="text-[10px] text-gray-500 sm:text-sm">
                        প্রতি {product.unit}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-col">
                    <span className="text-[9px] text-gray-500 sm:text-xs">
                      আজকের দাম
                    </span>

                    <span className="text-sm font-bold text-gray-900 sm:text-lg">
                      {product.today} টাকা
                    </span>
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 right-2 flex items-center ${changeColor}`}
                >
                  <span className="text-xl">{changeIcon}</span>

                  <span className="text-[10px] font-semibold">
                    {product.change?.pct ?? 0}%
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}