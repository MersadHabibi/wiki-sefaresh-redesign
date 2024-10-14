"use client";

import ExperienceCard from "@/components/modules/ExperienceCard";
import ExperienceCardSkeleton from "@/components/modules/ExperienceCardSkeleton";
import SectionTitle from "@/components/modules/SectionTitle";
import { FMorabba } from "@/config/fonts";
import GET_LAST_EXPERIENCES_BY_STORE from "@/graphql/client/queries/GetLastExperiencesByStore";
import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";

export default function StoreExperiences({ storeId }: { storeId: string }) {
  const { loading, error, data } = useQuery(GET_LAST_EXPERIENCES_BY_STORE, {
    variables: { storeId },
  });

  if (error) return redirect("/error");

  return (
    <section className="container space-y-6 px-0 pt-16">
      <SectionTitle
        btn={{
          href: `/experiences?storeId=${storeId}`,
          value: "دیدن همه تجربه‌ها",
        }}
        caption="آخرین تجربه‌های سفارش ثبت شده از این فروشگاه"
        title="تجربه‌های این فروشگاه"
      />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full space-y-4">
        {loading ? (
          new Array(4)
            .fill("")
            .map((_, index) => <ExperienceCardSkeleton key={index} />)
        ) : data?.lastExperiencesByStore.length ? (
          <>
            {data?.lastExperiencesByStore.map((experience) => (
              <ExperienceCard key={experience?.id} experience={experience} />
            ))}
            <Link
              href={`/experiences?storeId=${storeId}`}
              className="btn btn-primary w-full gap-x-2 border-none bg-gray-4 font-medium text-white hover:bg-black xs:text-base sm:gap-x-4">
              <span>دیدن همه تجربه های این فروشگاه</span>
              <ArrowLeftIcon className="size-5 sm:size-6" />
            </Link>
          </>
        ) : (
          <div className="pt-16">
            <p className=" text-center text-base font-medium sm:text-2xl">
              تجربه ای برای این فروشگاه ثبت نشده است.
            </p>
            <Link
              href={`/experiences/new-experience?storeId=${storeId}`}
              className="btn mx-auto mt-5 flex w-fit items-center gap-x-2 rounded-md border-2 !border-gray-4 bg-transparent px-7 font-medium text-gray-4 transition-colors hover:bg-gray-4 hover:text-white xs:text-base">
              اولین تجربه رو ثبت کن
              <ArrowLeftIcon className="size-5 sm:size-6" />
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
}
