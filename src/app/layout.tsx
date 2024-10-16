import Footer from "@/components/templates/Footer";
import Navbar from "@/components/templates/navbar/Navbar";
import { FIranSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import ApolloClientProvider from "@/providers/ApolloClientProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Head from "next/head";
import BackgroundShapes from "@/components/templates/BackgroundShapes";

export const metadata: Metadata = {
  title: {
    template: "ویکی سفارش | %s",
    default: "ویکی سفارش",
  },
  description: "پلتفرمی برای به اشتراک گذاری تجربیات از سفارشات آنلاین ✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="font-sans">
      <Head>
        <meta property="og:title" content="ویکی سفارش" />
        <meta
          property="og:description"
          content="پلتفرمی برای به اشتراک گذاری تجربیات از سفارشات آنلاین ✨"
        />

        <meta name="keywords" content="ویکی سفارش, wiki sefaresh" />
        <meta name="author" content="مرصاد حبیبی" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@type": "Shop",
            headline: "ویکی سفارش",
            author: {
              "@type": "Person",
              name: "مرصاد حبیبی",
            },
            // Additional structured data properties...
          })}
        </script>
      </Head>
      <body
        className={cn(
          "relative min-h-dvh overflow-y-auto overflow-x-hidden bg-white pt-16 text-base font-normal text-gray-4 sm:pt-20 sm:text-base",
          FIranSans.className,
        )}>
        <ApolloClientProvider>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
          {/* <BackgroundShapes /> */}
        </ApolloClientProvider>
      </body>
    </html>
  );
}
