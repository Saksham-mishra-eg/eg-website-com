"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ManageEndtoEnd.module.css";
import { Col, Row, Button, Container, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./metrialui.css";
import React, { useState } from "react";
import ZohoForm from "../../constants/ZohoForm";
import Image from "next/image";

function CustomTabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
  return { id: `simple-tab-${index}`, "aria-controls": `simple-tabpanel-${index}` };
}

function ManageEndtoEnd() {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);

  const tabContent = [
    {
      label: "Company Data Analysis",
      title: "Company Data Analysis",
      desc: "Access import export data of companies and get a detailed trade overview of importers and exporters. Find and connect with new and potential buyers and suppliers. Identify which companies are growing and which ones are shrinking. Discover your competitors by knowing their market share and business aspects.",
      img: "/company-analysis.png",
      alt: "Company Analysis",
    },
    {
      label: "Comprehensive Data Coverage",
      title: "Comprehensive Data Coverage",
      desc: "Keep a tab on the global supply chain, and gain valuable business intelligence from import export trade data. Whatever your goals, our platform is designed to provide hassle-free data based on Importer, Exporter, HS Code, Commodity, Data Duration, Port, Transport Mode, and so on.",
      img: "/data-coverage.png",
      alt: "Data Coverage",
    },
    {
      label: "Global Trade Data Search",
      title: "Global Trade Data Search",
      desc: "Access our dashboard to get a bigger picture of global trade developments. Our global trade data search helps you find the biggest import and export countries, top trade commodities, and a lot more. Explore import export data worldwide and gain valuable market insights.",
      img: "/global-trade.png",
      alt: "Global Trade Data",
    },
    {
      label: "Commodity Price Analysis",
      title: "Commodity Price Analysis",
      desc: "Access our dashboard and view historical data and the latest information on commodities that companies import and export globally to have a better price evaluation. Compare and understand the actual market value of products to choose the companies that can provide you with the best price.",
      img: "/price-analysis.png",
      alt: "Price Analysis",
    },
    {
      label: "Reach Targeted Companies",
      title: "Reach Targeted Companies",
      desc: "Our import export data covers verified contact details – phone numbers, email addresses, websites, etc. of importers and exporters that will help you reach the targeted companies. Access our dashboard and start exploring crucial company information along with their contacts.",
      img: "/targeted-companies.png",
      alt: "Targeted Companies",
    },
  ];

  return (
    <div className={styles.MangeEndtoend}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.pltrtradeText}>
              <h2>A High-level View of the Global Import-Export Market</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className={styles.manageTwbsdshd}>
              <Box sx={{ width: "100%" }}>
                {/* Tabs Header */}
                <Box className={styles.boxclanameMogile} sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    className={styles.multitabsrootmng}
                    value={value}
                    onChange={(e, newValue) => setValue(newValue)}
                    aria-label="basic tabs example"
                  >
                    {tabContent.map((tab, index) => (
                      <Tab key={index} className={styles.tabofMatrial} label={tab.label} {...a11yProps(index)} />
                    ))}
                  </Tabs>
                </Box>

                {/* Tab Panels */}
                {tabContent.map((tab, index) => (
                  <CustomTabPanel key={index} value={value} index={index}>
                    <div className={styles.comprHendTbs}>
                      <Row>
                        <Col md={3}>
                          <div className={styles.inetleInstigh}>
                            <h3>{tab.title}</h3>
                            <p>{tab.desc}</p>
                            <Button className={styles.Explormorebtn} onClick={() => setShow(true)}>
                              <span>Explore More</span>
                            </Button>
                          </div>
                        </Col>
                        <Col md={9}>
                          <div className={styles.inimgigh}>

                            <Image src={tab.img} alt={tab.alt} width={930} height={492} />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </CustomTabPanel>
                ))}
              </Box>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Zoho Form Modal */}
      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
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

export default ManageEndtoEnd;