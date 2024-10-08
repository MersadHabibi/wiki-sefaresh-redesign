import Footer from "@/components/templates/Footer";
import Navbar from "@/components/templates/navbar/Navbar";
import { FIranSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import ApolloClientProvider from "@/providers/ApolloClientProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Head from "next/head";

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
        <title>ویکی سفارش</title>
        <meta
          name="description"
          content="پلتفرمی برای به اشتراک گذاری تجربیات از سفارشات آنلاین ✨"
        />
        <meta property="og:title" content="ویکی سفارش" />
        <meta
          property="og:description"
          content="پلتفرمی برای به اشتراک گذاری تجربیات از سفارشات آنلاین ✨"
        />
        <meta property="og:image" content="./favicon.ico" />

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
          "text-gray-4 min-h-dvh overflow-y-auto bg-white text-sm font-normal sm:text-base",
          FIranSans.className,
        )}>
        <ApolloClientProvider>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ApolloClientProvider>
      </body>
    </html>
  );
}
