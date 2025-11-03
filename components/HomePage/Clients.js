"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Clients.module.css";
import { Container, Row } from "react-bootstrap";
import "./customStyles.css";
import Image from "next/image";

const clientImages = [
    "/clients/client.jpg",
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client5.png",
    "/clients/client6.png",
    "/clients/client7.jpg",
    "/clients/client8.png",
    "/clients/client9.png",
    "/clients/client10.png",
];

function Clients() {
    return (
        <div className={styles.oveClntsSection}>
            <Container fluid>
                <Row>
                    <div className={styles.oveClnts}>
                        <div className={styles.selitxt}>
                            <h2>Over 20,000 Clients</h2>
                            <p>World's Trust on Data for their Market Research</p>
                        </div>
                    </div>
                    <div className={styles.oveClntsImng}>
                        <div className={styles.selitxtImngf}>
                            <div className="slider">
                                <div className="slide-track">
                                    {[...clientImages, ...clientImages].map((src, idx) => (
                                        <Image key={idx} src={src} alt="client" height={100} width={162} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Clients;