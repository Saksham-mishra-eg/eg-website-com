"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DetailedPricing.module.css";
import { Col, Container, Row, Modal } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import React, { useContext } from 'react';
import { PricingContext } from './PricingContext';
import { useState } from 'react';
import "./modal.css";

function DetailedPricing() {

    const [showStarter, setShowStarter] = useState(false);
    const handleCloseStarter = () => setShowStarter(false);
    const handleShowStarter = () => setShowStarter(true);

    const [showEssential, setShowEssential] = useState(false);
    const handleCloseEssential = () => setShowEssential(false);
    const handleShowEssential = () => setShowEssential(true);

    const [showExpert, setShowExpert] = useState(false);
    const handleCloseExpert = () => setShowExpert(false);
    const handleShowExpert = () => setShowExpert(true);

    const { isUSD, isMonthly } = useContext(PricingContext);

    const starter = {
        USD: { monthly: 1400, yearly: 250 },
        INR: { monthly: 100000, yearly: 20000 },
    };

    const essential = {
        USD: { monthly: 4000, yearly: 500 },
        INR: { monthly: 300000, yearly: 37500 },
    };

    const expert = {
        USD: { monthly: 9000, yearly: 1200 },
        INR: { monthly: 700000, yearly: 95000 },
    };

    const excelDownloadStarter = isMonthly ? "3,60,000 Points" : "30,000 Points/ Month";
    const excelDownloadEssential = isMonthly ? "10,80,000 Points" : "90,000 Points/ Month";
    const excelDownloadExpert = isMonthly ? "24,00,000 Points" : "2,00,000 Points/ Month";

    const dataAccessStarter = isMonthly ? "Data Access Jan 2020 Onwards" : "3 Months Historical Data Acces";
    const dataAccessEssential = isMonthly ? "Data Access Jan 2019 Onwards" : "3 Months Historical Data Acces";
    const dataAccessExpert = isMonthly ? "Data Access Jan 2010 Onwards" : "3 Months Historical Data Acces";

    const accountValidationStarter = isMonthly ? "1 Year" : "1 Month";
    const accountValidationEssential = isMonthly ? "1 Year" : "1 Month";
    const accountValidationExpert = isMonthly ? "1 Year" : "1 Month";

    const employeeContctsStarter = isMonthly ? "5000 Points" : "300 Points";
    const employeeContctsEssential = isMonthly ? "10000 Points" : "600 Points";
    const employeeContctsExpert = isMonthly ? "30000 Points" : "1800 Points";

    return (
        <div className={styles.DetailedPricingBg} id="comparePlan">
            <Container>
                <Row>
                    <Col>
                        <div className={styles.PricnOverw}>
                            <h2>Detailed Pricing Overview</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered>
                            <thead className={styles.StartEnstial}>
                                <tr>
                                    <th></th>
                                    <th>Starter</th>
                                    <th>Essential</th>
                                    <th>Expert</th>
                                </tr>
                            </thead>
                            <tbody className={styles.TbodyEnstial}>
                                <tr>
                                    <th>Price</th>
                                    <th>{isUSD ? `$${isMonthly ? starter.USD.monthly : starter.USD.yearly}` : `₹${isMonthly ? starter.INR.monthly : starter.INR.yearly}`}</th>
                                    <th>{isUSD ? `$${isMonthly ? essential.USD.monthly : essential.USD.yearly}` : `₹${isMonthly ? essential.INR.monthly : essential.INR.yearly}`}</th>
                                    <th>{isUSD ? `$${isMonthly ? expert.USD.monthly : expert.USD.yearly}` : `₹${isMonthly ? expert.INR.monthly : expert.INR.yearly}`}</th>
                                </tr>
                                <tr>
                                    <th>Countries Covered</th>
                                    <td>India, Mexico (Sea Mode), Argentina, Chile, Colombia, Ecuador, Paraguay, Peru, Uruguay and ... <button className={styles.viewLLs} onClick={handleShowStarter}>View All</button> </td>
                                    <td>Starter Plan All Countries + Bangladesh, Bolivia, Botswana, Cote d Ivoire, Ethiopia... <button className={styles.viewLLs} onClick={handleShowEssential}>View All</button></td>
                                    <td>Starter & Essential Plan All Countries + Angola, Cameroon, Chad, DR Congo, Ghana, <button className={styles.viewLLs} onClick={handleShowExpert}>View All</button> </td>
                                </tr>
                                <tr>
                                    <th>Advanced Searches</th>
                                    <td>500 Per Month</td>
                                    <td>Unlimited Searches</td>
                                    <td>Unlimited Searches</td>
                                </tr>
                                <tr>
                                    <th>Trade Data for Excel Download</th>
                                    <td>{excelDownloadStarter}</td>
                                    <td>{excelDownloadEssential}</td>
                                    <td>{excelDownloadExpert}</td>
                                </tr>
                                <tr>
                                    <th>Employee and Company Contact Information <small>(Email and Phone Number)</small> </th>
                                    <td>{employeeContctsStarter}</td>
                                    <td>{employeeContctsEssential}</td>
                                    <td>{employeeContctsExpert}</td>
                                </tr>
                                <tr>
                                    <th>Historical Data Access</th>
                                    <td>{dataAccessStarter}</td>
                                    <td>{dataAccessEssential}</td>
                                    <td>{dataAccessExpert}</td>
                                </tr>
                                <tr>
                                    <th>Account Validation</th>
                                    <td>{accountValidationStarter}</td>
                                    <td>{accountValidationEssential}</td>
                                    <td>{accountValidationExpert}</td>
                                </tr>
                                <tr>
                                    <th>Visualize & Charts</th>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <th>Add to Favourite Shipments</th>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <th>Frequency of Data Update</th>
                                    <td>30 Days Depending on Country</td>
                                    <td>30 Days Depending on Country</td>
                                    <td>30 Days Depending on Country</td>
                                </tr>
                                <tr>
                                    <th>Roll Over Points to Next Year</th>
                                    <td>No</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th>Shipment Records View</th>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <th>Company Profile View</th>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <th>Trade Relationship of Companies</th>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th>User License</th>
                                    <td>1</td>
                                    <td>5</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <th>Customer Support</th>
                                    <td>Basic</td>
                                    <td>Standard</td>
                                    <td>Priority</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

            <Modal show={showStarter} onHide={handleCloseStarter}>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title>Starter</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBodytxt}>
                    <ul className={styles.liWithfull}>
                        <li>Venezuela Countries Detailed Customs Data</li>
                    </ul>
                    <ul className={styles.liWithfull}>
                        <li> USA Country Bill of Lading Data</li>
                    </ul>
                    <ul className={styles.liWithfull}>
                        <li> 109 Countries Suez Canal BL Data</li>
                    </ul>
                    <ul className={styles.liWithfull}>
                        <li>28 European Countries Stastical Data</li>
                    </ul>
                </Modal.Body>
            </Modal>

            <Modal show={showEssential} onHide={handleCloseEssential}>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title>Essential</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBodytxt}>
                    <ul>
                        <li>Guyana</li>
                        <li>Indonesia</li>
                        <li>Kenya</li>
                        <li>Lesotho</li>
                        <li>Mexico (All Modes)</li>
                        <li>Namibia</li>
                        <li>Pakistan</li>
                        <li>Philippines</li>
                        <li>Sri Lanka</li>
                        <li>Uganda</li>
                        <li>Russia</li>
                        <li>Vietnam</li>
                    </ul>
                </Modal.Body>
            </Modal>

            <Modal show={showExpert} onHide={handleCloseExpert}>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title>Expert</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBodytxt}>
                    <ul>
                        <li> <strong>Detailed Custom Data</strong> </li>
                    </ul>
                    <ul>
                        <li>India(Weekly)</li>
                        <li>Kazakhstan</li>
                        <li>Liberia</li>
                        <li>Malawi</li>
                        <li>Niger</li>
                        <li>Nigeria</li>
                        <li>Ukraine</li>
                        <li>Senegal</li>
                        <li>Singapore</li>
                        <li>Tanzania</li>
                        <li>Uzbekistan</li>
                        <li>Zambia</li>
                        <li>Zimbabwe</li>
                        <li>Costa Rica</li>
                        <li>Kosovo</li>
                        <li>Sao Tome and Príncipe</li>
                        <li>Sierra Leone</li>
                        <li>Moldova</li>
                    </ul>
                    <ul>
                        <li> <strong>Statistical Data</strong> </li>
                    </ul>
                    <ul>
                        <li>Mauritius</li>
                        <li>Canada</li>
                        <li>Hong Kong</li>
                        <li>Iran</li>
                        <li>Qatar</li>
                        <li>New Zealand</li>
                        <li>Japan</li>
                        <li>South Africa</li>
                        <li>Guatemala</li>
                        <li>Taiwan</li>
                        <li>Thailand</li>
                        <li>Brazil </li>
                        <li>China</li>
                    </ul>
                    <ul className={styles.liWithHalf}>
                        <li> <strong>Brazil and USA Bill of Lading Data</strong> </li>
                    </ul>
                    <ul className={styles.liWithHalf}>
                        <li><strong>185 Countries Mirror Data</strong></li>
                    </ul>
                    <ul className={styles.liWithHalf}>
                        <li><strong>192 Countries Transit Data</strong> </li>
                    </ul>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default DetailedPricing;