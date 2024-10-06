import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { CircleAlertIcon, CirclePlusIcon, EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingHeader() {
  return (
    <section className="container flex min-h-[550px] flex-col-reverse items-center justify-between gap-x-6 pb-20 pt-5 text-center lg:h-[90dvh] lg:max-h-[500px] lg:flex-row lg:py-5 lg:text-start xl:max-h-[700px] xl:gap-x-10">
      <div>
        <h1
          className={cn(
            "flex items-center justify-center gap-x-2 text-2xl font-extrabold xs:text-3xl sm:text-4xl lg:justify-start xl:gap-x-4 xl:text-5xl",
            FMorabba.className,
          )}>
          <span className="text-primary dark:text-primary-dark">
            ویکی سفارش
          </span>
          <span className="text-5xl dark:text-primary-dark xs:text-6xl xl:text-7xl">
            |
          </span>
          <span> سفارش مطمئن </span>
        </h1>
        <h2 className="mt-2 text-xl font-bold text-gray-700 dark:text-font-color-dark/90 xs:text-2xl sm:mt-3 sm:text-3xl xl:mt-5 xl:text-4xl">
          تجربیات شما از سفارشات آنلاین
        </h2>
        <div className="mx-auto my-6 h-1 w-56 rounded-sm bg-second sm:my-8 lg:mx-0 xl:my-10"></div>
        <h3 className="flex items-center gap-x-2 font-medium text-gray-700 dark:text-gray-200 xl:gap-x-3 xl:text-xl">
          {/* <CircleAlertIcon className="mb-0.5 size-6 xl:size-7 " /> */}
          <span>
            قبل از سفارش، تجربیات بقیه را بخوانید و بعد از سفارش، تجربه خود را
            بنویسید.
          </span>
        </h3>
        <div className="flex w-full flex-col items-center gap-x-4 gap-y-2 pt-7 xs:flex-row xs:pt-5 lg:max-w-md xl:max-w-2xl">
          <Link
            href={"/experiences"}
            className="btn h-12 w-full shrink border !border-primary bg-transparent text-base text-primary transition-all hover:bg-primary hover:!text-font-color-dark dark:text-primary-dark xl:text-lg">
            <EyeIcon className="size-5 xl:size-6" />
            <span>مشاهده تجربیات</span>
          </Link>
          <Link
            href={"/experiences/new-experience"}
            className="btn btn-primary h-12 w-full shrink border-none bg-primary text-base text-font-color-dark transition-all xl:text-lg">
            <CirclePlusIcon className="size-5 xl:size-6" />
            <span>ثبت تجربه</span>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-md xl:max-w-lg 2xl:max-w-xl">
        <Image
          className="w-full object-cover pb-6 dark:hidden xs:pb-10"
          src={"/svg/landing-svg.svg"}
          alt="landing svg"
          width={500}
          height={500}
          quality={65}
          sizes="(max-width: 0px) 350px, 350px, (max-width: 768px) 500px, 500px"
        />
        <Image
          className="hidden w-full object-cover pb-6 dark:block xs:pb-10"
          src={"/svg/landing-svg-dark.svg"}
          alt="landing svg"
          width={500}
          height={500}
          quality={65}
          sizes="(max-width: 0px) 350px, 350px, (max-width: 768px) 500px, 500px"
        />
      </div>
    </section>
  );
}
