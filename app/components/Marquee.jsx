import Link from "next/link";

export default async function Marquee() {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const products = await res.json();
  const cards = products.map((product) => {
    const isUp = product.change?.dir === "up";

    return (
      <Link
        key={product.id}
        href={`/product/${product.slug}`}
        className="mx-1 inline-flex shrink-0 items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 text-xs shadow-sm"
      >
        <span>{product.image}</span>
        <span className="font-semibold text-gray-800">
          {product.nameBn}
        </span>
        <span>
         {product.today} টাকা/{product.unit}
        </span>
    <span
  className={
    isUp? "text-red-500": product.change?.dir === "down"? "text-green-600": "text-gray-500"}
>
  {isUp? "🔺" : product.change?.dir === "down"? "🔻": "—"}{" "}
  {isUp || product.change?.dir === "down"? Math.abs(Number(product.change?.pct ?? 0)) : "0.0"}%
</span>
      </Link>
    );
  });

  return (
    <div className="market-marquee">
      <div className="market-marquee-track" style={{animationDuration: '32s'}}>
        <div>{cards}</div>
        <div aria-hidden="true">{cards}</div>
      </div>
    </div>
  );
}