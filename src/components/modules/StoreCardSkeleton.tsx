export default function StoreCardSkeleton() {
  return (
    <div className="rounded-lg bg-neutral-1 p-4">
      <div className="flex items-center justify-center gap-x-4 px-2 pb-5 pt-1 text-xl font-bold">
        <div className="light-skeleton h-8 w-32 !rounded-md bg-neutral-2 sm:w-36"></div>
      </div>
      <div className="light-skeleton flex h-64 w-full flex-col justify-between !rounded-md bg-neutral-2 px-4 py-6 text-sm font-medium sm:text-base"></div>
      <button className="light-skeleton text-font-color-dark mt-4 h-12 w-full !rounded-md border-none bg-neutral-2 text-base font-medium dark:skeleton"></button>
    </div>
  );
}
