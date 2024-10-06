"use client";

import { EXPERIENCES_SORTS } from "@/enums";
import useSearchQueries from "@/hooks/useSearchQueries";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export const sorts = [
  {
    value: EXPERIENCES_SORTS.MOST_RELEVANT,
    title: "مرتبط ترین",
  },
  {
    value: EXPERIENCES_SORTS.NEWEST,
    title: "جدید ترین",
  },
  {
    value: EXPERIENCES_SORTS.HIGHEST_SCORE,
    title: "مثبت ترین",
  },
  {
    value: EXPERIENCES_SORTS.LOWEST_SCORE,
    title: "منفی ترین",
  },
];

export default function SortExperiences() {
  const setSearchParams = useSearchQueries();
  const searchParams = useSearchParams();

  const sortHandler = (sortValue: EXPERIENCES_SORTS) => {
    setSearchParams(["sortBy", "page"], [sortValue, "1"]);
  };

  return (
    <div className="hidden h-16 w-full items-center rounded-lg bg-neutral-200 px-6 dark:bg-neutral-900 md:flex">
      <p className="font-bold">مرتب کردن بر اساس:</p>
      <div className="flex h-full gap-x-4 pr-7 lg:gap-x-3 lg:pr-4 xl:gap-x-4 xl:pr-7">
        {sorts.map((sort) => (
          <button
            key={sort.value}
            className={cn(
              "h-full border-primary px-2 opacity-70 hover:opacity-80 [&.active]:border-y-2 [&.active]:font-medium [&.active]:opacity-100",
              searchParams.get("sortBy") == sort.value && "active",
              !searchParams.get("sortBy") &&
                sort.value === EXPERIENCES_SORTS.MOST_RELEVANT &&
                "active",
            )}
            onClick={() => sortHandler(sort.value)}>
            {sort.title}
          </button>
        ))}
      </div>
    </div>
  );
}
