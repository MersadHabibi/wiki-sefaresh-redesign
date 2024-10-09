"use client";

import GET_POPULAR_STORES from "@/graphql/client/queries/GetPopularStores";
import { useQuery } from "@apollo/client";
import * as motion from "framer-motion/client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

export default function Stores() {
  const isXLDevice = useMediaQuery("(min-width : 1280px)");

  const { loading, error, data } = useQuery(GET_POPULAR_STORES);

  if (error) return redirect("/error");

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-3 sm:gap-x-5 sm:gap-y-5 lg:justify-between xl:gap-x-4 2xl:gap-x-5">
      {loading
        ? new Array(isXLDevice ? 27 : 20)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="light-skeleton h-9 w-20 !rounded-md bg-neutral-1 sm:h-10 sm:w-28"></div>
            ))
        : data?.popularStores
            .slice(0, isXLDevice ? undefined : 20)
            .map((store: { id: string; name: string } | null) => (
              <Link
                href={`/stores/${store?.id}`}
                key={store?.id}
                className="flex h-9 items-center justify-center rounded-md border border-gray-3 bg-white px-4 py-1 text-base font-medium text-gray-3 transition-all hover:bg-gray-3 hover:text-white sm:h-10 sm:px-5 sm:py-1.5 sm:text-lg 2xl:px-6">
                {store?.name}
              </Link>
            ))}
    </motion.div>
  );
}
