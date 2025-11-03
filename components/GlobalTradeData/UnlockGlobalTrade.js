"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import React, { useState } from 'react';
import styles from "./globalimportexport.module.css";
import GlobTrustedClient from "./GlobTrustedClient";
import ZohoForm from "../../constants/ZohoForm";

function UnlockGlobalTrade() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className={styles.GlobEmtData}>
            <section>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-6 py-16">
                    <div className="md:w-1/2">
                        <h1 className={styles.unloCGlobtdta}>
                            Unlock Business Growth with Trade Intelligence Platform
                        </h1>
                        <p className="mt-3 mb-4 text-lg text-black">
                            Access shipment-level trade intelligence from 190+ countries to identify opportunities,
                            track competitors, and grow your international business.
                        </p>
                        <Button
                            className={styles.reqaFrDemo}
                            variant="success"
                            onClick={handleShow}
                        >
                            Request a Free Demo
                        </Button>
                        <GlobTrustedClient />

                    </div>
                    <div className="w-full md:w-1/2 pl-0 md:pl-5">
                        <ZohoForm
                            containerId="zf_div_RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                            formUrl="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                        />
                    </div>
                </div>
            </section>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Body>
                    {show && (
                        <ZohoForm
                            containerId="zf_div_modal"
                            formUrl="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                        />
                    )}
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default UnlockGlobalTrade;