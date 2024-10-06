import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";

export default function AboutUsPage() {
  return (
    <main className="container my-16 bg-neutral-200 px-10 pb-10 pt-8 dark:bg-neutral-900 xs:rounded-lg">
      <h1 className={cn("text-3xl font-bold sm:text-4xl", FMorabba.className)}>
        ویکی سفارش چیه؟
      </h1>
      <div className="pt-10 text-base font-medium opacity-90 sm:text-xl">
        <p className="leading-7 sm:leading-9">
          وقتی می‌خوای محصولی رو آنلاین سفارش بدی یه سوال برات پیش میاد:
          <br />
          آیا آنلاین شاپی که می‌خوام ازش سفارش بدم معتبره؟
          <br />
          کسایی که قبل من سفارش دادن تجربه خوبی داشتن؟
        </p>
        <br />
        <p>_ تو ویکی‌سفارش میتونی تجربه بقیه رو بخونی و راحت تر تصمیم بگیری.</p>
      </div>
    </main>
  );
}

{
  /* <h1 className={cn("text-3xl font-bold sm:text-4xl", FMorabba.className)}>
ویکی سفارش چیه؟
</h1>

<div className="pt-10 text-lg font-medium sm:text-xl">
<p className="leading-9">
  وقتی می‌خوای محصولی رو آنلاین سفارش بدی یه سوال برات پیش میاد:
  <br />
  آیا آنلاین شاپی که می‌خوام ازش سفارش بدم معتبره؟
  <br />
  کسایی که قبل من سفارش دادن تجربه خوبی داشتن؟
</p>
<br />
<p>تو ویکی‌سفارش میتونی تجربه بقیه رو بخونی و راحت تر تصمیم بگیری.</p>
</div> */
}
