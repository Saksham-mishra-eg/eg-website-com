"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NeedplanHelp.module.css";
import { Col, Row, Container } from "react-bootstrap"
import React from 'react';
import EmailFormDialog from "../EmailForm/EmailFormDialog";
import Image from "next/image";

function NeedplanHelp() {

    const [isOpen, setIsOpen] = React.useState(false);
    const onSubmit = () => {
        console.log('sbumit')
    }

    return (
        <div className={styles.NeedplanHelpBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.Chooseplan}>
                            <h2>Need help choosing a plan?</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.ChooseplanBoxex}>
                            <div className={styles.choseneed}>
                                <Image src="/phone-icon.png" width={68} height={69} alt="phone" />
                                <a href="tel:+918003800357">+91 8003 8003 57</a>
                                <a href="tel:+911147048012">+91 11-47048012</a>
                                <a href="tel:+911147048013">+91 11-47048013</a>
                            </div>
                            <div className={styles.choseneed}>
                                <a href="#chat" onClick={() => (window)?.$zoho?.salesiq?.chat?.start()}> <Image src="/chat-icon.png" width={68} height={69} alt="chat" />
                                    TALK TO EXPERTS</a>
                            </div>
                            <div className={styles.choseneed}>
                                <a href="/contact-us">  <Image src="/calendar-icon.png" width={68} height={69} alt="calendar" />
                                    Schedule a free demo</a>
                            </div>
                            <div className={styles.choseneed}>
                                <a href="#form" onClick={() => setIsOpen(!isOpen)}> <Image src="/settings-icon.png" width={68} height={69} alt="settings" />
                                    looking For api</a>
                            </div>
                            <div className={styles.choseneed}>
                                <a href="https://wa.me/8003800357">  <Image src="/qr.png" width={68} height={69} alt="qr code" />
                                    <p>+91-8003-8003-57
                                        Scan QR code & get in
                                        touch with us
                                    </p></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <EmailFormDialog isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit} center={false} />
        </div>
    );
}

export default NeedplanHelp;