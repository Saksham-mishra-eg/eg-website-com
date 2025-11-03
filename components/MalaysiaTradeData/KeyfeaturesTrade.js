"use client";

import styles from "./KeyfeaturesTrade.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";
import { usePathname } from "next/navigation";

function KeyfeaturesTrade() {
  // ✅ Get slug from URL
  const pathname = usePathname();
  const slug = pathname?.replace("/", "") || "malaysia-trade-data";

  const contentMap = {
    "malaysia-trade-data": {
      title: "Key Features of Our Malaysia Trade Data",
      features: [
        { img: "/clients/trust.png", alt: "trust", text: "100% Authentic: Verified Malaysia customs and shipping records" },
        { img: "/clients/clock.png", alt: "clock", text: "Real-Time Updates: Stay informed with Malaysia’s latest trade movements" },
        { img: "/clients/search.png", alt: "search", text: "Powerful Filters: Filter by HS code, product, company, or country" },
        { img: "/clients/cloud.png", alt: "cloud", text: "Downloadable Reports: Excel and CSV trade data of Malaysia" },
        { img: "/clients/rating.png", alt: "rating", text: "Expert Support: Insights from our Malaysia trade specialists" },
      ],
    },
    "vietnam-trade-data": {
      title: "Key Features of Our Vietnam Trade Data",
      features: [
        { img: "/clients/trust.png", alt: "trust", text: "Customs-Based Data: Sourced from official customs records" },
        { img: "/clients/clock.png", alt: "clock", text: "Regular Updates: Stay informed with the latest shipment records" },
        { img: "/clients/search.png", alt: "search", text: "Company-Level Details" },
        { img: "/clients/cloud.png", alt: "cloud", text: "Advanced Search Filters: Filter by product, HS code, company name, country, and more" },
        { img: "/clients/rating.png", alt: "rating", text: "Exportable Reports: Download data in Excel format" },
        { img: "/clients/search.png", alt: "search", text: "Professional Support: Get expert assistance with trade data analysis" },
      ],
    },
    "indonesia-trade-data": {
      title: "Key Features of Our Indonesia Trade Data",
      features: [
        { img: "/clients/trust.png", alt: "trust", text: "100% Authentic: Data sourced from Indonesia customs and shipping records" },
        { img: "/clients/clock.png", alt: "clock", text: "Frequent Updates: Analyze Indonesia’s evolving trade activities" },
        { img: "/clients/search.png", alt: "search", text: "Custom Filters: Filter Indonesia’s data by product, HS code, and company" },
        { img: "/clients/cloud.png", alt: "cloud", text: "Downloadable Reports: Access Indonesia data in Excel" },
        { img: "/clients/rating.png", alt: "rating", text: "Expert Support: Trade specialists dedicated to Indonesia" },
      ],
    },
    "brazil-trade-data": {
      title: "Key Features of Our Brazil Trade Data",
      features: [
        { img: "/clients/trust.png", alt: "trust", text: "100% Authentic: Verified Brazil customs and shipment records" },
        { img: "/clients/clock.png", alt: "clock", text: "Monthly Updates: Latest Brazil trade movements" },
        { img: "/clients/search.png", alt: "search", text: "Smart Search: HS code, product, and company filters for Brazil data" },
        { img: "/clients/cloud.png", alt: "cloud", text: "Excel Reports: Brazil trade data ready for deep analysis" },
        { img: "/clients/rating.png", alt: "rating", text: "Dedicated Analysts: Brazil trade-focused expert support" },
      ],
    },
    "thailand-trade-data": {
      title: "Key Features of Our Thailand Trade Data",
      features: [
        { img: "/clients/trust.png", alt: "trust", text: "100% Authentic: Thailand trade data from customs authorities" },
        { img: "/clients/clock.png", alt: "clock", text: "Timely Updates: Access Thailand’s import-export data on time" },
        { img: "/clients/search.png", alt: "search", text: "Custom Search: HS code, product, or company-based Thailand trade insights" },
        { img: "/clients/cloud.png", alt: "cloud", text: "Download Reports: Thailand’s data in Excel and CSV" },
        { img: "/clients/rating.png", alt: "rating", text: "Expert Guidance: Thailand trade data specialists available" },
      ],
    },
  };

  const content = contentMap[slug] || contentMap["malaysia-trade-data"];

  return (
    <div className={styles.KeyfeaturesDta}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.tradeFeatures}>
              <h2>{content.title}</h2>
            </div>

            <div className={styles.TradeFeutContainer}>
              <div className={styles.imgtradeFeatures}>
                <div className={styles.imageContWrap1st}>
                  <Image src="/clients/imageContainer.png" alt="key features" width={417} height={508}/>
                </div>
              </div>

              <div className={styles.sectionKeyfeatures}>
                <div className={styles.ElemntKeyfeatures}>
                  {content.features.map((feature, index) => (
                    <div key={index} className={styles.CustomKeyfeatures}>
                      <Image src={feature.img} alt={feature.alt} width={33} height={32} />
                      <h6>{feature.text}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default KeyfeaturesTrade;
