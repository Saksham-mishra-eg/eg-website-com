import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FaQuestions.module.css";
import Container from 'react-bootstrap/Container';
import { Card, Col, Row } from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';


function FaQuestions() {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);

    // const toggleAll = () => {
    //     setOpen1(!open1);
    //     setOpen2(!open2);
    //     setOpen3(!open3);
    //     setOpen4(!open4);
    //     setOpen5(!open5);
    //     setOpen6(!open6);
    //     setOpen7(!open7);
    //     setOpen8(!open8);
    //     setOpen9(!open9);
    //     setOpen10(!open10);
    //     setOpen11(!open11);
    //     setOpen12(!open12);
    // };

    return (
        <div className={styles.FaQuestionsBg}>
            <Container>
               
                <Row>
                    <Col md={12}>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen1(!open1)}
                                    aria-controls="example-collapse-text-1"
                                    aria-expanded={open1}
                                >
                                    What is Export Genius?
                                    {open1 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open1}>
                                    <div id="example-collapse-text-1" className={styles.bodytextColssp}>
                                        Export Genius is a leading trade intelligence online platform that offers import-export trade data of global businesses. We have data of 190+ countries including detailed customs data of 62+ countries and exclusive data of 32+ countries. Export Genius dashboard gives you access to the most relevant trade data of companies along with complete shipment details.
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
                                    What is Export Genius used for?
                                    {open2 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open2}>
                                    <div id="example-collapse-text-2" className={styles.bodytextColssp}>
                                        Export Genius is used by importers, exporters, and logistics to get essential data that helps them to find and connect with the right business partners. Our dashboard is also used by market research firms, banking & financial institutions, sales & marketing teams, corporations, law firms, insurance companies, academic institutions, and government bodies for decision-making. The Export Genius platform can help companies understand the international market, find buyers & suppliers, analyze the flow of commodities, and target ideal prospects.
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
                                    What is the total number of countries covered in your database?
                                    {open3 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open3}>
                                    <div id="example-collapse-text-3" className={styles.bodytextColssp}>
                                        Our database covers 190+ countries, including detailed data of 62+ countries. So, with our dashboard, never miss out any update on trade developments in the international market.
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
                                    For how many countries, do you provide exclusive data?
                                    {open4 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open4}>
                                    <div id="example-collapse-text-4" className={styles.bodytextColssp}>
                                        We provide exclusive data of 32+ countries. Check data availability to get the list of countries. So, be the first to know about the import and export activities of these countries.
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
                                    How many types of data are covered in your database?
                                    {open5 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open5}>
                                    <div id="example-collapse-text-5" className={styles.bodytextColssp}>
                                        Our database covers 7 types of import export data, namely Detailed Data, Statistical Data, Transit Data, Bill of Lading Data, Cargo BL Data, Suez Canal BL Data, and Mirror Data. Find more about these data types below:
                                        <ul>
                                            <li> <b>Detailed Data</b> covers customs-based details such as importer name, exporter name, HS Code, product description, value, quantity, origin country, destination country, port, and so on.</li>
                                            <li> <b>Statistical Data</b> is used for primary research of the market, covering date, quantity, price, trade country, etc.</li>
                                            <li> <b>Transit Data</b> covers import and export data of shipments that pass through different customs territories.</li>
                                            <li> <b>Bill of Lading Data</b> is based on shipping documents and covers details of consignments including company information, but pricing information is not covered.</li>
                                            <li> <b>Cargo BL Data</b>  is a type of data that is collected from various shipping companies.</li>
                                            <li> <b>Suez Canal BL Data</b> includes information on shipments that pass through Suez Canal.</li>
                                            <li> <b>Mirror Data</b> is data from countries that do not report their trade information. This type of data is restructured based on data reported by their partner countries.</li>
                                        </ul>
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
                                    Is the contact information of importers and exporters covered in the data?
                                    {open6 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open6}>
                                    <div id="example-collapse-text-6" className={styles.bodytextColssp}>
                                        Yes, our database covers the contact data of importers and exporters.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen7(!open7)}
                                    aria-controls="example-collapse-text-7"
                                    aria-expanded={open7}
                                >
                                    Can I search global trade data online?
                                    {open7 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open7}>
                                    <div id="example-collapse-text-7" className={styles.bodytextColssp}>
                                        You can search data online by clicking on the <b>“Search Data”</b> page and using the keywords – HS Code, Product Description, Importer, and Exporter.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen8(!open8)}
                                    aria-controls="example-collapse-text-8"
                                    aria-expanded={open8}
                                >
                                    Is import export data you provide authentic? What is the source of data?
                                    {open8 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open8}>
                                    <div id="example-collapse-text-8" className={styles.bodytextColssp}>
                                        We provide authentic and quality data that meets the requirements of clients as we collect data from verified sources. These sources include Custom Departments, Government Bodies, and others.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen9(!open9)}
                                    aria-controls="example-collapse-text-9"
                                    aria-expanded={open9}
                                >
                                    How frequently the database is updated?
                                    {open9 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open9}>
                                    <div id="example-collapse-text-9" className={styles.bodytextColssp}>
                                        Our standard time to update our database is 30 days, however, this time varies from country to country.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen10(!open10)}
                                    aria-controls="example-collapse-text-10"
                                    aria-expanded={open10}
                                >
                                    How is Export Genius different from other market intelligence online platforms?
                                    {open10 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open10}>
                                    <div id="example-collapse-text-10" className={styles.bodytextColssp}>
                                        Export Genius is different from other market intelligence online platforms as the database covers data of the highest numbers of countries, exclusive information, user-friendly dashboard, and other features.
                                        <ul>
                                            <li>  190+ Countries’ Import-Export Trade Data Coverage</li>
                                            <li>  62+ Countries’ Detailed Customs Data</li>
                                            <li> 32+ Countries’ Exclusive Data</li>
                                            <li> 10M+ Contacts of Companies and Employees Covered</li>
                                            <li> Easy Data Search with Multiple Filters and Data Visualization</li>
                                            <li> Customized Plan Based on Your Data Requirements</li>
                                            <li> Verified and Authentic Data</li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen11(!open11)}
                                    aria-controls="example-collapse-text-11"
                                    aria-expanded={open11}
                                >
                                    How can Export Genius help my business?
                                    {open11 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open11}>
                                    <div id="example-collapse-text-11" className={styles.bodytextColssp}>
                                        Our trade intelligence online platform helps global businesses to make data-driven decisions and accomplish their goals.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen12(!open12)}
                                    aria-controls="example-collapse-text-12"
                                    aria-expanded={open12}
                                >
                                    How can I get in touch with the Export Genius team for any assistance?
                                    {open12 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open12}>
                                    <div id="example-collapse-text-12" className={styles.bodytextColssp}>
                                        For any query, you can contact us via +91 8003 8003 57 (Mobile), +91-11-47048012 (Landline), +91-11-47048013 (Landline), +91-11-47048014 (Landline), +91 8003 8003 57 (WhatsApp) and info@exportgenius.in (Email Address). You can also convey your query through ‘Chat Box’. To have a quick tour of our dashboard, <a href="/contact-us">schedule a demo</a> .
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

export default FaQuestions;