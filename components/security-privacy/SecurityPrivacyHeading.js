"use client";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./SecurityPrivacyHead.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const SecurityPrivacyHead = () => {

    return (
        <div className={styles.securituPrivsen}>
            <Container>
                <Row>
                    <Col md={9}>
                        <div className={styles.securtyPartner}>
                            <h1>Security and compliance that you can trust</h1>
                            <p>Export Genius platform ensures security of information with the highest industry standards.</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <Image
                            alt="settings icon"
                            src="/security.png"
                            width={164}
                            height={168}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SecurityPrivacyHead;
