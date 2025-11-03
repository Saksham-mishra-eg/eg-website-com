"use client";

import styles from "./LookingtoExpand.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";
import { useSlug } from "./SlugProvider"; // ✅ Import context hook

// ✅ Content map
const countryContent = {
  "malaysia-trade-data": {
    title: "Looking to Expand Your trade business in Malaysia?",
    description:
      "Export Genius offers comprehensive and up-to-date Malaysia import export data to help you analyze trade flows, identify potential buyers or suppliers, monitor competitors, and make informed strategic decisions.",
    mapImg: "/clients/malasiya-map.png",
  },
  "vietnam-trade-data": {
    title: "Discover Vietnam Trade Intelligence to Grow Your Global Business",
    description:
      "With Export Genius, gain access to detailed and accurate Vietnam import export data to identify trading partners, analyze market trends, and make smart business decisions.",
    mapImg: "/clients/vietnam-map.png",
  },
  "indonesia-trade-data": {
    title: "Discover Opportunities in One of Southeast Asia’s Fastest-Growing Markets",
    description:
      "Indonesia is a global trade hub with a dynamic import-export landscape. With Export Genius, gain instant access to accurate, customs-based Indonesia trade data to fuel your business growth, identify key players, and monitor real-time market movements.",
    mapImg: "/clients/indonesia-map.png",
  },
  "brazil-trade-data": {
    title: "Looking to explore opportunities in Brazil’s thriving import-export market?",
    description:
      "Export Genius offers detailed and up-to-date Brazil trade data that empowers businesses, logistics providers, market researchers, and financial analysts to make informed decisions and stay ahead of competitors.",
    mapImg: "/clients/brazil-map.png",
  },
};

function LookingtoExpand() {
  const slug = useSlug(); // ✅ Get slug from context
  const content = countryContent[slug] || countryContent["malaysia-trade-data"];

  return (
    <div className={styles.LookineSection}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.ExpndunlockTr}>
              <div className={styles.maldyMapsenc}>
                <Image
                  src={content.mapImg}
                  alt="map"
                  width={306}
                  height={200}
                  className={styles.mapImg}
                />
              </div>
              <div className={styles.lingContentFrd}>
                <h2>{content.title}</h2>
                <p>{content.description}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LookingtoExpand;
