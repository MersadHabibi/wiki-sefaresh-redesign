"use client";

import { FMorabba } from "@/config/fonts";
import GET_LAST_EXPERIENCES from "@/graphql/client/queries/GetLastExperiences";
import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import ExperienceCard from "../modules/ExperienceCard";
import ExperienceCardSkeleton from "../modules/ExperienceCardSkeleton";
import { redirect } from "next/navigation";

export default function LastExperiences() {
  const { loading, error, data } = useQuery(GET_LAST_EXPERIENCES);

  if (error) return redirect("/error");

  return (
    <section className="container flex flex-col gap-y-7 pb-32 text-center sm:gap-y-10 lg:flex-row lg:text-start">
      <div className="top-24 h-fit shrink-0 lg:sticky lg:w-96 lg:pt-5 xl:w-[420px]">
        <h2
          className={cn(
            "mb-3 text-2xl font-semibold sm:mb-4 sm:text-4xl",
            FMorabba.className,
          )}>
          آخرین تجربه ها
        </h2>
        <div className="mx-auto h-1 w-40 rounded-full bg-primary dark:bg-primary-dark lg:mx-0"></div>
      </div>
      <div className="w-full space-y-4">
        {loading
          ? new Array(4)
              .fill("")
              .map((_, index) => <ExperienceCardSkeleton key={index} />)
          : data?.lastExperiences.map((experience) => (
              <ExperienceCard key={experience?.id} experience={experience} />
            ))}
        <Link
          href={"/experiences"}
          className="btn btn-primary w-full gap-x-2 border-none bg-primary font-medium text-font-color-dark sm:gap-x-4 sm:text-base">
          <span>دیدن همه تجربه ها</span>
          <ArrowLeftIcon className="size-5 sm:size-6" />
        </Link>
      </div>
    </section>
  );
}
