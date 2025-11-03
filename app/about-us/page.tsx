import Image from "next/image";
import React from "react"
import Aboutus from "../../components/Aboutus/Aboutus";
import AboutStats from "../../components/Aboutus/AboutStats";
import VisionMission from "../../components/Aboutus/VisionMission";
import FocusOn from "../../components/Aboutus/FocusOn";
import Becomebetter from "../../components/Aboutus/Becomebetter";
import FounderDirecter from "../../components/Aboutus/FounderDirecter";
import GetGlobalTrade from "../../components/Aboutus/GetGlobalTrade";
import AboutFeatures from "../../components/Aboutus/AboutFeatures";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Company",
  description:
    "Export Genius is global leader in trade intelligence and committed to deliver quality import export trade data with complete shipment records and market insights.",
};

export default function AboutUS() {
  return (
    <div className="MainPage">
      <Aboutus />
      <AboutStats />
      <VisionMission />
      <AboutFeatures />
      <FocusOn />
      <Becomebetter />
      <FounderDirecter />
      <GetGlobalTrade />
    </div>
  );
}
