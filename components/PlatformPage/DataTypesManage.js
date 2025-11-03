"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DataTypesManage.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";

function CustomTabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function DataTypesManage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeData = () => {
        window.location.href = "data";
    }

    const handleDownloadDetailed = () => {
        window.location.href = "sample/customs-data.xlsx";
    }

    const handleDownloadStatistical = () => {
        window.location.href = "sample/statistical-data.xlsx";
    }

    const handleDownloadMirror = () => {
        window.location.href = "sample/mirror-data.xlsx";
    }

    const handleDownloadBillofldng = () => {
        window.location.href = "sample/bill-of-lading-data.xlsx";
    }

    const handleDownloadSuezcanal = () => {
        window.location.href = "sample/suez-canal-bill-of-lading-data.xlsx";
    }

    return (
        <div className={styles.DataTypeManagerBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.pltrtradeText}>
                            <h2>Data Type</h2>
                            <p> Select data type, and access essential data to get a bigger picture of the international market.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.manageTwbsdshd}>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs sx={{ "--Tabs-spacing": "37px", "--Tab-indicatorThickness": "3px", "--Tab-indicatorSize": "120px", "--Tab-indicatorRadius": "-15px" }} value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab className={styles.tabofMatrial} label="Detailed Data" {...a11yProps(0)} />
                                        <Tab className={styles.tabofMatrial} label="Statistical Data" {...a11yProps(1)} />
                                        <Tab className={styles.tabofMatrial} label="Mirror Data" {...a11yProps(2)} />
                                        <Tab className={styles.tabofMatrial} label="Bill of Lading Data" {...a11yProps(3)} />
                                        <Tab className={styles.tabofMatrial} label="Suez Canal BL Data" {...a11yProps(4)} />
                                        <Tab className={styles.tabofMatrial} label="Transit Data" {...a11yProps(5)} />
                                        <Tab className={styles.tabofMatrial} label="Cargo BL Data" {...a11yProps(6)} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Detailed Data</h3>
                                                    <p>Detailed Data covers 100% customs-based shipment details – Importer, Exporter, HS Code, Product Description, Value, Quantity, Port, Origin Country, Destination Country, Transport Mode, and so on. We provide detailed data of 55 countries in major regions like Asia, Africa, North America, South America, and Europe.</p>
                                                    <a href="/data" target="_blank" >Learn More <SlArrowRight /> </a>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <Image src="/detailed-data.png" alt="detailed-data" width={750} height={512} />
                                                </div>
                                                <div className={styles.dataAvailSamle}>
                                                    <Button className={styles.DnownSample} onClick={handleDownloadDetailed} >Download Sample</Button>
                                                    <Button className={styles.DnownSample} onClick={handleChangeData} >Data Availability</Button>{' '}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Statistical Data</h3>
                                                    <p>Statistical Data is useful for primary research as it contains details like Date, Quantity, Price, Country, and so on. Our dashboard covers statistical data of 37 countries in Asia, Africa, Oceania, Central America, South America, and Europe.</p>
                                                    <a href="/data" target="_blank" >Learn More <SlArrowRight /> </a>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <Image src="/statical-data.png" alt="statical-data" width={750} height={512} />
                                                </div>
                                                <div className={styles.dataAvailSamle}>
                                                    <Button className={styles.DnownSample} onClick={handleDownloadStatistical} >Download Sample</Button>
                                                    <Button className={styles.DnownSample} >Data Availability</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={5}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Transit Data</h3>
                                                    <p>Transit Data covers the information on import-export shipments that pass through different customs territories. We provide transit data of 190+ countries, covering Asia, Africa, North America, Europe, South America, and Oceania region.</p>
                                                    <a href="/data" target="_blank" >Learn More <SlArrowRight /> </a>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <Image src="/transit-data.png" alt="transit-data" width={750} height={512} />
                                                </div>
                                                <div className={styles.dataAvailSamle}>
                                                    {/* <Button className={styles.DnownSample} >Download Sample</Button> */}
                                                    <Button className={styles.DnownSample} >Data Availability</Button>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={3}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Bill of Lading Data</h3>
                                                    <p>Bill of Lading Data is based on shipping documents and contains company information. We provide a bill of lading data of Brazil and the United States of America.</p>
                                                    <a href="/data" target="_blank" >Learn More <SlArrowRight /> </a>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <Image src="/bill-of-lading.png" alt="bill-of-lading" width={750} height={512} />
                                                </div>
                                                <div className={styles.dataAvailSamle}>
                                                    <Button className={styles.DnownSample} onClick={handleDownloadBillofldng} >Download Sample</Button>
                                                    <Button className={styles.DnownSample} onClick={handleChangeData} >Data Availability</Button>{' '}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={4}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Suez Canal BL Data</h3>
                                                    <p>Suez Canal BL Data is based on shipping documents and contains information on shipments, which pass through Suez Canal. Our dashboard covers Suez Canal BL data of 109 countries in Asia, Africa, Oceania, North America, South America, and Europe region.</p>
                                                    <a href="/data" target="_blank" >Learn More <SlArrowRight /> </a>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <Image src="/suez-canal-bill-of-lading.png" alt="suez-canal-bill-of-lading" width={750} height={512} />
                                                </div>
                                                <div className={styles.dataAvailSamle}>
                                                    <Button className={styles.DnownSample} onClick={handleDownloadSuezcanal} >Download Sample</Button>
                                                    <Button className={styles.DnownSample} onClick={handleChangeData} >Data Availability</Button>{' '}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Mirror Data</h3>
                                                    <p>Mirror Data contains information on the trade of countries that do not report their trade data. This data is reconstructed based on data reported by partner countries. Our dashboard covers mirror data of 185 countries.</p>
                                                    <a href="/data" target="_blank" >Learn More <SlArrowRight /> </a>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <Image src="/mirror-data.png" alt="mirror-data" width={750} height={512} />
                                                </div>
                                                <div className={styles.dataAvailSamle}>
                                                    <Button className={styles.DnownSample} onClick={handleDownloadMirror} >Download Sample</Button>
                                                    <Button className={styles.DnownSample} onClick={handleChangeData} >Data Availability</Button>{' '}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={6}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Cargo BL Data</h3>
                                                    <p>Cargo BL Data is based on shipping documents and collected from various shipping companies. Our dashboard covers Cargo BL data of 190 countries in Africa, Asia, Europe, North America, Oceania, and South America region.</p>
                                                    <a href="/data" target="_blank" >Learn More <SlArrowRight /> </a>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <Image src="/cargo-bl-data.png" alt="cargo-bl-data" width={750} height={512} />
                                                </div>
                                                <div className={styles.dataAvailSamle}>
                                                    {/* <Button className={styles.DnownSample} >Download Sample</Button> */}
                                                    <Button className={styles.DnownSample} onClick={handleChangeData} >Data Availability</Button>{' '}
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                            </Box>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DataTypesManage;