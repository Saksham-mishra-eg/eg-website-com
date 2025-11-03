"use client";
import Image from "next/image";
import React from "react"
import GetGlobalTrade from "../../components/Faqs/GetGlobalTrade";
import SecurityPrivacyHead from "../../components/security-privacy/SecurityPrivacyHeading";
import SecurityCompliance from "../../components/security-privacy/security-compliance";
import DataProtections from "../../components/security-privacy/data-protection";
import DataSecurity from "../../components/security-privacy/data-security";

export default function SecurityAndPrivacy() {
    return (
        <div className="MainPage">
           <SecurityPrivacyHead />
            <SecurityCompliance />
            <DataProtections />
            <DataSecurity />
            <GetGlobalTrade />
        </div>
    );
}
