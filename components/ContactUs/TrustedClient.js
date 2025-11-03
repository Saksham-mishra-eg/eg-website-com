"use client";
import styles from "./TrustedClient.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";

const clientLogos = [
  { src: "/shell.png", alt: "Shell Logo" },
  { src: "/philip.png", alt: "Philips Logo" },
  { src: "/motorola.png", alt: "Motorola Logo" },
  { src: "/imerys.png", alt: "Imerys Logo" },
  { src: "/hyundai.png", alt: "Hyundai Logo" },
  { src: "/honda.png", alt: "Honda Logo" },
  { src: "/healthcare.png", alt: "Healthcare Logo" },
  { src: "/exonmobil.png", alt: "ExxonMobil Logo" },
  { src: "/coppervision.png", alt: "CooperVision Logo" },
  { src: "/cipla.png", alt: "Cipla Logo" }
];

function TrustedClient() {
  return (
    <div className={styles.TrustedClientBg}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.CusomerSuproHead}>
              <h2>Join the 20,000+ Clients Who Trust Us</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className={styles.clientIcnimgTru}>
              {clientLogos.map((logo, index) => (
                <div className={styles.imgClinEn} key={index}>
                  <Image src={logo.src} alt={logo.alt} width={190} height={142} loading="lazy" />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TrustedClient;