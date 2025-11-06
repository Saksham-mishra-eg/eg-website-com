"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GlobalTradeStats.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";

function GlobalTradeStats() {

    return (
        <div className={styles.GlobalTradeStatsBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.EnrchglobData}>
                            <hr className={styles.hrLines} />
                            <h2>Enriched Global Trade Data</h2>
                            <hr className={styles.hrLines} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.EnrichDataGlobaltr}>
                            <ul className={styles.lsitofTradedata}>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <Image
                                            src="/trade-data.png"
                                            height={70}
                                            width={70}
                                            alt="countries"
                                        />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>190+</h3>
                                        <h4>Countries</h4>
                                        <p>Import Export Trade Data</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <Image
                                            src="/exclusive-data.png"
                                            height={78}
                                            width={78}
                                            alt="exclusive"
                                        />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>55+</h3>
                                        <h4>Countries</h4>
                                        <p>Detailed Customs Data</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <Image
                                            src="/countries-data.png"
                                            height={70}
                                            width={70}
                                            alt="detailed"
                                        />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>30+</h3>
                                        <h4>Countries</h4>
                                        <p>Exclusive Data</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <Image
                                            src="/company-contacts.png"
                                            height={70}
                                            width={70}
                                            alt="company"
                                        />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>10M+</h3>
                                        <h4>Company’s</h4>
                                        <p>and Employee’s Contact</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default GlobalTradeStats;