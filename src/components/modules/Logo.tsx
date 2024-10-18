import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({
  className,
  width = 100,
  height = 100,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <>
      <div className={cn("w-10 sm:w-[50px]", className)}>
        <Image
          className={cn("w-full object-contain")}
          src={"/svg/logo.svg"}
          alt="ویکی تجربه لوگو"
          width={width}
          height={height}
        />
      </div>
    </>
  );
}
