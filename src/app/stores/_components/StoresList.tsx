"use client";

import Pagination from "@/components/modules/Pagination";
import { STORES_SORTS } from "@/enums";
import GET_All_STORES from "@/graphql/client/queries/GetAllStoresQuery";
import { useQuery } from "@apollo/client";
import { StoreIcon } from "lucide-react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

export default function StoresList() {
  const searchParams = useSearchParams();

  const isLGDevice = useMediaQuery("(min-width : 1024px)");

  const { loading, error, data } = useQuery(GET_All_STORES, {
    variables: {
      page: Number(searchParams.get("page")) || 1,
      pageSize: isLGDevice ? 12 : 8,
      search: searchParams.get("search") || undefined,
      // @ts-expect-error
      sort: searchParams.get("sortBy")
        ? Object.values(STORES_SORTS).includes(
            searchParams.get("sortBy") as STORES_SORTS,
          )
          ? (searchParams.get("sortBy") as STORES_SORTS)
          : undefined
        : undefined,
    },
  });

  if (error) return redirect("/error");

  return (
    <>
      {data?.stores.data.length || loading ? null : (
        <div>
          <p className="w-full pt-12 text-center text-2xl font-semibold ">
            فروشگاهی پیدا نشد.
          </p>
        </div>
      )}
      {loading ? (
        <div className="grid grid-cols-1 grid-rows-1 gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-7 2xl:pt-7">
          {new Array(8).fill("").map((_, index) => (
            <div
              key={index}
              className="rounded-lg bg-neutral-200 p-4 dark:bg-neutral-900">
              <div className="flex items-center gap-x-4 px-2 pb-5 pt-1 text-xl font-bold text-second">
                <div className="light-skeleton h-8 w-32 !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800 sm:w-36"></div>
              </div>
              <div className="flex h-64 w-full flex-col justify-between !rounded-md bg-neutral-300 px-4 py-6 text-sm font-medium dark:bg-neutral-800 sm:text-base">
                <div className="light-skeleton h-8 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
                <div className="light-skeleton h-8 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
                <div className="light-skeleton h-8 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
                <div className="light-skeleton h-8 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
              </div>
              <button className="light-skeleton mt-4 h-12 w-full !rounded-md border-none bg-neutral-300 text-base font-medium text-font-color-dark dark:skeleton dark:bg-neutral-800"></button>
            </div>
          ))}{" "}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 grid-rows-1 gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-7 2xl:pt-7">
            {data?.stores.data.map((store) => (
              <div
                key={store?.id}
                className="rounded-lg bg-neutral-200 p-4 dark:bg-neutral-900">
                <Link
                  href={`/stores/${store?.id}`}
                  className="flex items-center gap-x-3 px-2 pb-5 pt-1 text-2xl font-bold text-primary dark:text-primary-dark">
                  <StoreIcon className="size-8" />
                  <h2 className="line-clamp-1">{store?.name}</h2>
                </Link>
                {/* <div className="mt-4 h-px w-full rounded-full bg-neutral-400 dark:bg-neutral-800"></div> */}
                <div className="mt-auto w-full rounded-md bg-neutral-300 px-4 py-6 text-sm font-medium dark:bg-neutral-800 sm:text-base">
                  <div className="flex w-full items-center justify-center px-2 font-medium">
                    <p className="line-clamp-2 text-center">
                      {store?.activityField}
                    </p>
                  </div>
                  <div className="my-5 !h-px w-full bg-neutral-400 dark:bg-neutral-700"></div>
                  <div className="flex w-full items-center justify-between px-2">
                    <p>تعداد تجربه ها</p>
                    <p>{store?.experiencesCount}</p>
                  </div>
                  <div className="my-5 !h-[0.5px] w-full bg-neutral-400 dark:bg-neutral-700"></div>
                  <div className="flex w-full items-center justify-between px-2">
                    <p>سایت</p>
                    {store?.website ? (
                      <Link
                        href={store?.website}
                        className="text-blue-600 hover:underline dark:text-blue-500"
                        target="_blank">
                        لینک
                      </Link>
                    ) : (
                      <p>ندارد</p>
                    )}
                  </div>
                  <div className="my-5 !h-[0.5px] w-full bg-neutral-400 dark:bg-neutral-700"></div>
                  <div className="flex w-full items-center justify-between px-2">
                    <p>امتیاز</p>
                    <div className="-mb-1.5 shrink-0">
                      <div className="rating gap-x-1" dir="ltr">
                        {new Array(Math.round(store?.score || 0))
                          .fill("")
                          .map((_, index) => (
                            <div
                              key={index}
                              className="mask mask-star-2 size-5 bg-orange-400"
                            />
                          ))}
                        {new Array(5 - Math.round(store?.score || 0))
                          .fill("")
                          .map((_, index) => (
                            <input
                              key={index}
                              className="mask mask-star-2 size-5 dark:bg-neutral-600"
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/experiences?storeId=${store?.id}`}
                  className="btn btn-primary sticky top-full mt-4 w-full rounded-md border-none bg-primary text-base font-medium text-font-color-dark">
                  دیدن تجربه ها
                </Link>
              </div>
            ))}{" "}
          </div>
          <Pagination pageInfo={data?.stores.pageInfo} />
        </>
      )}
    </>
  );
}
