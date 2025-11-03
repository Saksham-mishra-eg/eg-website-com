"use client";
import { useEffect, useState } from "react";

export default function ClientWrapper() {
  useEffect(() => {
    console.log("Client-side effect working");
  }, []);

  return null;
}
