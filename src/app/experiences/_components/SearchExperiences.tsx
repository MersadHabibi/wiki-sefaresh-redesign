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
    <label className="input flex h-16 !w-full items-center gap-2 rounded-md border !border-gray-3 bg-white p-2 !outline-none lg:w-80 2xl:w-96">
      <input
        value={searchValue}
        type="text"
        className="grow !border-none pr-6 !outline-none"
        placeholder="جستجو..."
        onInput={(event) => setSearchValue(event.currentTarget.value)}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            searchHandler();
          }
        }}
      />
      <button
        onClick={searchHandler}
        className="flex h-full w-12 items-center justify-center rounded-md bg-primary-default py-1 pr-1 text-white">
        <SearchIcon className="size-7 pl-0.5" />
      </button>
    </label>
  );
}
