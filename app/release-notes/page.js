"use client";
import Image from "next/image";
import React from "react"
import NewRelease from "../../components/ReleaseNotes/NewRelease";
import ReleaseNotebyyear from "../../components/ReleaseNotes/ReleaseNotebyYear";
import GetGlobalTrade from "../../components/Faqs/GetGlobalTrade";

export default function ReleaseNotes() {
    return (
        <div className="MainPage">
            <NewRelease />
            <ReleaseNotebyyear />
            <GetGlobalTrade />
        </div>
    );
}
