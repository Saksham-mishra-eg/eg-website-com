"use client";
import styles from "./Clients.module.css";
import { Container, Row } from "react-bootstrap";
import React from "react";
import "../HomePage/customStyles.css";
import Image from "next/image";

function Clients() {
  return (
    <div className={styles.oveClntsSection}>
      <Container fluid>
        <Row>
          <div className={styles.oveClnts}>
            <div className={styles.selitxt}>
              <h2>Trusted by Over 20,000 Businesses</h2>
              <p>Global companies hit their number with Export Genius</p>
            </div>
          </div>

          <div className={styles.oveClntsImng}>
            <div className={styles.selitxtImngf}>
              {/* ✅ First Slider */}
              <div className="slider">
                <div className="slide-track">
                  {[
                    "client3.png",
                    "client1.png",
                    "client4.png",
                    "client.jpg",
                    "client5.png",
                    "client6.png",
                    "client7.jpg",
                    "client2.png",
                    "client8.png",
                    "client9.png",
                    "client10.png",
                    "client2.png",
                    "client.jpg",
                    "client1.png",
                    "client4.png",
                    "client3.png",
                    "client5.png",
                    "client6.png",
                    "client7.jpg",
                    "client8.png",
                    "client9.png",
                    "client10.png",
                  ].map((img, index) => (
                    <Image
                      key={index}
                      src={`/clients/${img}`}
                      alt="clients"
                      width={162}
                      height={100}
                      className="mx-2"
                    />
                  ))}
                </div>
              </div>

              {/* ✅ Second Slider */}
              <div className="slider">
                <div className="slide-track">
                  {[
                    "client.jpg",
                    "client2.png",
                    "client3.png",
                    "client4.png",
                    "client6.png",
                    "client7.jpg",
                    "client8.png",
                    "client9.png",
                    "client10.png",
                    "client.jpg",
                    "client1.png",
                    "client5.png",
                    "client6.png",
                    "client7.jpg",
                    "client2.png",
                    "client8.png",
                    "client9.png",
                    "client10.png",
                    "client1.png",
                    "client4.png",
                    "client5.png",
                    "client3.png",
                  ].map((img, index) => (
                    <Image
                      key={index}
                      src={`/clients/${img}`}
                      alt="clients"
                      width={162}
                      height={100}
                      className="mx-2"
                    />
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