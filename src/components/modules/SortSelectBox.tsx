"use client";

import useSearchQueries from "@/hooks/useSearchQueries";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

type TOption = {
  value: string;
  title: string;
};

export default function SortSelectBox({ options }: { options: TOption[] }) {
  const selectBox = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const setSearchParams = useSearchQueries();
  const searchParams = useSearchParams();

  const isMDDevice = useMediaQuery("(min-width: 768px)");

  const sortHandler = (sortValue: string) => {
    setIsOpen(false);
    setSearchParams(["sortBy", "page"], [sortValue, "1"]);
  };

  const selectedOption = options.find(
    (option) => option.value == searchParams.get("sortBy"),
  );

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("click", clickHandler);

      if (!isMDDevice) document.body.classList.add("overflow-y-hidden");
    } else {
      document.removeEventListener("click", clickHandler);
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.removeEventListener("click", clickHandler);
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen, isMDDevice]);

  return (
    <div className="relative pt-5 md:hidden 2xl:pt-7">
      <div
        className={cn(
          "flex h-16 cursor-pointer items-center justify-between rounded-lg bg-neutral-200 px-6 font-medium dark:bg-neutral-900 xl:w-96",
          isOpen && "bg-neutral-300 dark:bg-neutral-800",
        )}
        onClick={() => setIsOpen(!isOpen)}>
        {selectedOption?.title || "مرتب کردن بر اساس"}
        <ChevronDownIcon
          className={cn("transition-all", isOpen && "rotate-180")}
        />
      </div>
      {isOpen && (
        <>
          <div
            className={cn(
              "fixed inset-0 z-[60] size-full w-full bg-black/30 opacity-0 backdrop-blur-sm transition-all dark:bg-white/5 md:hidden",
              isOpen && "visible opacity-100",
            )}
            onClick={() => setIsOpen(false)}></div>
          <div className="fixed bottom-0 left-0 right-0 z-[60] mt-2 w-full overflow-hidden rounded-t-lg bg-neutral-300 font-medium shadow-md shadow-black/10 dark:bg-neutral-800">
            <div className="flex h-fit flex-col items-start justify-start overflow-y-auto md:max-h-40">
              {options.map((option) => (
                <button
                  className="block w-full px-4 py-4 text-start transition-colors hover:bg-neutral-400/50 dark:hover:bg-neutral-700"
                  key={option.value}
                  onClick={() => sortHandler(option.value)}>
                  {option.title}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
