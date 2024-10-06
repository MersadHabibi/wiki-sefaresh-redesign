"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useSearchQueries() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const setSearchParams = useCallback(
    (keys: string[], values: string[]) => {
      const URL = new URLSearchParams(Array.from(searchParams.entries()));

      keys.forEach((key, index) => {
        URL.set(key, values[index]);
      });
      
      router.push(pathname + "?" + URL.toString());
    },
    [pathname, router, searchParams],
  );

  return setSearchParams;
}
