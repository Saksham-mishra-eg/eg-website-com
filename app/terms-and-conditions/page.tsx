import TermsandCoditionsData from "../../components/TermsandCoditions/TermsandCoditionsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions",
};

export default function TermsandCoditions() {
    return (
        <div className="MainPage">
        <TermsandCoditionsData />
        </div>
    );
}
