"use client";
import styles from "./BenefitsofTradedata.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";
import { usePathname } from "next/navigation";

function BenefitsofTradedata() {
  // ✅ Detect slug from URL
  const pathname = usePathname();
  const slug = pathname?.replace("/", "") || "malaysia-trade-data";

  const contentMap = {
    "malaysia-trade-data": {
      title: "Benefits of Using Malaysia Trade Data",
      benefits: [
        "Track your competitor’s trading activity in Malaysia",
        "Analyze Malaysia’s import-export price trends and market dynamics",
        "Discover new buyers and suppliers in Malaysia",
        "Make smarter, data-driven decisions for Malaysia trade",
        "Expand your business by finding the right partners in Malaysia",
      ],
      frame: "/clients/malaysia-frame.png",
    },
    "vietnam-trade-data": {
      title: "Why Choose Export Genius for Vietnam Trade Data?",
      benefits: [
        "Accurate and up-to-date trade intelligence",
        "Discover new buyers and suppliers",
        "Analyze product-level trade flows",
        "Monitor competitors' trading activities",
        "Identify market opportunities and demand patterns",
      ],
      frame: "/clients/vietnam-frame.png",
    },
    "indonesia-trade-data": {
      title: "Benefits of Using Indonesia Trade Data",
      benefits: [
        "Track competitor trade flows in Indonesia",
        "Analyze Indonesia’s import and export price fluctuations",
        "Find new opportunities in the Indonesian market",
        "Make smarter, data-backed trade decisions",
        "Connect with reliable buyers and suppliers in Indonesia",
      ],
      frame: "/clients/indonesia-frame.png",
    },
    "brazil-trade-data": {
      title: "Benefits of Using Brazil Trade Data",
      benefits: [
        "Track competitor trade activity across Brazil",
        "Analyze Brazil’s key market and price movements",
        "Discover opportunities in Brazil’s growing trade markets",
        "Base your strategies on accurate Brazil trade insights",
        "Find reliable buyers and suppliers in Brazil",
      ],
      frame: "/clients/brazil-frame.png",
    },
    "thailand-trade-data": {
      title: "Benefits of Using Thailand Trade Data",
      benefits: [
        "Track your competitor’s trading activity in Thailand",
        "Analyze Thailand’s pricing trends and trade dynamics",
        "Explore new business opportunities in Thailand",
        "Make smarter, data-based decisions",
        "Expand your supply chain with reliable Thailand buyers/suppliers",
      ],
      frame: "/clients/thailand-frame.png",
    },
  };

  const content = contentMap[slug] || contentMap["malaysia-trade-data"];

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path
        d="M18.0256 8.53367C18.4071 8.91514 18.4071 9.5335 18.0256 9.91478L11.4742 16.4663C11.0928 16.8476 10.4746 16.8476 10.0931 16.4663L6.97441 13.3474C6.59294 12.9662 6.59294 12.3478 6.97441 11.9665C7.35569 11.585 7.97405 11.585 8.35533 11.9665L10.7836 14.3948L16.6445 8.53367C17.0259 8.15239 17.6443 8.15239 18.0256 8.53367ZM25 12.5C25 19.4094 19.4084 25 12.5 25C5.59063 25 0 19.4084 0 12.5C0 5.59063 5.59158 0 12.5 0C19.4094 0 25 5.59158 25 12.5ZM23.0469 12.5C23.0469 6.67019 18.329 1.95312 12.5 1.95312C6.67019 1.95312 1.95312 6.67095 1.95312 12.5C1.95312 18.3298 6.67095 23.0469 12.5 23.0469C18.3298 23.0469 23.0469 18.329 23.0469 12.5Z"
        fill="black"
      />
    </svg>
  );

  return (
    <div className={styles.BenefitsTradedata}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.ExpnBenefitsT}>
              <h2>{content.title}</h2>
            </div>

            <div className={styles.benifitsContainerExp}>
              <div className={styles.ElemntContainer}>
                <div className={styles.BenefemelentItemsCont}>
                  <div className={styles.bacgkBroderEle}>
                    <CheckIcon />
                    <h4>{content.benefits[0]}</h4>
                  </div>
                </div>

                {/* Frame Image */}
                <div className={styles.BenefemelentItemsCont}>
                  <Image src={content.frame} alt={`${slug} frame`} width={209} height={143} />
                </div>

                <div className={styles.BenefemelentItemsCont}>
                  <div className={styles.bacgkBroderEle}>
                    <CheckIcon />
                    <h4>{content.benefits[1]}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle benefits */}
            <div className={styles.benifitsContainerExp}>
              <div className={styles.ElemntContainer2nd}>
                {content.benefits.slice(2, 4).map((text, i) => (
                  <div key={i} className={styles.BenefemelentItemsCont}>
                    <div className={styles.bacgkBroderEle}>
                      <CheckIcon />
                      <h4>{text}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Last Benefit */}
            <div className={styles.benifitsContainerExp}>
              <div className={styles.ElemntContainer3rd}>
                <div className={styles.BenefemelentItemsCont}>
                  <div className={styles.bacgkBroderEle}>
                    <CheckIcon />
                    <h4>{content.benefits[4]}</h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BenefitsofTradedata;
