"use client";

import dynamic from "next/dynamic";

// ✅ dynamically import AccessData inside a client file
const AccessData = dynamic(() => import("./AccessData"), { ssr: false });

export default function AccessDataWrapper() {
  return <AccessData />;
}
