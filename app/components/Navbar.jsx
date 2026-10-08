import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="w-[95%] sm:w-[90%] md:w-[85%] mx-auto mt-3 sm:mt-5 rounded-xl sm:rounded-2xl bg-white px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-sm">

            <div className="flex items-center justify-between">

                {/* Left Side */}
                <div className="flex items-center gap-2 sm:gap-3">

                    <Image
                        src="/logo-icon.png"
                        alt="Bazar Dor Logo"
                        width={24}
                        height={24}
                        className="h-6 w-6 sm:h-7 sm:w-7 object-contain bg-green-500 p-1 rounded-[5px]"
                    />

                    <div className="flex flex-col">
                        <span className="text-sm sm:text-base md:text-xl font-bold text-black">
                            বাজার দর
                        </span>

                        <span className="text-[9px] sm:text-xs md:text-sm text-gray-500">
                            ৬ অক্টোবর ২০২৬
                        </span>
                    </div>

                </div>

                {/* Right Side */}
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">

                    <button
                        className="rounded-lg sm:rounded-xl bg-gray-200 px-2 py-1.5 sm:px-3 sm:py-2 md:px-5 md:py-2.5
                                   text-[10px] sm:text-xs md:text-base
                                   font-medium text-black
                                   transition hover:bg-gray-300"
                    >
                        সাইন ইন
                    </button>

                    <button
                        className="rounded-lg sm:rounded-xl bg-green-600 px-2 py-1.5 sm:px-3 sm:py-2 md:px-5 md:py-2.5
                                   text-[10px] sm:text-xs md:text-base
                                   font-medium text-white
                                   transition hover:bg-green-700"
                    >
                        সাইন আপ
                    </button>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;