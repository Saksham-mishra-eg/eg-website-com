"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradeAnalysis.module.css";
import { Col, Row, Button, Container, Modal } from "react-bootstrap";
import { useState } from "react";
import ZohoForm from "../../constants/ZohoForm";
import Image from "next/image";

function TradeAnalysis() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.onlinePlatform}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.tradeText}>
                            <h1 className={styles.howYOur}>
                                Do your Trade Analysis with Global Import and Export Trade Data
                            </h1>
                            <p>Leverage the power of Global Trade data with extensive market insights for better decision-making.</p>
                            <Button className={styles.Explormorebtn} onClick={handleShow}>Request a quote</Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                             <Image src="/tradeanalysis.png" alt="trade analysis" width={636} height={562} />
                        </div>
                    </Col>
                </Row>
            </Container>
           <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Body>
                    {show && (
                        <ZohoForm
                            containerId="zf_div_modal"
                            formUrl="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                        />
                    )}
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default TradeAnalysis;