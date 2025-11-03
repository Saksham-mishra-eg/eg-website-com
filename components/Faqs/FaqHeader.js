"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FaqHeader.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";

function FaqHeader() {

    return (
        <div className={styles.FaqHeaderBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.FaqHeaderText}>
                            <Image src="/helpfaq.png" alt="faq" width={56} height={56} />
                            <h1>Frequently Asked Questions</h1>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default FaqHeader;