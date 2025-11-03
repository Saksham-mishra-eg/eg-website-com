"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradeIntelligence.module.css";
import { Container, Button, Col, Form, Row } from "react-bootstrap";
import dynamic from "next/dynamic";
import EmailFormDialog from "../EmailForm/EmailFormDialog";
import { trackEvent } from "../../constants/trackEvent";
import Image from "next/image";

const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    { ssr: false }
);

function TradeIntelligence() {
    const [email, setEmail] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsOpen(true);
        trackEvent({
            action: "Tracking Google Tag",
            category: "Home Page",
            label: "Subscribe Button",
            value: 1,
        });
    };

    return (
        <div className={styles.onlinePlatform}>
            <Container>
                {email && isOpen && (
                    <EmailFormDialog
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        initialEmail={email}
                        centered={centered}
                    />
                )}

                <Row>
                    <Col md={6}>
                        <div className="h-full w-full max-w-[32rem] items-center justify-center">
                            <h1 className={styles.howYOur}>
                                Global Trade Insights That Give You The Edge
                            </h1>

                            <h4 className="mt-[.5rem] text-[1rem]">
                                <span className={styles.actnIsht}>
                                    ACTIONABLE INSIGHTS & INFORMATION
                                </span>
                            </h4>

                            <div className="md:mt-[1.5rem] mt-0 lg:mt-[1.5rem]">
                                <p>
                                    Discover the world of import and export data by using our
                                    AI-powered Intelligent Trade database.
                                </p>
                            </div>

                            <div className={styles.tradeText}>
                                <Row>
                                    <Col>
                                        <form onSubmit={handleSubmit} className={styles.formFlext}>
                                            <Form.Control
                                                className={styles.frokDemo}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                type="email"
                                                placeholder="Enter Your Email"
                                            />
                                            <Button type="submit" className={styles.TrlBtn}>
                                                Submit
                                            </Button>
                                        </form>
                                    </Col>
                                </Row>
                                <div className={styles.captImg}>
                                    <Image src="/iso.png" alt="ISO Certification" width={172} height={29} />
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/f7d12853-6515-4149-aa1f-89b79edfa439/JfrbWvVka0.json"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TradeIntelligence;