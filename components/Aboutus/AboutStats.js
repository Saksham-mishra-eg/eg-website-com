"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AboutStats.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

function AboutStats() {

    return (
        <div className={styles.AboutStatsBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.StatsOFabout}>
                            <div className={styles.lsitofststs}>
                                <div className={styles.yerinDustb}>
                                    <h2>12+</h2>
                                    <p>Years Industry
                                        Experience</p>
                                </div>
                            </div>
                            <div className={styles.lsitofststs}>
                                <div className={styles.yerinDustb}>
                                    <h2>190+</h2>
                                    <p>Countries Import
                                        Export Trade Data</p>
                                </div>
                            </div>
                            <div className={styles.lsitofststs}>
                                <div className={styles.yerinDustb}>
                                    <h2>62+</h2>
                                    <p>Countries Detailed
                                        Custom Data
                                    </p>
                                </div>
                            </div>
                            <div className={styles.lsitofststs}>
                                <div className={styles.yerinDustb}>
                                    <h2>32+</h2>
                                    <p>Countries Exclusive Data</p>
                                </div>
                            </div>
                            <div className={styles.lsitofststs}>
                                <div className={styles.yerinDustb}>
                                    <h2>10M+</h2>
                                    <p>Company’s and
                                        Employee’s Contacts </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col lg={12}>
                        <div className={styles.bgCircle}>
                            <Row>
                                <Col md={6}>
                                    <div className={styles.abouEgs}>
                                        <Image src="/officeBg.png" alt="Building" width={567} height={379} />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className={styles.abouEgGns}>
                                        <h2>An Insider View of EG!</h2>
                                        <p>Imagine having all the import and export data from the world on one dashboard. Impossible, right? We made this possible. Export Genius was made with an approach to collect raw data, store it in one place, and make it accessible to the world. The idea that started in 2012 has been continuously advancing and now boasts serving 20 K+ clients across the world. We offer “in-depth” market analysis, insights, and trends that could help you stay ahead in the competitive global market.</p>
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

export default AboutStats;