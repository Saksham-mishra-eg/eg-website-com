
import Image from "next/image";
import React from "react"
import GlobalImportExport from "../../components/GlobalTradeData/GlobalImportExport";
import UnlockGlobalTrade from "../../components/GlobalTradeData/UnlockGlobalTrade";
import WhyChooseUs from "../../components/GlobalTradeData/WhyChooseus";
import GlobalFeatures from "../../components/GlobalTradeData/GlobalFeatures";
import CallToAction from "../../components/GlobalTradeData/CalltoAction";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unlock Business Growth with Trade Intelligence Platform",
  description:
    "Access shipment-level trade intelligence from 190+ countries to identify opportunities, track competitors, and grow your international business.",
};

export default function GlobalTradeData() {
  return (
    <div className="MainPage">
      <UnlockGlobalTrade />
      <GlobalFeatures />
      <WhyChooseUs />
      <GlobalImportExport />
      <CallToAction />
    </div>
  );
}
