import {
  InstagramIcon,
  LinkedinIcon,
  SendIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const links = [
  {
    href: "/experiences",
    value: "تجربه ها",
  },
  {
    href: "/stores",
    value: "فروشگاه ها",
  },
  {
    href: "/experiences/new-experience",
    value: "ثبت تجربه",
  },
  {
    href: "/stores/new-store",
    value: "ثبت فروشگاه",
  },
  {
    href: "/about-us",
    value: "درباره ما",
  },
  // {
  //   href: "#",
  //   value: "تبلیغات",
  // },
  // {
  //   href: "/donate",
  //   value: "دونیت",
  // },
];

export default function Footer() {
  return (
    <footer className="sticky top-full z-10 border-t border-neutral-4 bg-white">
      <div className="container flex flex-col gap-x-20 gap-y-14 py-20 md:flex-row">
        <div className="shrink-0">
          <p className="text-base font-semibold sm:text-xl">
            در شبکه های اجتماعی از ما حمایت کنید 💪
          </p>

          <div className="flex items-center justify-between pt-8">
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
        <div className="w-full">
          <p className="text-base font-semibold sm:text-xl">لینک ها</p>
          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-default hover:underline sm:text-lg">
                {link.value}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center border-t border-neutral-4 py-4">
        <p>
          طراحی شده توسط{" "}
          <Link
            href={"https://mersadhabibi.ir"}
            className="font-medium text-primary-default"
            target="_blank">
            مرصاد حبیبی
          </Link>
        </p>
      </div>
    </footer>
  );
}
