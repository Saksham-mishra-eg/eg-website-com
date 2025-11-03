"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const SlugContext = createContext("");

export const useSlug = () => useContext(SlugContext);

export default function SlugProvider({ children }) {
  const pathname = usePathname();
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (pathname) {
      const cleanPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;
      setSlug(cleanPath);
    }
  }, [pathname]);

  return <SlugContext.Provider value={slug}>{children}</SlugContext.Provider>;
}
