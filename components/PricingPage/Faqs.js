"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Faqs.module.css";
import { Accordion, Col, Row, Container } from "react-bootstrap";

function Faqs() {

    return (
        <div className={styles.FaqsBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.faqheading}>
                            <h2>FAQs</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.acOrdingTbs}>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} > <button className={styles.acnrAtivebtn}>What Exactly is Export Genius?</button> </Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        Export Genius offers an Intelligent AI-powered Trade Intelligence dashboard featuring extensive import and export data from 190+ countries. With a decade of industry expertise under our belt, we have served 20K+ clients from around the world. Get detailed global trade insights, enabling importers, exporters, and businesses to access invaluable data on products, markets, and more.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} ><button className={styles.acnrAtivebtn}> How many countries are covered in the Dashboard? </button></Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        Export Genius offers 190+ countries offers import-export data including Customs Data from 62+ countries, In addition to this, we offer  32+ Countries’ Exclusive Data - Angola, Bangladesh, Bolivia, Brazil, Burundi, Cameroon, Chad, Costa Rica, DR Congo, Ghana, Guatemala, Guyana, Iran, Kosovo, Liberia, Malawi, Mexico, Nicaragua, Niger, Nigeria, Sao Tome and Príncipe, Sierra Leone, Senegal, Singapore, Tanzania, Turkey, Thailand, Uzbekistan, Zimbabwe, Fiji, and Zambia. Check  <a href="/data">data availability</a> .
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} ><button className={styles.acnrAtivebtn}>Can we access Historical Data of countries?  </button></Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        You can access the trade data from 2012 onwards and for some countries, we have the content available since January 2010, as per the plan you select.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} ><button className={styles.acnrAtivebtn}>What data types are provided in Export Genius? </button></Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        We provide 7 types of import-export data <b>– Detailed Data, Statistical Data, Transit Data, Bill of Lading Data, Cargo BL Data, Suez Canal BL Data, and Mirror Data.</b>
                                        <ul className={styles.ulliSFaiPric}>
                                            <li> <b>Detailed Data</b> covering complete customs-based data with Importer & Exporter Details along with other shipment information.</li>
                                            <li> <b>Statistical Data</b> showcasing information such as Quantity, Country, Price, etc. </li>
                                            <li> <b>Transit Data</b> covers information on import-export shipments, which pass through different customs territories.</li>
                                            <li> <b>Bill of Lading Data</b> offers companies’ details except for the pricing information. </li>
                                            <li> <b>Cargo BL Data</b> is a kind of BL data collected from various shipment companies.</li>
                                            <li> <b>Suez Canal BL Data</b> consists of Bill of Lading data of shipments that move through the Suez Canal.</li>
                                            <li> <b>Mirror Data</b> contains information reported by partner countries of countries that do not report their trade data.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} ><button className={styles.acnrAtivebtn}>Do we share the Contact Details?</button></Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        Well yes, we offer comprehensive contact information, including email addresses, phone numbers, and direct lines for both individuals and companies. Additionally, we include additional contact details such as social media profiles and website URLs.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Faqs;