import Image from "next/image";
import GetGlobalTrade from "../../components/DataFlow/GetGlobalTrade";
import DiscoverGlobaldata from "../../components/DataFlow/DiscoverGlobaldata";
import ExclusiveData from "../../components/DataFlow/ExclusiveData";
import GlobalTradeStats from "../../components/DataFlow/GlobalTradeStats";
import TableDataCountry from "../../components/DataFlow/TableDataCountry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Genius - Global Import Export Trade Data of 190+ Countries",
  description:
    "Export Genius provides import export trade data of global countries with importers and exporters, commodity information, and complete shipment details.",
};

export default function DataFlow() {
    return (
        <div className="MainPage">
            <DiscoverGlobaldata />
            <GlobalTradeStats />
            <ExclusiveData />
            <TableDataCountry />
            <GetGlobalTrade />
        </div>
    );
}
