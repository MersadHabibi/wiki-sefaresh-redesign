"use client";

import { STORES_SORTS } from "@/enums";
import useSearchQueries from "@/hooks/useSearchQueries";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export const sorts = [
  {
    value: STORES_SORTS.MOST_RELEVANT,
    title: "مرتبط ترین",
  },
  {
    value: STORES_SORTS.HIGHEST_SCORE,
    title: "بیشترین امتیاز",
  },
  {
    value: STORES_SORTS.LOWEST_SCORE,
    title: "کمترین امتیاز",
  },
  {
    value: STORES_SORTS.MOST_EXPERIENCES,
    title: "بیشترین تجربه",
  },
];

export default function SortStores() {
  const setSearchParams = useSearchQueries();
  const searchParams = useSearchParams();

  const sortHandler = (sortValue: STORES_SORTS) => {
    setSearchParams(["sortBy", "page"], [sortValue, "1"]);
  };

  return (
    <div className="hidden h-16 w-full items-center rounded-md border border-neutral-4 bg-white px-6 md:flex">
      <p className="font-bold">مرتب کردن بر اساس:</p>
      <div className="flex h-full gap-x-4 pr-7 lg:gap-x-3 lg:pr-4 xl:gap-x-4 xl:pr-7">
        {sorts.map((sort) => (
          <button
            key={sort.value}
            className={cn(
              "h-full border-primary-default px-2 opacity-70 hover:opacity-80 [&.active]:border-y-2 [&.active]:font-medium [&.active]:opacity-100",
              searchParams.get("sortBy") == sort.value && "active",
              !searchParams.get("sortBy") &&
                sort.value === STORES_SORTS.MOST_RELEVANT &&
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
