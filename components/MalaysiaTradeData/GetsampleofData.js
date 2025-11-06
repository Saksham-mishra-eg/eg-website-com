"use client";
import styles from "./GetsampleofData.module.css";
import { Col, Row, Container, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import ZohoForm from "../../constants/ZohoForm";
import Image from "next/image";
import { useSlug } from "../../hooks/useSlug"; // ✅ Import hook

function GetsampleofData() {
  const slug = useSlug(); // ✅ Get slug inside component

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const DemoButton = ({ onClick }) => (
    <Button
      variant="link"
      className="text-decoration-none p-0"
      onClick={onClick}
    >
      Request a Free Demo
    </Button>
  );

  const contentMap = {
    "malaysia-trade-data": {
      title: "Get a Sample of Malaysia Import Export Data",
      image: "/clients/trade-sample.png",
      description: (
        <>
          Want to see how our data works?{" "}
          <DemoButton onClick={handleShow} /> and explore how Malaysia trade data can benefit your business.
        </>
      ),
    },
    "vietnam-trade-data": {
      title: "Request Free Demo to Access Vietnam Import Export Data",
      image: "/clients/vietnam-sample.png",
      description: (
        <>
          Want to see how our data works?{" "}
          <DemoButton onClick={handleShow} /> and explore how Vietnam trade data can benefit your business.
        </>
      ),
    },
    "indonesia-trade-data": {
      title: "Get a Sample of Indonesia Import Export Data",
      image: "/clients/indonesia-sample.png",
      description: (
        <>
          Want to see how our data works?{" "}
          <DemoButton onClick={handleShow} /> and explore how Indonesia trade data can benefit your business.
        </>
      ),
    },
    "brazil-trade-data": {
      title: "Get a Sample of Brazil Import Export Data",
      image: "/clients/brazil-sample.png",
      description: (
        <>
          Want to see how our data works?{" "}
          <DemoButton onClick={handleShow} /> and explore how Brazil trade data can benefit your business.
        </>
      ),
    },
    "thailand-trade-data": {
      title: "Get a Sample of Thailand Import Export Data",
      image: "/clients/thailand-sample.png",
      description: (
        <>
          Want to see how our data works?{" "}
          <DemoButton onClick={handleShow} /> and explore how Thailand trade data can benefit your business.
        </>
      ),
    },
  };

  const content = contentMap[slug] || contentMap["malaysia-trade-data"];

  return (
    <div className={styles.LookingforSample}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.ExpndforSample}>
              <h2>{content.title}</h2>
            </div>

            <div className={styles.ContentNdSample}>
              <div className={styles.dataSectionImg}>
                <Image src={content.image} alt="sample" width={601} height={336} />
                <div className={styles.sampleContent}>
                  {content.description}
                </div>
              </div>

              <div className={styles.formSenctionSmp}>
                <ZohoForm
                  containerId="zf_div_RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                  formUrl="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Body>
            {show && (
              <ZohoForm
                containerId="zf_div_modal"
                formUrl="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
              />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default GetsampleofData;
