"use client";

import GET_LAST_EXPERIENCES from "@/graphql/client/queries/GetLastExperiences";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import ExperienceCard from "../modules/ExperienceCard";
import ExperienceCardSkeleton from "../modules/ExperienceCardSkeleton";
import SectionTitle from "../modules/SectionTitle";
import * as motion from "framer-motion/client";

export default function LastExperiences() {
  const { loading, error, data } = useQuery(GET_LAST_EXPERIENCES);

  if (error) return redirect("/error");

  return (
    <section className="container flex flex-col gap-y-7 pb-32 text-center sm:gap-y-10 lg:text-start">
      <SectionTitle
        title="آخرین تجربه ها"
        caption="آخرین تجربه های سفارش ثبت شده."
        btn={{
          href: "/experiences",
          value: "دیدن همه تجربه ها",
        }}
      />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full space-y-4">
        {loading
          ? new Array(4)
              .fill("")
              .map((_, index) => <ExperienceCardSkeleton key={index} />)
          : data?.lastExperiences.map((experience) => (
              <ExperienceCard key={experience?.id} experience={experience} />
            ))}
        <Link
          href={"/experiences"}
          className="btn w-full gap-x-2 border-none bg-gray-4 font-medium text-white hover:bg-black sm:gap-x-4 sm:text-base">
          <span>دیدن همه تجربه ها</span>
          <ArrowLeftIcon className="size-5 sm:size-6" />
        </Link>
      </motion.div>
    </section>
  );
}
