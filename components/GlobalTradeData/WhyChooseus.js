"use client";
import styles from "./Chooseus.module.css";
import { IoLayersOutline } from "react-icons/io5";
import { MdOutlineInsights } from "react-icons/md";
import { TiGlobeOutline } from "react-icons/ti";
import { MdImageSearch } from "react-icons/md";

function WhyChooseUs() {

    return (
        <div className={styles.WhyChooseUsSeton}>
            <section id="features" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className={styles.chooseHeading}>Why Choose Us?</h1>
                    {/* <p className={styles.chooseHeadingPra}>Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p> */}
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className={styles.chooseBoxmodal}>
                            <div className={styles.boxsubModel}>
                                <TiGlobeOutline className={styles.whyLayerSvg} />
                                <h3 className={styles.choseFilterad}> Comprehensive Global Coverage</h3>
                                <p className={styles.fontfilterpara}>Gain access to verified import-export data from over 190 countries with shipment-level details that help you expand globally</p>
                            </div>
                        </div>

                        <div className={styles.chooseBoxmodal}>
                            <div className={styles.boxsubModel}>
                                <MdOutlineInsights className={styles.whyLayerSvg} />
                                <h3 className={styles.choseFilterad}>Detailed & Exclusive Trade Insights</h3>
                                <p className={styles.fontfilterpara}>Explore importer and exporter details from 60+ countries along with exclusive datasets from 30+ nations, giving you the edge over competitors.</p>
                            </div>
                        </div>

                        <div className={styles.chooseBoxmodal}>
                            <div className={styles.boxsubModel}>
                                <MdImageSearch className={styles.whyLayerSvg} />
                                <h3 className={styles.choseFilterad}>Advanced Search & Filters</h3>
                                <p className={styles.fontfilterpara}>Use 20+ smart filters (HS Code, Product, Importer, Exporter, Country, Port, Date, etc.) to drill down into trade data and find exactly what you need.</p>
                            </div>
                        </div>

                        <div className={styles.chooseBoxmodal}>
                            <div className={styles.boxsubModel}>
                                <IoLayersOutline className={styles.whyLayerSvg} />
                                <h3 className={styles.choseFilterad}> AI-Powered Platform</h3>
                                <p className={styles.fontfilterpara}>Our AI-integrated trade intelligence platform makes data search, analysis, and visualization faster, smarter, and accessible from anywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
}

export default WhyChooseUs;