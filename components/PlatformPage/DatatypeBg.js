"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DatatypeBg.module.css";
import { Container, Col, Row} from "react-bootstrap";

function Datatypebg() {

    return (
        <div className={styles.DatatypebgOnline}>
            <Container>
                <Row>
                    <Col md={8}>
                        <div className={styles.GeGlobl}>
                            <h2>Choose and View Extraordinary Results</h2>
                          <p>We deliver exceptional data quality and coverage to ensure you have the most actionable business intelligence at your fingertips. Based on your need, you can choose the data type and access essential data.</p>
                        </div>
                    </Col>
                </Row>
               
            </Container>
        </div>
    );
}

export default Datatypebg;