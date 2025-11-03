"use client";
import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import EmailFormDialog from "./EmailFormDialog";
import { trackEvent } from "../../constants/trackEvent";

const FloatingButton = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onSubmit = () => {
        console.log('sbumit')
    }

    const handleClick = () => {
        trackEvent({
            action: "Tracking Google Tag",
            category: "Request for Quote ",
            label: "Request for Quote",
            value: 1,
        });
    };

    return (
        <>
            <div className="fixed bottom-[45%] right-0 z-[49]">
                <button
                    className="bg-[#3884C7] text-[20px] text-white p-3 rounded-l-md flex items-center"
                    onClick={() => {
                        setIsOpen(!isOpen);
                        handleClick();
                    }}
                >
                    Request for Quote <FaChevronRight />
                </button>
            </div>
            <EmailFormDialog isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit} />
        </>
    );
};

export default FloatingButton;