"use client";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./NewRelease.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
const NewRelease = () => {

    return (
        <div className={styles.newReleasection}>
            <Container>
                <Row className={styles.alignzCnter}>
                    <Col md={7}>
                        <div className={styles.newheadRelase}>
                            <h1>New Releases</h1>
                            <p>
                                Explore the latest updates, features, and improvements to our products. We&#39;re constantly evolving to provide you with the best experience. Check out what&#39;s new today!
                            </p>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className={styles.releaseGraph}>
                            <Image
                                src="/bg-graph.jpg"
                                alt="graph"
                                width={526}
                                height={351}
                            />
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default NewRelease;
