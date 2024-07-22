"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { XIcon } from "lucide-react";

import Logo from "../../public/images/logo.svg";
import AboutImage from "../../public/images/about.png";
import YiyaoImage from "../../public/images/yiyao.svg";

import Navbar from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import PinIcon from "@/components/svg-icons/pin-icon";
import SectionLabel from "@/components/custom/section-label";
import CalendarIcon from "@/components/svg-icons/calendar-icon";
import FacebookIcon from "@/components/svg-icons/facebook-icon";
import TelegramIcon from "@/components/svg-icons/telegram-icon";
import LocationIcon from "@/components/svg-icons/location-icon";
import XTwitterIcon from "@/components/svg-icons/x-twitter-icon";
import InstagramIcon from "@/components/svg-icons/instagram-icon";
import TelegramIconAlt from "@/components/svg-icons/telegram-icon-alt";
import FacebookIconAlt from "@/components/svg-icons/facebook-icon-alt";
import XTwitterIconAlt from "@/components/svg-icons/x-twitter-icon-alt";
import InstagramIconAlt from "@/components/svg-icons/instagram-icon-alt";
import ArrowRightCircleFilledIcon from "@/components/svg-icons/arrow-right-circle-filled-icon";
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Speakers, GalleryItems, EventScheduleList, EventDaysList, Faqs, FaqTabs, Judges, SponsorsLogo } from "@/lib/data";

function IconWrapper({ children }: { children: React.ReactNode }) {
    return <div className="w-6 h-6 bg-[#361566] rounded-lg flex items-center justify-center">{children}</div>;
}

function Home() {
    const [activeFaqTab, setActiveFaqTab] = React.useState(FaqTabs[0].id);

    return (
        <main className="">
            <Navbar />

            <div className="py-28 bg-[#FFF3FD] bg-hero-stars">
                <section className="contained mt-20 lg:mt-32 flex flex-col items-center">
                    <div className="flex justify-center items-center">
                        {["Collaborate", "Innovate", "Build"].map((value, index) => (
                            <div key={index} className="flex items-center">
                                {index > 0 && <div className="w-2.5 aspect-square rounded-full bg-[#FAD278]" />}
                                <div className="bg-[#FAD278] text-[#361566] font-bold rounded-full py-2 px-4 uppercase font-helvetica-compressed tracking-wider">{value}</div>
                            </div>
                        ))}
                    </div>

                    <h1 className="heading-1" style={{ WebkitTextStrokeWidth: 3, WebkitTextStrokeColor: "#D1A4FF" }}>
                        fusion tech fest 2024
                    </h1>

                    <p className="mt-10 lg:text-xl text-center xl:px-48 mx-auto text-[#361566] font-helvetica">
                        {
                            "Join thousands of tech enthusiasts at FusionTechFest in a collective journey towards innovation, creativity and impact. Collaborate with like minded individuals, participate in our challenging hackathon, pitch your product at the showcase and attend inspiring keynote and panel sessions that will shape the future of technology in Africa and beyond."
                        }
                    </p>

                    <div className="mt-7 flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-4 space-y-5 lg:space-y-0">
                        <div className="w-fit">
                            <Button
                                onClick={() => {
                                    window.open("https://eventprime.co/e/fusion-tech-fest", "_blank");
                                }}
                                size={"lg"}
                            >
                                Get Tickets <ArrowRightCircleFilledIcon className="ml-2" />
                            </Button>
                        </div>
                        <div className="w-fit">
                            <Button
                                onClick={() => {
                                    window.open("https://bit.ly/3z5winx", "_blank");
                                }}
                                size={"lg"}
                            >
                                Register For Hackathon <ArrowRightCircleFilledIcon className="ml-2" />
                            </Button>
                        </div>
                        <div className="w-fit">
                            <Button
                                onClick={() => {
                                    window.open("https://forms.gle/HZUdwfvv9c71RK7P7", "_blank");
                                }}
                                size={"lg"}
                            >
                                Register For Product Showcase <ArrowRightCircleFilledIcon className="ml-2" />
                            </Button>
                        </div>
                    </div>

                    <div className="hero-card w-full lg:w-4/5 mt-28">
                        <div className="gradient-border"></div>
                        <div className="p-5 flex items-center justify-between">
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
                                    The Zone, <br />  Gbagada, Lagos
                                </p>
                            </div>
                        </div>
                        <div className="gradient-border"></div>
                    </div>
                </section>
            </div>

            <div className="bg-[#FFFBF2]">
                <SectionLabel text="SPONSORS AND PARTNERS" />
                <div className="py-12 contained">
                    <div className="flex flex-wrap justify-center gap-8">
                        {SponsorsLogo.map((sponsor, index) => (
                            <Image key={index} src={sponsor.logo} alt={sponsor.name} className="max-w-[14rem] object-contain" />
                        ))}
                    </div>
                </div>
            </div>

            <div id="about" className="bg-[#FFFBF2]">
                <div className="contained pb-16">
                    <SectionLabel text="About Us" />

                    <p className="text-[#361566] text-justify font-helvetica">
                        <span className="font-bold">Fusion Tech Fest</span> is a pioneering event hosted by <span className="font-bold">GenZTechies</span> and <span className="font-bold">CodeSpace HQ</span> to unite tech enthusiasts in a collaborative endeavor to push the boundaries of innovation and technology across Africa. This event features a diverse lineup of speakers, showcases and hackers covering impactful topics, products and solutions at the intersection of innovation through technology.
                    </p>

                    <div className="flex justify-center items-center mt-10 w-full">
                        <Image className="rounded-lg w-full text-[#361566] border border-[#361566] shadow-[3px_6px_0px_0px_#361566] hover:shadow-[3px_6px_0px_0px_#421683]" src={AboutImage} alt="About" />
                    </div>
                </div>
            </div>

            <div id="schedule" className="">
                <SectionLabel text="Event Schedule" />
                <div className="contained py-12">
                    <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-8 lg:space-y-0">
                        {EventDaysList.map((item, index) => (
                            <div key={index} className="border border-[#361566] bg-[#FFCF7B] rounded-lg p-4 shadow-event space-y-5 w-full md:min-w-[275px] relative">
                                <div className="flex gap-3">
                                    <div className="p-[4px] bg-[#361566] rounded-md h-fit my-auto">
                                        <CalendarIcon className="text-white text-[24px]" />
                                    </div>
                                    <div className="font-helvetica-compressed text-[#361566] text-xl">
                                        <p>{item.date}</p>
                                        <p className="-mt-2">{item.fullDate}</p>
                                    </div>
                                </div>
                                <h4 className="font-helvetica-compressed text-[#361566] text-4xl">{item.event}</h4>
                                <PinIcon className="absolute -right-6 -top-14" />
                            </div>
                        ))}
                    </div>
                    <div className="mt-20 space-y-4">
                        {EventScheduleList.map((item, index) => (
                            <div key={index} className="bg-[#FFFAF0] border p-4 border-[#361566] rounded-md grid grid-cols-2 lg:grid-cols-[auto_auto_auto_1fr] lg:gap-14 items-center">
                                <div className="flex gap-3">
                                    <div className="p-[4px] bg-[#361566] rounded-md h-fit my-auto">
                                        <CalendarIcon className="text-white text-[24px]" />
                                    </div>
                                    <div className="font-helvetica-compressed text-[#361566] text-xl">
                                        <p>{item.date}</p>
                                        <p className="-mt-2">{item.fullDate}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-self-end">
                                    <div className="p-[4px] bg-[#361566] rounded-md h-fit my-auto">
                                        <CalendarIcon className="text-white text-[24px]" />
                                    </div>
                                    <div className="font-helvetica-compressed text-[#361566] text-xl ">
                                        <p>{item.startTime}</p>
                                        <p className="-mt-2">{item.endTime}</p>
                                    </div>
                                </div>

                                <h2 className="font-helvetica-compressed text-[#361566] mt-4 md:mt-4 lg:mt-0 text-3xl col-span-2 md:col-span-1 md:max-w-[225px] md:w-[225px]">{item.event}</h2>
                                <p className="text-[#361566] text-base col-span-2 md:col-span-1 mt-0 md:mt-4 lg:mt-0">{item.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="speakers" className="py-12 pb-24">
                <SectionLabel text="Keynote Speakers" />
                <div className="contained mx-auto">
                    {Speakers.length === 0 && (
                        <h2 className="heading-2" style={{ WebkitTextStrokeWidth: 2, WebkitTextStrokeColor: "#D1A4FF" }}>
                            WILL BE ANNOUNCED SOON
                        </h2>
                    )}
                    <div className="grid grid-cols-4 gap-y-8 gap-x-6 place-items-center">
                        {Speakers.map((speaker, index) => (
                            <div
                                style={{
                                    backgroundImage: `url(${speaker.photo.src})`,
                                    paddingTop: "100%", // This makes the height equal to the width
                                    position: "relative",
                                }}
                                key={index}
                                className="w-full rounded-md flex bg-cover bg-center col-span-4 md:col-span-2 lg:col-span-1 border border-[#361566] shadow-[3px_6px_0px_0px_#361566] hover:shadow-[3px_6px_0px_0px_#421683]"
                            >
                                <div className="font-helvetica-compressed uppercase text-[#361566]">
                                    <h1 className="bg-[#FAD278] w-fit px-1.5 py-0.5 text-2xl">{speaker.name}</h1>
                                    <p className="rounded-bl-md bg-[#FAD278] w-fit px-1.5 py-0.5 text-lg">{speaker.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="judges" className="bg-[#F2FAFF] py-12">
                <SectionLabel text="Judges" />
                <div className="contained mx-auto">
                    {Speakers.length === 0 && (
                        <h2 className="heading-2" style={{ WebkitTextStrokeWidth: 2, WebkitTextStrokeColor: "#D1A4FF" }}>
                            WILL BE ANNOUNCED SOON
                        </h2>
                    )}
                    <div className="grid grid-cols-4 gap-y-8 gap-x-6 place-items-center">
                        {Judges.map((speaker, index) => (
                            <div
                                style={{
                                    backgroundImage: `url(${speaker.photo.src})`,
                                    paddingTop: "100%", // This makes the height equal to the width
                                    position: "relative",
                                }}
                                key={index}
                                className="w-full rounded-md flex bg-cover bg-center col-span-4 md:col-span-2 lg:col-span-1 border border-[#361566] shadow-[3px_6px_0px_0px_#361566] hover:shadow-[3px_6px_0px_0px_#421683]"
                            >
                                <div className="font-helvetica-compressed uppercase text-[#361566]">
                                    <h1 className="bg-[#78C7FF] w-fit px-1.5 py-0.5 text-2xl">{speaker.name}</h1>
                                    <p className="rounded-bl-md bg-[#78C7FF] w-fit px-1.5 py-0.5 text-lg">{speaker.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="faqs" className="bg-[#F2FAFF] px-6 md:px-14 lg:px-32 pb-16">
                <SectionLabel text="faqs" />

                <div className="flex items-center justify-center">
                    <div className="flex space-x-2 border-2 rounded-3xl border-[#361566] w-fit px-1 py-1">
                        {FaqTabs.map((tab, index) => (
                            <button key={index} onClick={() => setActiveFaqTab(tab.id)} className={`text-center uppercase font-helvetica-compressed text-lg sm:text-xl md:text-2xl text-[#361566] px-3 md:px-5 py-0.5 ${activeFaqTab === tab.id && "bg-[#F4B0E9] rounded-3xl border-2 border-[#361566]"}`}>
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-10 max-w-[1064px] mx-auto">
                    {Faqs.map((faq, index) => {
                        if (faq.tab !== activeFaqTab) return null;

                        return (
                            <div key={index} className="mt-4 bg-[#F4B0E9] border-2 rounded-md border-[#361566] px-10 py-6">
                                <div className="flex flex-col lg:flex-row lg:space-x-4 lg:justify-center lg:items-center">
                                    <h1 className="lg:w-1/3 uppercase font-helvetica-compressed text-2xl text-[#361566]">{faq.title}</h1>
                                    <p className="lg:w-2/3 mt-2 text-[#361566] font-helvetica">{faq.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div id="gallery" className="py-12 pb-20">
                <SectionLabel text="Gallery" />
                <div className="contained">
                    <div className="bg-[#78C7FF] py-24 rounded-md">
                        <Carousel className="mx-6">
                            <CarouselContent className="-ml-1">
                                {GalleryItems.map((item, index) => (
                                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                        <div className="p-1">
                                            <Image className="border-2 border-[#361566] rounded-md" src={item.image} alt={item.name} />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0 mt-4">
                                <div className="flex space-x-3">
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </div>
                                <Link target="_blank" href="https://photos.google.com/share/AF1QipOMu1iJOiOysEnJ2iMkYwtpRfIiye9MkPJ3qbZ-3emRUDjPaNOVD_Xp3kBulQ4U_g?key=bW9MRkRwd1hTUFBXcndQbTZOdGtZYVE5eTNseWdn">
                                    <Button>
                                        View Photos <ArrowRightCircleFilledIcon className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            <footer className="bg-[#FFF3FD] px-4 md:px-20 h-full py-10">
                <div className="bg-footer-backdrop contained bg-cover w-full rounded-xl py-12 lg:py-24 px-4 md:px-8 lg:px-10 mt-16">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="lg:w-1/2">
                            <h1 className="text-center lg:text-left text-white text-6xl lg:text-7xl uppercase font-helvetica-compressed">
                                Join the <span className="text-[#F4B0E9]">community</span> and <span className="text-[#F4B0E9]">Network</span> with like minds
                            </h1>
                            <div className="flex items-center justify-center lg:items-start lg:justify-start">
                                <div className="bg-white/30 px-4 py-2.5 w-fit rounded-3xl mt-4 lg:mt-8">
                                    <div className="flex items-center justify-center space-x-3">
                                        <h1 className="text-[#F4B0E9] text-xl lg:text-2xl font-helvetica-compressed tracking-wider">Join Communtity</h1>
                                        <div className="flex space-x-3">
                                            <Link target="_blank" href="https://linktr.ee/fusiontechfest">
                                                <InstagramIconAlt />
                                            </Link>
                                            <Link target="_blank" href="https://linktr.ee/fusiontechfest">
                                                <XTwitterIconAlt />
                                            </Link>
                                            <Link target="_blank" href="https://linktr.ee/fusiontechfest">
                                                <FacebookIconAlt />
                                            </Link>
                                            <Link target="_blank" href="https://linktr.ee/fusiontechfest">
                                                <TelegramIconAlt />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center lg:w-1/2 mt-6 lg:mt-0">
                            <Image src={YiyaoImage} alt="Image" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-20 w-full">
                    <Image src={Logo} alt="Logo" width={872} />
                </div>

                <div className="contained flex flex-col lg:flex-row lg:justify-between items-center mt-14">
                    <h1 className="font-helvetica text-[#361566] text-sm text-center mt-4 lg:text-left lg:mt-0">&copy; 2024 GenZtechies X Codespace | All rights reserved.</h1>
                    <div className="flex flex-col items-center lg:items-end order-first lg:order-last">
                        <ul className="flex text-[#361566] font-helvetica-compressed text-lg tracking-wide justify-center lg:justify-start space-x-4 uppercase">
                            <Link target="_blank" href="https://linktr.ee/fusiontechfest">
                                <li>initiatives</li>
                            </Link>
                            <Link target="_blank" href="https://linktr.ee/fusiontechfest">
                                <li>Donate</li>
                            </Link>
                            <Link target="_blank" href="https://photos.google.com/share/AF1QipOMu1iJOiOysEnJ2iMkYwtpRfIiye9MkPJ3qbZ-3emRUDjPaNOVD_Xp3kBulQ4U_g?key=bW9MRkRwd1hTUFBXcndQbTZOdGtZYVE5eTNseWdn">
                                <li>Gallery</li>
                            </Link>
                            <Link target="_blank" href="https://linktr.ee/fusiontechfest">
                                <li>press</li>
                            </Link>
                        </ul>
                        <div className="flex space-x-3 mt-2">
                            <Link target="_blank" href="https://linktr.ee/fusiontechfest">
                                <InstagramIcon />
                            </Link>
                            <Link target="_blank" href="https://linktr.ee/fusiontechfest">
                                <XTwitterIcon />
                            </Link>
                            <Link target="_blank" href="https://linktr.ee/fusiontechfest">
                                <FacebookIcon />
                            </Link>
                            <Link target="_blank" href="https://linktr.ee/fusiontechfest">
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
