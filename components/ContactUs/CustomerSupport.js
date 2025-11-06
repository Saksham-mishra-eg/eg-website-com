"use client";
import styles from "./CustomerSupport.module.css";
import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import "./NavLinkd.css"
import FaQuestions from "../ContactUs/FaQuestions";
import Image from "next/image";

function CustomerSupport() {

    return (

        <div className={styles.CustomerSupportBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.CusomerSuproHead}>
                            <h2>Round-the-Clock Customer Support</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                        <Col sm={3}>
                            <div className={styles.navHeadnLetside}>
                                <Nav variant="" className="flex-column custom-tabs">
                                    <Nav.Item className={styles.navItemClsmdn}>
                                        <Nav.Link eventKey="first"> <Image className={styles.supporIncsImg} src="/cus-support.png" alt="support" width={29} height={29} /> Support & Chat </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.navItemClsmdn}>
                                        <Nav.Link eventKey="third"> <Image className={styles.supporIncsImg} src="/schedule.png" alt="demo" width={29} height={29} /> Schedule demo</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.navItemClsmdn}>
                                        <Nav.Link eventKey="fourth"> <Image className={styles.supporIncsImg} src="/help.png" alt="faq" width={29} height={29} /> FAQ</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                        <Col sm={9}>
                            <div className={styles.tabXConterares}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className={styles.tabPaneCenter}>
                                            <h3>Support Center</h3>
                                            <div className={styles.tabpNecenflex}>
                                                <div className={styles.EmailImgeicn}>
                                                    <a href="mailto:info@exportgenius.in">
                                                         <Image src="/email.png" alt="email" width={69} height={69} />
                                                        <h5>info@exportgenius.in</h5>
                                                    </a>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <button
                                                        type="button"
                                                        onClick={() => window?.$zoho?.salesiq?.chat?.start()}
                                                        className={styles.chatButton}
                                                    >
                                                         <Image src="/live-chat.png" alt="Live Chat" width={69} height={69} />
                                                        <h5>Live Chat</h5>
                                                    </button>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <a href="tel:+918003800357">
                                                        <Image src="/phone-call.png" alt="phone-call" width={69} height={69} />
                                                        <h5>+91 8003 8003 57</h5>
                                                    </a>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <a
                                                        href="https://wa.me/8003800357"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Image src="/qrscan.png" alt="qrscan" width={69} height={69} />
                                                        <h5 className="mb-0">+91 8003 8003 57</h5>
                                                        <p>Scan QR code & get in
                                                            touch with us</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    
                                    <Tab.Pane eventKey="third">
                                        <div className={styles.tabPaneCenter}>
                                            <h3>Schedule Demo Center</h3>
                                            <div className={styles.tabpNecenflex}>
                                                <div className={styles.EmailImgTiketn}>
                                                    <div className={styles.Cntctdmscn}>
                                                        <iframe
                                                            width="100%"
                                                            height="550px"
                                                            src="https://exportgenius.zohobookings.in/portal-embed#/eg"
                                                            frameBorder="0"
                                                            allowFullScreen
                                                            loading="lazy"
                                                            title="Export Genius Booking Portal"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className={styles.tabPaneCenter}>
                                            <h3>FAQ Center</h3>
                                            <div className={styles.tabpNecenflex}>
                                                <div className={styles.EmailImgTiketnFaq}>
                                                    <FaQuestions />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Col>
                    </Tab.Container>
                </Row>
            </Container>
        </div>
    );
}

export default CustomerSupport;