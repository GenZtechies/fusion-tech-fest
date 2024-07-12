"use client";

import React from "react";
import Link from "next/link";

import Logo from "./logo";
import { Button } from "../ui/button";
import CloseIcon from "../svg-icons/close-icon";
import MenuHamburgerIcon from "../svg-icons/menu-hamburger-icon";
import ArrowRightCircleFilledIcon from "../svg-icons/arrow-right-circle-filled-icon";

const NAV_LINKS = [
    { name: "About", href: "/about" },
    { name: "Schedule", href: "/schedule" },
    { name: "Speakers", href: "/speakers" },
    { name: "Judges", href: "/judges" },
    { name: "FAQs", href: "/faqs" },
    { name: "Gallery", href: "/gallery" },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <>
            <div className={`bg-hero-stars bg-[#FFF3FD] w-full h-screen fixed z-50 flex flex-col justify-between px-12 py-14 lg:hidden ${!isMenuOpen && "hidden"}`}>
                <div className="flex items-end justify-end">
                    <Button
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Close <CloseIcon className="ml-2" />
                    </Button>
                </div>

                <div>
                    {NAV_LINKS.map((link) => (
                        <h1 className="heading-nav text-left font-bold" style={{ WebkitTextStrokeWidth: 1, WebkitTextStrokeColor: "#D1A4FF" }}>
                            <Link href={link.href}>{link.name}</Link>
                        </h1>
                    ))}
                </div>
            </div>
            <div className="contained absolute top-9 left-1/2 -translate-x-1/2">
                <nav className="flex items-center justify-between border border-[#36156619] rounded-full bg-[#ffffff19] py-2.5 px-5 ">
                    <Logo />

                    <ul className="hidden lg:flex items-center space-x-4">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name} className="font-helvetica-compressed text-lg text-[#361566] tracking-wider">
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <Button className="hidden lg:flex">
                        Register <ArrowRightCircleFilledIcon className="ml-2" />
                    </Button>

                    <Button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="lg:hidden"
                    >
                        Menu <MenuHamburgerIcon className="ml-2" />
                    </Button>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
