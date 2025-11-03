"use client";
import { Col, Row, Button, Container, Modal } from "react-bootstrap";
import ZohoForm from "../../constants/ZohoForm";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ApiHeaderSection() {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleContactClick = () => {
    router.push("/contact-us");
  };

  return (
    <div className={styles.ApiHeaderSectionPage}>
      <Container>
        <Row>
          <Col md={5}>
            <div className={styles.ApiGeGlobl}>
              <Image
                src="/api/api-image.png"
                alt="API Illustration"
                width={495}
                height={366}
              />
            </div>
          </Col>

          <Col md={7}>
            <div className={styles.ApiGeGloblHead}>
              <div className={styles.genSPi}>Export Genius APIs –</div>
              <h1>Decoding Global Trade with Data</h1>
              <p>
                Integrate the highest quality and detailed import export trade
                data directly into any database, any system, and any application
                seamlessly.
              </p>

              <Button
                className={styles.scheDemoBtn}
                variant="success"
                onClick={handleShow}
              >
                Contact Our Expert
              </Button>

              <Button
                className={styles.LogonDemoBtn}
                variant="primary"
                onClick={handleContactClick}
              >
                Book A Meeting
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

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
    </div>
  );
}

export default ApiHeaderSection;