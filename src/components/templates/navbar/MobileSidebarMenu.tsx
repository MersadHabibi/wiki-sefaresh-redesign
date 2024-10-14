"use client";

import Logo from "@/components/modules/Logo";
import NavLink from "@/components/modules/NavLink";
import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import {
  HandHeartIcon,
  HomeIcon,
  HousePlusIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon,
  SendIcon,
  StarIcon,
  StoreIcon,
  TwitterIcon,
  UserRoundPenIcon,
  UserRoundSearchIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const links = [
  {
    href: "/",
    value: "صفحه اصلی",
    icon: <HomeIcon className="size-6" />,
  },
  {
    href: "/stores",
    value: "فروشگاه ها",
    icon: <StoreIcon className="size-6" />,
  },
  {
    href: "/experiences",
    value: "تجربه ها",
    icon: <UserRoundSearchIcon className="size-6" />,
  },
  // {
  //   href: "/stores/new-store",
  //   value: "ثبت فروشگاه",
  //   icon: <HousePlusIcon className="size-6" />,
  // },
  // {
  //   href: "/experiences/new-experience",
  //   value: "ثبت تجربه",
  //   icon: <UserRoundPenIcon className="size-6" />,
  // },
  {
    href: "/about-us",
    value: "درباره ما",
    icon: <StarIcon className="size-6" />,
  },
  // {
  //   href: "#",
  //   value: "تبلیغات",
  // },
  // {
  //   href: "/donate",
  //   value: "دونیت",
  //   icon: <HandHeartIcon className="size-6" />,
  // },
];

const menuLinkStyles =
  "[&.active]:before:content-[' '] relative flex items-center gap-x-3 overflow-hidden rounded-lg bg-neutral-2 p-3 text-base font-medium transition-all hover:bg-neutral-3 [&.active]:bg-neutral-2 [&.active]:pr-6 [&.active]:before:absolute [&.active]:before:right-0 [&.active]:before:h-full [&.active]:before:w-3 [&.active]:before:bg-primary-default [&.active]:text-black [&.active]:font-medium";

export default function MobileSidebarMenu() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.classList.add("!overflow-y-hidden");
    else document.body.classList.remove("!overflow-y-hidden");
  }, [isOpen]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon className="size-8 sm:size-9" />
      </button>
      {createPortal(
        <div
          className={cn(
            "invisible fixed inset-0 z-50 h-dvh w-full bg-black/30 opacity-0 backdrop-blur-sm transition-all",
            isOpen && "visible opacity-100",
          )}
          onClick={() => setIsOpen(false)}>
          <div
            className={cn(
              "fixed -right-full bottom-0 top-0 h-dvh w-full max-w-80 overflow-y-auto bg-neutral-50 px-6 py-4 transition-all",
              isOpen && "right-0",
            )}
            onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-x-3">
                <Logo />
                <Link
                  href={"/"}
                  className={cn(
                    "pb-1 text-2xl font-bold text-primary-default",
                    FMorabba.className,
                  )}>
                  ویکی سفارش
                </Link>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <XIcon className="size-7 text-gray-4" />
              </button>
            </div>
            <nav className="pt-8">
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href} onClick={() => setIsOpen(false)}>
                    <NavLink href={link.href} className={menuLinkStyles}>
                      {link.icon}
                      <span>{link.value}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="my-4 h-0.5 w-full rounded-full bg-gray-1"></div>
              <ul className="space-y-4">
                <li onClick={() => setIsOpen(false)}>
                  <NavLink
                    href={"/stores/new-store"}
                    className={cn(
                      "btn w-full justify-start gap-x-3 border border-gray-4 bg-white text-base font-medium text-gray-4 hover:bg-gray-4 hover:text-white",
                    )}>
                    <HousePlusIcon className="size-6" />
                    <span>ثبت فروشگاه</span>
                  </NavLink>
                </li>
                <li onClick={() => setIsOpen(false)}>
                  <NavLink
                    href={"/experiences/new-experience"}
                    className={cn(
                      "btn w-full justify-start gap-x-3 border-none bg-gray-4 text-base font-medium text-white hover:bg-black",
                    )}>
                    <UserRoundPenIcon className="size-6" />
                    <span>ثبت تجربه</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="sticky bottom-0 top-full pt-6">
              <p className="text-center text-sm font-medium">
                در شبکه های اجتماعی از ما حمایت کنید 💪
              </p>

              <div className="flex items-center justify-center gap-x-6 pb-4 pt-4">
                <Link href={"https://www.linkedin.com/company/wiki-sefaresh/"}>
                  <LinkedinIcon className="size-7 text-[#0077B5]" />
                </Link>
                <Link
                  href={
                    "https://x.com/wikisefaresh?t=QQRTrPCcl8aBR5H_bZDHPg&s=09"
                  }>
                  <TwitterIcon className="size-7 text-[#1DA1F2]" />
                </Link>
                <Link
                  href={
                    "https://www.instagram.com/wikisefaresh?igsh=czkyY2RlMWozbWIz"
                  }>
                  <InstagramIcon className="size-7 text-[#cd486b]" />
                </Link>
                <Link href={"https://t.me/wikisefaresh"}>
                  <SendIcon className="size-7 text-[#229ED9]" />
                </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
