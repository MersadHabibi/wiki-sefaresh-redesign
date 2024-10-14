import SortSelectBox from "@/components/modules/SortSelectBox";
import ExperiencesList from "./_components/ExperiencesList";
import SearchExperiences from "./_components/SearchExperiences";
import SortExperiences, { sorts } from "./_components/SortExperiences";
import StoreSelectBox from "./_components/StoreSelectBox";
import { Suspense } from "react";
import { Metadata } from "next";
import * as motion from "framer-motion/client";
import BackgroundShapes from "@/components/templates/BackgroundShapes";

export const metadata: Metadata = {
  title: "تجربه ها",
  description:
    "پلتفرمی برای به اشتراک گذاری تجربیات از سفارشات آنلاین ✨ | لیست تجربه ها",
};

export default function ExperiencePage() {
  return (
    <main className="relative z-10 h-fit pb-20 pt-10">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container flex flex-col gap-5 lg:flex-row 2xl:gap-x-7">
        <Suspense>
          <div className="top-28 h-fit shrink-0 lg:sticky">
            <SearchExperiences />
            <StoreSelectBox />
            <SortSelectBox options={sorts} />
          </div>
          <div className="w-full">
            <SortExperiences />

            <ExperiencesList />
          </div>
        </Suspense>
      </motion.section>
      <BackgroundShapes />
    </main>
  );
}
