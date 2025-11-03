"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PricingList.module.css";
import { Container, Col, Row, Form, Modal } from "react-bootstrap";
import React, { useContext } from 'react';
import { PricingContext } from './PricingContext';
import { useState } from 'react';
import "./modal.css";
import Image from "next/image";

function PricingList() {

    const [showStarter, setShowStarter] = useState(false);

    const handleCloseStarter = () => setShowStarter(false);
    const handleShowStarter = () => setShowStarter(true);

    const [showEssential, setShowEssential] = useState(false);

    const handleCloseEssential = () => setShowEssential(false);
    const handleShowEssential = () => setShowEssential(true);

    const [showExpert, setShowExpert] = useState(false);

    const handleCloseExpert = () => setShowExpert(false);
    const handleShowExpert = () => setShowExpert(true);

    const { isUSD, isMonthly, toggleCurrency, togglePlan } = useContext(PricingContext);

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

    const startermnthyrs = isMonthly ? "Per Year" : "Per Month";
    const essentialmnthyrs = isMonthly ? "Per Year" : "Per Month";
    const expertmnthyrs = isMonthly ? "Per Year" : "Per Month";

    const excelDownloadStarter = isMonthly ? "3,60,000 Points For Trade Data Excel Download" : "30,000 Points/ Month For Trade Data Excel Download";
    const excelDownloadEssential = isMonthly ? "10,80,000 Points For Trade Data Excel Download" : "90,000 Points/ Month For Trade Data Excel Download";
    const excelDownloadExpert = isMonthly ? "24,00,000 Points For Trade Data Excel Download" : "2,00,000 Points/ Month For Trade Data Excel Download";

    const dataAccessStarter = isMonthly ? "Data Access Jan 2020 Onwards" : "3 Months Historical Data Acces";
    const dataAccessEssential = isMonthly ? "Data Access Jan 2019 Onwards" : "3 Months Historical Data Acces";
    const dataAccessExpert = isMonthly ? "Data Access Jan 2010 Onwards" : "3 Months Historical Data Acces";

    const pontsContctStarter = isMonthly ? "5000 Points for Contact Information" : "300 Points for Contact Information";
    const pontsContctEssential = isMonthly ? "10000 Points for Contact Information" : "600 Points for Contact Information";
    const pontsContctExpert = isMonthly ? "30000 Points for Contact Information" : "1800 Points for Contact Information";

    const userLicenceEssential = isMonthly ? "5 Users License" : "Single User License";
    const userLicenceExpert = isMonthly ? "10 Users License" : "Single User License";

    const handleClickApply = () => {
        window.open("https://dashboard.exportgenius.in/sign-up", "_blank");
    }

    return (
        <div className={styles.PricingListPg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.PrcngEvry}>
                            <h1>Pricing & Plans for Enterprises</h1>
                            <div className={styles.UsdInrBtn}>
                                {/* <div className={styles.intToUd}>
                                    <span>INR</span>
                                    <Form>
                                        <Form.Check
                                            className="radioBtnCr"
                                            type="switch"
                                            id="custom-switch"
                                            checked={isUSD}
                                            disabled
                                            onChange={toggleCurrency}
                                        />
                                    </Form>
                                    <span>USD</span>
                                </div> */}
                                <div className={styles.intToUd}>
                                    <span>Monthly</span>
                                    <Form>
                                        <Form.Check
                                            className="radioBtnCr"
                                            type="switch"
                                            id="plan-switch"

                                            checked={isMonthly}
                                            onChange={togglePlan}
                                        />

                                    </Form>
                                    <span>Annually <br />
                                        <small className={styles.prcngOff}>(Save 20%)</small>
                                    </span>
                                    <span>(USD)</span>
                                </div>
                                {/* <p>The price is: {isUSD ? `$${starter.USD}` : `₹${starter.INR}`}</p> */}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className={styles.PrinTblComnun}>
                        <div className={styles.OPlan}>
                            <div className={styles.OPlanPrice}>
                                <h3 className={styles.OPrice}>Starter</h3>
                                <span className={styles.OCurrency}>
                                    {isUSD ? `$${isMonthly ? starter.USD.monthly : starter.USD.yearly}` : `₹${isMonthly ? starter.INR.monthly : starter.INR.yearly}`}
                                </span>
                                <p className={styles.PeYers}>/{startermnthyrs} </p>
                            </div>
                            <div className={styles.Aplytnttl}>
                                <button className={styles.AplyOBtn} onClick={handleClickApply}>Apply Now</button>
                                <span className={styles.tryIt} onClick={handleClickApply}>Try it</span>
                                <hr className={styles.Hrtag} />
                            </div>
                            <div className={styles.OChoices}>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p><b>11 Countries Detailed Data</b> Argentina, Chile, Colombia,
                                        Ecuador, India, Mexico (Sea Mode)....<button className={styles.viewLLs} onClick={handleShowStarter} >View All</button> </p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>Other Countries & Data Type</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/close.png" alt="icon" width={14} height={14} />
                                    <h6>No Exclusive Countries</h6>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>{dataAccessStarter}</p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>500 Searches/ Month</p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>{excelDownloadStarter}</p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>{pontsContctStarter}</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>Single User License</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>Basic Customer Support</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.OPlan}>
                            <div className={styles.OPlanPrice}>
                                <h3 className={styles.OPrice}>Essential</h3>
                                <span className={styles.OCurrency}>
                                    {isUSD ? `$${isMonthly ? essential.USD.monthly : essential.USD.yearly}` : `₹${isMonthly ? essential.INR.monthly : essential.INR.yearly}`}
                                </span>
                                <p className={styles.PeYers}>/{essentialmnthyrs}</p>
                            </div>
                            <div className={styles.Aplytnttl}>
                                <button className={styles.AplyOBtn} onClick={handleClickApply}>Apply Now</button>
                                <span className={styles.tryIt} onClick={handleClickApply}>Try it</span>
                                <hr className={styles.Hrtag} />
                            </div>
                            <div className={styles.OChoices}>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p><b>31 Countries Detailed Data</b> Argentina, Bangladesh, Bolivia, Botswana, Chile, Colombia....<button className={styles.viewLLs} onClick={handleShowEssential}>View All</button> </p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>Starter Plan Countries + other Countries</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>7 Exclusive Countries</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>{dataAccessEssential}</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>Unlimited Searches</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>{excelDownloadEssential}</p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>{pontsContctEssential}</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>{userLicenceEssential}</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>Email, Chat and Phone Customer Support</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.OPlan}>
                            <div className={styles.OHighlight}>
                                <p className={styles.OHighlightText}>Most Popular</p>
                            </div>
                            <div className={styles.OPlanPrice}>
                                <h3 className={styles.OPrice}>Expert</h3>
                                <span className={styles.OCurrency}>
                                    {isUSD ? `$${isMonthly ? expert.USD.monthly : expert.USD.yearly}` : `₹${isMonthly ? expert.INR.monthly : expert.INR.yearly}`}
                                </span>
                                <p className={styles.PeYers}>/{expertmnthyrs} </p>
                            </div>
                            <div className={styles.Aplytnttl}>
                                <button className={styles.AplyOBtn} onClick={handleClickApply}>Apply Now</button>
                                <span className={styles.tryIt} onClick={handleClickApply}>Try it</span>
                                <hr className={styles.Hrtag} />
                            </div>
                            <div className={styles.OChoices}>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p><b>62+ Countries Detailed Data</b> Angola, Argentina, Bangladesh, Bolivia, Botswana, Burundi ....<button className={styles.viewLLs} onClick={handleShowExpert}>View All</button> </p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>Starter & Essential Plan Countries + other Countries and Data Type</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>32 Exclusive Countries</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>{dataAccessExpert}</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>Unlimited Searches</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>{excelDownloadExpert}</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>{pontsContctExpert}</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>{userLicenceExpert}</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>Priority Customer Support</p>
                                </div>

                            </div>
                        </div>

                        <div className={styles.OPlan}>
                            <div className={styles.OPlanPrice}>
                                <span className={styles.OCurrency}>Customized Plan</span>
                                <h3 className={styles.OPrice}>Make Your Own Plan</h3>
                            </div>
                            <div className={styles.Aplytnttl}>
                                <button className={styles.AplyOBtn} onClick={handleClickApply}>Apply Now</button>
                                <span className={styles.tryIt} onClick={handleClickApply}>Learn more</span>
                                <hr className={styles.Hrtag} />
                            </div>
                            <div className={styles.OChoices}>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p> Customizable Countries Covered</p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>Choose from 62+ Countries Detailed Data</p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <h5>190+ Countries Cargo BL,
                                        Turkey & Thailand Detailed
                                        Data Available</h5>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>All Historical Data Access</p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>Unlimited Searches</p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>Customizable Trade Data Excel Download Records</p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>Customizable Points for Contact Information</p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>Customized User License</p>
                                </div>
                                <div className={styles.OChoiceGroup}>
                                    <Image src="/right.png" alt="icon" width={16} height={13} />
                                    <p>Priority Customer Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>

            </Container>
            <Modal show={showStarter} onHide={handleCloseStarter}>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title>11 Countries Detailed Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBodytxt}>
                    <ul>
                        <li>Argentina</li>
                        <li>Chile</li>
                        <li>Colombia</li>
                        <li>Ecuador</li>
                        <li>India</li>
                        <li>Mexico (Sea Mode)</li>
                        <li>Panama</li>
                        <li>Paraguay</li>
                        <li>Peru</li>
                        <li>Uruguay</li>
                        <li>Venezuela</li>
                    </ul>
                </Modal.Body>
            </Modal>

            <Modal show={showEssential} onHide={handleCloseEssential}>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title>31 Countries Detailed Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBodytxt}>
                    <ul>
                        <li>Argentina</li>
                        <li>Bangladesh</li>
                        <li>Bolivia</li>
                        <li>Botswana</li>
                        <li>Chile</li>
                        <li>Colombia</li>
                        <li>Cote d Ivoire</li>
                        <li>Ecuador</li>
                        <li>Ethiopia</li>
                        <li>Fiji</li>
                        <li>Guatemala</li>
                        <li>Guyana</li>
                        <li>India</li>
                        <li>Indonesia</li>
                        <li>Kenya</li>
                        <li>Lesotho</li>
                        <li>Mexico (All Modes)</li>
                        <li>Mexico (Sea Mode)</li>
                        <li>Namibia</li>
                        <li>Pakistan</li>
                        <li>Panama</li>
                        <li>Paraguay</li>
                        <li>Peru</li>
                        <li>Philippines</li>
                        <li>Russia</li>
                        <li>Rwanda</li>
                        <li>Sri Lanka</li>
                        <li>Uganda</li>
                        <li>Uruguay</li>
                        <li>Venezuela</li>
                        <li>Vietnam</li>
                    </ul>
                </Modal.Body>
            </Modal>

            <Modal show={showExpert} onHide={handleCloseExpert}>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title>62 Countries Detailed Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBodytxt}>
                    <ul>
                        <li>Angola</li>
                        <li>Argentina</li>
                        <li>Armenia</li>
                        <li>Bangladesh</li>
                        <li>Bolivia</li>
                        <li>Botswana</li>
                        <li>Burundi</li>
                        <li>Cameroon</li>
                        <li>Chad</li>
                        <li>Chile</li>
                        <li>Colombia</li>
                        <li>Costa Rica</li>
                        <li>Cote d Ivoire</li>
                        <li>Dominican Republic</li>
                        <li>DR Congo</li>
                        <li>Ecuador</li>
                        <li>Ethiopia</li>
                        <li>Fiji</li>
                        <li>Ghana</li>
                        <li>Guatemala</li>
                        <li>Guyana</li>
                        <li>India</li>
                        <li>India(Weekly)</li>
                        <li>Indonesia</li>
                        <li>Kazakhstan</li>
                        <li>Kenya</li>
                        <li>Kosovo</li>
                        <li>Lesotho</li>
                        <li>Liberia</li>
                        <li>Malawi</li>
                        <li>Maldives</li>
                        <li>Mexico (All Modes)</li>
                        <li>Mexico (Sea Mode)</li>
                        <li>Moldova</li>
                        <li>Namibia</li>
                        <li>Nicaragua</li>
                        <li>Niger</li>
                        <li>Nigeria</li>
                        <li>Pakistan</li>
                        <li>Panama</li>
                        <li>Paraguay</li>
                        <li>Peru</li>
                        <li>Philippines</li>
                        <li>Rwanda</li>
                        <li>Russia</li>
                        <li>Sao Tome and Príncipe</li>
                        <li>Senegal</li>
                        <li>Sierra Leone</li>
                        <li>Singapore</li>
                        <li>Sri Lanka</li>
                        <li>Tanzania</li>
                        <li>Uganda</li>
                        <li>Ukraine</li>
                        <li>Uruguay</li>
                        <li>Uzbekistan</li>
                        <li>Venezuela</li>
                        <li>Vietnam</li>
                        <li>Zambia</li>
                        <li>Zimbabwe</li>
                    </ul>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default PricingList;