import Link from "next/link";
import ArrowRightCircleFilledIcon from "../svg-icons/arrow-right-circle-filled-icon";
import MenuHamburgerIcon from "../svg-icons/menu-hamburger-icon";
import { Button } from "../ui/button";
import Logo from "./logo";

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
        <div className="contained fixed top-9 left-1/2 -translate-x-1/2">
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

                <Button className="lg:hidden">
                    Menu <MenuHamburgerIcon className="ml-2" />
                </Button>
            </nav>
        </div>
    );
}

export default Navbar;
