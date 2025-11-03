"use client";
import styles from "./CurrentOpening.module.css";
import { Card, Container, Col, Form, Row, Accordion, useAccordionButton } from "react-bootstrap";
import { useState, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import 'react-phone-input-2/lib/style.css';
import * as z from "zod";
import Image from "next/image";

const formSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z.string().min(1, { message: "Phone number is required" }),
    file: z
        .any()
        .refine(
            (file) => typeof window === "undefined" || file instanceof File,
            "Please upload a valid file"
        ),
});


function ContextAwareToggle({ children, eventKey, callback }) {
    // const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    // const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button
            type="button"
            className={styles.AcrdinBtn}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

function CurrentOpening() {

    const [submitting, setSubmitting] = useState(false)
    const {
        register,
        handleSubmit,
        control,
        reset, // Import reset function
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (data) => {

        const fileName = data.file.name;
        console.log(fileName);

        setSubmitting(true);
        try {
            const apiPayload = {
                firstName: data.firstName,
                lastName: data.lastName,
                countryCode: "+91", // If countryCode is optional
                contactNumber: data.phoneNumber,
                companyName: "career",
                workEmail: data.email,
                message: "No message provided.",
                url: window.location.href,
                file: fileName,
            }

            console.log("Submitting form data:", data); // Debug log

            const response = await fetch(
                "https://fjgjyxhtdds.marketinsidedata.com/api/send-email-eg",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify(apiPayload),
                }
            );
            console.log("API Response Status:", response.status);

            let result;
            if (response.ok) {
                try {
                    result = await response.json();
                    console.log("Parsed result:", result);
                    alert("Form submitted successfully!");
                    reset();
                } catch (error) {
                    console.error("Error parsing JSON response:", error);
                    alert("Form submitted, but response could not be parsed.");
                }
            } else {
                console.error("HTTP error status:", response.status);
                const errorText = await response.text();
                alert(`Submission failed: ${errorText}`);
            }
        } catch (error) {
            console.error("Form submission error:", error)
            alert("There was an error submitting the form. Please try again.")
        } finally {
            setSubmitting(false)
        }
    }


    const [selectedJobTitle, setSelectedJobTitle] = useState("Business Development Representative");

    const handleJobSelection = (title) => {
        setSelectedJobTitle(title);
    };

    const [show, setShow] = useState("All")

    const handleOption = (event) => {
        setShow(event.target.value);
    };

    const cardsData = useMemo(() => [
        {
            id: 0,
            department: "Sales",
            title: "Business Development Representative",
            description: "Export genius is growing and therefore seeking a talented Business Development Representative to join our exceptional team.",
        },
        {
            id: 1,
            department: "IT",
            title: "Software Development Representative",
            description: "Export genius is growing and therefore seeking a talented Software Development Representative to join our exceptional team.",
        },
        {
            id: 2,
            department: "Marketing",
            title: "Marketing Representative",
            description: "Export genius is growing and therefore seeking a talented Marketing Representative to join our exceptional team.",
        },
        {
            id: 3,
            department: "Sales",
            title: "Senior Sales Representative",
            description: "Export genius is growing and therefore seeking a talented Senior Sales Representative to join our exceptional team.",
        },
    ], []);

    const filteredCards = useMemo(() => {
        return show === "All" ? cardsData : cardsData.filter(card => card.department === show);
    }, [show, cardsData]);

    return (
        <div className={styles.CurrentOpeningBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.CurOpenhading}>
                            <h4>Positions</h4>
                            <h2>Attracting Best Talent in All Heads</h2>
                            <p>Apply for available positions at our head office. </p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Form noValidate className={styles.fonrSelectEg} >
                            <Row className="mb-3">
                                <Col md={3} sm={3}></Col>
                                <Form.Group as={Col} md="6" sm="6" controlId="validationCustom01">
                                    <Form.Select
                                        className={styles.fonrSelectEgOption}
                                        aria-label="Select department"
                                        onChange={handleOption}
                                    >
                                        <option value="All">All Departments...</option>
                                        <option value="IT">IT</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Sales">Sales</option>
                                    </Form.Select>
                                </Form.Group>
                                <Col md={3} sm={3}></Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className={styles.acordionFormCrer}>
                            <Accordion defaultActiveKey="0">
                                {filteredCards.map(card => (
                                    <Card key={card.id} className={styles.acrndCardcrr}>
                                        <Card.Header className={styles.careheaderAcrnd}>
                                            <ContextAwareToggle eventKey={String(card.id)}>
                                                {card.title}
                                            </ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={String(card.id)}>
                                            <Card.Body>
                                                <div className={styles.carbodyAcrnd}>
                                                    <p> <span>{card.department}, team</span> </p>
                                                    <p>{card.description}</p>
                                                    <p>
                                                        <a href="#fillpost" onClick={() => handleJobSelection(card.title)}>
                                                            Fill post <Image src="/fillarow.png" alt="fill post" width={27} height={18} />
                                                        </a>
                                                    </p>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.FomrDentnormCrer}>
                            <div className={styles.aplythished}>
                                <h3>Apply for this position</h3>
                            </div>
                            <div className={styles.aformareasent}>
                                <h4>{selectedJobTitle}</h4>
                                <Form onSubmit={handleSubmit(onSubmit)} className={styles.modalFormhndl}>
                                    <Form.Group className="mb-3" controlId="formGroupFname">
                                        <Form.Label className={styles.formLaelCar}>First Name</Form.Label>
                                        <Form.Control
                                            className={styles.formContrCaresd}
                                            {...register("firstName")}
                                            name="firstName"
                                            type="text"
                                            required
                                        />
                                        {errors.firstName && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.firstName.message}
                                            </p>
                                        )}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupLname">
                                        <Form.Label className={styles.formLaelCar}>Last Name</Form.Label>
                                        <Form.Control
                                            className={styles.formContrCaresd}
                                            {...register("lastName")}
                                            name="lastName"
                                            type="text"
                                            required
                                        />
                                        {errors.lastName && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.lastName.message}
                                            </p>
                                        )}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label className={styles.formLaelCar}>Email</Form.Label>
                                        <Form.Control
                                            {...register("email")}
                                            className={styles.formContrCaresd}
                                            name="email"
                                            type="email"
                                            required
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGroupPhone">
                                        <Form.Label className={styles.formLaelCar}>Phone</Form.Label>
                                        <Form.Control
                                            {...register("phoneNumber")}
                                            className={styles.formContrCaresd}
                                            name="phoneNumber"
                                            type="phoneNumber"
                                            required
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupResume">
                                        <Form.Label className={styles.formLaelCarresm}>Resume</Form.Label>
                                        <Controller
                                            name="file"
                                            control={control}
                                            // defaultValue={null}
                                            rules={{ required: "File is required" }}
                                            render={({ field }) => (
                                                <div className={styles.inputFielAtacth}>
                                                    <Form.Control
                                                        type="file"
                                                        onChange={(e) => field.onChange(e.target.files[0])} // Pass the file object
                                                        className={styles.atacthresumeUpld}
                                                    />
                                                    <span>Attach resume</span>
                                                </div>
                                            )}
                                        />
                                        {errors.file && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.file.message}
                                            </p>
                                        )}
                                    </Form.Group>
                                    {/* <Form.Group className="mb-4" controlId="formGroupPortfolio">
                                        <Form.Label className={styles.formLaelCarresm}>Portfolio</Form.Label>
                                        <div className={styles.inputFielAtacth}>
                                            <Form.Control plaintext defaultValue="" className={styles.atacthresumeUpld} type="file" />
                                            <span>Attach Portfolio</span>
                                        </div>
                                    </Form.Group> */}
                                    <button
                                        type="submit"
                                        className={`mt-4 w-full rounded-md px-6 py-3 text-sm font-bold uppercase text-white ${submitting
                                            ? "cursor-not-allowed bg-black"
                                            : "bg-dark hover:bg-blue-600"
                                            } shadow-md transition-colors duration-300 hover:shadow-lg`}
                                        disabled={submitting}
                                    >
                                        {submitting ? "Submitting..." : "Submit"}
                                    </button>

                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CurrentOpening;