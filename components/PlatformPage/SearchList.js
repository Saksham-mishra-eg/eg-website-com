import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./SearchList.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Form, Row } from "react-bootstrap";

function SearchList() {

    return (
        <div className={styles.SearchListOnline}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.SrchListTxt}>
                            <h2>Search Global Trade Data</h2>
                            <p>Search import export data, importers, and exporters based on country, HS Code, and product description.</p>
                        </div>

                        <div className={styles.SrchListForm}>
                            <Form.Select className={styles.SlctFormSrch} aria-label="Default select example">
                                <option>Global</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Select className={styles.SlctFormSrch} aria-label="Default select example">
                                <option>Detailed Import</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Select className={styles.SlctFormSrch} aria-label="Default select example">
                                <option>Productu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Control className={styles.SlctFormSrch}
                                type="text"
                                id="textBar" placeholder="Search Product, Hs Code"
                            />
                            <Form.Control className={styles.SlctFormSrchBtn}
                                type="button"
                                id="button_sumint"
                                value="Search"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SearchList;