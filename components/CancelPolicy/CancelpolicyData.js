"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CancelpolicyData.module.css";
import { Container, Col, Row } from "react-bootstrap";

function CancelpolicyData() {

    return (
        <div className={styles.Cancelpolicypage}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.GeheadingPolicy}>
                            <h1>Cancel Export Genius Subscription</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.pvcpol_cnt1}>
                            <h2>Cancelation of Free Trial</h2>
                            <p>You can cancel your free trial anytime during your 7 days trial. After you cancel your Free Trial, we will not charge your card and you can continue using our platform for 7 days. Your free trial will expire after 7 days from the date of activation of your account.</p>

                            <p><b>To cancel your Free Trial, please follow the steps:</b></p>
                            <ol className={styles.firlemtul}>
                                <li><a href="https://dashboard2.exportgenius.in/" target="_blank" rel="noreferrer">Login</a> to Export Genius Dashboard</li>
                                <li>Click on Top Right Corner at your Name.</li>
                                <li>Go to the Subscription page. </li>
                                <li>Click on to unsubscribe link.</li>
                            </ol>

                            <h5>Important Notice</h5>
                            <p>To avoid getting charged, you need to cancel your free trial at least one day before the trial expires. If you’ve missed cancelling your free trial and have been charged for your subscription, please refer to the <a href="/refund-policy">Refund Policy</a>.</p>
                        </div>

                        <div className={styles.pvcpol_cnt1}>
                            <h2>Cancelation of Subscription</h2>
                            <p>After you cancel your subscription, you will lose access to all Premium features at the end of your current billing cycle.</p>
                            <br />
                            <h5>Important Notice</h5>
                            <p>To avoid getting charged for another billing cycle, you need to cancel your plan at least one day before your next scheduled billing date. If you’ve missed cancelling your subscription and have been charged, please refer to the <a href="/refund-policy">Refund Policy</a>.</p>
                        </div>

                        <div className={styles.pvcpol_cnt1}>
                            <p>If you signed up directly through Export Genius (desktop or mobile web), you can only cancel your subscription from the Export Genius desktop website after login to Dashboard.</p>
                            <p><b>To cancel your subscription, please follow the steps:</b></p>
                            <ol className={styles.firlemtul}>
                                <li><a href="https://dashboard2.exportgenius.in/" target="_blank" rel="noreferrer">Login</a> to Export Genius Dashboard</li>
                                <li>Click on Top Right Corner at your Name.</li>
                                <li>Go to the Subscription page. </li>
                                <li>Click on to unsubscribe link.</li>
                            </ol>
                        </div>

                        <div className={styles.pvcpol_cnt1}>
                            <h2>For Additional Information</h2>
                            <p>If you have any questions or doubts about the rights and restrictions given above for using our Online Platform and Website, please go through our <a href="/terms-and-conditions">Terms &amp; Condition</a> , <a href="/privacy-policy">Privacy Policy</a> &amp; <a href="/refund-policy">Refund Policy</a> or You may contact us or send an email to <a href="mailto:info@exportgenius.in" target="_blank" rel="noreferrer">info@exportgenius.in</a>.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CancelpolicyData;