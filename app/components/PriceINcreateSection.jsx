import React from "react";
import Link from "next/link";

const PriceINcreateSection = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );

  const products = await res.json();

  const increasedProducts = products.filter(
    (product) => product.change?.dir === "up"
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        আজ যেসব পণ্যের দাম বেড়েছে
      </h2>

      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
        {increasedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/category/${product.category}`}
            className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md sm:p-4"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl">
                  {product.image}
                </span>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {product.nameBn}
                  </h3>

                  <p className="text-xs text-gray-500 sm:text-sm">
                    প্রতি {product.unit}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-lg font-bold text-gray-900 sm:text-xl">
                ৳{product.today}
                <span className="ml-1 text-xs font-normal text-gray-500 sm:text-sm">
                  /{product.unit}
                </span>
              </p>
            </div>

            <div className="ml-2 flex shrink-0 flex-col items-center text-red-500">
              <span className="text-2xl sm:text-3xl">🔺</span>

              <span className="text-[10px] font-semibold sm:text-sm">
                {product.change?.pct}%
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PriceINcreateSection;