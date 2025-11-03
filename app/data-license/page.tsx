import GetGlobalTrade from "../../components/DataLicense/GetGlobalTrade";
import TradeAnalysis from "../../components/DataLicense/TradeAnalysis";
import WhatGlobaldata from "../../components/DataLicense/WhatGlobaldata";
import BusinessNeeds from "../../components/DataLicense/BusinessNeeds";
import Clients from "../../components/HomePage/Clients";
import CountriCoverd from "../../components/DataLicense/CountriCoverd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Genius Data Licenses for Global Trade Data and Analysis",
  description:
    "Access international trade data to gain supply chain insights and enhance market potential with Export Genius data licenses.",
};

export default function DataLicense() {
    return (
        <div className="MainPage">
            <TradeAnalysis />
            <WhatGlobaldata />
            <BusinessNeeds />
            <Clients />
            <CountriCoverd />
            <GetGlobalTrade />
        </div>
    );
}
