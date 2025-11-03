"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Testimonials.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";

function Testimonials() {

    return (
        <div className={styles.TestimonialsBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.tesLoeisime}>
                            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                            <div className={styles.testimgeGoel}>
                                <Image src="google.png" alt="google" width={122} height={61} />
                                <Image src="drift.png" alt="drift" width={122} height={61} />
                                <Image src="anaplan.png" alt="anaplan" width={122} height={61} />
                                <Image src="seismic.png" alt="seismic" width={122} height={61} />
                                <Image src="sisense.png" alt="sisense" width={122} height={61} />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.TestimlsFeedback}>
                            <Row>
                                <Col md={4}>
                                    <div className={styles.gamchnr}>
                                        <Image src="brackets.png" alt="brackets" width={23} height={18} />
                                        <p>I couldn't honestly image working without Lusha. <a href="#game">Game changer</a> </p>
                                        <div className={styles.iconImage}>
                                            <div className={styles.imageI}>
                                                <div className={styles.imgnameIcn}>
                                                    <Image src="image1.png" width={50} height={50} alt="eric lindoors" />
                                                    <div className={styles.gongEric}>
                                                        <h6>Eric Lindroos</h6>
                                                        <span>Gong</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.imageI}>
                                                <Image src="icon1.png" alt="icon 1" width={29} height={28} />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className={styles.gamchnr}>
                                        <Image src="brackets.png" alt="brackets" width={23} height={18} />
                                        <p>I couldn't honestly image working without Lusha. <a href="#game">Game changer</a> </p>
                                        <div className={styles.iconImage}>
                                            <div className={styles.imageI}>
                                                <div className={styles.imgnameIcn}>
                                                    <Image src="image2.png" width={50} height={50} alt="lindroos" />
                                                    <div className={styles.gongEric}>
                                                        <h6>Eric Lindroos</h6>
                                                        <span>Gong</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.imageI}>
                                                <Image src="icon2.png" alt="icon 2" width={29} height={28} />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className={styles.gamchnr}>
                                        <Image src="brackets.png" alt="brackets" width={23} height={18} />
                                        <p>I couldn't honestly image working without Lusha. <a href="#game">Game changer</a> </p>
                                        <div className={styles.iconImage}>
                                            <div className={styles.imageI}>
                                                <div className={styles.imgnameIcn}>
                                                    <Image src="image3.png" width={50} height={50} alt="feic" />
                                                    <div className={styles.gongEric}>
                                                        <h6>Eric Lindroos</h6>
                                                        <span>Gong</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.imageI}>
                                                <Image src="icon3.png" alt="icon 3" width={29} height={28} />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Testimonials;