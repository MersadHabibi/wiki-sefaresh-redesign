"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

enum SEARCH_TYPE {
  STORES = "stores",
  EXPERIENCES = "experiences",
}

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState<SEARCH_TYPE>();

  const router = useRouter();

  const onSearch = () => {
    if (!searchType) return toast.error("لطفا <جستجو در> را انتخاب کنید");

    console.log(searchType, SEARCH_TYPE.EXPERIENCES, SEARCH_TYPE.STORES);

    if (searchType == SEARCH_TYPE.EXPERIENCES)
      return router.push(`/experiences?search=${searchValue}`);

    if (searchType == SEARCH_TYPE.STORES)
      return router.push(`/stores?search=${searchValue}`);
  };

  return (
    <div className="flex w-full rounded-lg border border-gray-2 bg-white p-1">
      <input
        className="w-full border-none bg-transparent pr-5 text-sm text-gray-1 outline-none"
        placeholder="جستجو..."
        type="text"
        value={searchValue}
        onInput={(event) => setSearchValue(event.currentTarget.value)}
      />
      <div className="flex shrink-0 items-center gap-x-3">
        <select
          onChange={(event) =>
            setSearchType(
              (event.currentTarget.value as SEARCH_TYPE) || undefined,
            )
          }
          className="border-none !bg-transparent outline-none">
          <option value="" defaultChecked>
            جستجو در
          </option>
          <option value="stores">فروشگاه ها</option>
          <option value="experiences">تجربه ها</option>
        </select>
        <button
          onClick={onSearch}
          className="flex size-10 items-center justify-center rounded-md bg-primary-default text-white hover:bg-primary-4 sm:size-11">
          <SearchIcon className="size-6" />
        </button>
      </div>
    </div>
  );
}
