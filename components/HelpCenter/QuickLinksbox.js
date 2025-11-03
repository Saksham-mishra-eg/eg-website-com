"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./QuickLinksbox.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";

function QuickLinksbox() {

    return (

        <div className={styles.QuickLinksboxSection}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={styles.qudklNks}>
                            <h2>Quick Links</h2>
                        </div>
                        <div className={styles.quicllinYTabs}>
                            <div className={styles.LinksofBoxex}>
                                <a href="/faq">
                                    <Image src="/faqicon.png" alt="Faq Icon" width={44} height={44} />
                                    <p>FAQ</p>
                                </a>
                            </div>
                            <div className={styles.LinksofBoxex}>
                                <a href="/data">
                                    <Image src="/dataicon.png" alt="Data Icon" width={44} height={44} />
                                    <p>Data Availability</p>
                                </a>
                            </div>
                            <div className={styles.LinksofBoxex}>
                                <a href="/pricing">
                                    <Image src="/planicon.png" alt="Plan Icon" width={44} height={44} />
                                    <p>Plan & Pricing</p>
                                </a>
                            </div>
                            <div className={styles.LinksofBoxex}>
                                <a href="contact-us">
                                    <Image src="/contacticon.png" alt="C Icon" width={44} height={44} />
                                    <p>Contact Us</p>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default QuickLinksbox;