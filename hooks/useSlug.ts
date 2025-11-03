"use client";
import { usePathname } from "next/navigation";

export function useSlug() {
  const pathname = usePathname();
  return pathname?.split("/").filter(Boolean).pop();
}
