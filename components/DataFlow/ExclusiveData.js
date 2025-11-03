"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ExclusiveData.module.css";
import { Row, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./marquee.css";

const countries = [
  "Bangladesh",
  "Bolivia",
  "Burundi",
  "Cameroon",
  "Chad",
  "Costa Rica",
  "DR Congo"
];

const repeatedCountries = [...countries, ...countries];

function ExclusiveData() {
  return (
    <div className={styles.ExclusiveDataBg}>
      <Container fluid>
        <Row>
          <div className={styles.grnBgcolor}>
            <div className={styles.ExclCntrdtWh}>
              <h3>Exclusive Data</h3>
            </div>
            <div className={styles.ExclCntrdtGR}>
              <Marquee>
                <ul>
                  {repeatedCountries.map((country, index) => (
                    <li key={index}>
                      <a href={`#${country.toLowerCase().replace(/\s+/g, '')}`}>
                        {country}
                      </a>
                    </li>
                  ))}
                </ul>
              </Marquee>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ExclusiveData;