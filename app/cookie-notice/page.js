"use client";
import NoticeInformation from "../../components/CookieNotice/noticeInformation";
import GetGlobalTrade from "../../components/Faqs/GetGlobalTrade";
import Image from "next/image";

export default function CookeNotice() {
    return (
        <div className="MainPage">
            <NoticeInformation />
            <GetGlobalTrade />
        </div>
    );
}
