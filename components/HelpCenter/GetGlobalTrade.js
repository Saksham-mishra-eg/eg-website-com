"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../HomePage/GetGlobalTrade.module.css"
import { Container, Col, Row, Button } from "react-bootstrap";
import { Player } from '@lottiefiles/react-lottie-player';

function GetGlobalTrade() {

    const handleChangeUrl = () => {
        window.location.href = "contact-us";
    }

    const handleChangeLogin = () => {
        window.location.href = "https://dashboard2.exportgenius.in";
    }

    const backgroundStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    };

    return (
        <div className={styles.GetGlobalTradeOnline}>
            <div className={styles.tagIDe} style={backgroundStyle}>
                <Player
                    autoplay
                    loop
                    src="/bgjason.json"
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.GeGlobl}>
                            <h2>GET GLOBAL TRADE DATA </h2>
                            <h3>ONLINE AT YOUR FINGERTIPS</h3>
                            <Button className={styles.scheDemoBtn} variant="success" onClick={handleChangeUrl}>Schedule a Demo</Button>{' '}
                            <Button className={styles.LogonDemoBtn} variant="primary" onClick={handleChangeLogin}>Login</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GetGlobalTrade;