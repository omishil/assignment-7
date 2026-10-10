const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-2 py-3 sm:px-4 sm:py-5 md:py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:text-left">
        <p className="text-[10px] font-semibold text-gray-800 sm:text-xs md:text-sm">
          বাজার দর{" "}
          <span className="font-normal text-gray-500">
            — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </span>
        </p>

        <p className="text-[9px] italic text-gray-500 sm:max-w-md sm:text-right sm:text-[10px] md:text-xs">
          “সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।”
        </p>
      </div>
    </footer>
  );
};

export default Footer;