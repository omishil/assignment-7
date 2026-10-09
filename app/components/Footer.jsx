const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-5 sm:py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-sm font-semibold text-gray-800 sm:text-base">
          বাজার দর{" "}
          <span className="font-normal text-gray-500">
            — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </span>
        </p>

        <p className="text-xs italic text-gray-500 sm:max-w-md sm:text-right sm:text-sm">
          “সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।”
        </p>
      </div>
    </footer>
  );
};

export default Footer;