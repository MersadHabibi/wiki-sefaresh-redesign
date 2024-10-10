"use client";

import GET_LAST_STORES from "@/graphql/client/queries/GetLastStores";
import { useQuery } from "@apollo/client";
import * as motion from "framer-motion/client";
import { redirect } from "next/navigation";
import SectionTitle from "../modules/SectionTitle";
import StoreCard from "../modules/StoreCard";
import { useMediaQuery } from "usehooks-ts";
import StoreCardSkeleton from "../modules/StoreCardSkeleton";

export default function LastStores() {
  const { loading, error, data } = useQuery(GET_LAST_STORES);

  const isXLDevice = useMediaQuery("(min-width : 1280px)");
  const isLGDevice = useMediaQuery("(min-width : 1024px)");

  if (error) return redirect("/error");

  return (
    <section className="container flex flex-col gap-y-7 pb-32 text-center sm:gap-y-10 lg:text-start">
      <SectionTitle
        title="فروشگاه های جدید"
        caption="جدیدترین فروشگاه های ثبت شده."
        btn={{
          href: "/experiences",
          value: "دیدن همه فروشگاه ها",
        }}
      />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading
          ? new Array(isXLDevice ? 4 : isLGDevice ? 3 : 4)
              .fill("")
              .map((_, index) => <StoreCardSkeleton key={index} />)
          : data?.lastStores
              .slice(0, isXLDevice ? 4 : isLGDevice ? 3 : 4)
              .map((store) => <StoreCard key={store?.id} {...store} />)}
        {/* <Link
          href={"/stores"}
          className="btn w-full gap-x-2 border-none bg-gray-4 font-medium text-white hover:bg-black sm:gap-x-4 sm:text-base">
          <span>دیدن همه تجربه ها</span>
          <ArrowLeftIcon className="size-5 sm:size-6" />
        </Link> */}
      </motion.div>
    </section>
  );
}
