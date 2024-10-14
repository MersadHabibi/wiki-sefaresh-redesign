import BackgroundShapes from "@/components/templates/BackgroundShapes";
import * as motion from "framer-motion/client";
import { AlertOctagonIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import NewExperienceForm from "./_components/NewExperienceForm";

export const metadata: Metadata = {
  title: "ثبت تجربه",
  description:
    "پلتفرمی برای به اشتراک گذاری تجربیات از سفارشات آنلاین ✨ | ثبت تجربه",
};

export default function NewExperiencePage() {
  return (
    <main className="relative z-10 h-fit bg-white pb-20 pt-10 lg:pb-20 lg:pt-10">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container">
        <div className="mb-5 flex h-fit w-full items-center gap-x-2 rounded-lg bg-[#FFCC00] px-4 py-3 font-medium text-gray-4 sm:gap-x-4 sm:px-6 md:text-lg ">
          <AlertOctagonIcon className="size-6 shrink-0 sm:size-7" />
          <p>
            اگر فروشگاه مورد نظر موجود نبود در{" "}
            <Link
              className="text-primary-default hover:underline"
              href={"/stores/new-store"}>
              این صفحه
            </Link>{" "}
            ثبت کنید.
          </p>
        </div>
        <NewExperienceForm />
      </motion.section>
      <BackgroundShapes />
    </main>
  );
}
