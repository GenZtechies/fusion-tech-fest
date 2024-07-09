import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Button } from "../ui/button";
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
    return (
        <nav className="flex items-center justify-between container border border-[#36156619] rounded-full bg-[#ffffff19] py-2.5 px-5 fixed top-9 left-1/2 -translate-x-1/2 w-full">
            <Logo />

            <ul className="flex items-center space-x-4">
                {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>

            <Button>
                Register <ArrowRightCircleFilledIcon className="ml-2" />
            </Button>
        </nav>
    );
}

export default Navbar;
