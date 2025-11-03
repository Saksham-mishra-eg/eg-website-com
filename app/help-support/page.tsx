import BannerArea from "../../components/HelpCenter/BannerArea";
import HelpCenterTabsArea from "../../components/HelpCenter/HelpCenterTabsArea";
import QuickLinksbox from "../../components/HelpCenter/QuickLinksbox";
import GetGlobalTrade from "../../components/HelpCenter/GetGlobalTrade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help and Support | Exporgenius.com",
  description:
    "Find help for your Export Genius products and accounts, discover frequently asked questions, explore training, and contact support.",
};

export default function HelpCenter() {
    return (
        <div className="MainPage">
            <BannerArea />
            {/* <SearchList /> */}
            <HelpCenterTabsArea />
            <QuickLinksbox />
            <GetGlobalTrade />
        </div>
    );
}
