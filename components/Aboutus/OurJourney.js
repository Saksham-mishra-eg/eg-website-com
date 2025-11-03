// Ourjourney.js

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./Ourjourney.module.css";
import HorizontalTimelines from './HorizontalTimeline';

function Ourjourney() {

    return (
        <div className={styles.OurjourneyBg}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className={styles.ourJurneyBoxtd}>
                            <div className={styles.FocuOndJrny}>
                                <h2>Our journey</h2>
                                <p>Since our founding in 2012, Export Genius has risen to the rank of market leader in Global trade data, adding thousands of employees and customers, as well as a trophy case of awards along the way.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={styles.ortimeLigHoei}>
                            <HorizontalTimelines />
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Ourjourney;
