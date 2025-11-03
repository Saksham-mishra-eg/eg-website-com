"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AboutFeatures.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

function AboutFeatures() {

    return (
        <div className={styles.AboutFeaturesBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.feactuRabit}>
                            <h2>Features of Export Genius Trade Intelligence Platform</h2>
                            {/* <p>Export Genius is Not Just Your Import-Export Data Partner But a Companion for Long-Run</p> */}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <div className={styles.tradeFeactu}>
                            <div className={styles.feactrde}>
                                 <Image src="/cloud.png" alt="solutions" width={81} height={71} />
                                <h3>A One-Stop Solution</h3>
                                <p>Ditch the long trial of complex trade data. Export Genius offers easy-to-explore and visually attractive import/export data</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.tradeFeactu}>
                            <div className={styles.feactrde}>
                                <Image src="/real-time.png" alt="real time access" width={81} height={71} />
                                <h3>Real-Time Access</h3>
                                <p>Keep a tab on your competitor’s activities. Monitor their total shipments made, traded products, HS Code, quantity, price, and much more.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.tradeFeactu}>
                            <div className={styles.feactrde}>
                                 <Image src="/advanced-analytics.png" alt="analytics" width={81} height={71} />
                                <h3>Advanced Analytics</h3>
                                <p>Dive into global data analytics at your fingertips. Get access to trade analysis utilized by top industry leaders.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.tradeFeactu}>
                            <div className={styles.feactrde}>
                                <Image src="/support.png" alt="support" width={81} height={71} />
                                <h3>Complete Support</h3>
                                <p>Stay tuned with the market’s latest trends. Get enriched data insights that will help you get a better idea of what’s happening in almost every industry.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default AboutFeatures;