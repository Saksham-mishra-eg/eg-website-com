"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PlatformHeader.module.css";
import { Col, Row, Container, Modal } from "react-bootstrap";
import { SlArrowRight } from "react-icons/sl";
import dynamic from "next/dynamic";
import BoxReveal from "../HowWeHelpPage/box-reveal";
import "../PricingPage/modal.css"
import { useState } from 'react';
import { trackEvent } from "../../constants/trackEvent";
import ZohoForm from "../../constants/ZohoForm";
import Image from "next/image";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
)

function PlatformHeader() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        trackEvent({
            action: "Tracking Google Tag",
            category: "Platform Page",
            label: "Book Demo Button",
            value: 0,
        });

    };
    const handleClick1 = () => {
        trackEvent({
            action: "Tracking Google Tag",
            category: "Platform Page",
            label: "Get an Inside View",
            value: 1,
        });

    };

    return (
        <div className={styles.PlatformHeaderine}>
            <Container>
                <Row>
                    <Col md={6}>

                        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
                            <BoxReveal boxColor={"#5046e6"} duration={0.5} >
                                <h1 className={styles.howYOur}>
                                    A Comprehensive View of Global Trade Development
                                </h1>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <div className={styles.ditextorkder}>
                                    <p>Powered by quality & industry-standard import export trade data, and intelligence market insights, our platform is built to scale your pipeline and keep you ahead of the competition.
                                    </p>
                                </div>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <div className={styles.captDemobd}>
                                    <a href="/contact-us" className={styles.TrlBtn} onClick={handleClick} > Book Demo <SlArrowRight /> </a>
                                    <a href="#getaninside" className={styles.getainsider}
                                        onClick={() => {
                                            handleShow();
                                            handleClick1();
                                        }}
                                    >Get an Inside View of the Dashboard! <SlArrowRight /> </a>
                                </div>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>

                                <div className={styles.captImg}>
                                    <Image src="/iso.png" alt="iso" width={172} height={29} />
                                </div>

                            </BoxReveal>
                        </div>

                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/bd1d4ef3-6627-4ba6-b32d-5a66439b0c0b/nJo8C1NMja.json"
                                style={{}}
                            >
                                {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
                            </Player>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    {show && (
                        <ZohoForm
                            containerId="zf_div_modal"
                            formUrl="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                        />
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default PlatformHeader;