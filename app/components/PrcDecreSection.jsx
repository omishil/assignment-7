import React from "react";
import Link from "next/link";

const PriceDecreaseSection = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );

  const products = await res.json();

  const decreasedProducts = products
    .filter((product) => product.change?.dir === "down")
    .sort((a, b) => {
      return Math.abs(b.change?.pct) - Math.abs(a.change?.pct);
    })
    .slice(0, 6);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        🔻 আজ যেসব পণ্যের দাম কমেছে
      </h2>

      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {decreasedProducts.map((product) => (
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
                  <h3 className="text-xs font-semibold text-gray-900 sm:text-base">
                    {product.nameBn}
                  </h3>

                  <p className="text-[10px] text-gray-500 sm:text-sm">
                    প্রতি {product.unit}
                  </p>
                </div>
              </div>

           <div className="mt-2 flex flex-col">
  <span className="text-[9px] font-normal text-gray-500 sm:text-xs">
    আজকের দাম
  </span>

  <span className="text-sm font-bold text-gray-900 sm:text-lg">
    {product.today} টাকা
  </span>
</div>
            </div>

            <div className="absolute bottom-0 right-2 flex items-center gap-0 text-green-600">
              <span className="text-xl">🔻</span>

<span className="text-[10px] font-semibold">
                {product.change?.pct}%
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PriceDecreaseSection;