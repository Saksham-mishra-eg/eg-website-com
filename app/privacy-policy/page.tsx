import PrivacyPolicyData from "../../components/PrivacyPolicy/PrivacyPolicyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy",
};

export default function PrivacyPolicy() {
    return (
        <div className="MainPage">
            <PrivacyPolicyData />
        </div>
    );
}
