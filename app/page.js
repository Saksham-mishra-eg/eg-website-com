
import Image from "next/image";
import TradeIntelligence from "../components/HomePage/TradeIntelligence";
import TradedataMap from "../components/HomePage/TradedataMap";
import Clients from "../components/HomePage/Clients";
import EnrichTrade from "../components/HomePage/EnrichTrade";
import TradeOnlinePlatform from "../components/HomePage/TradeOnlinePlatform";
import GetGlobalTrade from "../components/HomePage/GetGlobalTrade";
import StatsScheduleDemo from "../components/HomePage/StatsScheduleDemo";

export default function Home() {
  return (
    <div className="MainPage">
      <TradeIntelligence />
      <TradedataMap />
      <Clients />
      <EnrichTrade />
      <StatsScheduleDemo />
      <TradeOnlinePlatform />
      <GetGlobalTrade />
    </div>
  );
}
