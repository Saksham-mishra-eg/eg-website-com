"use client";
import styles from "./GlobalTradeStats.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

function GlobalTradeStats() {

    return (
        <div className={styles.GlobalTradeStatsBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.GleoHeainfCover}>
                            <h2 className={styles.GlobalTradeStatsTitle}>Global Trade Data Coverage</h2>
                            <p>Access Import and Export Data of Global Countries including, 55+ Countries Detailed Customs Data and 30+ Countries Exclusive Data.</p>
                        </div>
                    </Col>
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
                                        <h3>62+</h3>
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
                                        <h3>32+</h3>
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