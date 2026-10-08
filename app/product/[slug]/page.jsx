import Link from "next/link";
import { notFound } from "next/navigation";
import { cacheLife } from "next/cache";

export const instant = false;
const ProductPage = async ({ params }) => {
  const { slug } = await params;

 const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  const products = await res.json();



  const product = products.find((item) => item.slug === slug);

// const{markets} = product

  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";

  const changeIcon = isUp ? "🔺" : isDown ? "🔻" : "—0.";

  const changeColor = isUp
    ? "text-red-600"
    : isDown
      ? "text-green-600"
      : "text-gray-500";

let minimumPrice = product.markets[0].min;
let maximumPrice = product.markets[0].max;
let totalPrice = 0;
let priceCount = 0;

for (const market of product.markets) {
  if (market.min < minimumPrice) {
    minimumPrice = market.min;
  }

  if (market.max > maximumPrice) {
    maximumPrice = market.max;
  }

  totalPrice += market.min;
  totalPrice += market.max;
  priceCount += 2;
}

// const averagePrice = parseInt(totalPrice / priceCount)
const averagePrice = Math.ceil(totalPrice / priceCount)








  return (
    <main className="min-h-screen bg-[#f4f8f4] px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 text-xs text-gray-500">
          <Link href="/">হোম</Link>
          <span className="mx-2">›</span>
          <Link href={`/category/${product.category}`}>
            {product.categoryNameBn}
          </Link>
          <span className="mx-2">›</span>
          <span>{product.nameBn}</span>
        </div>

        <section className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 text-4xl">
                {product.image}
              </div>

              <div>
                <h1 className="text-xl font-bold sm:text-3xl">
                  {product.nameBn}
                </h1>

                <p className="text-xs text-gray-500 sm:text-sm">
                  প্রতি {product.unit} · {product.categoryNameBn}
                </p>
                {/*  */}
     <p className="text-xs text-gray-500 sm:text-sm">
  {product.today > product.yesterday
    ? `গতকালের তুলনায় আজ দাম বেড়েছে ${product.today - product.yesterday} টাকা`
    : product.today < product.yesterday
      ? `গতকালের তুলনায় আজ দাম কমেছে ${product.yesterday - product.today} টাকা`
      : "গতকালের তুলনায় আজ দামের কোনো পরিবর্তন হয়নি"}
</p>
{/* {product.today}
{product.yesterday} */}
              </div>
            </div>

            <div className="rounded-xl bg-[#eef5ee] p-3 text-right">
              <p className="text-[10px] text-gray-500">
                আজকের দাম
              </p>

              <p className="text-lg font-bold sm:text-2xl">
                {product.today} টাকা
              </p>

              <p className={changeColor}>
                {changeIcon} {product.change?.pct}%
              </p>
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
          <h2 className="mb-4 font-bold">দামের সারসংক্ষেপ</h2>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border p-4">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
              <p className="text-xl font-bold text-green-600">
                {minimumPrice} টাকা </p>
              <p className="text-xs text-gray-500"> সবচেয়ে কম দামের বাজার</p>
             
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-xs text-gray-500">সর্বাধিক দাম</p>
              <p className="text-xl font-bold text-red-600">
                {maximumPrice} টাকা
              </p>
              <p className="text-xs text-gray-500"> সবচেয়ে বেশি দামের বাজার</p>
             
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-xs text-gray-500">গড় দাম</p>
              <p className="text-xl font-bold  text-green-600" >
                {averagePrice} টাকা   </p>
              <p className="text-xs text-gray-500">প্রতি কেজি-এর হিসাবে</p>
           
            </div>
          </div>
        </section>

      <section className="mt-5 rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
  <h2 className="mb-4 font-bold">
    বাজারভিত্তিক আজকের দাম
  </h2>

  <div className="overflow-x-auto">
    <div className="min-w-[330px] text-sm">
      {/* Header */}
      <div className="flex border-b text-left text-gray-500">
        <p className="w-1/5 p-3">বাজার</p>
        <p className="w-1/5 p-3">বিভাগ</p>
        <p className="w-1/5 p-3">সর্বনিম্ন</p>
        <p className="w-1/5 p-3">সর্বোচ্চ</p>
        <p className="w-1/5 p-3 text-right">গড়</p>
      </div>

      {/* Rows */}
      {product.markets.map((market) => {
        const average = (market.min + market.max) / 2;

        return (
          <div
            key={market.market}
            className="flex border-b last:border-b-0"
          >
            <p className="w-1/5 p-3">{market.market}</p>

            <p className="w-1/5 p-3">{market.division}</p>

            <p className="w-1/5 p-3">
              {market.min} টাকা
            </p>

            <p className="w-1/5 p-3">
              {market.max} টাকা
            </p>

            <p className="w-1/5 p-3 text-right font-semibold">
              {average} টাকা
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>
      </div>
    </main>
  );
};

export default ProductPage;