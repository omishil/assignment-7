import React from "react";
import Link from "next/link";

const AllProductsSection = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products");
  const products = await res.json();

  return (
    <section className=" mx-auto w-full max-w-7xl px-4 py-6" id="AllProd">
      <h2 className="mb-1 text-xl font-bold text-gray-900">
        সব পণ্য
      </h2>

      <p className="mb-4 text-sm text-gray-500">
মোট ৩৩টি পণ্য দেখানো হচ্ছে      </p>

      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
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

                <div
                    className={`absolute bottom-0 right-2 flex items-center gap-0 ${changeColor}`}
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
  );
};

export default AllProductsSection;