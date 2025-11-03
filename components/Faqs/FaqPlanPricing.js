"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FaqPlanPricing.module.css";
import { Card, Col, Row,Container, Button, Collapse  } from "react-bootstrap";
import { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

function FaqPlanPricing() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const toggleAll = () => {
    setOpen1(!open1);
    setOpen2(!open2);
    setOpen3(!open3);
    setOpen4(!open4);
    setOpen5(!open5);
    setOpen6(!open6);
  };

  return (
    <div className={styles.FaQuestionsBg}>
    <Container>
        <Row>
            <Col md={12}>
                <div className={styles.FaQuestionsText}>
                    <h2>Plans and Pricing FAQs</h2>
                    {/* <a href="#showall">Show All</a> */}
                    <Button onClick={toggleAll} variant="secondary" className={styles.btnshowall} >
                        {open1 || open2 || open3 || open4 || open5  ? 'Close All' : 'Open All'}
                    </Button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <Card className={styles.CllaseCard} >
                    <Card.Body className={styles.CllaseCardBody} >
                        <Button className={styles.btnPromeColaspe}
                            onClick={() => setOpen1(!open1)}
                            aria-controls="example-collapse-text-1"
                            aria-expanded={open1}
                        >
                           How many data plans do you offer?
                            {open1 ? <BsChevronUp /> : <BsChevronDown />}
                        </Button>
                        <Collapse in={open1}>
                            <div id="example-collapse-text-1" className={styles.bodytextColssp}>
                            We offer a Starter, Essential, Expert, and Customized Plan. Compare plans and choose as per your requirements.
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
                <Card className={styles.CllaseCard} >
                    <Card.Body className={styles.CllaseCardBody} >
                        <Button className={styles.btnPromeColaspe}
                            onClick={() => setOpen2(!open2)}
                            aria-controls="example-collapse-text-2"
                            aria-expanded={open2}
                        >
                           Can I get a free trial?
                            {open2 ? <BsChevronUp /> : <BsChevronDown />}
                        </Button>
                        <Collapse in={open2}>
                            <div id="example-collapse-text-2" className={styles.bodytextColssp}>
                            Yes, you will get a free trial. Schedule a demo and make a request.
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
                <Card className={styles.CllaseCard} >
                    <Card.Body className={styles.CllaseCardBody} >
                        <Button className={styles.btnPromeColaspe}
                            onClick={() => setOpen3(!open3)}
                            aria-controls="example-collapse-text-3"
                            aria-expanded={open3}
                        >
                           How does the point system work for my data download?
                            {open3 ? <BsChevronUp /> : <BsChevronDown />}
                        </Button>
                        <Collapse in={open3}>
                            <div id="example-collapse-text-3" className={styles.bodytextColssp}>
                            The point system applies to monthly plans only. Consumption of points varies in every country and data type that are available in a plan you choose.
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
                <Card className={styles.CllaseCard} >
                    <Card.Body className={styles.CllaseCardBody} >
                        <Button className={styles.btnPromeColaspe}
                            onClick={() => setOpen4(!open4)}
                            aria-controls="example-collapse-text-4"
                            aria-expanded={open4}
                        >
                           How can I make a payment for the data?
                            {open4 ? <BsChevronUp /> : <BsChevronDown />}
                        </Button>
                        <Collapse in={open4}>
                            <div id="example-collapse-text-4" className={styles.bodytextColssp}>
                            You can make the payment for data you purchase via PayPal, Wire Transfer, Debit card, Credit Card, Bank Transfer, Demand Draft, Cheque, and Cash Deposit in the Company’s account. All payments will be in favor of Export Genius, New Delhi, India.
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
                <Card className={styles.CllaseCard} >
                    <Card.Body className={styles.CllaseCardBody} >
                        <Button className={styles.btnPromeColaspe}
                            onClick={() => setOpen5(!open5)}
                            aria-controls="example-collapse-text-5"
                            aria-expanded={open5}
                        >
                            What are the terms of payment?
                            {open5 ? <BsChevronUp /> : <BsChevronDown />}
                        </Button>
                        <Collapse in={open5}>
                            <div id="example-collapse-text-5" className={styles.bodytextColssp}>
                            The payment is 100% in advance only.

                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
                <Card className={styles.CllaseCard} >
                    <Card.Body className={styles.CllaseCardBody} >
                        <Button className={styles.btnPromeColaspe}
                            onClick={() => setOpen6(!open6)}
                            aria-controls="example-collapse-text-6"
                            aria-expanded={open6}
                        >
                           How can I contact you to create my Customized Data Plan to suit my requirements and budget?
                            {open6 ? <BsChevronUp /> : <BsChevronDown />}
                        </Button>
                        <Collapse in={open6}>
                            <div id="example-collapse-text-6" className={styles.bodytextColssp}>
                            You can send a request for a Customized Data Plan via info@exportgenius.in. 

                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
              
            </Col>
        </Row>

    </Container>
</div>
  );
}

export default FaqPlanPricing;