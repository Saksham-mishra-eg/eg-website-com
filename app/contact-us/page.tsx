import Image from "next/image";
import CustomerSupport from "../../components/ContactUs/CustomerSupport";
import TrustedClient from "../../components/ContactUs/TrustedClient";
import GetGlobalTrade from "../../components/ContactUs/GetGlobalTrade"
import FloatingButton from "../../components/EmailForm/FloatingContactButton";
import ContactIframe from "../../components/ContactUs/ContactIframe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Genius Contact",
  description:
    "We aim to provide timely and best customer support. For any assistance, inquiries, technical support, or any other query, contact us on the given details.",
};


export default function ContactUs() {
  return (
    <div className="MainPage">
      <ContactIframe />
      <CustomerSupport />
      <TrustedClient />
      <GetGlobalTrade />
      <FloatingButton />
    </div>
  );
}
