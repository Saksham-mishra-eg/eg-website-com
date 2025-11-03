"use client";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./CallToAction.css";
import ZohoForm from "../../constants/ZohoForm";

function CallToAction() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className="caltoAction">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="Calltoaction-title">
                            <h2>Unlock Global Trade Opportunities</h2>
                            <p>Access global import-export data to discover buyers, suppliers, and new markets. Make smarter decisions and grow your business worldwide.</p>
                            <button type="button" onClick={handleShow} className="scheDemoBtn btn btn-success" fdprocessedid="uxcs1h">Request a Free Demo</button>
                            {/* <button type="button" className="LogonDemoBtn btn btn-primary" fdprocessedid="4rul0j">Get Started Now</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Body>
                    {show && (
                        <ZohoForm
                            containerId="zf_div_modal"
                            formUrl="https://forms.zohopublic.in/exportgenius508/form/GetinTouchwithUsCom/formperma/RdcHxyxkTIoREvLySOgbvYh7qidPatcUTaWp7fK115A"
                        />
                    )}
                </Modal.Body>
            </Modal>
        </section>
    );
}

export default CallToAction;