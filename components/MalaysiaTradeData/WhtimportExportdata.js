"use client";

import styles from "./WhtimportExportdata.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";
import { useSlug } from "./SlugProvider";

const countryData = {
  "malaysia-trade-data": {
    title: "What is Malaysia Import Export Data?",
    description:
      "Malaysia trade data is a customs-based and statistical record of goods imported to and exported from Malaysia. It includes key information like:",
    items: [
      { img: "/clients/hscode.png", title: "HS Code" },
      { img: "/clients/pdescription.png", title: "Product Description" },
      { img: "/clients/name.png", title: "Importer & Exporter Names" },
      { img: "/clients/coin.png", title: "Quantity & Price" },
      { img: "/clients/origincntry.png", title: "Country of Origin / Destination" },
      { img: "/clients/dateship.png", title: "Date of Shipment" },
      { img: "/clients/portdetil.png", title: "Port Details" },
    ],
    note: "With Export Genius, get accurate and reliable trade data from trusted sources, presented in a user-friendly format",
  },
  "vietnam-trade-data": {
    title: "What is Vietnam Import Export Data?",
    description:
      "Vietnam trade data provides a complete picture of the goods imported and exported by Vietnamese companies. Sourced directly from Vietnam Customs, this data includes:",
    items: [
      { img: "/clients/hscode.png", title: "HS Code" },
      { img: "/clients/pdescription.png", title: "Product Description" },
      { img: "/clients/name.png", title: "Importer & Exporter Names" },
      { img: "/clients/coin.png", title: "Quantity & Price" },
      { img: "/clients/origincntry.png", title: "Country of Origin / Destination" },
      { img: "/clients/dateship.png", title: "Date of Shipment" },
      { img: "/clients/portdetil.png", title: "Port Details" },
    ],
    note: "Our data helps you track Vietnam’s trade activities in real-time, revealing actionable insights for your business.",
  },
  "indonesia-trade-data": {
    title: "What is Indonesia Import Export Data?",
    description:
      "Indonesia trade data is a statistical record of imports and exports, including:",
    items: [
      { img: "/clients/hscode.png", title: "HS Code" },
      { img: "/clients/pdescription.png", title: "Product Description" },
      { img: "/clients/name.png", title: "Importer & Exporter Names" },
      { img: "/clients/coin.png", title: "Quantity & Price" },
      { img: "/clients/origincntry.png", title: "Country of Origin / Destination" },
      { img: "/clients/dateship.png", title: "Date of Shipment" },
      { img: "/clients/portdetil.png", title: "Port Details" },
    ],
    note: "Access reliable Indonesia trade data for business analysis and planning.",
  },
  "brazil-trade-data": {
    title: "What is Brazil Import Export Data?",
    description:
      "Brazil trade data includes customs and statistical records of imported and exported goods, with details like:",
    items: [
      { img: "/clients/hscode.png", title: "HS Code" },
      { img: "/clients/pdescription.png", title: "Product Description" },
      { img: "/clients/name.png", title: "Importer & Exporter Names" },
      { img: "/clients/coin.png", title: "Quantity & Price" },
      { img: "/clients/origincntry.png", title: "Country of Origin / Destination" },
      { img: "/clients/dateship.png", title: "Date of Shipment" },
      { img: "/clients/portdetil.png", title: "Port Details" },
    ],
    note: "Brazil trade data from Export Genius ensures accurate insights for your business.",
  },
};


function WhtimportExportdata() {
   const slug = useSlug(); // ✅ Get slug from context
  const content = countryData[slug] || countryData["malaysia-trade-data"];

  return (
    <div className={styles.imporExportDta}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.ContainerImpExp}>
              <div className={styles.sectiHeadngFirst}>
                <div className={styles.dataHeaignText}>
                  <h2>{content.title}</h2>
                  <p>{content.description}</p>
                </div>
              </div>

              <div className={styles.sectiHeadngSecond}>
                <div className={styles.ElemntContainer}>
                  {content.items.map((item, index) => (
                    <div key={index} className={styles.emelentItemsCont}>
                      <Image src={item.img} alt={item.title} width={33} height={33} />
                      <h4>{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.sectiHeadngthird}>
                <p>{content.note}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhtimportExportdata;
