"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WeAreeg.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";

function WeAreeg() {

    return (
        <div className={styles.WeAreegOBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.WEEhading}>
                            <h3>We Are Export Genius</h3>
                            <p>Join our journey to build a global company and share rewarding experiences.</p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.WEEhadingVideo}>
                            <Image src="eg-video.png" alt="eg video" width={1253} height={595} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WeAreeg;