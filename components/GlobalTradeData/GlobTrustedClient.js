"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GlobTrustedClient.module.css";
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

function GlobTrustedClient() {
  return (
    <div className={styles.GlobTrustedClientBg}>
      <Container>
        <Row>

          <div className={styles.CusomerSuproGlobal}>
            <h2>Over 20,000 Clients</h2>
          </div>

        </Row>
        <Row>

          <div className={styles.clientIcnimgGlobl}>
            {clientLogos.map((logo, index) => (
              <div className={styles.imgClinEn} key={index}>
                <Image src={logo.src} alt={logo.alt} loading="lazy" width={118} height={88} />
              </div>
            ))}
          </div>

        </Row>
      </Container>
    </div>
  );
}

export default GlobTrustedClient;