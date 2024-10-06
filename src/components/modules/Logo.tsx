import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <>
      <Image
        className={cn("hidden w-10 dark:block sm:w-11", className)}
        src={"/svg/favicon-light.svg"}
        alt="ویکی تجربه لوگو"
        width={100}
        height={100}
      />
      <Image
        className={cn("block w-10 text-primary dark:hidden sm:w-11", className)}
        src={"/svg/favicon.svg"}
        alt="ویکی تجربه لوگو"
        width={100}
        height={100}
      />
    </>
  );
}
