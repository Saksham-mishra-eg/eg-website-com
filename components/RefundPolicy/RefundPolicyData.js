"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from ".././CancelPolicy/CancelpolicyData.module.css";
import { Container, Col, Row } from "react-bootstrap";

function RefundPolicyData() {

    return (
        <div className={styles.Refundpolicypage}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.GeheadingPolicy}>
                            <h1>Refund Policy</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.pvcpol_cnt1}>
                            <h2>100% Money Back Guarantee – No Questions Asked!!</h2>
                            <p>You can cancel your free trial anytime during your 7 days trial after login to the dashboard under the subscription page. After you cancel your free trial, we will not charge your card however you can continue using our platform until the free trial expires.</p>
                            <p>To avoid getting charged, you need to cancel your free trial at least one day before the trial expires. If you’ve missed cancelling your free trial and have been charged for your subscription, please refer to the below Refund Policy.</p>
                            <p>Subscriptions are 100% refundable within 3 days from the date the subscription is charged with a condition that you DO NOT download more than 500 Points in Excel from the Export Genius Online Platform. The refund policy is applicable to our online platform subscriptions only.</p>
                            <p>If you cancel your ongoing paid subscription, we will not charge your card from the next billing cycle however you can use all your Premium features until your plan expires.</p>
                        </div>
                        <div className={styles.pvcpol_cnt1}>
                            <h2>How to Claim Your Refund:</h2>
                            <p>To claim your refund, please reach us at <a href="mailto:support@exportgenius.in" target="_blank" rel="noreferrer">support@exportgenius.in</a>, with your details such as your User Id/ Registered Email and Contact Number. Our team will contact you within 2 working days.</p>
                        </div>
                        <div className={styles.pvcpol_cnt1}>
                            <h2>For Additional Information</h2>
                            <p>If you have any questions or doubts about the rights and restrictions given above for using our Online Platform and Website, please go through our <a href="/terms-and-conditions" >Terms &amp; Condition</a> , <a href="/privacy-policy">Privacy Policy</a> &amp; <a href="/refund-policy">Refund Policy</a> or You may contact us or send an email to <a href="mailto:info@exportgenius.in" target="_blank" rel="noreferrer">info@exportgenius.in</a>.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RefundPolicyData;