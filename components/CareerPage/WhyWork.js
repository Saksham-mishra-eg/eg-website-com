"use client";
import styles from "./WhyWork.module.css";
import { Col, Row, Container } from "react-bootstrap";

function WhyWork() {

    return (
        <div className={styles.WhyWorkOBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.WhycorkEG}>
                            <div className={styles.EgWorksnt}>
                                <h2>Why Work at EG?</h2>
                            </div>
                            <div className={styles.EgWorksnt}>
                                <div className={styles.VlLines}></div>
                            </div>
                            <div className={styles.EgWorksnt}>
                                <p>EG is a place for believers having the potential to become achievers. With a Carpe Diem outlook and a go-getter attitude, our experts believe in nurturing our extended family like you, who could join and add a layer of value and grace to our rich team. You win, we win, and together we strive to become better. #GetGenius with EG! </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WhyWork;