"use client";

import useSearchQueries from "@/hooks/useSearchQueries";
import { SearchIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function SearchExperiences() {
  const setSearchParams = useSearchQueries();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = useCallback(() => {
    setSearchParams(["search", "page"], [searchValue, "1"]);
  }, [setSearchParams, searchValue]);

  const URLSearchValue = useMemo(() => {
    return searchParams.get("search");
  }, [searchParams]);

  useEffect(() => {
    if (URLSearchValue) setSearchValue(URLSearchValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URLSearchValue]);

  return (
    <label className="input flex h-16 !w-full items-center gap-2 !border-none bg-neutral-200 px-6 !outline-none dark:bg-neutral-900 lg:w-80 2xl:w-96">
      <input
        value={searchValue}
        type="text"
        className="grow !border-none !outline-none"
        placeholder="جستجو..."
        onInput={(event) => setSearchValue(event.currentTarget.value)}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            searchHandler();
          }
        }}
      />
      <button onClick={searchHandler} className="py-1 pr-1">
        <SearchIcon className="size-7" />
      </button>
    </label>
  );
}
