import Image from "next/image";
import CancelpolicyData from "../../components/CancelPolicy/CancelpolicyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancel Export Genius Subscription",
  description:
    "Cancel Export Genius Subscription",
};

export default function CancelPolicy() {
  return (
    <div className="MainPage">
      <CancelpolicyData />
    </div>
  );
}
