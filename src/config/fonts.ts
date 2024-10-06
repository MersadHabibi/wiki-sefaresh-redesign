import localFont from "next/font/local";

export const FMorabba = localFont({
  src: [
    {
      path: "../../public/fonts/Morabba-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Morabba-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Morabba-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Morabba-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Morabba-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Morabba-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
});

export const FIranSans = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSansWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansWeb.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansWeb_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansXDemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSansWeb_Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
