"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Possitions.module.css";
import {Container, Col, Row, Table } from "react-bootstrap";
import Image from "next/image";

function Possitions() {

    return (
        <div className={styles.PossitionsOBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.Posygheading}>
                            <h4>Positions</h4>
                            <h3>Attracting the best talent </h3>
                            <p>Apply for available positions at our head office. </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.engTabledta}>
                            <Table>
                                <tbody>
                                    <tr className={styles.trClaOFengdata}>
                                        <td>
                                            <div className={styles.tableDivttd}>
                                                <p>Engineering</p>
                                                <p> <span>Site Reliability Engineer (d/f/m, Berlin)</span> </p>
                                            </div>
                                            <Image src="/primary.png" alt="arrow" width={11} height={18} />
                                        </td>
                                        <td>
                                            <div className={styles.tableDivttd}>
                                                <p>Engineering</p>
                                                <p> <span>Site Reliability Engineer (d/f/m, Berlin)</span> </p>
                                            </div>
                                            <Image src="/primary.png" alt="arrow" width={11} height={18} />
                                        </td>
                                    </tr>
                                    <tr className={styles.trClaOFengdata}>
                                        <td>
                                            <div className={styles.tableDivttd}>
                                                <p>Engineering</p>
                                                <p> <span>Site Reliability Engineer (d/f/m, Berlin)</span> </p>
                                            </div>
                                            <Image src="/primary.png" alt="arrow" width={11} height={18} />
                                        </td>
                                        <td>
                                            <div className={styles.tableDivttd}>
                                                <p>Engineering</p>
                                                <p> <span>Site Reliability Engineer (d/f/m, Berlin)</span> </p>
                                            </div>
                                            <Image src="/primary.png" alt="arrow" width={11} height={18} />
                                        </td>
                                    </tr>
                                    <tr className={styles.trClaOFengdata}>
                                        <td>
                                            <div className={styles.tableDivttd}>
                                                <p>Engineering</p>
                                                <p> <span>Site Reliability Engineer (d/f/m, Berlin)</span> </p>
                                            </div>
                                            <Image src="/primary.png" alt="arrow" width={11} height={18} />
                                        </td>
                                        <td>
                                            <div className={styles.tableDivttd}>
                                                <p>Engineering</p>
                                                <p> <span>Site Reliability Engineer (d/f/m, Berlin)</span> </p>
                                            </div>
                                            <Image src="/primary.png" alt="arrow" width={11} height={18} />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Possitions;