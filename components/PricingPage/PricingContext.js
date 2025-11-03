"use client";
import React, { createContext, useState } from 'react';

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
    const [isUSD, setIsUSD] = useState(true);
    const [isMonthly, setIsMonthly] = useState(true);

    const toggleCurrency = () => {
        setIsUSD(prevIsUSD => !prevIsUSD);
    };

    const togglePlan = () => {
        setIsMonthly(prevIsMonthly => !prevIsMonthly);
    };

    return (
        <PricingContext.Provider value={{ isUSD, isMonthly, toggleCurrency, togglePlan }}>
            {children}
        </PricingContext.Provider>
    );
};
