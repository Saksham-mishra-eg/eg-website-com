"use client"
import styles from "./HelpCenterTabsArea.module.css";
import { Container, Col, Row, Nav, Tab, Button, Modal } from "react-bootstrap";
import React, { useState } from 'react';
import ZohoForm from "../../constants/ZohoForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

function HelpCenterTabsArea() {
        const router = useRouter();

    const handleChangeLogin = () => {
         router.push("https://dashboard2.exportgenius.in/help-support.aspx", "_blank");
    }

    const handleChangeTicket = () => {
         router.push("https://dashboard2.exportgenius.in/AddTicket.aspx", "_blank");
    }

    const [show, setShow] = useState(false);
    const [zohoShow, setZohoShow] = useState(false);



    return (

        <div className={styles.HelpCenterTabsAreaBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.areyouNew}>
                            New or Existing? Find the Help You Need Here
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                        <Col sm={12} md={3}>
                            <div className={styles.navHeadnLetside}>
                                <Nav variant="pills" className="flex-column custom-tabs nav nav-pills nav-fill">
                                    <Nav.Item className={styles.navItemClsmdn}>
                                        <Nav.Link className={styles.navItemLlink} eventKey="first">  Existing Customer  </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className={styles.navItemClsmdn}>
                                        <Nav.Link className={styles.navItemLlink} eventKey="second"> New Customer </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                        <Col sm={12} md={9}>
                            <div className={styles.tabXConterares}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className={styles.tabPaneCenter}>
                                            <div className={styles.loginInVector}>
                                                <div className={styles.lingNanchTag} >
                                                    <Image src="/vector-login.png" alt="login" width={26} height={24} /> Not Able To Log In</div>
                                                <h6 className={styles.heheloGet}>
                                                    <button onClick={() => setZohoShow(true)}>
                                                        Get Help
                                                    </button>
                                                </h6>
                                            </div>
                                            <div className={styles.tabpNecenflex}>
                                                <div className={styles.EmailImgeicn}>
                                                    <a href="mailto:info@exportgenius.in">
                                                        <Image src="/email.png" alt="email" width={48} height={48} />
                                                        <span>Email</span>
                                                        <p>Reach us via email for detailed help.</p>
                                                    </a>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <button role="button" onClick={() => (window)?.$zoho?.salesiq?.chat?.start()}>
                                                        <Image src="/live-chat.png" alt="Live Chat" width={48} height={48} />
                                                        <span>Chat</span>
                                                        <p>Connect with our support team instantly through live chat.</p>
                                                    </button>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <a href="tel:+918003800357">
                                                        <Image src="/phone-call.png" alt="phone-call" width={48} height={48} />
                                                        <span>Phone</span>
                                                        <p>Call us directly for quick and personalized support.</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={styles.loginInVector}>
                                                <button className={styles.lingNanchTag} > <Image src="/vector-error.png" alt="warning vector" width={22} height={24} /> Log in our dashboard or create support ticket for detailed help!</button>
                                            </div>
                                            <div className={styles.CreatndLongbtn} >
                                                <Button type="button" className={styles.longTicketBtn} onClick={handleChangeLogin} >Help & Support</Button>
                                                <Button type="button" className={styles.longTicketBtn} onClick={handleChangeTicket}>Create Ticket</Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <div className={styles.tabPaneCenter}>
                                            <h3 className={styles.salesQuery}>Sales Query</h3>
                                            <div className={styles.cunsQuery}>
                                                <h4 onClick={() => setShow(true)}> <Image src="/customer-query.png" alt="connect with" width={31} height={31} />  Connect with Our Sales Agent </h4>
                                            </div>
                                            <h3 className={styles.genralsQuery}>General Query </h3>
                                            <div className={styles.tabpNecenflex}>

                                                <div className={styles.EmailImgeicn}>
                                                    <a href="mailto:info@exportgenius.in">
                                                        <Image src="/email.png" alt="email" width={48} height={48} /> <span>Email</span>
                                                        <p>Reach us via email for detailed help.</p>
                                                    </a>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <button role="button" onClick={() => (window)?.$zoho?.salesiq?.chat?.start()}>
                                                        <Image src="/live-chat.png" alt="Live Chat" width={48} height={48} /> <span>Chat</span>
                                                        <p>Connect with our support team instantly through live chat.</p>
                                                    </button>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <a href="tel:+918003800357">
                                                        <Image src="/phone-call.png" alt="phone-call" width={48} height={48} /> <span>Phone</span>
                                                        <p>Call us directly for quick and personalized support.</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.procutQuerty}>
                                            <h3 className={styles.salesQuery}>Product Query</h3>
                                            <div className={styles.formAareasboxx}>
                                                <ZohoForm
                                                    containerId="zf_div_RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                                                    formUrl="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                                                />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Col>
                    </Tab.Container>
                    <Modal
                        className={styles.modalLarge}
                        size="lg"
                        show={show}
                        onHide={() => setShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                <strong> Connect with Our Support Agent</strong>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe
                                width="100%"
                                height="550px"
                                src="https://exportgenius.zohobookings.in/portal-embed#/eg"
                                frameBorder="0"
                                allowFullScreen
                                loading="lazy"
                                title="Export Genius Booking Portal"
                            />
                        </Modal.Body>
                    </Modal>

                    <Modal
                        className={styles.modalLarge}
                        size="lg"
                        show={zohoShow}
                        onHide={() => setZohoShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                {/* <strong>Get Help With Our Support Agent</strong> */}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe
                                width="100%"
                                height="550px"
                                src="https://exportgenius.zohobookings.in/portal-embed#/eg"
                                frameBorder="0"
                                allowFullScreen
                                loading="lazy"
                                title="Export Genius Booking Portal"
                            />
                        </Modal.Body>
                    </Modal>
                </Row>
            </Container>
        </div>
    );
};

export default HelpCenterTabsArea;