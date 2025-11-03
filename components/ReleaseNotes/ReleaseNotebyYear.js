"use client";
import React from "react";
import { Container, Col, Row, Accordion, useAccordionButton, Card } from "react-bootstrap";
import styles from "./ReleaseNotebyYear.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            // style={{ backgroundColor: 'pink' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const ReleaseNotebyyear = () => {

    return (
        <div className={styles.ReleaseNotebyyearsection}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.miRlesNote}>
                            <h2> Export Genius Release Notes</h2>
                        </div>
                    </Col>
                    <Col md={7} lg={7} sm={12}>
                        <Accordion defaultActiveKey="0">
                            <div className={styles.relaasbyDateContx}>
                                <div className={styles.yearofDate}>
                                    <CustomToggle eventKey="0"> <h2>January, 2025</h2></CustomToggle>
                                </div>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <h3>Lorem ipsum dolor sit amet,</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <h3>Lorem ipsum dolor sit amet,</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <h3>Lorem ipsum dolor sit amet,</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <h3>Lorem ipsum dolor sit amet,</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </div>
                            <div className={styles.relaasbyDateContx}>
                                <div className={styles.yearofDate}>
                                    <CustomToggle eventKey="1">  <h2>December, 2024</h2> </CustomToggle>
                                </div>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <h3>Lorem ipsum dolor sit amet,</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <h3>Lorem ipsum dolor sit amet,</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <h3>Lorem ipsum dolor sit amet,</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </div>
                            <div className={styles.relaasbyDateContx}>
                                <div className={styles.yearofDate}>
                                    <CustomToggle eventKey="2">   <h2>November, 2024</h2> </CustomToggle>
                                </div>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <h3>Lorem ipsum dolor sit amet,</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <h3>Lorem ipsum dolor sit amet,</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <h3>Lorem ipsum dolor sit amet,</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                    </Col>
                    <Col md={5} lg={5} sm={12}>
                        <div className={styles.StartRecentNotes}>
                            <div className={styles.getitnStart}>
                                <h2>Getting Started</h2>
                            </div>
                            <ul className={styles.notUlist}>
                                <li>Lorem ipsum dolor sit amet,</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <ul className={styles.notUlist}>
                                <li>Lorem ipsum dolor sit amet,</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <ul className={styles.notUlist}>
                                <li>Lorem ipsum dolor sit amet,</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <ul className={styles.notUlist}>
                                <li>Lorem ipsum dolor sit amet,</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className={styles.StartRecentNotes}>
                            <div className={styles.getitnStart}>
                                <h2>Continuous Compliance</h2>
                            </div>
                            <ul className={styles.notUlist}>
                                <li>Lorem ipsum dolor sit amet,</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <ul className={styles.notUlist}>
                                <li>Lorem ipsum dolor sit amet,</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className={styles.StartRecentNotes}>
                            <div className={styles.getitnStart}>
                                <h2>People Management</h2>
                            </div>
                            <ul className={styles.notUlist}>
                                <li>Lorem ipsum dolor sit amet,</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <ul className={styles.notUlist}>
                                <li>Lorem ipsum dolor sit amet,</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ReleaseNotebyyear;
