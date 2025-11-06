"use client";
import styles from "./UnlockTradeInsight.module.css";
import { Col, Row, Button, Container, Modal } from "react-bootstrap";
import { useState } from "react";
import "../PricingPage/modal.css";
import Image from "next/image";

// ✅ import hook
import { useSlug } from "./SlugProvider";

function UnlockTradeInsight() {
    const slug = useSlug(); //

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const contentMap = {
        "vietnam-trade-data": {
            title: "Vietnam Import Export Data – Get Real Trade Data and Analytics",
            description: "Providing real-time trade insights, monitor market trends, and discover new opportunities with detailed Vietnam import-export data."
        },
        "indonesia-trade-data": {
            title: "Unlocking Powerful Trade Insights with Indonesia Import Export Data",
            description: "Gain a competitive edge in global trade by tapping into the depth and detail of Indonesia's import-export data."
        },
        "brazil-trade-data": {
            title: "Export Genius Provides Accurate Brazil Import Export Data",
            description: "Uncover trade trends, key markets, and product flows with detailed and reliable Brazil import-export data to power your global strategy."
        },
        "malaysia-trade-data": {
            title: "Malaysia Import Export Data - Unlock Trade Insights",
            description: "Access Verified Malaysia Trade Data for Smarter Business Decisions"
        }
    };

    const { title, description } = contentMap[slug] || contentMap["malaysia-trade-data"];

    return (
        <div className={styles.UnlockTradeInsightPage}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.unlockTrdInsh}>
                            <div className={styles.GloblTreadeHead}>
                                <Image src="/eg-logo.png" alt="eg logo" width={206} height={48} />
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <div className={styles.butnFreeContct}>
                                    <Button
                                        className={styles.TradescheDemoBtn}
                                        variant="success"
                                        onClick={handleShow}
                                    >
                                        Request For Demo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body>
                    {show && (
                        <iframe
                            src="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A?zf_rszfm=1"
                            style={{ border: "none", width: "100%", height: "760px" }}
                            title="Zoho Form"
                            allow="geolocation;"
                        />
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default UnlockTradeInsight;
