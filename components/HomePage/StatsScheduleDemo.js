"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./StatsScheduleDemo.module.css";
import { Col, Container, Row } from "react-bootstrap";
import GlobalTradeStats from "./GlobalTradeStats";
import Image from "next/image";

function StatsScheduleDemo() {

    return (
        <div className={styles.StatsDemoSection}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.briadbisemo}>
                            <div className={styles.TextEnrichtrd}>
                                <GlobalTradeStats />
                            </div>
                            <div className={styles.Iframdemobcs}>
                                <iframe
                                    width="100%"
                                    height="550px"
                                    src="https://exportgenius.zohobookings.in/portal-embed#/eg"
                                    frameBorder="0"
                                    allowFullScreen
                                    loading="lazy"
                                    title="Export Genius Booking Portal"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default StatsScheduleDemo;