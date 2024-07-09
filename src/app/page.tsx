import Navbar from "@/components/custom/navbar";
import ArrowRightCircleFilledIcon from "@/components/svg-icons/arrow-right-circle-filled-icon";
import CalendarIcon from "@/components/svg-icons/calendar-icon";
import LocationIcon from "@/components/svg-icons/location-icon";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, LocateIcon, MapPin, MapPinIcon, XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function IconWrapper({ children }: { children: React.ReactNode }) {
    return <div className="w-6 h-6 bg-[#361566] rounded-lg flex items-center justify-center">{children}</div>;
}

function Home() {
    return (
        <main className="">
            <Navbar />

            <div className="py-28">
                <section className="container mx-auto mt-32 flex flex-col items-center">
                    <div className="flex justify-center items-center">
                        {["explore", "network", "build"].map((value, index) => (
                            <div key={index} className="flex items-center">
                                {index > 0 && <div className="w-2.5 aspect-square rounded-full bg-[#FAD278]" />}
                                <div className="bg-[#FAD278] text-[#361566] font-bold rounded-full py-2 px-4 uppercase">{value}</div>
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

                    <div className="hero-card lg:w-1/2 mx-auto p-5 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <IconWrapper>
                                <CalendarIcon className="text-white" />
                            </IconWrapper>

                            <p>
                                26th - 31st <br /> August, 2024
                            </p>
                        </div>

                        <div className="div flex items-center gap-2.5">
                            <Image src="/images/genz-logo.png" width={56} height={32} alt="genz logo" />
                            <XIcon size={24} />
                            <Image src="/images/code-space-logo.png" width={154} height={21} alt="code space logo" />
                        </div>

                        <div className="flex items-center gap-2.5">
                            <IconWrapper>
                                <LocationIcon className="text-white" />
                            </IconWrapper>

                            <p>
                                Random Hall, <br /> Lagos, Nigeria
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Home;
