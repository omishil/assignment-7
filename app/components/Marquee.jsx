import React from 'react';
import Link from 'next/link';
import Marquee from "react-fast-marquee";
const Marqueee =async () => {
    

    const res= await fetch("https://api.api-store.workers.dev/api/bazardor/products")
    const products= await res.json()
    return (
        <div>
           <Marquee
  direction="right"
  speed={200}
  className="bg-slate-100 py-1"
>
  {products.map((product) => {
    const isUp = product.change?.dir === "up";
    const changeEmoji = isUp ? "🔺" : "🔻";

    return (
      <Link
        key={product.id}
        href={`/category/${product.category}`}
        className="mx-1 flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 text-xs shadow-sm"
      >
        <span className="text-base">{product.image}</span>

        <span className="font-semibold text-gray-800">
          {product.nameBn}
        </span>

        <span className="text-gray-700">
          ৳{product.today}/{product.unit }
        </span>

        <span
          className={
            isUp
              ? "font-medium text-red-500"
              : "font-medium text-green-600"
          }
        >
          {changeEmoji} {product.change?.pct}%
        </span>
      </Link>
    );
  })}
</Marquee>
        </div>
    );
};

export default Marqueee;