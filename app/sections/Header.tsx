"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/navigation/navbar";
import MobileNavbar from "@/components/navigation/mobile-navbar";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 380);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header>
            {isMobile ? <MobileNavbar /> : <Navbar />}

        </header>
    );
};

export default Header;
