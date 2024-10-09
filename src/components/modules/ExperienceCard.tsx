import { cn } from "@/lib/utils";
import { TExperience, TStore } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { faIR } from "date-fns/locale"; // Import Persian locale
import { StoreIcon } from "lucide-react";
import Link from "next/link";

type TProps = {
  classNames?: Partial<
    Record<"container" | "storeName" | "body" | "title", string>
  >;
  experience?:
    | (Omit<TExperience, "orderDate" | "product"> & {
        Store: Pick<TStore, "name">;
      })
    | null;
};

export default function ExperienceCard({ classNames, experience }: TProps) {
  if (!experience) return null;

  const timeAgo = formatDistanceToNow(new Date(experience.createdAt), {
    addSuffix: true,
    locale: faIR, // Set locale to Persian
  });

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-md border border-gray-3 bg-white text-start",
        classNames?.container,
      )}>
      <div className="flex items-center justify-between border-b border-b-neutral-4 px-5 py-3 sm:px-8 sm:py-4">
        <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-center">
          <Link
            href={`/stores/${experience.storeId}`}
            className="text-primary flex items-center gap-x-3">
            {/* <StoreIcon className="hidden size-8 shrink-0 sm:inline-block" /> */}
            <h3 className="-mb-0.5 line-clamp-1 text-xl font-bold xs:max-w-56 sm:max-w-56 sm:text-2xl md:max-w-72 lg:max-w-52 xl:max-w-96 2xl:max-w-[470px]">
              {experience.Store.name}
            </h3>
          </Link>
          <div className="hidden h-6 w-0.5 bg-gray-1 sm:inline-block"></div>
          <p className="-mb-0.5 w-fit text-sm font-medium text-gray-1 sm:text-base">
            {timeAgo}
          </p>
        </div>
        <div className="-mb-1.5 shrink-0">
          <div className="rating gap-x-1" dir="ltr">
            {new Array(Math.round(experience.score || 0))
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="mask mask-star-2 size-5 bg-[#FFCC00] sm:size-6"
                />
              ))}
            {new Array(5 - Math.round(experience.score || 0))
              .fill("")
              .map((_, index) => (
                <input
                  key={index}
                  className="mask mask-star-2 size-5 bg-neutral-3 sm:size-6"
                />
              ))}
          </div>
        </div>
      </div>
      <div className="px-5 py-5 sm:px-8 sm:py-6">
        <div className="relative">
          <div className="bg-primary absolute -right-8 bottom-0 top-0 h-full w-6 rounded-l-sm sm:w-5"></div>
          <Link href={`experiences/${experience.id}`}>
            <h2 className="line-clamp-1 text-xl font-bold sm:text-2xl">
              {experience.title}
            </h2>
          </Link>
        </div>
        <p
          className={cn(
            "mt-2 line-clamp-6 text-sm text-gray-2 xs:mt-3 xs:text-base",
            classNames?.body,
          )}>
          {experience.body}
          <Link
            className="inline font-medium text-primary-default hover:underline"
            href={`experiences/${experience.id}`}>
            {" "}
            دیدن ادامه...
          </Link>
        </p>
      </div>
    </div>
  );
}
