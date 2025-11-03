"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./BusinessEdge.module.css";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function BusinessEdge() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // nextArrow: false,
    // prevArrow: false,
  };


  return (
    <div className={styles.BusinessEdgeBGimg}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.howDoems}>
              <h2>How does Export Genius give your business the edge?</h2>
            </div>
          </Col>
          <Col md={12}>
            <div className={styles.BusinEdgeBoxes}>
              <Slider {...settings}>
                <div>
                  <div className={styles.BusinessEdgeText}>
                    <Image width={51} height={50} src="/historical.png" alt="Data Update" />
                    <h3>Fastest Data Update</h3>
                    <p>We update data of most countries in every month, but time may vary country to country.</p>
                  </div>
                </div>
                <div>
                  <div className={styles.BusinessEdgeText}>
                    <Image width={51} height={50} src="/data-processing.png" alt="Historical" />
                    <h3>Historical Data Available</h3>
                    <p>We provide historical data of countries, depending on your plan you choose. Access data that is available since 2012 onwards.</p>
                  </div>
                </div>
                <div>
                  <div className={styles.BusinessEdgeText}>
                    <Image width={51} height={50} src="/low-cost.png" alt="Affordable Price" />
                    <h3>Affordable Price</h3>
                    <p>We offer import export data at competitive prices and have plans for every industry & business from small & medium enterprises to big corporates.</p>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  );
}


export default BusinessEdge;