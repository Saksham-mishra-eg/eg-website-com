"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradeOnlinePlatform.module.css";
import { Container, Col, Tab, Row, Nav } from "react-bootstrap";
import "./customStyles.css";
import Image from "next/image";

const tabData = [
  {
    key: "first",
    title: "Global Traders",
    heading: "Find Global Importers & Exporters",
    desc: `Discover a global network of millions of importers and exporters on our trade intelligence platform. Gain a competitive edge with our exclusive "Tree Map" feature.`,
    img: "/globalimpexp.png",
  },
  {
    key: "second",
    title: "Track Commodities",
    heading: "Check Commodities Traded Price",
    desc: `Stay up-to-date with current prices of imported & exported commodities worldwide on sourcing and selling in various markets.`,
    img: "/commodities.jpg",
  },
  {
    key: "third",
    title: "Custom Dashboard",
    heading: "Personalized Dashboard",
    desc: `Personalize your dashboard your way. Use filters like HS Code, Product, Buyer, Supplier, etc., and get insights instantly.`,
    img: "/personalized-dashboard.png",
  },
  {
    key: "fourth",
    title: "Market Trends",
    heading: "Checkout Market Trends",
    desc: `Uncover market trends by product and company. Use export-import data for informed decisions and business growth.`,
    img: "/markets-trends.png",
  },
  {
    key: "five",
    title: "Contact Details",
    heading: "Get Company and Employee Contacts",
    desc: `Access contact details of companies and decision-makers including names, designations, emails, and phone numbers.`,
    img: "/companys-contacts.png",
  },
];

function TradeOnlinePlatform() {
  return (
    <div className={styles.TradeOnlinePlatformOnline}>
      <Container>
        <Row>
          <Col>
            <div className={styles.TrdetamOnline}>
              <h2>
                TRADE INTELLIGENCE DATA <span> PLATFORM</span>
              </h2>
            </div>
          </Col>
        </Row>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col>
              <Nav variant="pill" className={styles.NavTabsFlex}>
                {tabData.map(({ key, title }) => (
                  <Nav.Item key={key}>
                    <Nav.Link eventKey={key} className={styles.finGobaTxt}>
                      {title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tab.Content>
                {tabData.map(({ key, heading, desc, img }) => (
                  <Tab.Pane eventKey={key} key={key}>
                    <Row>
                      <Col md={5}>
                        <div className={styles.TrdetamOnlineIMg}>
                          <div className={styles.GlbDataImg}>
                            <h3>{heading}</h3>
                            <p>{desc}</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={7}>
                        <div className={styles.GlbDataImg}>
                          <Image src={img} alt={heading} width={746} height={500} />
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default TradeOnlinePlatform;