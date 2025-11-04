import Image from "next/image";
import ApiHeaderSection from "../../components/TradeApiPage/ApiHeaderSection";
import LeverageApi from "../../components/TradeApiPage/LeverageApi";
import AccessDataWrapper from "../../components/TradeApiPage/AccessDataWrapper";
import GlobalTradeStats from "../../components/TradeApiPage/GlobalTradeStats";
import HereToHelp from "../../components/TradeApiPage/HereToHelp";
import GetGlobalTrade from "../../components/TradeApiPage/GetGlobalTrade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Genius Trade Intelligence API",
  description:
    "Export Genius Trade Intelligence API helps you access global trade data. With multiple APIs, you can instantly explore trade intelligence and supply chain analytics.",
};


export default function TradeApiPage() {
    return (
        <div className="MainPage">
            <ApiHeaderSection />
            <LeverageApi />
            <AccessDataWrapper  />
            <GlobalTradeStats />
            <HereToHelp />
            <GetGlobalTrade />
        </div>
    );
}
