"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ChangeThemeBtn() {
  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient)
    return (
      <div className="size-6 rounded-full bg-white opacity-40 dark:bg-neutral-950" />
    );

  return (
    <button
      // outlined
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}>
      {theme === "light" ? (
        <MoonIcon className="size-6" />
      ) : (
        <SunIcon className="size-6" />
      )}
    </button>
  );
}
