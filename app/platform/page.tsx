import Image from "next/image";
import PlatformHeader from "../../components/PlatformPage/PlatformHeader";
import ManageEndtoEnd from "../../components/PlatformPage/ManageEndtoEnd";
import Datatypebg from "../../components/PlatformPage/DatatypeBg";
import DataTypesManage from "../../components/PlatformPage/DataTypesManage";
import GetGlobalTrade from "../../components/PlatformPage/GetGlobalTrade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Genius Powerful Global Trade Database",
  description:
    "Export Genius provides essential data that powers your business with actual shipment records, company overviews, and contact information on global companies.",
};

export default function Platform() {
    return (
        <div className="MainPage">
            <PlatformHeader />
            <ManageEndtoEnd />
            <Datatypebg />
            <DataTypesManage />
            <GetGlobalTrade />
        </div>
    );
}
