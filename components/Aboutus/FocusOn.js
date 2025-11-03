"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./FocusOn.module.css";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function FocusOn() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (
    <div className={styles.FocusOnBg}>
      <Container>
        <Row>
          <Slider {...settings}>
            <div>
              <Row>
                <Col md={6}>
                  <div className={styles.FocuOnd}>
                    <h6>Our Core Values</h6>
                    <h2>Accountability</h2>
                    <p>We take responsibility for our actions and commitments, ensuring transparency and reliability in everything we do.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.foncImg}>
                     <Image src="/accountability.png" alt="focuson" width={414} height={416} />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col md={6}>
                  <div className={styles.FocuOnd}>
                    <h6>Our Core Values</h6>
                    <h2>Excellence</h2>
                    <p>We strive for excellence in every aspect of our business, delivering superior quality and outstanding results.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.foncImg}>
                    <Image src="/excellence.png" alt="excellence" width={414} height={416} />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col md={6}>
                  <div className={styles.FocuOnd}>
                    <h6>Our Core Values</h6>
                    <h2>Agility</h2>
                    <p>EG ensures to remain agile and adaptable, ready to respond to the evolving needs of clients and dynamic global market.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.foncImg}>
                    <Image src="/agility.png" alt="agility" width={414} height={416} />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col md={6}>
                  <div className={styles.FocuOnd}>
                    <h6>Our Core Values</h6>
                    <h2>Innovation</h2>
                    <p>We embrace innovation, continuously seeking new and better ways to serve our clients and improve our services.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.foncImg}>
                    <Image src="/innovation.png" alt="innovation" width={414} height={416} />
                  </div>
                </Col>
              </Row>
            </div>
          </Slider>
        </Row>
      </Container>
    </div >
  );
}

export default FocusOn;