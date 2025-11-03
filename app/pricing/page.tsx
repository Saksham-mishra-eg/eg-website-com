
import React from "react"
import NeedplanHelp from "../../components/PricingPage/NeedplanHelp";
import CustomizedPlan from "../../components/PricingPage/CustomizedPlan";
import DetailedPricing from "../../components/PricingPage/DetailedPricing";
import CompareButton from "../../components/PricingPage/CompareButton";
import { PricingProvider } from "../../components/PricingPage/PricingContext";
import GetGlobalTrade from "../../components/PricingPage/GetGlobalTrade";
import PricingList from "../../components/PricingPage/PricingList";
import Faqs from "../../components/PricingPage/Faqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plans and Pricing - Powerful Insights at Your Fingertips",
  description:
    "Subscribe to Export Genius global trade intelligence platform and access industry-standard import export data with plans that suit your business.",
};

export default function Pricing() {
    return (
        <div className="MainPage">
            <PricingProvider>
                <PricingList />
                <CompareButton />
                <DetailedPricing />
                <CustomizedPlan />
                <NeedplanHelp />
                <Faqs />
                {/* <Testimonials /> */}
                <GetGlobalTrade />
            </PricingProvider>

        </div>
    );
}
