"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CountriCoverd.module.css";
import { Col, Row, Container, Modal } from "react-bootstrap";
import { useState } from "react";
import "../PricingPage/modal.css";
import Image from "next/image";
import ZohoForm from "../../constants/ZohoForm";

function CountriCoverd() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className={styles.CountriCoverdPorm}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            <Image src="/country-coverd.png" alt="trade analysis" width={415} height={401} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeText}>
                            <h1 className={styles.howYOur}>
                                Countries Covered
                            </h1>
                            <p>Whether you want to analyze the market of a particular country or a whole continent, we provide Trade data for global Market.</p>
                            <ul className={styles.countrContinetn}>
                                <li>Asia Trade Data </li>
                                <li>Africa Trade Data </li>
                                <li>Latin America Trade Data </li>
                                <li>Europe Trade Data  </li>
                            </ul>
                            <button className={styles.Explormorebtn} onClick={handleShow} ><span>Explore All Countries Data</span> </button>
                        </div>
                    </Col>
                </Row>
            </Container >
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

export default CountriCoverd;