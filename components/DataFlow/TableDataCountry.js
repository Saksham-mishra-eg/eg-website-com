"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TableDataCountry.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon'
import React, { useState, useEffect } from 'react';
import "./flag.css"
import { ProductService } from './CustomerService';
import Image from "next/image";

function TableDataCountry() {

    const [products, setProducts] = useState([]);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [globalFilter, setGlobalFilter] = useState("");

    useEffect(() => {
        ProductService.getProducts().then(productData => {
            setProducts(productData);
        });
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short' };
        return new Date(dateString).toLocaleString('en-US', options);
    };

    const dataAvailabilityBodyTemplate = (rowData) => {
        return `${formatDate(rowData.data_from)} to ${formatDate(rowData.data_till)}`;
    };

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    const imageBodyTemplate = (rowData) => {
        // Create a dynamic URL for the .xlsx file based on the country and direction fields
        const fileUrl = `/sample/${rowData.country.toLowerCase().replace(/ /g, '-')}-${rowData.direction.toLowerCase()}.xlsx`;
        return (
            <a href={fileUrl} rel="noopener noreferrer">
                <Image src="/excel-micro.png" alt={rowData.country} width={30} height={30} />
                {/* <img src="./excel-micro.png" alt={rowData.country} style={{ width: '30px', height: '30px' }} /> */}
            </a>
        );
    };

    const countryBodyTemplate = (rowData) => {
        const flagUrl = `/country-map/${rowData.country.toLowerCase().replace(/ /g, '-')}.png`;
        return (
            <div>
                 <Image src={flagUrl} alt={rowData.country} width={20} height={20} style={{ marginRight: '8px', display: "inline" }} />
                {/* <img src={flagUrl} alt={rowData.country} style={{ marginRight: '8px' }} /> */}
                <span>{rowData.country}</span>
            </div>
        );
    };

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        continent: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        country: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        data_type: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        direction: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
    });

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => (
        <div className="flex justify-content-end">
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
            </IconField>
        </div>
    );

    const header = renderHeader();

    return (
        <div className={styles.TableDataCountryBg}>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="card tblCard">
                            <div className="d-flex gap-2 align-items-center mb-3 py-3 ml-3">
                                <h5>Search:</h5>
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search" />
                                    <InputText
                                        className={styles.searchProductGlobl}
                                        value={globalFilter}
                                        onChange={(e) => setGlobalFilter(e.target.value)}
                                        placeholder="Search..."
                                    />
                                </span>
                            </div>
                            <DataTable value={products} scrollable scrollHeight="400px" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} globalFilter={globalFilter} globalFilterFields={['continent', 'country', 'data_type', 'direction']} filters={filters} tableStyle={{ minWidth: '50rem' }}
                                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                                <Column field="continent" header="Continent" sortable ></Column>
                                <Column field="country" header="Country" body={countryBodyTemplate} sortable ></Column>
                                <Column field="data_type" header="Data Type" sortable ></Column>
                                <Column field="direction" header="Direction" sortable ></Column>
                                <Column field="data_coverage" header="Data Coverage" sortable ></Column>
                                <Column field="data_fields" header="Data Field" sortable style={{ width: '30%' }} ></Column>
                                <Column field="dataAvailability" body={dataAvailabilityBodyTemplate} header="Data Availability" sortable ></Column>
                                <Column field="image" body={imageBodyTemplate} header="Sample" sortable ></Column>
                            </DataTable>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TableDataCountry;