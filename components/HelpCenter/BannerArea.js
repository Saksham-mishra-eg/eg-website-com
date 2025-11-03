"use client"
import styles from "./BannerArea.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

function BannerArea() {

  return (
    <div className={styles.BannerAreaBg}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.bgCircle}>
              <Row>
                <Col md={6}>
                  <div className={styles.abouEgs}>
                    <Image src="/helpCenterBanner.png" alt="Help Center" width={636} height={382} />
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.abouEgGns}>
                    <h3>Export Genius Help Center</h3>
                    <h1>Hey there, need some help from Export Genius?</h1>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BannerArea;
