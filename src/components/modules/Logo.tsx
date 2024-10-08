import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <>
      <Image
        className={cn("w-10 sm:w-11", className)}
        src={"/images/logo.png"}
        alt="ویکی تجربه لوگو"
        width={100}
        height={100}
      />
    </>
  );
}
