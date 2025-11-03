"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Aboutus.module.css";
import { Col, Row, Button, Container, Modal } from "react-bootstrap";
import { useState } from "react";
import ZohoForm from "../../constants/ZohoForm";

function Aboutus() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.AboutusBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.aboutHeader}>
                            <h4>About Export Genius</h4>
                            <h1>Offering Global Data</h1>
                            <div className={styles.imgeCline}>
                                <Button className={styles.Explormorebtn} onClick={handleShow}><span>Connect with us</span> </Button>
                            </div>
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

export default Aboutus;