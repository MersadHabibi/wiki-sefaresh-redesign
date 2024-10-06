"use client";

import GET_STORE_BY_ID from "@/graphql/client/queries/GetStoreById";
import { isValidHttpUrl } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon, StoreIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function StoreSection({ storeId }: { storeId: string }) {
  const { loading, error, data } = useQuery(GET_STORE_BY_ID, {
    variables: { storeId },
  });

  if (error) return redirect("/error");

  if (loading)
    return (
      <div className="w-full overflow-hidden rounded-lg bg-neutral-200 text-start dark:bg-neutral-900">
        <div className="flex items-center justify-between border-b border-b-neutral-400 px-5 py-3 dark:border-b-neutral-700 sm:px-8 sm:py-4">
          <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-center">
            <div className="light-skeleton h-8 w-36 !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800 sm:w-52"></div>
          </div>
          <div className="flex shrink-0 items-center gap-x-1 sm:gap-x-2">
            <div className="light-skeleton size-5 !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800 sm:size-6"></div>
            <div className="light-skeleton size-5 !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800 sm:size-6"></div>
            <div className="light-skeleton size-5 !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800 sm:size-6"></div>
            <div className="light-skeleton size-5 !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800 sm:size-6"></div>
            <div className="light-skeleton size-5 !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800 sm:size-6"></div>
          </div>
        </div>
        <div className="px-5 py-5 sm:px-8 sm:pb-6 sm:pt-6">
          <div className="flex w-full flex-col justify-between gap-y-6 rounded-md bg-neutral-300/80 p-6 text-sm font-medium dark:bg-neutral-800 sm:text-base">
            <div className="light-skeleton h-12 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
            <div className="light-skeleton h-9 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
            <div className="light-skeleton h-9 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
            <div className="light-skeleton h-9 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
            <div className="light-skeleton h-9 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
          </div>
          <div className="light-skeleton mt-4 h-12 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
        </div>
      </div>
    );

  return (
    <section className="w-full overflow-hidden rounded-lg bg-neutral-200 text-start dark:bg-neutral-900">
      <div className="flex items-center justify-between border-b border-b-neutral-400 px-5 py-3 dark:border-b-neutral-700 sm:px-8 sm:py-4">
        <div className="flex items-center gap-x-3 text-primary dark:text-primary-dark">
          <StoreIcon className="hidden size-8 shrink-0 sm:inline-block" />
          <h1 className="-mb-0.5 line-clamp-1 text-xl font-bold xs:max-w-56 sm:max-w-56 sm:text-2xl md:max-w-72 lg:max-w-52 xl:max-w-96 2xl:max-w-[470px]">
            {data?.store.name}
          </h1>
        </div>
        <div className="rating gap-x-1" dir="ltr">
          {new Array(Math.round(data?.store.score || 0))
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="mask mask-star-2 size-5 bg-orange-400 sm:size-6"
              />
            ))}
          {new Array(5 - Math.round(data?.store.score || 0))
            .fill("")
            .map((_, index) => (
              <input
                key={index}
                className="mask mask-star-2 size-5 bg-neutral-400 dark:bg-neutral-600 sm:size-6"
              />
            ))}
        </div>
      </div>
      <div className="px-5 py-5 sm:px-8 sm:py-8">
        <div className="w-full divide-y divide-neutral-400 rounded-md bg-neutral-300 px-4 pb-1 text-sm font-medium dark:divide-neutral-700 dark:bg-neutral-800 sm:px-6 sm:text-base">
          <h2 className="line-clamp-2 w-full px-2 py-6 text-center text-base font-semibold sm:text-lg ">
            {data?.store.activityField}
          </h2>
          <div className="flex w-full items-center justify-between px-2 py-4 text-base sm:text-lg ">
            <p>وب سایت</p>
            {data?.store.website ? (
              <Link
                href={data.store.website}
                className="text-primary hover:underline dark:text-primary-dark"
                target="_blank">
                لینک
              </Link>
            ) : (
              <p className="font-normal opacity-70">ندارد</p>
            )}
          </div>
          <div className="flex w-full items-center justify-between px-2 py-4 text-base sm:text-lg">
            <p>آدرس تلگرام</p>
            {data?.store.telegram ? (
              <Link
                href={
                  isValidHttpUrl(data.store.telegram)
                    ? data.store.telegram
                    : `https://t.me/${data.store.telegram}`
                }
                className="text-primary hover:underline dark:text-primary-dark"
                target="_blank">
                {isValidHttpUrl(data.store.telegram)
                  ? "لینک"
                  : data.store.telegram}
              </Link>
            ) : (
              <p className="font-normal opacity-70">ندارد</p>
            )}
          </div>
          <div className="flex w-full items-center justify-between px-2 py-4 text-base sm:text-lg">
            <p>آدرس اینستاگرام</p>
            {data?.store.instagram ? (
              <Link
                href={
                  isValidHttpUrl(data.store.instagram)
                    ? data.store.instagram
                    : `https://instagram.com/${data.store.instagram}`
                }
                className="text-primary hover:underline dark:text-primary-dark"
                target="_blank">
                {isValidHttpUrl(data.store.instagram)
                  ? "لینک"
                  : data.store.instagram}
              </Link>
            ) : (
              <p className="font-normal opacity-70">ندارد</p>
            )}
          </div>
          <div className="flex w-full items-center justify-between px-2 py-4 text-base sm:text-lg">
            <p>تعداد تجربه ها</p>
            <p className="">{data?.store.experiencesCount}</p>
          </div>
        </div>
        <Link
          href={`/experiences/new-experience?storeId=${storeId}`}
          className="btn btn-primary mt-4 flex w-full items-center gap-x-2 rounded-md border-none bg-primary font-medium text-font-color-dark xs:text-base">
          ثبت تجربه سفارش از این فروشگاه
          <ArrowLeftIcon className="size-5 sm:size-6" />
        </Link>
      </div>
    </section>
  );
}
