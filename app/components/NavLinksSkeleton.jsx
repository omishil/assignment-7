const NavLinksSkeleton = () => (
  <div className="relative left-0 sm:left-10 mt-3 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2 animate-pulse">
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1.5 sm:gap-1.5 sm:px-3 sm:py-2"
      >
        <div className="h-3 w-3 rounded-full bg-gray-200 sm:h-4 sm:w-4" />
        <div className="h-3 w-10 rounded bg-gray-200 sm:h-3.5 sm:w-14 md:w-16" />
      </div>
    ))}
  </div>
);

export default NavLinksSkeleton;