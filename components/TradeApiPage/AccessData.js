"use client";

import styles from "./AccessData.module.css";
import { Col, Row, Button, Container, Modal } from "react-bootstrap";
import ZohoForm from "../../constants/ZohoForm";
import { useState } from "react";
import Image from "next/image";

function AccessData() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.AccessDataPage}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.ApiSceData}>
                            <h2>Access data anywhere, anytime </h2>
                            <p>Get the freshest data at any time and keep it automatically updated so you don’t miss any opportunity.</p>
                            <Button className={styles.CnteExpertbtn} onClick={handleShow}>Contact Our Expert</Button>{' '}
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.ApiSceDatImfa}>
                            <Image src="/api/access-data.png" alt="api" width={636} height={482} />
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
        </div>
    );
}

export default AccessData;