"use client";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./security-compliance.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const SecurityCompliance = () => {

    return (
        <div className={styles.SecurityComplianceAres}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className={styles.complancePrgrm}>
                            <h2>Data Security and Regulatory Compliance</h2>
                            <div className={styles.secProgmrList}>
                                <div className={styles.numberListItems}>
                                    <h3>Risk Assessment: </h3>
                                </div>
                                <p>Identify and assess potential threats, vulnerabilities, and risks to your systems, data, and operations.</p>
                            </div>

                            <div className={styles.secProgmrList}>
                                <div className={styles.numberListItems}>
                                    <h3>Data Classification & Access Control: </h3>
                                </div>
                                <p>Ensure only authorized individuals can access sensitive data based on roles and responsibilities.</p>
                            </div>

                            <div className={styles.secProgmrList}>
                                <div className={styles.numberListItems}>
                                    <h3>Implement Security Controls: </h3>
                                </div>
                                <p>Deploy security measures to protect systems and data from unauthorized access, breaches, and other threats.</p>
                            </div>

                            <div className={styles.secProgmrList}>
                                <div className={styles.numberListItems}>
                                    <h3>Compliance with Regulatory Standards: </h3>
                                </div>
                                <p>Ensure your organization complies with industry-specific regulations and data protection laws.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className={styles.ComplCertification}>
                            <h3> <span>Ensuring Protection and Adherence </span>
                                Guarantee of protection of sensitive information from unauthorized access, data loss, or theft through encryption, and secure access controls.</h3>
                            <Image
                                alt="certificate"
                                src="/certificate.png"
                                width={504}
                                height={154}
                            />
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default SecurityCompliance;
