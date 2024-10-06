import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { ShieldAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-16">
      <div className="container w-full">
        <div className="aspect-video w-full sm:aspect-auto sm:h-60">
          <ShieldAlert className="size-full object-contain text-red-0" />
        </div>
        <div className="flex flex-col items-center pt-10">
          <h1
            className={cn(
              "text-center text-3xl font-bold sm:text-4xl",
              FMorabba.className,
            )}>
            سرور با مشکل مواجه شد
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
