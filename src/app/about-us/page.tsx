import Logo from "@/components/modules/Logo";
import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import {
  InstagramIcon,
  LinkedinIcon,
  SendIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="relative z-10">
      <div className="container">
        <section className="my-16 rounded-md border border-neutral-4 bg-white">
          <div className="flex items-center gap-x-1 border-b border-neutral-2 px-5 py-4 sm:gap-x-2 sm:px-8 sm:py-6">
            <Logo className="" height={300} width={300} />
            <Link
              href={"/"}
              className={cn(
                "text-balance pb-1 text-xl font-bold text-primary-default sm:text-3xl",
                FMorabba.className,
              )}>
              ویکی سفارش
            </Link>
          </div>
          <div className="px-5 py-4 sm:px-8 sm:py-6">
            <div className="text-base font-normal opacity-90 sm:text-xl">
              <p className="leading-7 sm:leading-9">
                وقتی می‌خوای محصولی رو آنلاین سفارش بدی یه سوال برات پیش میاد:
                <br />
                آیا آنلاین شاپی که می‌خوام ازش سفارش بدم معتبره؟
                <br />
                کسایی که قبل من سفارش دادن تجربه خوبی داشتن؟
              </p>
              <br />
              <p className="font-medium">
                _ تو ویکی‌سفارش میتونی تجربه بقیه رو بخونی و راحت تر تصمیم
                بگیری.
              </p>
            </div>
            <div className="pt-16 text-base font-normal opacity-90 sm:text-xl">
              <p className="leading-7 sm:leading-9">
                یا وقتی که محصولی رو آنلاین سفارش دادی و تجربه خوبی نداشتی و
                می‌خوای به بقیه افراد کمک کنی که اشتباه تو رو تکرار نکنند.
              </p>
              <br />
              <p className="font-medium">
                _ تو ویکی‌سفارش میتونی تجربه خودت رو بنویسی تا بقیه افراد بتونن
                بهتر و راحت‌تر انتخاب کنند.
              </p>
            </div>
          </div>
          <div className="mt-10 shrink-0 border-t border-neutral-2 p-8">
            <p className="text-center text-sm font-semibold text-gray-4 xs:text-base sm:text-xl">
              در شبکه های اجتماعی از ما حمایت کنید 💪
            </p>

            <div className="flex flex-wrap items-center justify-center gap-10 pt-8">
              <Link href={"https://www.linkedin.com/company/wiki-sefaresh"}>
                <LinkedinIcon className="size-9 text-[#0077B5] sm:size-11" />
              </Link>
              <Link href={"https://x.com/wikisefaresh"}>
                <TwitterIcon className="size-9 text-[#1DA1F2] sm:size-11" />
              </Link>
              <Link href={"https://www.instagram.com/wikisefaresh"}>
                <InstagramIcon className="size-9 text-[#cd486b] sm:size-11" />
              </Link>
              <Link href={"https://t.me/wikisefaresh"}>
                <SendIcon className="size-9 text-[#229ED9] sm:size-11" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* <BackgroundShapes /> */}
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
