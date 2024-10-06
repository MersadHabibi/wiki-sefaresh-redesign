"use client";

import ExperienceCard from "@/components/modules/ExperienceCard";
import ExperienceCardSkeleton from "@/components/modules/ExperienceCardSkeleton";
import Pagination from "@/components/modules/Pagination";
import { EXPERIENCES_SORTS } from "@/enums";
import GET_All_EXPERIENCES from "@/graphql/client/queries/GetAllExperiences";
import { useQuery } from "@apollo/client";
import { redirect, useSearchParams } from "next/navigation";

export default function ExperiencesList() {
  const searchParams = useSearchParams();

  const { loading, error, data } = useQuery(GET_All_EXPERIENCES, {
    variables: {
      page: Number(searchParams.get("page")) || 1,
      pageSize: 8,
      search: searchParams.get("search") || "",
      // @ts-expect-error
      sort: searchParams.get("sortBy")
        ? Object.values(EXPERIENCES_SORTS).includes(
            searchParams.get("sortBy") as EXPERIENCES_SORTS,
          )
          ? (searchParams.get("sortBy") as EXPERIENCES_SORTS)
          : undefined
        : undefined,
      storeId: searchParams.get("storeId") || undefined,
    },
  });

  if (error) return redirect("/error");

  return (
    <>
      {data?.experiences.data.length || loading ? null : (
        <div>
          <p className="w-full pt-12 text-center text-2xl font-semibold ">
            تجربه ای پیدا نشد.
          </p>
        </div>
      )}
      {loading ? (
        <div className="space-y-4 md:pt-5 2xl:pt-7">
          {new Array(4).fill("").map((_, index) => (
            <ExperienceCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="space-y-4 md:pt-5 2xl:pt-7">
            {data?.experiences.data.map((experience) => (
              <ExperienceCard key={experience?.id} experience={experience} />
            ))}
          </div>
          <Pagination pageInfo={data?.experiences.pageInfo} />
        </>
      )}
    </>
  );
}
