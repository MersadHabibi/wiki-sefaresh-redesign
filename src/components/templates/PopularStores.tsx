import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Stores = dynamic(() => import("./Stores"), {
  ssr: false,
});

export default function PopularStores() {
  return (
    <section className="container  flex flex-col gap-y-7 pb-20 text-center sm:gap-y-10 lg:flex-row lg:pb-32 lg:text-start">
      <div className="shrink-0 lg:w-96 lg:pt-5 xl:w-[420px]">
        <h2
          className={cn(
            "mb-3 text-2xl font-semibold sm:mb-4 sm:text-4xl",
            FMorabba.className,
          )}>
          فروشگاه های پر بازدید
        </h2>
        <div className="mx-auto h-1 w-40 rounded-full bg-primary dark:bg-primary-dark lg:mx-0"></div>
      </div>
      <Stores />
    </section>
  );
}
