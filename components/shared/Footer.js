"use client";
import styles from "./Footer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

const socialLinks = [
  { href: "https://www.facebook.com/exportgenius", icon: "/fb.png", alt: "Facebook", height: "40", width: "40" },
  { href: "https://www.linkedin.com/company/export-genius", icon: "/ld.png", alt: "Linkedin", height: "40", width: "40" },
  { href: "https://www.youtube.com/channel/UCESozaA6z4e0nQxyVqS8I1A", icon: "/yt.png", alt: "Youtube", height: "40", width: "40" },
  { href: "https://twitter.com/exportgenius", icon: "/tw.png", alt: "Twitter", height: "40", width: "40" },
  { href: "skype:exportgeniusindia", icon: "/sk.png", alt: "Skype", height: "40", width: "40" },
];

const footerSections = [
  {
    heading: "Product",
    links: [
      { href: "/platform", label: "Platform" },
      { href: "/trade-api", label: "API" },
      { href: "/data-license", label: "Data License" },
      { href: "/faq", label: "FAQs" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { href: "/about-us", label: "About Us" },
      { href: "/career-page", label: "Careers" },
      { href: "/contact-us", label: "Contact Us" },
      { href: "/help-support", label: "Help & Support" },
    ],
  },
  {
    heading: "Other RESOURCES",
    links: [
      { href: "/data", label: "Data Availability" },
      { href: "/pricing", label: "Pricing" },
      { href: "/how-we-help", label: "How We Help" },
      { href: "https://blog.exportgenius.com/", label: "Blog" },
    ],
  },
];

function Footer() {
  return (
    <div className={styles.FooterOnline}>
      <Container>
        <Row>
          <Col md={3}>
            <div className={styles.GeFooterLg}>
              <a href="https://www.exportgenius.com/">
                <Image
                  src="/footer-logo.png"
                  height={63}
                  width={275}
                  alt="export genius logo"
                />
              </a>
              <ul className={styles.SociLisstss}>
                {socialLinks.map(({ href, icon, height, width, alt }) => (
                  <li key={alt}>
                    <a href={href}>
                      {/* <img src={icon} alt={alt} /> */}
                      <Image
                        src={icon}
                        height={height}
                        width={width}
                        alt={alt}
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <p>© 2024 Export Genius. All rights reserved</p>
            </div>
          </Col>
          {footerSections.map(({ heading, links }) => (
            <Col md={3} key={heading}>
              <div className={styles.FooterCompny}>
                <div className={styles.HedComFtr}>{heading}</div>
                <ul className={styles.ForListTags}>
                  {links.map(({ href, label }) => (
                    <li key={label}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Footer;