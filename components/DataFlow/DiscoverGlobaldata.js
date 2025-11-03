"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DiscoverGlobaldata.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function DiscoverGlobaldata() {

    return (
        <div className={styles.discoverGlobaldataBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.globDataSrch}>
                            <h1>Discover Global Data of 190+ Countries. Get Export-Import Insights, Buyers, Suppliers, Markets Here.</h1>
                            <p>At the helm of market research, we lead the way in deciphering industry landscapes, consumer preferences, and emerging trends.</p>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default DiscoverGlobaldata;