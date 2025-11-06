"use client";
import styles from "./TradeTotalGraph.module.css";
import { Col, Row, Container } from "react-bootstrap";
import { usePathname } from "next/navigation";
import MalaysiaChartGraph from "./charts/MalaysiaChartGraph";
import MalaysiaExportData from "./charts/MalaysiaExportData";
import MalaysiaImportData from "./charts/MalaysiaImportData";
import VietnamChartGraph from "./charts/VietnamChartGraph";
import VietnamExportData from "./charts/VietnamExportData";
import VietnamImportData from "./charts/VietnamImportData";

function TradeTotalGraph() {
  // ✅ Get slug from URL
  const pathname = usePathname();
  const slug = pathname?.replace("/", "") || "malaysia-trade-data";

  const graphMap = {
    "malaysia-trade-data": {
      Chart: MalaysiaChartGraph,
      Export: MalaysiaExportData,
      Import: MalaysiaImportData,
      totalTitle: "What is the Total Trade of Malaysia with the World?",
      totalDesc:
        "Malaysia’s total trade with the world in 2024 stood over USD 630 billion. Here is a quick look at Malayasia’s exports and imports by year:",
      partnersTitle: "Who are the Top Import and Export Partners of Malaysia?",
      partnersDesc:
        "China, Singapore, and the United States are the top trading partners of Malaysia. Check 2024 stats:",
    },
    "vietnam-trade-data": {
      Chart: VietnamChartGraph,
      Export: VietnamExportData,
      Import: VietnamImportData,
      totalTitle: "Vietnam – A Prominent Country in Global Import Export Market",
      totalDesc: [
        <>
          Vietnam’s total trade with the world in 2024 stood over USD 901 billion. Vietnam’s top exports are electrical machinery & equipment, nuclear reactors, boilers, mechanical appliances, etc., footwear & gaiters, and knitted or crocheted and not knitted or not crocheted apparel and clothing.
          <br />
        </>,
        <>
          Vietnam’s top imports are electrical machinery & equipment, nuclear reactors, boilers, mechanical appliances, etc., plastics & articles, mineral fuels & oils, and iron & steel.
          <br />
          Here is a quick look at Vietnam’s exports and imports by year:
        </>,
      ],
      partnersTitle: "Who are the Top Import and Export Partners of Vietnam?",
      partnersDesc:
        "China, and South Korea are the top trading partners of Vietnam. Who are others? Check Vietnam’s top 5 import and export partners with 2024 stats:",
    },
  };

  const content = graphMap[slug] || graphMap["malaysia-trade-data"];
  const { Chart, Export, Import } = content;

  return (
    <div className={styles.TradeExportDtaGrph}>
      <Container>
        {/* Total Trade Graph */}
        <Row>
          <Col md={12}>
            <div className={styles.DtaGrphContainerImpExp}>
              <div className={styles.DtaGrphFirst}>
                <h2>{content.totalTitle}</h2>
                {/* Render totalDesc safely whether it's string or array */}
                {Array.isArray(content.totalDesc) ? (
                  content.totalDesc.map((para, i) => <p key={i}>{para}</p>)
                ) : (
                  <p>{content.totalDesc}</p>
                )}

                <Chart />
              </div>
            </div>
          </Col>
        </Row>

        {/* Partner Export/Import Graphs */}
        <Row>
          <Col md={12}>
            <div className={styles.DtaGrphContainerImpExp}>
              <div className={styles.DtaGrphFirst}>
                <h2>{content.partnersTitle}</h2>
                <p>{content.partnersDesc}</p>
              </div>
              <div className={styles.partGraphChart}>
                <Export />
                <Import />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TradeTotalGraph;
