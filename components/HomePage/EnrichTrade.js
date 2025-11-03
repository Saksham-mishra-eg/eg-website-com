"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EnrichTrade.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const enrichData = [
  {
    img: "/visually-appealing.png",
    title: "Visually-Appealing Data",
    desc: "Sneak into the latest market dynamics in a visually-appealing manner. Explore total shipments, trade data, imports and exports across the world.",
  },
  {
    img: "/competition-analysis.png",
    title: "Competition Analysis",
    desc: "Keep a close look at your competitor’s activities. Monitor their total shipments made, traded products, HS Code, quantity, price, and much more.",
  },
  {
    img: "/future-driven.png",
    title: "Future-Driven Analytics",
    desc: "Anticipate what's going to happen in the future, dive into global data analytics at your fingertips. Access trade analysis utilized by top industry leaders.",
  },
  {
    img: "/trend-savvy.png",
    title: "Be a Trend-Savvy",
    desc: "Stay tuned with the market's latest trends. Get enriched data insights that will help you get a better idea of what’s happening in almost every industry.",
  },
];

function EnrichTrade() {
  return (
    <div className={styles.EnrichSection}>
      <Container>
        <Row>
          <Col>
            <div className={styles.TextEnrichtrd}>
              <h2>Leverage Power of Trade Data</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {enrichData.map((item, index) => (
            <Col md={3} key={index}>
              <div className={styles.EnrchDtaBox}>
                <div className={styles.BoxesOFDta}>
                  <Image src={item.img} alt={item.title} width={54} height={54} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default EnrichTrade;