"use client";
import styles from "./HereToHelp.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Client from "./Clients";
import ZohoForm from "../../constants/ZohoForm";

function HereToHelp() {

    return (
        <div className={styles.HereToHelpPage}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.ForHereTole}>
                            <h3>We’re Here to Help</h3>
                            <ZohoForm
                                containerId="zf_div_RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                                formUrl="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.ApiSceDatImfa}>
                            <Client />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HereToHelp;