import SortSelectBox from "@/components/modules/SortSelectBox";
import SearchStores from "./_components/SearchStores";
import StoresList from "./_components/StoresList";
import SortStores, { sorts } from "./_components/SortStores";
import { Suspense } from "react";
import { Metadata } from "next";
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
  title: "فروشگاه ها",
  description:
    "پلتفرمی برای به اشتراک گذاری تجربیات از سفارشات آنلاین ✨ | لیست فروشگاه ها",
};

export default function StoresPage() {
  return (
    <main className="h-fit pb-20 pt-10">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container">
        <Suspense>
          <div
            className="grid grid-cols-1 md:gap-5 lg:grid-cols-3 xl:grid-cols-4 2xl:gap-x-7">
            <div className="w-full shrink-0">
              <SearchStores />
            </div>
            <SortSelectBox options={sorts} />
            <div className="w-full lg:col-span-2 xl:col-span-3">
              <SortStores />
            </div>
          </div>
          <StoresList />
        </Suspense>
      </motion.section>
    </main>
  );
}
