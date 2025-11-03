"use client";
import styles from "./CareerweMarch.module.css";
import { Col, Row, Container} from "react-bootstrap";

function CareerweMarch() {

    return (
        <div className={styles.CareerweMarchOBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div  className={styles.carkeermarch}>
                           <h3>Careers At EG</h3>
                           <h1>WE MARCH AS ONE </h1>
                        </div>
                    </Col>
                </Row>
               
            </Container>
        </div>
    );
}

export default CareerweMarch;