"use client";

import GET_POPULAR_STORES from "@/graphql/client/queries/GetPopularStores";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

export default function Stores() {
  const isXLDevice = useMediaQuery("(min-width : 1280px)");

  const { loading, error, data } = useQuery(GET_POPULAR_STORES);

  if (error) return redirect("/error");

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
      {loading
        ? new Array(isXLDevice ? 15 : 10)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="light-skeleton h-9 w-28 !rounded-md bg-neutral-200 dark:skeleton dark:bg-neutral-900 sm:h-10"></div>
            ))
        : data?.popularStores
            .slice(0, isXLDevice ? undefined : 20)
            .map((store: { id: string; name: string } | null) => (
              <Link
                href={`/stores/${store?.id}`}
                key={store?.id}
                className="flex h-9 items-center justify-center rounded-md bg-neutral-200 px-4 py-1 font-medium transition-all hover:bg-primary hover:text-font-color-dark hover:!shadow-inner hover:shadow-black hover:drop-shadow-none dark:bg-neutral-900 dark:hover:bg-primary sm:h-10 sm:px-5 sm:py-1.5 sm:text-lg">
                {store?.name}
              </Link>
            ))}
      <Link
        href={"/stores"}
        className="btn btn-primary flex h-9 min-h-0 items-center gap-x-2 rounded-md border-none bg-primary px-5 py-1.5 font-medium text-font-color-dark shadow-first shadow-black/30 transition-all sm:h-10 sm:text-lg">
        <span>دیدن همه فروشگاه ها</span>
        <ArrowLeftIcon className="size-5 sm:size-6" />
      </Link>
    </div>
  );
}
