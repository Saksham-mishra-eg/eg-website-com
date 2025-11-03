import "./GlobalFeatures.css";
import { FiDatabase } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { TbFilterSearch } from "react-icons/tb";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlinePriceChange } from "react-icons/md";
import Image from "next/image";

function GlobalFeatures() {

    return (
        <section className="feature" id="feature">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-title">
                            <h2 className="title">Key Features</h2>
                            <p>Our trade intelligent platform adapt to your unique business needs, providing AI-driven import-export data, market trends, and company insights for smarter decisions.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="left-feature">
                            <div className="feature-box feature-box1">

                                <div className="details">
                                    <h4>Global Importers & Exporters Database </h4>
                                    <p className="text">Discover verified importers and exporters worldwide to build profitable trade relationships.</p>
                                </div>
                                <div className="icon-area">
                                    <div className="icon">
                                        <FiDatabase className="reacIcons" />
                                    </div>
                                </div>
                            </div>
                            <div className="feature-box feature-box2">

                                <div className="details">
                                    <h4>Commodities & Pricing Insights </h4>
                                    <p className="text">Access detailed information on traded commodities, shipment values, and pricing trends to stay competitive.</p>
                                </div>
                                <div className="icon-area">
                                    <div className="icon">
                                        <MdOutlinePriceChange className="reacIcons" />
                                    </div>
                                </div>
                            </div>
                            <div className="feature-box feature-box3">

                                <div className="details">
                                    <h4>Market Trends & Forecasts </h4>
                                    <p className="text">Stay ahead with up-to-date global trade patterns and industry trends for smarter decision-making.</p>
                                </div>
                                <div className="icon-area">
                                    <div className="icon">
                                        <FaMoneyBillTrendUp className="reacIcons" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                        <div className="center-feature align-self-center infyscrol">
                            <Image className="scorlInfit" src="/clients/features.jpg" alt="freatures image" width={356} height={356} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="right-feature">
                            <div className="feature-box feature-box4">

                                <div className="icon-area">
                                    <div className="icon">
                                        <MdOutlineSpaceDashboard className="reacIcons" />
                                    </div>
                                </div>
                                <div className="details">
                                    <h4>Personalized Dashboard </h4>
                                    <p className="text">Customize your dashboard to track markets, products, and competitors most relevant to your business.</p>
                                </div>
                            </div>
                            <div className="feature-box feature-box5">

                                <div className="icon-area">
                                    <div className="icon">
                                        <SiMarketo className="reacIcons" />
                                    </div>
                                </div>
                                <div className="details">
                                    <h4>Competitor Analysis </h4>
                                    <p className="text">Analyze your competition’s trade activities, sourcing strategies, and customer base.</p>
                                </div>
                            </div>
                            <div className="feature-box feature-box6">

                                <div className="icon-area">
                                    <div className="icon">
                                       <TbFilterSearch className="reacIcons" />
                                    </div>
                                </div>
                                <div className="details">
                                    <h4>Advanced Search & Filters</h4>
                                    <p className="text">Search smarter with 20+ filters including HS Code, Product, Country, Port, Year, and more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GlobalFeatures;