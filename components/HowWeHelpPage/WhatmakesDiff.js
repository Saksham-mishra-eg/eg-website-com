import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WhatmakesDiff.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

function WhatmakesDiff() {

    return (
        <div className={styles.WhatmakesDiffBG}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.Whtmakesoems}>
                            <h2>What makes Export Genius Different from the rest?</h2>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.DirrderRest}>
                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/report.png" alt="Data report" width={74} height={74} />
                                <h3>Historical Data Available</h3>
                                <p>Explore the history of countries from 2012 & see how markets, global economies have changed. Analyze trends and patterns to make smarter decisions.</p>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/trends.png" alt="Quality Data" width={74} height={74} />
                                <h3>Latest Trade Insights</h3>
                                <p>With Export Genius, stay at the edge of the world. The EG dashboard features the latest market trends, trade insights of commodities, and export-import data.</p>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/data-visualizatios.png" alt="visualizatios" width={74} height={74} />
                                <h3>Easy-On-Budget</h3>
                                <p>Be Assured to have a one-dashboard that fits your trade data needs. What's even special? Our dashboard is economical and affordable</p>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/access-control.png" alt="Data Access" width={74} height={74} />
                                <h3>Personalized Dashboard </h3>
                                <p>Get a customized view of data by using multiple filters like HS Code, Product Description, Buyer, Seller, Origin, Destination, etc.</p>
                            </div>

                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/compehensive.png" alt="Comprehensive" width={74} height={74} />
                                <h3> Visually-Appealing Data</h3>
                                <p>Concise, organized data made on the basis of importer, exporter, HS Code, Product description. Discover the intricacies of global trade data with ease & clarity.</p>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <Image src="/verrify.png" alt="Quality Data" width={74} height={74} />
                                <h3>Add Country and Upgrade Plan</h3>
                                <p>Access to flexible custom options to stay in control of your international trade journey. View a specific country or upgrade your plan whenever you need. </p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>

    );
}


export default WhatmakesDiff;