export default function ExperienceCardSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-neutral-1 text-start">
      <div className="flex items-center justify-between border-b border-b-neutral-3 px-5 py-3 sm:px-8 sm:py-4">
        <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-center">
          <div className="light-skeleton h-8 w-32 !rounded-md bg-neutral-2 sm:w-36"></div>
        </div>
        <div className="flex items-center gap-x-1 sm:gap-x-2">
          <div className="light-skeleton size-5 !rounded-md bg-neutral-2 sm:size-6"></div>
          <div className="light-skeleton size-5 !rounded-md bg-neutral-2 sm:size-6"></div>
          <div className="light-skeleton size-5 !rounded-md bg-neutral-2 sm:size-6"></div>
          <div className="light-skeleton size-5 !rounded-md bg-neutral-2 sm:size-6"></div>
          <div className="light-skeleton size-5 !rounded-md bg-neutral-2 sm:size-6"></div>
        </div>
      </div>
      <div className="px-5 py-5 sm:px-8 sm:py-6">
        <div className="relative">
          <div className="light-skeleton h-9 w-28 !rounded-md bg-neutral-2 sm:h-10 sm:w-32"></div>
        </div>
        <div className="mt-5 line-clamp-6 text-gray-700">
          <div className="light-skeleton mb-3 h-5 w-full !rounded-md bg-neutral-2"></div>
          <div className="light-skeleton mb-3 h-5 w-full !rounded-md bg-neutral-2"></div>
        </div>
      </div>
    </div>
  );
}
