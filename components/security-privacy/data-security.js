"use client";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./data-security.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const DataSecurity = () => {

    return (
        <div className={styles.dataSecurityars}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.dataSecuHeading}>
                            <h2>Data Security</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className={styles.dataScannning}>
                            <h3>Penetration testing</h3>
                            <Image
                                className={styles.secutyPimage}
                                alt="data-testing"
                                src="/data-testing.png"
                                width={301}
                                height={229}
                            />
                            <p>Annual network and application penetration tests are performed by a certified third-party consultant.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.dataScannning}>
                            <h3>Internal and external audits</h3>
                            <Image
                                className={styles.secutyPimage}
                                alt="data-scanning"
                                src="/data-scanning.png"
                                width={300}
                                height={198}
                            />
                            <p>Audits are carried out, quarterly, on access control, risk, information security, IT infrastructure, and HR procedures.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DataSecurity;