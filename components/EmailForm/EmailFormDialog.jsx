"use client";
import { useForm } from "react-hook-form";
import { Modal, Button } from 'rsuite';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useEffect, useState } from "react";
import { FaSync } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useCreateLead from "../../constants/CreateLead"; // ✅ Zoho hook

const EmailFormDialog = ({ isOpen, setIsOpen, initialEmail, center }) => {
    // const [loading, setLoading] = useState(false);
    const router = useRouter();
   const { createLead, loading } = useCreateLead(); // use hook's loading

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        reset
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            companyName: "",
            countryCode: "",
            contactNumber: "",
            workEmail: initialEmail || '',
            message: "",
            gclid: "",
            url: typeof window !== 'undefined' ? window.location?.href : "https://dummyurl.com",
        }
    });

    // ✅ Capture gclid from URL automatically
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const gclid = params.get("gclid");
        if (gclid) {
            setValue("gclid", gclid); // store in form state
        }
    }, [setValue]);

    const onSubmit = async (data) => {
        // ✅ Payload for both APIs
        const leadPayload = {
            First_Name: data.firstName || "Home Page",
            Last_Name: data.lastName || "Query",
            Company: data.companyName,
            Country: data.countryCode,
            Phone: data.contactNumber,
            Email: data.workEmail || initialEmail,
            Description: data.message || "Market Intelligence Inquiry Home Page",
            $gclid: data.gclid || "",
            Lead_Source: "Website",
            Web_Url: data.url,
            EG_Com_Source: "",
            Layout: { id: "270924000000848066" }
        };

        const emailPayload = {
            firstName: data.firstName || "Home Page",
            lastName: data.lastName || "Query",
            companyName: data.companyName,
            countryCode: data.countryCode,
            contactNumber: data.contactNumber,
            workEmail: data.workEmail || initialEmail,
            message: data.message || "Market Intelligence Inquiry Home Page",
            url: data.url
        };

        try {
            // ✅ 1. Call Zoho Lead API
            await createLead(leadPayload);

            // ✅ 2. Call send-email-eg API
            const response = await fetch(
                "https://fjgjyxhtdds.marketinsidedata.com/api/send-email-eg",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(emailPayload),
                }
            );

            if (!response.ok) {
                throw new Error("Email API failed");
            }

            // ✅ Success → redirect
            router.push("/thankyou");
            setIsOpen(false);
            reset();

        } catch (error) {
            console.error("❌ Submission error:", error);
            alert("There was an error submitting the form. Please try again.");
        } finally {
            // setLoading(false);
        }
    };

    const handlePhoneChange = (value, country) => {
        const dialCode = country?.dialCode || "1";
        setValue("contactNumber", value);
        setValue("countryCode", dialCode);
    };

    const handleClose = () => {
        reset();
        setIsOpen(false);
    };

    return (
        <Modal open={isOpen} onClose={handleClose} className={center ? "center" : ""}>
            <Modal.Header>
                <Modal.Title>Contact Us</Modal.Title>
                <p className="mt-2">Fill in your details and we&apos;ll get back to you shortly.</p>
            </Modal.Header>
            <Modal.Body>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2.5 mt-4">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <fieldset className="flex flex-col gap-1">
                            <label>First Name</label>
                            <input
                                type="text"
                                {...register("firstName", { required: "First name is required" })}
                                className={`border-gray-200 rounded-lg border px-4 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${errors.firstName ? "border-red-500" : ""
                                    }`}
                                disabled={loading}
                            />
                            {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                        </fieldset>

                        <fieldset className="flex flex-col gap-1">
                            <label>Last Name</label>
                            <input
                                type="text"
                                {...register("lastName", { required: "Last name is required" })}
                                className={`border-gray-200 rounded-lg border px-4 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${errors.lastName ? "border-red-500" : ""
                                    }`}
                                disabled={loading}
                            />
                            {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                        </fieldset>
                    </div>
                    <fieldset className="flex flex-col gap-1">
                        <label>Email</label>
                        <input
                            type="email"
                            {...register("workEmail", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email",
                                },
                            })}
                            className={`border-gray-200 rounded-lg border px-4 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${errors.workEmail ? "border-red-500" : ""
                                }`}
                            disabled={loading}
                        />
                        {errors.workEmail && <span className="text-red-500">{errors.workEmail.message}</span>}
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label>Phone Number</label>
                        <PhoneInput
                            country={"us"}
                            value={watch("contactNumber")}
                            onChange={handlePhoneChange}
                            containerClass="phone-input-container"
                            inputClass={`w-[100%] !h-[42px] !text-base rounded-lg border border-gray-200 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${errors.contactNumber ? "!border-red-500" : ""
                                }`}
                            inputProps={{
                                name: "contactNumber",
                                required: true,
                                disabled: loading,
                            }}
                        />
                        {errors.contactNumber &&
                            <span className="text-sm text-red-500">{errors.contactNumber.message}</span>}
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <label>Company Name</label>
                        <input
                            type="text"
                            {...register("companyName", { required: "Company name is required" })}
                            className={`border-gray-200 rounded-lg border px-4 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${errors.companyName ? "border-red-500" : ""
                                }`}
                            disabled={loading}
                        />
                        {errors.companyName && <span className="text-red-500">{errors.companyName.message}</span>}
                    </fieldset>

                    <fieldset className="flex flex-col gap-1">
                        <input type='hidden' id="zc_gad" name="zc_gad" value=""/>
                        <label>Message</label>
                        <textarea
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters",
                                },
                            })}
                            className={`border-gray-200 h-[70px] rounded-lg border px-4 py-2.5 transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 ${errors.message ? "border-red-500" : ""
                                }`}
                            rows={5}
                            disabled={loading}
                        />
                        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                    </fieldset>

                    <div>
                        <Button type="submit" loading={loading} disabled={loading} className="customSubmitBtn">
                            {loading ? <FaSync className="animate-spin" /> : "Submit"}
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default EmailFormDialog;