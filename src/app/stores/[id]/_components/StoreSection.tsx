"use client";

import GET_STORE_BY_ID from "@/graphql/client/queries/GetStoreById";
import { isValidHttpUrl } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon, StoreIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import * as motion from "framer-motion/client";

export default function StoreSection({ storeId }: { storeId: string }) {
  const { loading, error, data } = useQuery(GET_STORE_BY_ID, {
    variables: { storeId },
  });

  if (error) return redirect("/error");

  if (loading)
    return (
      <div className="w-full overflow-hidden rounded-lg border border-neutral-4 bg-white text-start">
        <div className="flex items-center justify-between px-5 py-3 sm:px-8 sm:py-6">
          <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-center">
            <div className="light-skeleton h-8 w-36 !rounded-md bg-neutral-1 sm:w-52"></div>
          </div>
          <div className="flex shrink-0 items-center gap-x-1 sm:gap-x-2">
            <div className="light-skeleton size-5 !rounded-md bg-neutral-1 sm:size-6"></div>
            <div className="light-skeleton size-5 !rounded-md bg-neutral-1 sm:size-6"></div>
            <div className="light-skeleton size-5 !rounded-md bg-neutral-1 sm:size-6"></div>
            <div className="light-skeleton size-5 !rounded-md bg-neutral-1 sm:size-6"></div>
            <div className="light-skeleton size-5 !rounded-md bg-neutral-1 sm:size-6"></div>
          </div>
        </div>
        <div className="px-5 pb-5 sm:px-8 sm:pb-6">
          <div className="light-skeleton flex h-72 w-full flex-col justify-between gap-y-6 rounded-md bg-neutral-1 p-6 text-sm font-medium sm:text-base">
            {/* <div className="light-skeleton h-12 w-full !rounded-md bg-neutral-400/20"></div>
            <div className="light-skeleton h-9 w-full !rounded-md bg-neutral-400/20"></div>
            <div className="light-skeleton h-9 w-full !rounded-md bg-neutral-400/20"></div>
            <div className="light-skeleton h-9 w-full !rounded-md bg-neutral-400/20"></div>
            <div className="light-skeleton h-9 w-full !rounded-md bg-neutral-400/20"></div> */}
          </div>
          <div className="light-skeleton mt-4 h-12 w-full !rounded-md bg-neutral-1"></div>
        </div>
      </div>
    );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full overflow-hidden rounded-lg border border-neutral-4 bg-white text-start">
      <div className="flex items-center justify-between p-5 sm:px-8 sm:py-6">
        <div className="flex items-center gap-x-3">
          <h1 className="relative z-[1] -mb-0.5 line-clamp-1 w-fit px-1.5 text-xl font-bold xs:max-w-56 sm:max-w-56 sm:text-2xl md:max-w-72 lg:max-w-52 xl:max-w-96 2xl:max-w-[470px]">
            <div className="absolute -left-0 -right-0 bottom-0 -z-[1] h-1/2 !rounded-sm bg-primary-1/70"></div>
            {data?.store.name}
          </h1>
        </div>
        <div className="rating gap-x-1" dir="ltr">
          {new Array(Math.round(data?.store.score || 0))
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="mask mask-star-2 size-5 bg-[#FFCC00] sm:size-6"
              />
            ))}
          {new Array(5 - Math.round(data?.store.score || 0))
            .fill("")
            .map((_, index) => (
              <input
                key={index}
                className="mask mask-star-2 size-5 bg-neutral-3 sm:size-6"
              />
            ))}
        </div>
      </div>
      <div className="px-5 pb-5 sm:px-8 sm:pb-8">
        <div className="w-full rounded-md border border-neutral-4 bg-white px-4 pb-1 text-sm font-medium sm:px-6 sm:text-base">
          <h2 className="line-clamp-2 w-full px-2 py-4 text-center text-base font-medium">
            {data?.store.activityField}
          </h2>
          <div className="h-0.5 w-full bg-neutral-2"></div>
          <div className="flex w-full items-center justify-between px-2 py-4 text-base ">
            <p>وب سایت</p>
            {data?.store.website ? (
              <Link
                href={data.store.website}
                className="text-primary-default hover:underline"
                target="_blank">
                لینک
              </Link>
            ) : (
              <p className="font-normal opacity-70">ندارد</p>
            )}
          </div>
          <div className="flex w-full items-center justify-between px-2 py-4 text-base">
            <p>آدرس تلگرام</p>
            {data?.store.telegram ? (
              <Link
                href={
                  isValidHttpUrl(data.store.telegram)
                    ? data.store.telegram
                    : `https://t.me/${data.store.telegram}`
                }
                className="text-primary-default hover:underline"
                target="_blank">
                {isValidHttpUrl(data.store.telegram)
                  ? "لینک"
                  : data.store.telegram}
              </Link>
            ) : (
              <p className="font-normal opacity-70">ندارد</p>
            )}
          </div>
          <div className="flex w-full items-center justify-between px-2 py-4 text-base">
            <p>آدرس اینستاگرام</p>
            {data?.store.instagram ? (
              <Link
                href={
                  isValidHttpUrl(data.store.instagram)
                    ? data.store.instagram
                    : `https://instagram.com/${data.store.instagram}`
                }
                className="text-primary-default hover:underline"
                target="_blank">
                {isValidHttpUrl(data.store.instagram)
                  ? "لینک"
                  : data.store.instagram}
              </Link>
            ) : (
              <p className="font-normal opacity-70">ندارد</p>
            )}
          </div>
          <div className="flex w-full items-center justify-between px-2 py-4 text-base">
            <p>تعداد تجربه ها</p>
            <p className="">{data?.store.experiencesCount}</p>
          </div>
        </div>
        <Link
          href={`/experiences/new-experience?storeId=${storeId}`}
          className="btn btn-primary mt-4 flex w-full items-center gap-x-2 rounded-md border-none bg-gray-4 font-medium text-white hover:bg-black xs:text-base">
          ثبت تجربه سفارش از این فروشگاه
          <ArrowLeftIcon className="size-5 sm:size-6" />
        </Link>
      </div>
    </motion.section>
  );
}
