import { AlertOctagonIcon, CircleAlertIcon } from "lucide-react";
import Link from "next/link";
import NewStoreForm from "./_components/NewStoreForm";
import { Metadata } from "next";
import BackgroundShapes from "@/components/templates/BackgroundShapes";
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
  title: "ثبت فروشگاه",
  description:
    "پلتفرمی برای به اشتراک گذاری تجربیات از سفارشات آنلاین ✨ | ثبت فروشگاه",
};

export default function NewStorePage() {
  return (
    <main className="relative z-10 h-fit pb-20 pt-10 lg:pb-20">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container">
        <div className="mb-5 flex h-fit w-full items-center gap-x-2 rounded-lg bg-[#FFCC00] px-4 py-3 font-medium text-gray-4 sm:gap-x-4 sm:px-6 md:text-lg ">
          <AlertOctagonIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            قبل از ثبت فروشگاه، در{" "}
            <Link
              className="text-primary-default hover:underline dark:text-blue-700"
              href={"/stores"}>
              این صفحه
            </Link>{" "}
            بررسی کنید که آیا فروشگاه مورد نظر قبلا ثبت شده یا خیر.
          </p>
        </div>
        <div className="mb-5 flex h-fit w-full items-center gap-x-2 rounded-lg bg-[#FFCC00] px-4 py-3 font-medium text-gray-4 sm:gap-x-4 sm:px-6 md:text-lg ">
          <AlertOctagonIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            لطفا قبل از ثبت فروشگاه مطمئن شوید که اطلاعات وارد شده درست است.
          </p>
        </div>
        <div className="mb-5 flex h-fit w-full items-center gap-x-2 rounded-lg bg-[#FFCC00] px-4 py-3 font-medium text-gray-4 sm:gap-x-4 sm:px-6 md:text-lg ">
          <AlertOctagonIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            اگر به هر دلیلی آدرس سایت، اینستاگرام یا تلگرام فروشگاه را نداشتید،
            فقط کافیست اسم و فعالیت فروشگاه را بنویسید.
          </p>
        </div>
        <NewStoreForm />
      </motion.section>
      <BackgroundShapes />
    </main>
  );
}
