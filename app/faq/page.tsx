import FaqHeader from "../../components/Faqs/FaqHeader";
import FaQuestions from "../../components/Faqs/FaQuestions";
import FaqPlanPricing from "../../components/Faqs/FaqPlanPricing";
import GetGlobalTrade from "../../components/Faqs/GetGlobalTrade";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Genius Platform FAQs",
  description:
    "We are a leading global trade data provider, offering full coverage of import and export business. Learn more about us from our FAQs and explore trade intelligence.",
};

export default function FAQs() {
    return (
        <div className="MainPage">
            <FaqHeader />
            <FaQuestions />
            <FaqPlanPricing />
            <GetGlobalTrade />
        </div>
    );
}
