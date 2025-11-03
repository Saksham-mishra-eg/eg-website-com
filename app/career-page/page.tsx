import Image from "next/image";
import React from "react"
import CareerweMarch from "../../components/CareerPage/CareerweMarch";
import WhyWork from "../../components/CareerPage/WhyWork";
import OurCulture from "../../components/CareerPage/OurCulture";
import CurrentOpening from "../../components/CareerPage/CurrentOpening";
import GetGlobalTrade from "../../components/CareerPage/GetGlobalTrade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Export Genius",
  description:
    "See all the updates on available job openings at Export Genius and become a working member of trade data intelligence platform.",
};

export default function CareerPage() {
    return (
        <div className="MainPage">
            <CareerweMarch />
            <WhyWork />
            <OurCulture />
            {/* <WeAreeg /> */}
            <CurrentOpening />
            {/* <Possitions /> */}
            <GetGlobalTrade />
        </div>
    );
}
