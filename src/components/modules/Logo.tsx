import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className , width = 100 , height = 100 }: { className?: string , width: number, height: number }) {
  return (
    <>
      <Image
        className={cn("w-10 sm:w-11", className)}
        src={"/images/logo.png"}
        alt="ویکی تجربه لوگو"
        width={width}
        height={height}
      />
    </>
  );
}
