"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Schedulebox.module.css";
import { Col, Row, Container } from "react-bootstrap";
import { TypewriterEffectSmooth } from "./typewriter-effect.tsx";
import "./typewriter.css"
import Image from "next/image";

function Schedulebox() {

    const words = [
        {
            text: "Schedule ",
        },
       
        {
            text: "A",
        },
        {
            text: "Demo.",
            className: "textBlue",
        },
    ];


    return (
        <div className={styles.ScheduleboxOnline}>
            <Container>
                <Row>
                   
                    <Col>
                        <div className={styles.ScheDmeo}>
                            <Row>
                                <Col md={12}>
                                    <div className={styles.wantSee}>
                                        <Image src="/demo.png" alt="Demo Icon" width={69} height={69} />
                                        <div className={styles.dSdhdemo}>
                                            <h5>Want to see <span>Dashboard</span> in action?</h5>
                                          
                            <TypewriterEffectSmooth className={styles.wordTesth4} words={words} />
                                            {/* <h1>Schedule a Demo</h1> */}
                                         
                                        </div>
                                    </div>
                                    <br />
                                    <div className={styles.wantSee}>
                                    <a className={styles.Explormorebtn} href="#explore"><span>Schedule Now</span> </a>
                                        <a className={styles.Explormorebtn} href="#explore"><span>Login to Dashboard</span> </a>
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

export default Schedulebox;