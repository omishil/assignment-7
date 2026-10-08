import Link from "next/link";
import { notFound } from "next/navigation";

export const instant = false;

async function CategoryContent({ params }) {
  const { slug } = await params;

  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products");

  const products = await res.json();

  const categoryProducts = products.filter(
    (product) => product.category === slug
  );
  return (
    <>
      {/* Category summary */}
      <section className="mx-auto w-4/5 py-5 sm:py-8">
        <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-5">
          <span className="text-4xl sm:text-6xl">
            {categoryProducts[0].categoryIcon}
          </span>

          <div>
            <h1 className="text-lg font-bold text-gray-900 sm:text-2xl">
              {categoryProducts[0].categoryNameBn}
            </h1>

            <p className="mt-1 text-[10px] text-gray-500 sm:text-sm">
              মোট {categoryProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="mx-auto w-4/5">
        <div className="flex justify-end gap-2 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
          <button
            type="button"
            className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-medium text-white sm:px-4 sm:py-2 sm:text-sm"
          >
            সাজান
          </button>

          <button
            type="button"
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 sm:px-4 sm:py-2 sm:text-sm"
          >
            ডিফল্ট
          </button>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto w-4/5 py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categoryProducts.map((product) => {
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
                    {product.change?.pct}%
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default CategoryContent;