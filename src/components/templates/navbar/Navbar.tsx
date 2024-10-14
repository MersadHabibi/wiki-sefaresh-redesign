import Logo from "@/components/modules/Logo";
import NavLink from "@/components/modules/NavLink";
import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileSidebarMenu from "./MobileSidebarMenu";
import * as motion from "framer-motion/client";

const links = [
  {
    id: 1,
    value: "صفحه اصلی",
    href: "/",
  },
  {
    id: 2,
    value: "تجربه ها",
    href: "/experiences",
  },
  {
    id: 3,
    value: "فروشگاه ها",
    href: "/stores",
  },
  {
    id: 4,
    value: "درباره ما",
    href: "/about-us",
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ top: "-100%" }}
      animate={{ top: "0" }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-50 !h-16 w-full shrink-0 overflow-hidden border-b border-b-neutral-4 bg-neutral-1/50 backdrop-blur-[4px] sm:!h-20">
      <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between px-5">
        <div className="flex items-center gap-x-4">
          <Logo />
          <Link
            href={"/"}
            className={cn(
              "text-balance pb-1 text-xl font-bold text-primary-default sm:text-2xl",
              FMorabba.className,
            )}>
            ویکی سفارش
          </Link>
        </div>
        <nav className="hidden items-center gap-x-9 text-gray-4 lg:flex">
          <div className="flex items-center gap-x-9">
            {links.map((link) => (
              <NavLink
                key={link.id}
                href={link.href}
                className="hover:text-black [&.active]:font-medium [&.active]:text-black">
                {link.value}
              </NavLink>
            ))}
          </div>
          <div className="h-8 w-0.5 rounded-full bg-neutral-4"></div>
          <div className="flex items-center gap-x-9">
            <NavLink
              href={"/stores/new-store"}
              className="hover:text-black [&.active]:font-medium [&.active]:text-black">
              ثبت فروشگاه
            </NavLink>
            <NavLink
              href={"/experiences/new-experience"}
              className="btn !h-11 min-h-0 rounded-md bg-gray-4 px-7 font-normal text-white [&.active]:bg-black">
              ثبت تجربه
            </NavLink>
          </div>
        </nav>
        <div className="flex items-center gap-x-4 lg:hidden">
          <MobileSidebarMenu />
        </div>
      </div>
    </motion.header>
  );
}
