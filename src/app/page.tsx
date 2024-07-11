import Navbar from "@/components/custom/navbar";
import ArrowRightCircleFilledIcon from "@/components/svg-icons/arrow-right-circle-filled-icon";
import CalendarIcon from "@/components/svg-icons/calendar-icon";
import LocationIcon from "@/components/svg-icons/location-icon";
import XTwitterIcon from "@/components/svg-icons/x-icon";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, LocateIcon, MapPin, MapPinIcon, XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import FacebookIcon from "@/components/svg-icons/facebook-icon";
import InstagramIcon from "@/components/svg-icons/instagram-icon";
import TelegramIcon from "@/components/svg-icons/telegram-icon";

function IconWrapper({ children }: { children: React.ReactNode }) {
    return <div className="w-6 h-6 bg-[#361566] rounded-lg flex items-center justify-center">{children}</div>;
}

function Home() {
    return (
        <main className="">
            <Navbar />

            <div className="py-28 bg-[#FFF3FD] bg-hero-stars">
                <section className="contained mt-20 lg:mt-32 flex flex-col items-center">
                    <div className="flex justify-center items-center">
                        {["explore", "network", "build"].map((value, index) => (
                            <div key={index} className="flex items-center">
                                {index > 0 && <div className="w-2.5 aspect-square rounded-full bg-[#FAD278]" />}
                                <div className="bg-[#FAD278] text-[#361566] font-bold rounded-full py-2 px-4 uppercase font-helvetica-compressed tracking-wider">{value}</div>
                            </div>
                        ))}
                    </div>

                    <h1 className="heading-1" style={{ WebkitTextStrokeWidth: 3, WebkitTextStrokeColor: "#D1A4FF" }}>
                        fusion tech fest 2024
                    </h1>

                    <p className="mt-10 lg:text-xl text-center xl:px-48 mx-auto text-[#361566]">
                        {
                            "Get ready to dive into the future at Fusion Tech Fest! Join us for an unforgettable experience where groundbreaking innovation, cutting-edge creativity, and dynamic collaboration converge. Immerse yourself in a world of technological marvels, connect with industry leaders, and be inspired by visionary thinkers. Don't miss this chance to be part of an event that will shape the future of technology."
                        }
                    </p>

                    <Button className="mt-7">
                        Register <ArrowRightCircleFilledIcon className="ml-2" />
                    </Button>

                    <div className="hero-card w-full lg:w-4/5 p-5 flex items-center justify-between mt-36">
                        <div className="flex items-center gap-2.5">
                            <IconWrapper>
                                <CalendarIcon className="text-white" />
                            </IconWrapper>

                            <p className="font-helvetica-compressed tracking-wider sm:text-sm md:text-base lg:text-xl text-[#361566] leading-5">
                                26th - 31st <br /> August, 2024
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 items-center gap-2.5">
                            <Image src="/images/genz-logo.png" width={56} height={32} alt="genz logo" />
                            <XIcon size={24} />
                            <Image src="/images/code-space-logo.png" width={154} height={21} alt="code space logo" />
                        </div>

                        <div className="flex items-center gap-2.5">
                            <IconWrapper>
                                <LocationIcon className="text-white" />
                            </IconWrapper>

                            <p className="font-helvetica-compressed tracking-wider sm:text-sm md:text-base lg:text-xl text-[#361566] leading-5">
                                Random Hall, <br /> Lagos, Nigeria
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="bg-[#FFF3FD] px-20 h-full py-10">
                <div className="flex justify-center items-center">
                    <Image src="/images/logo.svg" alt="Logo" width={872} height={337} />
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-14">
                    <h1 className="text-[#361566] text-sm text-center mt-4 lg:text-left lg:mt-0">&copy; 2024 GenZtechies X Codespace | All rights reserved.</h1>
                    <div className="flex flex-col items-center lg:items-end order-first lg:order-last">
                        <ul className="flex text-[#361566] font-helvetica-compressed text-lg tracking-wide justify-center lg:justify-start space-x-4 uppercase">
                            <Link href="/">
                                <li>initiatives</li>
                            </Link>
                            <Link href="/">
                                <li>Donate</li>
                            </Link>
                            <Link href="/">
                                <li>Gallery</li>
                            </Link>
                            <Link href="/">
                                <li>press</li>
                            </Link>
                        </ul>
                        <div className="flex space-x-3 mt-2">
                            <Link href="/">
                                <InstagramIcon />
                            </Link>
                            <Link href="/">
                                <XTwitterIcon />
                            </Link>
                            <Link href="/">
                                <FacebookIcon />
                            </Link>
                            <Link href="/">
                                <TelegramIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Home;
