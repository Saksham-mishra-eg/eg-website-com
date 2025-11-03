import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GlobalTradeStats.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const statsData = [
  {
    img: "/trade-data.png",
    value: "190+",
    title: "Countries",
    desc: "Import Export Trade Data",
  },
  {
    img: "/exclusive-data.png",
    value: "62+",
    title: "Countries",
    desc: "Detailed Customs Data",
  },
  {
    img: "/countries-data.png",
    value: "32+",
    title: "Countries",
    desc: "Exclusive Data",
  },
  {
    img: "/company-contacts.png",
    value: "10M+",
    title: "Company’s",
    desc: "and Employee’s Contact",
  },
];

function GlobalTradeStats() {
  return (
    <div className={styles.GlobalTradeStatsBg}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.EnrichDataGlobaltr}>
              <ul className={styles.lsitofTradedata}>
                {statsData.map(({ img, value, title, desc }, index) => (
                  <li key={index}>
                    <div className={styles.listofTrade}>
                      <Image src={img} alt={title} width={70} height={70} />
                    </div>
                    <div className={styles.listofTrade}>
                      <h3>{value}</h3>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GlobalTradeStats;