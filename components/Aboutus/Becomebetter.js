"use client";
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from "./Becomebetter.module.css";

function Becomebetter() {

  const handleChangeCareer = () =>{
    window.location.href = "career-page";
  }

  return (
    <div className={styles.BecomebetterBg}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.FocuOnFeaturs}>
              <h2>Together We Are Better</h2>
              <p>We have a close knit family of professionals who work on the collective effort of supporting our clients and helping them in informed decisions that drive success in the global market. Our experts hail from diverse backgrounds attributing to the company's endeavors. </p>
              <button className={styles.aPllyNowbtn} onClick={handleChangeCareer} >Apply Now</button>
              <br />
              <br />
              {/* <img src='company-peoples.png' width={`${100}%`} alt='company-peoples' /> */}
              <Image src="/company-peoples.png" alt="company peoples" width={847} height={401} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Becomebetter;
