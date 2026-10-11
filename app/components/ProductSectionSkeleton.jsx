export default function ProductSectionSkeleton({
  count = 6,
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 animate-pulse">
      <div className="mb-4 h-7 w-64 rounded bg-gray-200" />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="relative min-h-[150px] rounded-2xl border bg-white p-4"
          >
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-gray-200" />

              <div className="flex-1">
                <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
                <div className="h-3 w-1/2 rounded bg-gray-200" />
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 h-3 w-16 rounded bg-gray-200" />
              <div className="h-5 w-24 rounded bg-gray-200" />
            </div>

            <div className="absolute bottom-2 right-2 h-4 w-12 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </section>
  );
}