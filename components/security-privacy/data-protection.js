"use client";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./data-protections.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
                    <Col md={7}>
                        <div className={styles.acrodiaondata}>
                            <div className={styles.acnrdionItemsmrg}>
                                <div className={styles.acordiHeading}>GDPR compliant</div>

                                <div className={styles.acrdionBdyutxt}>
                                    Apollo is GDPR compliant as both a Data Processor and Data Controller.
                                </div>
                            </div>
                            <div className={styles.acnrdionItemsmrg}>
                                <div className={styles.acordiHeading}>Encryption in transit and at rest</div>
                                <div className={styles.acrdionBdyutxt}>
                                    Both idle and active data is encrypted over public networks and in our databases.
                                </div>
                            </div>
                            <div className={styles.acnrdionItemsmrg}>
                                <div className={styles.acordiHeading}>Database security</div>
                                <div className={styles.acrdionBdyutxt}>
                                    Databases are built with multi-layer security including encrypted passwords, two factor authentication, intrusion detection systems, and VPC with strict firewall settings.
                                </div>
                            </div>
                            <div className={styles.acnrdionItemsmrg}>
                                <div className={styles.acordiHeading}>Privacy & safety features</div>
                                <div className={styles.acrdionBdyutxt}>
                                    Custom control to enable or disable privacy-impacting features based on your needs.
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
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