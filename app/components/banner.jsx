import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="w-[95%] md:w-[70%] mx-auto mt-6 ">
            <div className="  flex min-h-[280px] flex-col overflow-hidden rounded-[20px] bg-white md:flex-row ">

                {/* Left Side */}
                <div className="flex w-full flex-col justify-center px-5 py-6 sm:px-7 md:w-1/2 md:px-10 md:py-8 ">

                    <span className="mb-3 w-fit rounded-md bg-green-300 px-2.5 py-1 text-[10px] font-semibold text-green-700 sm:text-xs md:text-sm">
                        ৬ অক্টোবর ২০২৬
                    </span>
                    <h1 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl md:text-3xl">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm md:text-base">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                        দামের পরিবর্তন এক জায়গায়।
                    </p>

                <a
  href="#AllProd"
  className="mt-5 w-fit rounded-lg bg-green-600 px-4 py-2 text-[10px] font-semibold text-white transition hover:bg-green-700 sm:px-5 sm:py-2.5 sm:text-xs md:text-sm"
>
  সব পণ্য দেখুন
</a>
                </div>

                <div className="relative flex w-full items-center justify-center p-4 md:w-1/2 md:p-5">
                    <div className="relative h-48 w-full sm:h-56 md:h-[80%]">
                       <Image
  src="/bazar-hero.png"
  alt="বাজারের পণ্য"
  width={400}
  height={400}
  loading="eager"
  className="h-[80%] w-[80%] object-contain "
/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;