import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  CircleAlertIcon,
  CirclePlusIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";

export default function Hero() {
  return (
    <section className="relative mb-28 h-[calc(100dvh-64px)] pb-10 pt-5 text-center sm:h-[calc(100dvh-80px)] lg:max-h-[900px] lg:py-5 lg:pb-14">
      <div className=" absolute bottom-0 left-0 right-0 flex h-0.5 w-full items-center justify-between gap-x-8 sm:gap-x-10 md:gap-x-14">
        <motion.div
          initial={{ width: "0px" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
          className="h-0.5 w-full bg-gray-1"></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 70 }}
          transition={{ duration: 0.5 }}
          className="relative size-[80px] shrink-0 !opacity-70 sm:size-[100px] md:size-[120px]">
          <div className="absolute inset-0 m-auto size-[80px] rounded-full border-2 border-primary-default/30 sm:size-[100px] md:size-[120px]"></div>
          <div className="absolute inset-0 m-auto size-[60px] rounded-full border-2 border-primary-default/60 sm:size-[75px] md:size-[90px]"></div>
          <div className="absolute inset-0 m-auto size-[40px] rounded-full border-2 border-primary-default sm:size-[50px] md:size-[60px]"></div>
          <motion.div
            className="absolute inset-0 m-auto size-11"
            animate={{
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDownIcon className="absolute inset-0 m-auto size-8 text-primary-default sm:size-9 md:size-11" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ width: "0px" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
          className="h-0.5 w-full bg-gray-1"></motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bottom-0 left-auto top-auto flex h-[120%] gap-x-3 pr-2 !opacity-20 blur-[1px] xs:!opacity-50 lg:opacity-100">
        <div className="h-full w-[2.4px] bg-primary-default/80"></div>
        <div className="h-full w-[2.1px] bg-primary-default/70"></div>
        <div className="h-full w-[2px] bg-primary-default/50"></div>
        <div className="h-full w-[1.8px] bg-primary-default/30"></div>
        <div className="h-full w-[1.6px] bg-primary-default/20"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bottom-0 right-auto top-auto flex h-[120%] flex-row-reverse gap-x-3 pl-2 !opacity-20 blur-[1px] xs:!opacity-50 lg:opacity-100">
        <div className="h-full w-[2.4px] bg-primary-default/80"></div>
        <div className="h-full w-[2.1px] bg-primary-default/70"></div>
        <div className="h-full w-[2px] bg-primary-default/50"></div>
        <div className="h-full w-[1.8px] bg-primary-default/30"></div>
        <div className="h-full w-[1.6px] bg-primary-default/20"></div>
      </motion.div>
      <div className="container relative flex size-full flex-col items-center justify-center pb-10">
        <motion.div className="absolute right-10 top-20 hidden lg:block xl:right-24 xl:top-32">
          <div className="relative size-20 blur-[1.25px]">
            <div className="absolute inset-0 m-auto size-[70px] rounded-full border border-primary-default/50"></div>
            <div className="absolute inset-0 m-auto size-[45px] rounded-full border border-primary-default/75"></div>
            <div className="absolute inset-0 m-auto size-[20px] rounded-full border border-primary-default"></div>
          </div>
        </motion.div>
        <motion.div className="absolute left-10 top-10 hidden lg:block xl:left-24">
          <div className="relative size-20 blur-[1.75px]">
            <div className="absolute inset-0 m-auto size-[70px] rounded-full border border-primary-default/50"></div>
            <div className="absolute inset-0 m-auto size-[45px] rounded-full border border-primary-default/75"></div>
            <div className="absolute inset-0 m-auto size-[20px] rounded-full border border-primary-default"></div>
          </div>
        </motion.div>
        <motion.div className="absolute bottom-20 right-24 hidden lg:block xl:right-44">
          <div className="relative size-20 blur-[2px]">
            <div className="absolute inset-0 m-auto size-[70px] rounded-full border border-primary-default/50"></div>
            <div className="absolute inset-0 m-auto size-[45px] rounded-full border border-primary-default/75"></div>
            <div className="absolute inset-0 m-auto size-[20px] rounded-full border border-primary-default"></div>
          </div>
        </motion.div>
        <motion.div className="absolute bottom-36 left-24 hidden lg:block xl:left-48">
          <div className="relative size-20 blur-[1.5px]">
            <div className="absolute inset-0 m-auto size-[70px] rounded-full border border-primary-default/50"></div>
            <div className="absolute inset-0 m-auto size-[45px] rounded-full border border-primary-default/75"></div>
            <div className="absolute inset-0 m-auto size-[20px] rounded-full border border-primary-default"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-5 sm:space-y-6">
          <div className="relative z-[1] mx-auto w-fit">
            <div className="absolute -bottom-0 -left-1 -right-1 top-1/2 -z-[1] rounded-sm bg-primary-1 sm:-bottom-0.5 md:-bottom-1 lg:-left-2 lg:-right-2"></div>
            <h2
              className={cn(
                "z-10 text-xl font-medium text-gray-3 sm:text-2xl md:text-3xl lg:text-4xl",
                FMorabba.className,
              )}>
              تجربیات شما از سفارشات آنلاین
            </h2>
          </div>
          <h1
            className={cn(
              "text-[27px] font-extrabold xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
              FMorabba.className,
            )}>
            <span className="text-primary-default">ویکی سِفارش</span>
            <span className="text-gray-4">، سِفارشی اَمن</span>
          </h1>
          <div className="mx-auto flex w-fit items-center gap-x-2 text-xs text-gray-1 xs:text-start sm:text-base md:text-lg lg:gap-x-3 lg:text-[22px]">
            <CircleAlertIcon className="hidden size-5 xs:inline-block sm:size-6 lg:size-7" />
            <h2>
              قبل از سفارش، تجربیات بقیه را بخوانید و بعد از سفارش، تجربه خود را
              بنویسید.
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-5 w-full max-w-md space-y-3 xs:mt-7 sm:space-y-5 md:max-w-xl">
          <div className="flex w-full rounded-lg border border-gray-2 bg-white p-1">
            <input
              className="w-full border-none bg-transparent pr-5 text-sm text-gray-1 outline-none"
              placeholder="جستجو..."
              type="text"
            />
            <div className="flex shrink-0 items-center gap-x-3">
              <select className="border-none !bg-transparent outline-none ">
                <option value="" defaultChecked disabled>
                  جستجو در
                </option>
                <option value="stores" defaultChecked>
                  فروشگاه ها
                </option>
                <option value="experiences" defaultChecked>
                  تجربه ها
                </option>
              </select>
              <button className="flex size-10 items-center justify-center rounded-md bg-primary-default text-white hover:bg-primary-4 sm:size-11">
                <SearchIcon className="size-6" />
              </button>
            </div>
          </div>
          <div className="flex gap-x-3 sm:gap-x-5">
            <button className="btn btn-primary w-full shrink gap-x-1.5 rounded-lg bg-primary-default !px-0 py-2.5 text-sm font-medium text-white hover:bg-primary-4 xs:gap-x-2 xs:text-base md:text-lg">
              <span>ثبت تجربه جدید</span>
              <PlusIcon className="size-5 md:size-6" />
            </button>
            <button className="btn w-full shrink gap-x-1.5 rounded-lg border !border-gray-2 bg-white !px-0 py-2.5 text-sm font-medium text-gray-3 hover:bg-gray-2 hover:text-white xs:gap-x-2 xs:text-base md:text-lg">
              <span>دیدن تجربه ها</span>
              <EyeIcon className="size-5 md:size-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
