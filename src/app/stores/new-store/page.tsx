import { CircleAlertIcon } from "lucide-react";
import Link from "next/link";
import NewStoreForm from "./_components/NewStoreForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت فروشگاه",
  description:
    "پلتفرمی برای به اشتراک گذاری تجربیات از سفارشات آنلاین ✨ | ثبت فروشگاه",
};

export default function NewStorePage() {
  return (
    <main className="h-fit bg-neutral-100 pb-20 pt-10 dark:bg-neutral-950 lg:pb-20">
      <section className="container">
        <div className="mb-5 flex h-fit w-full items-center gap-x-2 rounded-lg bg-warning/90 px-4 py-3 font-medium text-black dark:text-gray-900 sm:gap-x-4 sm:px-6 md:text-lg ">
          <CircleAlertIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            قبل از ثبت فروشگاه، در{" "}
            <Link
              className="text-blue-600 hover:underline dark:text-blue-700"
              href={"/stores"}>
              این صفحه
            </Link>{" "}
            بررسی کنید که آیا فروشگاه مورد نظر قبلا ثبت شده یا خیر.
          </p>
        </div>
        <div className="mb-5 flex h-fit w-full items-center gap-x-2 rounded-lg bg-warning/90 px-4 py-3 font-medium text-black dark:text-gray-900 sm:gap-x-4 sm:px-6 md:text-lg ">
          <CircleAlertIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            لطفا قبل از ثبت فروشگاه مطمئن شوید که اطلاعات وارد شده درست است.
          </p>
        </div>
        <div className="mb-5 flex h-fit w-full items-center gap-x-2 rounded-lg bg-warning/90 px-4 py-3 font-medium text-black dark:text-gray-900 sm:gap-x-4 sm:px-6 md:text-lg ">
          <CircleAlertIcon className="size-6 shrink-0 sm:size-7" />
          <p className="">
            اگر به هر دلیلی آدرس سایت، اینستاگرام یا تلگرام فروشگاه را نداشتید،
            فقط کافیست اسم و فعالیت فروشگاه را بنویسید.
          </p>
        </div>
        <NewStoreForm />
      </section>
    </main>
  );
}
