import { TStore } from "@/types";
import { EyeIcon, StoreIcon } from "lucide-react";
import Link from "next/link";

export default function StoreCard(
  store: Partial<Omit<TStore, "view" | "instagram" | "telegram">>,
) {
  return (
    <div className="rounded-md border border-gray-3 bg-white p-4">
      <div className="flex items-center justify-center pb-5 pt-1">
        <Link
          href={`/stores/${store?.id}`}
          className="relative z-[1] mx-auto !w-fit text-2xl font-medium">
          <div className="absolute -left-1 -right-1 bottom-0 -z-[1] h-1/2 rounded-sm bg-primary-1/70"></div>
          <h2 className="line-clamp-1 w-fit">{store?.name}</h2>
        </Link>
      </div>
      <div className="mt-auto w-full rounded-md border border-gray-3 px-4 py-4 text-base font-medium text-gray-2">
        <div className="flex w-full items-center justify-center px-2 font-medium">
          <p className="line-clamp-2 text-center">{store?.activityField}</p>
        </div>
        <div className="mb-4 mt-4 !h-px w-full bg-neutral-default"></div>
        <div className="space-y-7 py-2">
          <div className="flex w-full items-center justify-between px-2">
            <p>تعداد تجربه ها</p>
            <p>{store?.experiencesCount}</p>
          </div>
          <div className="flex w-full items-center justify-between px-2">
            <p>سایت</p>
            {store?.website ? (
              <Link
                href={store?.website}
                className="text-blue-600 hover:underline"
                target="_blank">
                لینک
              </Link>
            ) : (
              <p>ندارد</p>
            )}
          </div>
          <div className="flex w-full items-center justify-between px-2">
            <p>امتیاز</p>
            <div className="-mb-1.5 shrink-0">
              <div className="rating gap-x-1" dir="ltr">
                {new Array(Math.round(store?.score || 0))
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      className="mask mask-star-2 size-5 bg-[#FFCC00]"
                    />
                  ))}
                {new Array(5 - Math.round(store?.score || 0))
                  .fill("")
                  .map((_, index) => (
                    <input key={index} className="mask mask-star-2 size-5" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        href={`/stores/${store?.id}`}
        className="btn btn-primary sticky top-full mt-4 w-full rounded-md border-none bg-gray-4 text-lg font-medium text-white hover:bg-black">
        <span>دیدن جزئیات</span>
        <EyeIcon className="size-5" />
      </Link>
    </div>
  );
}
