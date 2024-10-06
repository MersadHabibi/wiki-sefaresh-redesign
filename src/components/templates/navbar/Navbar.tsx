import ChangeThemeBtn from "@/components/modules/ChangeThemeBtn";
import Logo from "@/components/modules/Logo";
import NavLink from "@/components/modules/NavLink";
import MobileSidebarMenu from "./MobileSidebarMenu";
import { cn } from "@/lib/utils";
import { FMorabba } from "@/config/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-16 w-full shrink-0 bg-neutral-200 dark:bg-neutral-900 sm:h-20">
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Logo />
          <Link
            href={"/"}
            className={cn(
              "text-balance pb-1 text-xl font-bold text-blue-700 dark:text-primary-dark sm:text-2xl",
              FMorabba.className,
            )}>
            ویکی سفارش
          </Link>
        </div>
        <nav className="hidden items-center gap-x-5 sm:gap-x-10 lg:flex">
          <NavLink
            href={"/"}
            className="font-medium [&.active]:text-primary-dark  dark:[&.active]:text-primary-dark">
            صفحه اصلی
          </NavLink>
          <NavLink
            href={"/experiences"}
            className="font-medium [&.active]:text-primary-dark  dark:[&.active]:text-primary-dark">
            تجربه ها
          </NavLink>
          <NavLink
            href={"/stores"}
            className="font-medium [&.active]:text-primary-dark dark:[&.active]:text-primary-dark">
            فروشگاه ها
          </NavLink>
          <NavLink
            href={"/experiences/new-experience"}
            className="font-medium [&.active]:text-primary-dark  dark:[&.active]:text-primary-dark">
            ثبت تجربه
          </NavLink>
          <NavLink
            href={"/stores/new-store"}
            className="font-medium [&.active]:text-primary-dark dark:[&.active]:text-primary-dark">
            ثبت فروشگاه
          </NavLink>
          <ChangeThemeBtn />
        </nav>
        <div className="flex items-center gap-x-4 lg:hidden">
          <ChangeThemeBtn />
          <MobileSidebarMenu />
        </div>
      </div>
    </header>
  );
}
