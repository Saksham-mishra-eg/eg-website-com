"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal.tsx";
import styles from "./AllSolutionsList.module.css";
import Image from "next/image";

const content = [
  {
    title: "Importers",
    description:
      "Redefine your search for potential suppliers for your commodities from the world. Get extensive information by making use of filters.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/importer.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: ["Monitor shipment details of your competitors and access import-export data online.", "Check the global inbound and outbound shipments."],

  },
  {
    title: "Exporter",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/exporter.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: ["List of prospects from the registered profiles of importing/exporting companies in the global trade intelligence platform.", 
      "See the market share of commodities activity using global import and export data."],
   
  },
  {
    title: "Logistics",
    description:
      "Optimize logistics operations, gain invaluable insights into the international trade markets, and make informed business decisions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/logistics.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: ["Check out trade variables and metrics such as port, country, HS Code, Suppliers, Buyers & more.", 
      "Analyze the overseas markets and discover potential business opportunities."],
  },
  {
    title: "Consulting and Research Firms",
    description:
      "Examine international trade markets by analyzing specific data parameters including HSN Code, country, port, value, and the involved importing and exporting entities.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/consulting-research.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: ["Make thorough research and evaluate business products and services.", 
      "Analyse metrics such as HSN Code, Country, Port and value, etc."],
  },
  {
    title: "Law Firms",
    description:
      "Adhere to the legal compliance and regulate the procedures in the international trade landscape. Get access to trade data of counterfeit goods and maintain advisory relationships.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/law-firms.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: ["Registered companies listed in the platform give in-depth information on company transactions.", 
      "Keep a check on inbound and outbound shipments while maintaining legal trading activities."],
  },
  {
    title: "Investment Agencies",
    description:
      "Investment agencies can see a company’s credibility, past score, fraud detections, evaluate its past performance, and detect any signs of fraud.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/investment-agencies.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: ["Assess real-time market trends, emerging sectors and evaluate investment opportunities.", 
      "Monitor investment portfolios and track the impact of external factors on investment returns."],
  },
  {
    title: "Government Agencies",
    description:
      "Government agencies leverage trade data to introduce effective trade regulations, such as subsidies and taxes on foreign products.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/government-agencies.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: ["By analyzing systematic tariffs & utilizing the largest searchable trade database covering over 195 countries.", 
      "Create effective regulations for subsidies, and taxes for foreign products."],
  },
  {
    title: "Financial Institutions",
    description:
      "Many financial institutions like Banks and insurance providers can utilize import & export data to analyze market trends and credit risk to offer loans and taxations.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/financial-institutions.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: ["Determine the turnover of import and export businesses, services of loans, and taxation to small and medium enterprises (SMEs).", 
      "Access financial aspects such as shipping volume, and value and analyze the performance of import and export companies to connect with the prospects."],
  },
  {
    title: "Media & Communications",
    description:
      "Media houses can leverage the global trade data and analyze company trade data and curate research reports depicting the expected curve in the market.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/media-communications.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: ["Analyze vendor’s or company trade data and show where the market is heading to.", 
      "Check which commodity is getting traded from which country or port of discharge."],
  },
  {
    title: "Manufacturing & Retail Companies",
    description:
      "Manufacturing and retail companies can utilize import and export data to identify new opportunities for market expansion or product diversification.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/retail-company.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: ["Companies can assess geopolitical risks such as trade disputes or regulatory changes that impact operations.", 
      "Import & export data provide visibility into trade compliance requirements and regulations."],
  },
  {
    title: "Sales & Marketing Teams",
    description:
      "Monitor trends within your chosen commodity, market, or geographic area, formulate pricing strategies, discover fresh markets and sales opportunities, and enhance the company’s performance through valuable data insights and analytics.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/sales-marketing.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: ["Connect with businesses from different business sectors and expand opportunities.", 
      "Find leads for your business through import-export customs data and check for your business requirements."],
  },
  {
    title: "Corporation",
    description:
      "Whether your business is engaged into leather & textile, FMCG, chemicals, mineral & metal or any other sector; get industry-focused data for strategic business decisions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/corporation.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />

      </div>
    ),
    listItems: [" ", 
      " "],
  },
  
  {
    title: "Trade Promotion Councils",
    description:
      "Trade promotion councils use import export data of their members and other essential data to compare industry growth. They access contacts of importers & exporters at our online platform and approach them to attend trade shows for exploring new opportunities.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <Image
          src="/trade-promotion.png"
          width={653}
          height={420}
          className="w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    listItems: ["Ascertain the weather conditions and how it can affect the commodities.", 
      "Check for data country, distributors help in decision-making."],
  },
];

function FaQuestions() {




  return (
    <div className={styles.AllSolutionsListBG}>
      <StickyScroll content={content} />
    </div>
  );
}
export default FaQuestions;


