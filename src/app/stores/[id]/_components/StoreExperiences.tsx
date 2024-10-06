"use client";

import ExperienceCard from "@/components/modules/ExperienceCard";
import ExperienceCardSkeleton from "@/components/modules/ExperienceCardSkeleton";
import { FMorabba } from "@/config/fonts";
import GET_LAST_EXPERIENCES_BY_STORE from "@/graphql/client/queries/GetLastExperiencesByStore";
import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function StoreExperiences({ storeId }: { storeId: string }) {
  const { loading, error, data } = useQuery(GET_LAST_EXPERIENCES_BY_STORE, {
    variables: { storeId },
  });

  if (error) return redirect("/error");

  return (
    <section className="container flex flex-col gap-y-7 px-0 pt-10 text-center sm:gap-y-10 lg:flex-row lg:text-start">
      <div className="top-24 h-fit shrink-0 lg:sticky lg:w-96 lg:pt-5 xl:w-[420px]">
        <h2
          className={cn(
            "mb-3 text-2xl font-semibold sm:mb-4 sm:text-4xl",
            FMorabba.className,
          )}>
          تجربه های این فروشگاه
        </h2>
        <div className="mx-auto h-1 w-40 rounded-full bg-primary dark:bg-primary-dark lg:mx-0"></div>
      </div>
      <div className="w-full space-y-4">
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
              className="btn btn-primary w-full gap-x-2 border-none bg-primary font-medium text-font-color-dark xs:text-base sm:gap-x-4">
              <span>دیدن همه تجربه های این فروشگاه</span>
              <ArrowLeftIcon className="size-5 sm:size-6" />
            </Link>
          </>
        ) : (
          <div className="pt-8">
            <p className=" text-center text-base font-medium sm:text-lg">
              تجربه ای برای این فروشگاه ثبت نشده است.
            </p>
            <Link
              href={`/experiences/new-experience?storeId=${storeId}`}
              className="btn mx-auto mt-5 flex w-fit items-center gap-x-2 rounded-md border-2 !border-primary bg-transparent px-7 font-medium text-primary transition-colors hover:bg-primary hover:!text-font-color-dark dark:text-primary-dark xs:text-base">
              اولین تجربه رو ثبت کن
              <ArrowLeftIcon className="size-5 sm:size-6" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
