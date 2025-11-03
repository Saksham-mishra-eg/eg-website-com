"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./BusinessNeeds.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

function BusinessNeeds() {

    return (
        <div className={styles.WhatmakesDiffBG}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.Whtmakesoems}>
                            <h2>Why Your Business Needs This Data?</h2>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.DirrderRest}>
                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/report.png" alt="Data report" width={88} height={73} />
                                <h3>Customer Discovery</h3>
                                <p>Get detailed information on the trade activities of global companies and discover potential importers and exporters for your product. With in-depth analysis of data, connect with the right customers.</p>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/trends.png" alt="Quality Data" width={88} height={73} />
                                <h3>Supply Chain Analysis</h3>
                                <p>Find from where importers are buying goods and to whom exporters are selling goods. Assess policies and economic activities to spot inflation, market disruptions, and so on from supply chain analysis.</p>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/data-visualizatios.png" alt="visualizatios" width={88} height={73} />
                                <h3>Strategic Decision-Making</h3>
                                <p>Analyze import-export actions of companies, determine the price of commodities, and get a complete market overview with the help of our essential data to develop strategy-based business decisions.</p>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/access-control.png" alt="Data Access" width={88} height={73} />
                                <h3>Risk Analysis</h3>
                                <p>Reduce your risk in international trade by knowing companies trade history, commodities price fluctuations, country’s and commodities restrictions, customs Duty rates and other taxes impact on your business etc.</p>
                            </div>

                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/compehensive.png" alt="Comprehensive" width={88} height={73} />
                                <h3>Trade Developments</h3>
                                <p>With the help of our import-export data, monitor what is happening in the global market to find profitable opportunities and manage risk.</p>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/verrify.png" alt="Quality Data" width={88} height={73} />
                                <h3>Market Intelligence</h3>
                                <p>Gain useful Global market insights on importers, exporters, HS Codes, commodities, countries, and so on.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default BusinessNeeds;