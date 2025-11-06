"use client";
import styles from "./ContactIframe.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

function ContactIframe() {

    return (
        <div className={styles.ContactIframeBg}>
            <Container>
                <div className={styles.CntsctBgColr}>
                    <Row>
                        <Row>
                            <Col md={12}>
                                <div className={styles.ContactAreas}>
                                    <h3>Contact us</h3>
                                    <h1>We're Just One Form Away From You. Fill in your details and our Experts are Happy to Assist!
                                    </h1>
                                </div>
                            </Col>
                        </Row>
                        <Col md={6}>
                            <div className={styles.wantSee}>
                                  <Image src="/demo.png" alt="demo Icon" width={68} height={68} />
                                <div className={styles.dSdhdemo}>
                                    <h5>Want to see <span>Dashboard</span> in action?</h5>
                                    <h1>Schedule a Demo</h1>
                                </div>
                            </div>

                            <div className={styles.IframeAreassectn}>
                                <div className="dmscn">
                                    <iframe
                                        width="100%"
                                        height="690px"
                                        src="https://exportgenius.zohobookings.in/portal-embed#/eg"
                                        frameBorder="0"
                                        allowFullScreen
                                        loading="lazy"
                                        title="Export Genius Booking Portal"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={styles.FomrZohoImplmnrt}>
                                {/* <ZohoForm
                                    containerId="zf_div_RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                                    formUrl="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                                /> */}
                                <iframe
                                    title="Get in Touch with Us"
                                    aria-label="Get in Touch with Us"
                                    frameBorder="0"
                                    allow="geolocation;"
                                    style={{ height: "800px", width: "100%", border: "none" }}
                                    src="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ContactIframe;