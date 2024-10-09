import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import SectionTitle from "../modules/SectionTitle";

const Stores = dynamic(() => import("./Stores"), {
  ssr: false,
});

export default function PopularStores() {
  return (
    <section className="container flex flex-col gap-y-7 pb-20 text-center sm:gap-y-10 lg:pb-32 lg:text-start">
      <SectionTitle
        title="پر بازدید‌ترین فروشگاه‌ها"
        caption="فروشگاه‌هایی که بیشترین تعداد تجربه را دارند."
        btn={{
          href: "/stores",
          value: "دیدن همه فروشگاه ها",
        }}
      />
      <Stores />
    </section>
  );
}
