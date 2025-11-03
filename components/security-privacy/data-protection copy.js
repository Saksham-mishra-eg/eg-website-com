"use client";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./data-protections.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import Image from "next/image";

const DataProtections = () => {

    return (
        <div className={styles.Dtprotections}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.datheaignpro}>
                            <h2>Data Protection </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className={styles.acrodiaondata}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className={styles.acnrdionItemsmrg}>
                                    <Accordion.Header className={styles.acordiHeading}>GDPR compliant</Accordion.Header>
                                    <Accordion.Body>
                                        <div className={styles.acrdionBdyutxt}>
                                            Apollo is GDPR compliant as both a Data Processor and Data Controller.
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className={styles.acnrdionItemsmrg}>
                                    <Accordion.Header className={styles.acordiHeading}>Encryption in transit and at rest</Accordion.Header>
                                    <Accordion.Body>
                                        <div className={styles.acrdionBdyutxt}>
                                            Both idle and active data is encrypted over public networks and in our databases.
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className={styles.acnrdionItemsmrg}>
                                    <Accordion.Header className={styles.acordiHeading}>Database security</Accordion.Header>
                                    <Accordion.Body>
                                        <div className={styles.acrdionBdyutxt}>
                                            Databases are built with multi-layer security including encrypted passwords, two factor authentication, intrusion detection systems, and VPC with strict firewall settings.
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className={styles.acnrdionItemsmrg}>
                                    <Accordion.Header className={styles.acordiHeading}>Privacy & safety features</Accordion.Header>
                                    <Accordion.Body>
                                        <div className={styles.acrdionBdyutxt}>
                                            Custom control to enable or disable privacy-impacting features based on your needs.
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.acroBanner}>
                            <Image
                                className={styles.secutyPimage}
                                alt="data-protection"
                                src="/data-protection.png"
                                width={419}
                                height={401}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DataProtections;
