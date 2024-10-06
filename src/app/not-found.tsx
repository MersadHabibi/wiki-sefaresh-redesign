import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { CirclePlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-16">
      <div className="container w-full">
        <div className="aspect-video w-full sm:aspect-auto sm:h-72">
          <Image
            className="size-full object-contain"
            src={"/images/404-light.png"}
            alt="404"
            width={900}
            height={400}
          />



          
        </div>
        <div className="flex flex-col items-center pt-10">
          <h1
            className={cn(
              "text-center text-3xl font-bold sm:text-4xl",
              FMorabba.className,
            )}>
            صفحه مورد نظر پیدا نشد
          </h1>
          <Link
            href={"/"}
            className="btn btn-primary mx-auto mt-7 h-12 w-fit shrink border-none bg-primary px-10 text-base text-font-color-dark transition-all xl:text-lg">
            <span>بازگشت به صفحه اصلی</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
