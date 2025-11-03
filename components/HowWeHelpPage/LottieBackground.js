"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export default function LottieBackground() {
  return (
    <Player autoplay loop src="/bgjason.json" style={{ width: "100%", height: "100%" }} />
  );
}
