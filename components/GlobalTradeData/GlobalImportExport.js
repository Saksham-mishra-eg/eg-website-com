"use client";
import Image from "next/image";
import "./GlobalFeatures.css";

function GlobalImportExport() {

    return (
        <section className="whaybest">
            <div className="curve curve-bottom"></div>
            <div className="curve curve-top"></div>
            <div className="container">
                <div className="row row-one">
                    <div className="col-lg-6">
                        <div className="info">
                            <div className="round-shape"></div>
                            <h2 className="info-title">
                                Benefits for Your Business
                            </h2>
                            <ul className="feature-list">
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-tower"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Find New Buyers & Suppliers </h4>
                                        <p>Connect with global importers, exporters, and distributors.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-selfie"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Track Competitors </h4>
                                        <p>Discover where competitors are sourcing from and selling to.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-camera-1"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Expand into New Markets </h4>
                                        <p>Identify high-demand countries and profitable opportunities.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-panoramic"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Boost Sales & Revenue </h4>
                                        <p>Make data-driven decisions that maximize your global reach.</p>
                                    </div>
                                </li>
                                 
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex order-first order-lg-last">
                        <div className="about-img">
                            <Image src="/clients/benefits.png" alt="benefits" width={366} height={353} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 d-flex">
                        <div className="about-img">
                            <Image src="/clients/ourdata.png" alt="ourdata" width={366} height={383} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="info">
                            <h2 className="info-title">Who Uses Our Data? </h2>
                            <ul className="feature-list">
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-tower"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Exporters & Importers</h4>
                                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-selfie"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Freight & Logistics Companies</h4>
                                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-camera-1"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Market Research & Consulting Firms</h4>
                                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="flaticon-panoramic"></i>
                                    </div>
                                    <div className="content">
                                        <h4>Banks & Financial Institutions</h4>
                                        <p>New had happen unable uneasy. Drawings pronounce can be followed improved out.
                                        </p>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default GlobalImportExport;