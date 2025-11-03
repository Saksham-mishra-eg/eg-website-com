import Image from "next/image";
import RefundPolicyData from "../../components/RefundPolicy/RefundPolicyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "100% Money Back Guarantee - No Questions Asked!!",
};

export default function RefundPolicy() {
    return (
        <div className="MainPage">
            <RefundPolicyData />
        </div>
    );
}
