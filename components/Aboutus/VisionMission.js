"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./VisionMission.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

function VisionMission() {

    return (
        <div className={styles.VisionMissionBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.vsnmsn}>
                            <h2>Our Vision & Mission</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.visonndmisson}>
                            <div className={styles.visonbx}>
                                 <Image src="/vision.png" alt="vision" width={50} height={50} />
                                <h3>Vision</h3>
                                <p>EG aims to become the next-gen, futuristic data provider for every corporation and enterprise across the globe by embracing the latest AI technology, and dynamic data visualization and promoting growth & prosperity across industries and continents. </p>
                            </div>
                            <div className={styles.visonbx}>
                                <Image src="/mission.png" alt="mission" width={50} height={50} />
                                <h3>Mission</h3>
                                <p>To be the global leader for being the trade data provider. We aim to offer data coverage of international trade developments with meaningful insights that help companies make more informed decisions and put moon-shot goals within reach.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default VisionMission;