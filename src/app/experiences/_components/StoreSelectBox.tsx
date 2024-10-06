"use client";

import GET_STORE_NAME_AND_ID_BY_STORE_ID from "@/graphql/client/queries/GetStoreNameAndIdByStoreId";
import GET_STORES_NAME_AND_ID from "@/graphql/client/queries/GetStoresNameAndId";
import useSearchQueries from "@/hooks/useSearchQueries";
import { cn } from "@/lib/utils";
import { useLazyQuery, useQuery } from "@apollo/client";
import { ChevronDownIcon } from "lucide-react";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery, useOnClickOutside } from "usehooks-ts";

type TStore = {
  id: string;
  name: string;
};

export default function StoreSelectBox() {
  const selectBox = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TStore>({
    id: "",
    name: "انتخاب فروشگاه",
  });
  const [searchTerm, setSearchTerm] = useState<string>("");

  const setSearchParams = useSearchQueries();
  const searchParams = useSearchParams();

  const isMDDevice = useMediaQuery("(min-width: 768px)");

  const [getStore, { loading: getStoreLoading }] = useLazyQuery(
    GET_STORE_NAME_AND_ID_BY_STORE_ID,
  );

  const { loading, error, data } = useQuery(GET_STORES_NAME_AND_ID, {
    variables: { search: searchTerm || undefined },
  });

  const selectStoreHandler = (store: TStore) => {
    setSearchParams(["storeId", "page"], [store.id, "1"]);
    setSelectedOption(store);
    setIsOpen(false);
  };

  useOnClickOutside(selectBox, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (isOpen && !isMDDevice) document.body.classList.add("overflow-y-hidden");
    else document.body.classList.remove("overflow-y-hidden");

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen, isMDDevice]);

  useEffect(() => {
    const storeId = searchParams.get("storeId");

    async function getStoreFunc() {
      const data = await getStore({
        variables: { id: storeId || "" },
      });

      if (data.data?.store) setSelectedOption(data.data?.store);
    }

    if (storeId) {
      getStoreFunc();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getStore]);

  if (error) return redirect("/error");

  return (
    <div ref={selectBox} className="relative pt-5 2xl:pt-7">
      <div
        className={cn(
          "flex h-16 cursor-pointer items-center justify-between rounded-lg bg-neutral-200 px-6 font-medium dark:bg-neutral-900 xl:w-96",
          isOpen && "bg-neutral-300 dark:bg-neutral-800",
        )}
        onClick={() => setIsOpen(!isOpen)}>
        {getStoreLoading ? (
          <div className="flex w-full items-center justify-center py-4">
            <span className="loading loading-spinner loading-sm text-black dark:text-white"></span>
          </div>
        ) : (
          selectedOption.name
        )}

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
          <div className="fixed bottom-0 left-0 right-0 z-[60] mt-2 w-full overflow-hidden rounded-lg bg-neutral-300 font-medium shadow-md shadow-black/10 dark:bg-neutral-800 md:absolute md:bottom-auto md:top-full">
            <input
              className="h-14 w-full !border-b border-neutral-400 bg-transparent px-4 outline-none dark:border-neutral-700 md:h-12"
              type="text"
              placeholder="جستجو..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex h-64 flex-col items-start justify-start overflow-y-auto md:max-h-40">
              {loading ? (
                <div className="flex w-full items-center justify-center py-4">
                  <span className="loading loading-spinner loading-sm text-black dark:text-white"></span>
                </div>
              ) : null}
              {data?.stores.data.map((store) => (
                <button
                  className="block w-full px-4 py-3 text-start hover:bg-neutral-400/50 dark:hover:bg-neutral-700"
                  key={store?.id}
                  onClick={() => store && selectStoreHandler(store)}>
                  {store?.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
