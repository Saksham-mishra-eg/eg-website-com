"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GetNews.module.css";
import { Col, Row, Container} from "react-bootstrap";
import Image from "next/image";

function GetNews() {

    return (
        <div className={styles.GetNewsOnline}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.WrlLrgTxt}>
                            <h2>Get News & Insight </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className={styles.redirectBg}>
                            <Image src="/link.png" alt="Redirec link" width={57} height={52} />
                            <h3>Redirect</h3>
                            <h6>With Blogs</h6>
                            <p>Explore detailed Customs Data, Statistical Data,</p>
                            <a href="#readmore">Read More..</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.redirectBg}>
                            <Image src="link.png" alt="Redirec link" width={57} height={52} />
                            <h3>Redirect</h3>
                            <h6>With Blogs</h6>
                            <p>Explore detailed Customs Data, Statistical Data,</p>
                            <a href="#readmore">Read More..</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.redirectBg}>
                            <Image src="link.png" alt="Redirec link" width={57} height={52} />
                            <h3>Redirect</h3>
                            <h6>With Blogs</h6>
                            <p>Explore detailed Customs Data, Statistical Data,</p>
                            <a href="#readmore">Read More..</a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default GetNews;