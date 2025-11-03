import UnlockTradeInsight from "../../components/MalaysiaTradeData/UnlockTradeInsight";
import LookingtoExpand from "../../components/MalaysiaTradeData/LookingtoExpand";
import WhtimportExportdata from "../../components/MalaysiaTradeData/WhtimportExportdata";
import TradeTotalGraph from "../../components/MalaysiaTradeData/TradeTotalGraph";
import KeyfeaturesTrade from "../../components/MalaysiaTradeData/KeyfeaturesTrade";
import BenefitsofTradedata from "../../components/MalaysiaTradeData/BenefitsofTradedata";
import GetsampleofData from "../../components/MalaysiaTradeData/GetsampleofData";
import SlugProvider from "../../components/MalaysiaTradeData/SlugProvider";


export const metadata = {
  title: "Malaysia Import Export Data",
  description: "Access Verified Malaysia Trade Data for Smarter Business Decisions",
};

export default function MalaysiaTradeData() {
  return (
    <div className="MainPage">
      <SlugProvider>
        <UnlockTradeInsight />
        <LookingtoExpand />
        <WhtimportExportdata />
        <TradeTotalGraph />
        <KeyfeaturesTrade />
        <BenefitsofTradedata />
        <GetsampleofData />
      </SlugProvider>
    </div>
  );
}
