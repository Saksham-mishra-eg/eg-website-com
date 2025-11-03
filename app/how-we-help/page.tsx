import ExportSolutions from "../../components/HowWeHelpPage/ExportSolutions";
import Clients from "../../components/HomePage/Clients";
import GlobalTradeStats from "../../components/HowWeHelpPage/GlobalTradeStats";
import WhatmakesDiff from "../../components/HowWeHelpPage/WhatmakesDiff";
import SideImage from "../../components/HowWeHelpPage/SlideImage"
import GetGlobalTrade from "../../components/HowWeHelpPage/GetGlobalTrade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Data for Every Global Business",
  description:
    "Export Genius provides import export data solutions to global businesses and every industry with complete shipment records and essential market insights.",
};

export default function HowWeHelp() {
    return (
        <div className="MainPage">
            <ExportSolutions />
            <Clients />
            {/* <AllSolutionsList /> */}
            <SideImage />
            <GlobalTradeStats />
            {/* <BusinessEdge /> */}
            <WhatmakesDiff />
            <GetGlobalTrade />
        </div>
    );
}
