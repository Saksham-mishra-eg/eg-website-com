"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CustomizedPlan.module.css";
import { Card, Col, Container, Form, Nav, Row, Tab } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import "./modal.css";
import data from "./CountryPricing.json";

function CustomizedPlan() {

    const [aggregatedData, setAggregatedData] = useState({});
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    const [selectedPeriods, setSelectedPeriods] = useState({});

    useEffect(() => {

        const uniqueCountries = [...new Set(data.map(item => item.country_name))];
        setAllCountries(uniqueCountries);

        const aggregatePrices = () => {
            const result = data.reduce((acc, curr) => {
                const { country_name, price_per_year_in_USD } = curr;
                if (!acc[country_name]) {
                    acc[country_name] = 0;
                }
                acc[country_name] += price_per_year_in_USD;
                return acc;
            }, {});
            setAggregatedData(result);
        };

        aggregatePrices();
    }, []);

    const handleCheckboxChange = (country) => {
        setSelectedCountries(prevSelectedCountries =>
            prevSelectedCountries.includes(country)
                ? prevSelectedCountries.filter(c => c !== country)
                : [...prevSelectedCountries, country]
        );
    };

    const handlePeriodChange = (country, period) => {
        setSelectedPeriods(prevSelectedPeriods => ({
            ...prevSelectedPeriods,
            [country]: period
        }));
    };

    const calculatePrice = (country, period) => {
        const annualPrice = aggregatedData[country] || 0;
        switch (period) {
            case "1":
                return annualPrice / 12;
            case "3":
                return (annualPrice / 12) * 3;
            case "6":
                return (annualPrice / 12) * 6;
            case "12":
                return annualPrice;
            default:
                return annualPrice;
        }
    };

    const calculateTotalPrice = () => {
        return selectedCountries.reduce((total, country) => {
            const period = selectedPeriods[country] || "12"; // Default to 1 year
            return total + calculatePrice(country, period);
        }, 0);
    };

    return (
        <div className={styles.CustmPlaand}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.PricnOverw}>
                            <h2>Make your customized plan</h2>
                            {/* {selectedCountries.map(country => (
                                <div key={country}>
                                        {country}
                                    <p>{country} Total Price: {aggregatedData[country]}</p>
                                </div>
                            ))} */}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <div className={styles.selcBuyCntr}>

                            <div className={styles.selcBuy}>Select Your Country to buy</div>

                            <Tab.Container id="left-tabs-example" defaultActiveKey="Asia">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link className={styles.LinkselcBuy} eventKey="Asia">Asia</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.LinkselcBuy} eventKey="Africa">Africa</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.LinkselcBuy} eventKey="America">America</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.LinkselcBuy} eventKey="Europe">Europe</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.LinkselcBuy} eventKey="Oceania">Oceania</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="Asia" className={styles.tabpaneMarmg}>
                                                <Row>
                                                    <Form className={styles.FormItemsBs}>
                                                        {['Bangladesh', 'China', 'Indonesia', 'Iran', 'Kazakhstan', 'Philippines', 'Singapore', 'Sri Lanka', 'Qatar', 'Uzbekistan', 'Vietnam', 'Taiwan', 'Turkey', 'Ukraine', 'Thailand', 'Japan'].map((country, index) => (
                                                            // {/* {allCountries.map((country, index) => ( */}
                                                            <Form.Check
                                                                className={styles.FormCheckbx}
                                                                type="checkbox"
                                                                id={`inline-checkbox-${index + 1}`}
                                                                label={country}
                                                                onChange={() => handleCheckboxChange(country)}
                                                                checked={selectedCountries.includes(country)}
                                                                key={country}
                                                            />
                                                        ))}
                                                    </Form>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Africa" className={styles.tabpaneMarmg}>
                                                <Row>
                                                    <Form className={styles.FormItemsBs}>
                                                        {['Angola', 'Botswana', 'Burundi', 'Cameroon', 'Chad', 'DR Congo', 'Ethiopia', 'Ghana', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Malawi', 'Namibia', 'Niger', 'Nigeria', 'Sao Tome', 'Senegal', 'Tanzania', 'Uganda', 'Zambia', 'Zimbabwe', 'Sierra Leone', 'South Africa'].map((country, index) => (
                                                            <Form.Check
                                                                className={styles.FormCheckbx}
                                                                type="checkbox"
                                                                id={`inline-checkbox-2-${index + 1}`}
                                                                label={country}
                                                                onChange={() => handleCheckboxChange(country)}
                                                                checked={selectedCountries.includes(country)}
                                                                key={country}
                                                            />
                                                        ))}
                                                    </Form>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="America" className={styles.tabpaneMarmg}>
                                                <Row>
                                                    <Form className={styles.FormItemsBs}>
                                                        {['Argentina', 'Bolivia', 'Brazil', 'Canada', 'Chile', 'Colombia', 'Costa Rica', 'Ecuador', 'Guatemala', 'Guyana', 'Paraguay', 'Peru', 'Uruguay', 'Venezuela', 'Panama'].map((country, index) => (
                                                            <Form.Check
                                                                className={styles.FormCheckbx}
                                                                type="checkbox"
                                                                id={`inline-checkbox-3-${index + 1}`}
                                                                label={country}
                                                                onChange={() => handleCheckboxChange(country)}
                                                                checked={selectedCountries.includes(country)}
                                                                key={country}
                                                            />
                                                        ))}
                                                    </Form>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Europe" className={styles.tabpaneMarmg}>
                                                <Row>
                                                    <Form className={styles.FormItemsBs}>
                                                        {['Kosovo', 'Turkey', 'Ukraine', 'Russia', 'Uzbekistan', 'Moldova', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom'].map((country, index) => (
                                                            <Form.Check
                                                                className={styles.FormCheckbx}
                                                                type="checkbox"
                                                                id={`inline-checkbox-4-${index + 1}`}
                                                                label={country}
                                                                onChange={() => handleCheckboxChange(country)}
                                                                checked={selectedCountries.includes(country)}
                                                                key={country}
                                                            />
                                                        ))}
                                                    </Form>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Oceania" className={styles.tabpaneMarmg}>
                                                <Row>
                                                    <Form className={styles.FormItemsBs}>
                                                        {['Fiji', 'New Zealand'].map((country, index) => (
                                                            <Form.Check
                                                                className={styles.FormCheckbx}
                                                                type="checkbox"
                                                                id={`inline-checkbox-5-${index + 1}`}
                                                                label={country}
                                                                onChange={() => handleCheckboxChange(country)}
                                                                checked={selectedCountries.includes(country)}
                                                                key={country}
                                                            />
                                                        ))}
                                                    </Form>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.YourProducts}>
                            <div className={styles.prodcth3lg}>
                                <h3>Selected Country</h3>
                            </div>
                            <div className={styles.YourProducts_box}>
                                <Card className={styles.ProducBodx}>
                                    <Card.Body className={styles.cardBoddy}>
                                        {/* <CloseButton className={styles.CloseBodybtn} aria-label="Hide" /> */}

                                        <div className={styles.carbdTilusd}>
                                            <Card.Title className={styles.CrdTitle}>Your Countries List </Card.Title>
                                            <Card.Text className={styles.CrdTitle}>
                                                {/* <DateRangePicker /> */}
                                            </Card.Text>
                                        </div>
                                        <Card.Text className={styles.CrdTixt}>
                                            {selectedCountries.map(country => (
                                                <div className={styles.lsitContrNme} key={country}>
                                                    <Row>
                                                        <Col>
                                                            <p>{country}</p>
                                                        </Col>
                                                        <Col>
                                                            <Form.Select
                                                                className={styles.onmoyrsSlect}
                                                                aria-label="Default select example"
                                                                onChange={(e) => handlePeriodChange(country, e.target.value)}
                                                                value={selectedPeriods[country] || "12"}
                                                            >
                                                                <option value="1">1/mo</option>
                                                                <option value="3">3/mo</option>
                                                                <option value="6">6/mo</option>
                                                                <option value="12">1/yr</option>
                                                            </Form.Select>
                                                        </Col>

                                                        <Col>
                                                            <h6>{calculatePrice(country, selectedPeriods[country] || "12").toFixed(2)}</h6>
                                                        </Col>

                                                        <Col md={12}>
                                                            <p style={{ color: '#0082c1', fontSize: '13px', width: '100%', marginTop: '10px', marginBottom: '10px' }} >Includes all Data types and all Directions*</p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            ))}
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                                {/* <div className={styles.prodcth3lg}>
                                    <h3>Select Date</h3>
                                </div> */}
                                {/* <DateRangePicker /> */}

                            </div>
                            <div className={styles.BillingMonthyly}>
                                {/* <h2>Total Price: {calculateTotalPrice().toFixed(2)}</h2> */}
                                <h3>{calculateTotalPrice().toFixed(2)} /yrs</h3>
                              
                                <a type="button" href="https://www.exportgenius.com/contact-us" className={styles.TaklSelsbn}>Buy Now</a>
                                <p> <a className={styles.viewPricebn} href="/terms-and-conditions">Terms & Conditions</a> </p>
                                <p>  <a className={styles.viewPricebn} href="/privacy-policy">Privacy Policy</a> </p>
                            </div>
                            <div className={styles.coushwoTxt}>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}
export default CustomizedPlan;