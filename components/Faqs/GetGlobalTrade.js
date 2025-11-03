"use client";
import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../HomePage/GetGlobalTrade.module.css";
import dynamic from "next/dynamic";

const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    { ssr: false }
);

const GetGlobalTrade = React.memo(() => {
  const router = useRouter();

  const handleScheduleDemo = () => {
    router.push("/contact-us"); // Internal route
  };

  const handleLogin = () => {
    window.open("https://dashboard2.exportgenius.in", "_blank"); // Open external login in new tab
  };

  return (
    <div className={styles.GetGlobalTradeOnline}>
      <div className={styles.tagIDe}>
        <Player
          autoplay
          loop
          src="/bgjason.json"
          className={styles.backgroundLottie}
        />
      </div>

      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.GeGlobl}>
              <h2>DON’T WAIT, GET A DRILL OF OUR EG DASHBOARD.</h2>
              <h3>TAKE THE FIRST MOVE AND REACH OUT TO US NOW!</h3>

              <div className={styles.buttonGroup}>
                <Button
                  variant="success"
                  className={styles.scheDemoBtn}
                  onClick={handleScheduleDemo}
                >
                  Schedule a Demo
                </Button>

                <Button
                  variant="primary"
                  className={styles.LogonDemoBtn}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default GetGlobalTrade;