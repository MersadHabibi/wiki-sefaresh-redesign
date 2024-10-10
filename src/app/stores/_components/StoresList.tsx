"use client";

import Pagination from "@/components/modules/Pagination";
import StoreCard from "@/components/modules/StoreCard";
import StoreCardSkeleton from "@/components/modules/StoreCardSkeleton";
import { STORES_SORTS } from "@/enums";
import GET_All_STORES from "@/graphql/client/queries/GetAllStoresQuery";
import { useQuery } from "@apollo/client";
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
            <StoreCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 grid-rows-1 gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-7 2xl:pt-7">
            {data?.stores.data.map((store) => (
              <StoreCard key={store?.id} {...store} />
            ))}
          </div>
          <Pagination pageInfo={data?.stores.pageInfo} />
        </>
      )}
    </>
  );
}
