"use client";
import styles from "../HomePage/GetGlobalTrade.module.css"
import { Col, Row, Container, Button } from "react-bootstrap";
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
                    src="/bgjason.json" // Local path to the JSON file
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.GeGlobl}>
                            <h2>EG Hall of Fame. Discover Yourself!</h2>
                            {/* <h3>Experience the EG Difference. </h3> */}
                            <br /> <br />
                            <Button className={styles.scheDemoBtn} variant="success" onClick={handleChangeUrl} >Schedule a Demo</Button>{' '}
                            <Button className={styles.LogonDemoBtn} variant="primary" onClick={handleChangeLogin} >Login</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default GetGlobalTrade;