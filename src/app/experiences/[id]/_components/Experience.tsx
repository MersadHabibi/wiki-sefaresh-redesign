"use client";

import GET_EXPERIENCE_BY_ID from "@/graphql/client/queries/GetExperienceById";
import { useQuery } from "@apollo/client";
import { formatDistanceToNow } from "date-fns";
import { faIR } from "date-fns/locale";
import { ArrowLeftIcon, StoreIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Experience({ params }: { params: { id: string } }) {
  const { loading, error, data } = useQuery(GET_EXPERIENCE_BY_ID, {
    variables: { experienceId: params.id },
  });

  const timeAgo = formatDistanceToNow(
    new Date(data?.experience.createdAt || new Date()),
    {
      addSuffix: true,
      locale: faIR, // Set locale to Persian
    },
  );

  if (error) return redirect("/error");

  return (
    <>
      {loading ? (
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
          <div className="px-5 py-5 sm:px-8 sm:py-6">
            <div className="relative">
              <div className="light-skeleton h-9 w-28 !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800 sm:h-10 sm:w-32"></div>
            </div>
            <div className="mt-3 line-clamp-6 text-gray-700 dark:text-gray-300">
              <div className="light-skeleton mb-3 h-5 w-full !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
              <div className="light-skeleton mb-3 h-5 w-full !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
              <div className="light-skeleton mb-3 h-5 w-[80%] !rounded-md bg-neutral-300 dark:skeleton dark:bg-neutral-800"></div>
            </div>
          </div>
          <div className="px-5 py-5 sm:px-8 sm:pb-6 sm:pt-6">
            <div className="flex w-full flex-col justify-between gap-y-4 rounded-md bg-neutral-300 px-4 py-6 text-sm font-medium dark:bg-neutral-800 sm:text-base">
              <div className="light-skeleton h-8 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
              <div className="light-skeleton h-8 w-full !rounded-md bg-neutral-400/20 dark:skeleton dark:bg-neutral-700/30"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full overflow-hidden rounded-lg bg-neutral-200 text-start dark:bg-neutral-900">
          <div className="flex items-center justify-between border-b border-b-neutral-400 px-5 py-3 dark:border-b-neutral-700 sm:px-8 sm:py-4">
            <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-center">
              <Link
                href={`/stores/${data?.experience.storeId}`}
                className="flex items-center gap-x-3 text-primary dark:text-primary-dark">
                <StoreIcon className="hidden size-8 shrink-0 sm:inline-block" />
                <h3 className="-mb-0.5 line-clamp-1 text-xl font-bold xs:max-w-56 sm:max-w-56 sm:text-2xl md:max-w-72 lg:max-w-52 xl:max-w-96 2xl:max-w-[470px]">
                  {data?.experience.Store.name}
                </h3>
              </Link>
              <div className="hidden h-6 w-0.5 bg-gray-500 dark:bg-gray-400 sm:inline-block"></div>
              <p className="-mb-0.5 w-fit text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
                {timeAgo}
              </p>
            </div>
            <div className="-mb-1.5 shrink-0">
              <div className="rating gap-x-1" dir="ltr">
                {new Array(Math.round(data?.experience.score || 0))
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      className="mask mask-star-2 size-5 bg-orange-400 sm:size-6"
                    />
                  ))}
                {new Array(5 - Math.round(data?.experience.score || 0))
                  .fill("")
                  .map((_, index) => (
                    <input
                      key={index}
                      className="mask mask-star-2 size-5 bg-neutral-400 dark:bg-neutral-600 sm:size-6"
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="px-5 py-5 sm:px-8 sm:py-6">
            <div className="relative">
              <div className="absolute -right-8 bottom-0 top-0 h-full w-6 rounded-l-sm bg-primary sm:w-5"></div>
              <Link href={`/experiences/${data?.experience.id}`}>
                <h2 className="line-clamp-1 text-xl font-bold sm:text-2xl">
                  {data?.experience.title}
                </h2>
              </Link>
            </div>
            <p className="mt-3 line-clamp-6 text-gray-700 dark:text-gray-300">
              {data?.experience.body}
            </p>
          </div>
          <div className="px-5 py-5 sm:px-8 sm:py-8">
            <div className="w-full rounded-md bg-neutral-300 px-4 py-6 text-sm font-medium dark:bg-neutral-800 sm:text-base">
              <div className="flex w-full items-center justify-between px-2">
                <p>محصول</p>
                <p>{data?.experience.product || "مشخص نشده"}</p>
              </div>
              <div className="my-5 h-px w-full bg-neutral-400 dark:bg-neutral-700"></div>
              <div className="flex w-full items-center justify-between px-2">
                <p>تاریخ سفارش</p>
                <p>
                  {data?.experience.orderDate
                    ? new Date(data?.experience.orderDate).toLocaleDateString(
                        "fa-IR",
                      )
                    : "مشخص نشده"}
                </p>
              </div>
            </div>
            <Link
              href={`/experiences?storeId=${data?.experience.storeId}`}
              className="btn btn-primary mt-4 flex w-full items-center gap-x-2 rounded-md border-none bg-primary font-medium text-font-color-dark xs:text-base">
              دیدن تجربه های دیگر این فروشگاه
              <ArrowLeftIcon className="size-5 sm:size-6" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
