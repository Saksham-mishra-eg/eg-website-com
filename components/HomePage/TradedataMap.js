"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradedataMap.module.css";
import { Col, Row, Tab, Nav, Container } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import './customStyles.css';
import Image from "next/image";

const continentData = [
    {
        key: "Asia",
        map: "/asia.png",
        countries: [
            { name: "Bangladesh", link: "/bangladesh-import", type: "C" },
            { name: "China", link: "/china-import", type: "S" },
            { name: "Hong Kong", type: "S" },
            { name: "Indonesia", link: "/indonesia-import", type: "C" },
            { name: "Iran", link: "/iran-import", type: "S" },
            { name: "Japan", link: "/japan-import", type: "S" },
            { name: "Kazakhstan", link: "/kazakhstan-import", type: "C" },
            { name: "Pakistan", link: "/pakistan-import", type: "C" },
            { name: "Philippines", link: "/philippines-import", type: "C" },
            { name: "Qatar", type: "S" },
            { name: "Russia", link: "/russia-import", type: "C" },
            { name: "Singapore", link: "/singapore-import", type: "C" },
            { name: "Sri Lanka", link: "/sri-lanka.php", type: "C" },
            { name: "Taiwan", type: "S" },
            { name: "Thailand", link: "/thailand-import", type: "S" },
            { name: "Thailand", link: "/thailand-import", type: "C" },
            { name: "Turkey", link: "/turkey-import", type: "C" },
            { name: "Ukraine", link: "/ukraine-import", type: "C" },
            { name: "Uzbekistan", link: "/uzbekistan-import", type: "C" },
            { name: "Vietnam", link: "/vietnam-import", type: "C" }
        ],
    },

    {
        key: "Africa",
        map: "/africa-map.png",
        countries: [
            { name: "Angola", link: "/angola-import", type: "C" },
            { name: "Botswana", link: "/botswana-import", type: "C" },
            { name: "Burundi", link: "/burundi-import", type: "C" },
            { name: "Cameroon", link: "/cameroon-import", type: "C" },
            { name: "Chad", link: "/chad-import", type: "C" },
            { name: "DR Congo", link: "/dr-congo-import", type: "C" },
            { name: "Ethiopia", link: "/ethiopia-import", type: "C" },
            { name: "Ghana", link: "/ghana-import", type: "C" },
            { name: "Ivory Coast", link: "/ivory-coast-import", type: "C" },
            { name: "Kenya", link: "/kenya-import", type: "C" },
            { name: "Lesotho", link: "/lesotho-import", type: "C" },
            { name: "Liberia", link: "/liberia-import", type: "C" },
            { name: "Malawi", link: "/malawi-import", type: "C" },
            { name: "Namibia", link: "/namibia-import", type: "C" },
            { name: "Niger", link: "/niger-import", type: "C" },
            { name: "Nigeria", link: "/nigeria-import", type: "C" },
            { name: "Sao Tome", link: "/sao-tome-and-principe-import", type: "C" },
            { name: "Senegal", link: "/senegal-import", type: "C" },
            { name: "Sierra Leone", link: "/sierra-leone-import", type: "C" },
            { name: "South Africa", link: "/south-africa-import", type: "S" },
            { name: "Tanzania", link: "/tanzania-import", type: "C" },
            { name: "Uganda", link: "/uganda-import", type: "C" },
            { name: "Zambia", link: "/zambia-import", type: "C" },
            { name: "Zimbabwe", link: "/zimbabwe-import", type: "C" }
        ],
    },
    {
        key: "America",
        map: "/america-map.png",
        countries: [
            { name: "Argentina", link: "/argentina-import", type: "C" },
            { name: "Bolivia", link: "/bolivia-import", type: "C" },
            { name: "Brazil", link: "/brazil-import", type: "S" },
            { name: "Canada", link: "/canada-import", type: "S" },
            { name: "Chile", link: "/chile-import", type: "C" },
            { name: "Colombia", link: "/colombia-import", type: "C" },
            { name: "Costa Rica", link: "/costa-rica", type: "C" },
            { name: "Ecuador", link: "/ecuador-import", type: "C" },
            { name: "Guatemala", link: "/guatemala-import", type: "S" },
            { name: "Guyana", link: "/guyana-import", type: "C" },
            { name: "Panama", link: "/panama-import", type: "C" },
            { name: "Paraguay", link: "/paraguay-import", type: "C" },
            { name: "Peru", link: "/peru-import", type: "C" },
            { name: "Uruguay", link: "/uruguay-import", type: "C" },
            { name: "Venezuela", link: "/venezuela-import", type: "C" }
        ]
    },
    {
        key: "Europe",
        map: "/europe-map.png",
        countries: [
            { name: "Austria", link: "/austria-import", type: "S" },
            { name: "Belgium", link: "/belgium-import", type: "S" },
            { name: "Bulgaria", link: "/bulgaria-import", type: "S" },
            { name: "Croatia", link: "/croatia-import", type: "S" },
            { name: "Cyprus", link: "/cyprus-import", type: "S" },
            { name: "Czech Republic", link: "/czech-republic-import", type: "S" },
            { name: "Denmark", link: "/denmark-import", type: "S" },
            { name: "Estonia", link: "/estonia-import", type: "S" },
            { name: "Finland", link: "/finland-import", type: "S" },
            { name: "France", link: "/france-import", type: "S" },
            { name: "Germany", link: "/germany-import", type: "S" },
            { name: "Greece", link: "/greece-import", type: "S" },
            { name: "Hungary", link: "/hungary-import", type: "S" },
            { name: "Ireland", link: "/ireland-import", type: "S" },
            { name: "Italy", link: "/italy-import", type: "S" },
            { name: "Kosovo", link: "/kosovo-import", type: "C" },
            { name: "Latvia", link: "/latvia-import", type: "S" },
            { name: "Lithuania", link: "/lithuania-import", type: "S" },
            { name: "Luxembourg", link: "/luxembourg-import", type: "S" },
            { name: "Malta", link: "/malta-import", type: "S" },
            { name: "Moldova", link: "/moldova-import", type: "C" },
            { name: "Netherlands", link: "/netherlands-import", type: "S" },
            { name: "Poland", link: "/poland-import", type: "S" },
            { name: "Portugal", link: "/portugal-import", type: "S" },
            { name: "Romania", link: "/romania-import", type: "S" },
            { name: "Russia", link: "/russia-import", type: "C" },
            { name: "Slovakia", link: "/slovakia-import", type: "S" },
            { name: "Slovenia", link: "/slovenia-import", type: "S" },
            { name: "Spain", link: "/spain-import", type: "S" },
            { name: "Sweden", link: "/sweden-import", type: "S" },
            { name: "Turkey", link: "/turkey-import", type: "C" },
            { name: "UK", link: "/uk-import", type: "S" },
            { name: "Ukraine", link: "/ukraine-import", type: "C" },
            { name: "Uzbekistan", link: "/uzbekistan-import", type: "C" }
        ]
    },
    {
        key: "Oceania",
        map: "/oceania-map.png",
        countries: [
            { name: "Fiji", link: "/fiji-import", type: "C" },
            { name: "New Zealand", link: "/new-zealand-import", type: "S" },
        ],
    },
];

function TradedataMap() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderCountryList = (countries) => (
        <>
            <ul className={styles.UListCntnt}>
                {countries.map(({ name, link, type }, idx) => (
                    <li
                        key={idx}
                        className={type === "C" ? styles.CstmDatat : styles.StstDtDatat}
                    >
                        {link ? <a href={link} target="_blank" rel="noopener noreferrer">{name}</a> : name}
                    </li>
                ))}
            </ul>
            <ul className={styles.DtaYpe}>
                <li className={styles.CstmDt}>Detailed Customs</li>
                <li className={styles.StstDt}>Statistical Data</li>
            </ul>
        </>
    );

    return (
        <div className={styles.TradedataMapOnline}>
            <Container>
                <Row>
                    <Col md={5}>
                        <div className={styles.WrlLrgTxt}>
                            <h2>
                                Prime Center for <span>Import & Export</span> Data{" "}
                                <Image src="/arow.png" alt="arrow" width={95} height={16} />
                            </h2>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className={styles.WrlLrgBox}>
                            <p>The all-in-one platform allows you to access detailed Customs
                                Data, Statistical Data, Mirror Data, Bill of Lading Data, Suez
                                Canal Bill of Lading Data, Transit Data, and Cargo BL Data for
                                your desired country. </p>
                        </div>
                    </Col>
                </Row>
                <Tab.Container defaultActiveKey="Asia">
                    <Row>
                        <Col sm={12}>
                            <div className={styles.continentTabs}>
                                <Nav
                                    variant="pills"
                                    className={`flex-row justify-content-evenly ${isMobile ? 'nav-mobile' : ''}`}
                                >
                                    {continentData.map(({ key }) => (
                                        <Nav.Item key={key} className={styles.navClassWidth}>
                                            <Nav.Link eventKey={key} className={styles.tabsCntnt}>{key}</Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content>
                                {continentData.map(({ key, map, countries }) => (
                                    <Tab.Pane eventKey={key} key={key}>
                                        <Row>
                                            <Col md={4}>
                                                <div className={styles.mapImg}>
                                                    <Image src={map} alt={`${key} map`} width={416} height={332} />
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.ContntSecton}>
                                                    <div className={styles.CntntTextBr}>
                                                        <h3>{key}</h3>
                                                    </div>
                                                    {renderCountryList(countries)}
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
}

export default TradedataMap;