import { FMorabba } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import * as motion from "framer-motion/client";

type TProps = {
  title: string;
  caption: string;
  btn: {
    value: string;
    href: string;
  };
};

export default function SectionTitle(props: TProps) {
  return (
    <div className="flex w-full items-end justify-center text-center lg:justify-between lg:text-start">
      <motion.div
        initial={{ marginRight: "-200px", opacity: 0 }}
        whileInView={{ marginRight: "0", opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-3 md:space-y-5">
        <div className="relative z-[1] mx-auto w-fit lg:mx-0">
          <div className="absolute -bottom-0.5 -left-0.5 -right-0.5 -z-[1] h-1/2 rounded-sm bg-primary-1/50 md:-bottom-1.5"></div>
          <h2
            className={cn(
              "z-[1] text-3xl font-medium md:text-5xl",
              FMorabba.className,
            )}>
            {props.title}
          </h2>
        </div>
        <p className="text-base text-gray-2 min-[440px]:text-xl md:text-2xl">
          {props.caption}
        </p>
      </motion.div>
      <motion.div
        className="mb-1 hidden !w-full !max-w-56 lg:block"
        initial={{ marginLeft: "-200px", opacity: 0 }}
        whileInView={{ marginLeft: "0", opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        <Link
          href={props.btn.href}
          className="btn hidden !w-full !max-w-56 items-center bg-gray-4 py-3 text-white hover:bg-black lg:flex">
          <span className="leading-6">{props.btn.value}</span>
          <ArrowLeftIcon className="size-5" />
        </Link>
      </motion.div>
    </div>
  );
}
