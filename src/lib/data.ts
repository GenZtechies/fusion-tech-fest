import { StaticImageData } from "next/image";

import APMP from "../../public/images/sponsors/apmp.jpg";
import NTIT from "../../public/images/sponsors/ntit.jpg";
import Tuliban from "../../public/images/sponsors/tuliban.png";
import Paystack from "../../public/images/sponsors/paystack.png";
import TechNoob from "../../public/images/sponsors/tech-noob.jpg";
import CouchBase from "../../public/images/sponsors/couchbase.png";
import TheGarage from "../../public/images/sponsors/the-garage.png";
import EmpowerHer from "../../public/images/sponsors/empower-her.jpg";
import TechMoonShot from "../../public/images/sponsors/tech-moon-shot.png";
import ProductBuddies from "../../public/images/sponsors/product-buddies.jpg";
import DesignWithRooks from "../../public/images/sponsors/design-with-rooks.png";
import PeopleInProduct from "../../public/images/sponsors/people-in-product.jpg";
import MarketersTherapy from "../../public/images/sponsors/marketers-therapy.jpg";
import TheUnseriousTechShow from "../../public/images/sponsors/the-unserious-tech-show.jpg";
import InsideTheTechEcoSystem from "../../public/images/sponsors/inside-the-tech-ecosystem.jpg";

import GalleryItem1 from "../../public/images/gallery/gallery-1.png";
import GalleryItem2 from "../../public/images/gallery/gallery-2.png";
import GalleryItem3 from "../../public/images/gallery/gallery-3.png";
import GalleryItem4 from "../../public/images/gallery/gallery-4.png";
import GalleryItem5 from "../../public/images/gallery/gallery-5.jpg";
import GalleryItem6 from "../../public/images/gallery/gallery-6.jpg";
import GalleryItem7 from "../../public/images/gallery/gallery-7.jpg";

import KanayoUzo from "../../public/images/speakers-judges/kanayo-uzo.jpg";
import OsitaJames from "../../public/images/speakers-judges/osita-james.jpg";
import DavidIjaola from "../../public/images/speakers-judges/david-ijaola.jpeg";
import OrimDominic from "../../public/images/speakers-judges/orim-dominic.jpg";
import ChiomaJudith from "../../public/images/speakers-judges/chioma-judith.jpg";
import SodiqAkinjobi from "../../public/images/speakers-judges/sodiq-akinjobi.jpg";
import NmesomaOkonkwo from "../../public/images/speakers-judges/nmesoma-okonkwo.png";
import AdeolaOderinde from "../../public/images/speakers-judges/adeola-oderinde.jpg";
import PreciousOdahunsi from "../../public/images/speakers-judges/precious-odahunsi.jpg";
import OdehBlessingAsia from "../../public/images/speakers-judges/odeh-blessing-asia.jpg";
import KenechukwuNwankwo from "../../public/images/speakers-judges/kenechukwu-nwankwo.png";
import DonaldsonChineduOkoye from "../../public/images/speakers-judges/donaldson-chinedu-okoye.jpg";
import OmotosoDolapoOreoluwa from "../../public/images/speakers-judges/omotoso-dolapo-oreoluwa.jpg";

export const GalleryItems = [
    { name: "Gallery Item 1", image: GalleryItem1 },
    { name: "Gallery Item 2", image: GalleryItem2 },
    { name: "Gallery Item 3", image: GalleryItem3 },
    { name: "Gallery Item 4", image: GalleryItem4 },
    { name: "Gallery Item 5", image: GalleryItem5 },
    { name: "Gallery Item 6", image: GalleryItem6 },
    { name: "Gallery Item 7", image: GalleryItem7 },
];

export const SponsorsLogo = [
    // { name: "Paystack", logo: Paystack },
    // { name: "CouchBase", logo: CouchBase },
    { name: "Inside The Tech Ecosystem", logo: InsideTheTechEcoSystem },
    { name: "NTIT", logo: NTIT },
    { name: "Tech Noobs", logo: TechNoob },
    { name: "Design With Rooks", logo: DesignWithRooks },
    { name: "Product Buddies", logo: ProductBuddies },
    { name: "The Garage", logo: TheGarage },
    { name: "APMP", logo: APMP },
    { name: "Marketers Therapy", logo: MarketersTherapy },
    { name: "Empower Her", logo: EmpowerHer },
    { name: "Tech Moon Shot", logo: TechMoonShot },
    { name: "The Unserious Tech Show", logo: TheUnseriousTechShow },
    { name: "People In Product", logo: PeopleInProduct },
    { name: "Tuliban", logo: Tuliban },
];

export const Speakers: { name: string; title: string; photo: StaticImageData }[] = [
    { name: "Kanayo Uzo", title: "Designer at Belonwus", photo: KanayoUzo },
    { name: "Osita James", title: "Managing Partner, BlackCrest", photo: OsitaJames },
    { name: "David Ijaola", title: "Product Manager at Norebase", photo: DavidIjaola },
    { name: "Orim Dominic", title: "Software Engineer ar Zedi Inc.", photo: OrimDominic },
    { name: "Chioma Judith", title: "Partnership Associate at Non-tech In Tech", photo: ChiomaJudith },
    { name: "Sodiq Akinjobi", title: "Developer Ecosystem Community Manager, Google", photo: SodiqAkinjobi },
    { name: "Nmesoma Okonkwo", title: "Product Designer", photo: NmesomaOkonkwo },
    { name: "Adeola Oderinde", title: "Product Marketing Manager at Davu AI", photo: AdeolaOderinde },
    { name: "Precious O'dahunsi", title: "Product Marketing Manager at Bumpa", photo: PreciousOdahunsi },
    { name: "Odeh Blessing Asia", title: "Brand Designer, Geneza Brands", photo: OdehBlessingAsia },
    { name: "Kenechukwu Nwankwo", title: "Senior Product Manager", photo: KenechukwuNwankwo },
    { name: "Donaldson Chinedu Okoye", title: "Product Manager at Termii", photo: DonaldsonChineduOkoye },
    { name: "Omotoso Dolapo Oreoluwa", title: "Revenue Growth Director at TransferGo", photo: OmotosoDolapoOreoluwa },
];

export const Judges: { name: string; title: string; photo: StaticImageData }[] = [];

export const FaqTabs = [
    { name: "General", id: "general" },
    { name: "Hackathon", id: "hackathon" },
    { name: "Conference", id: "conference" },
];

export const Faqs = [
    {
        title: "How do I go about the registration?",
        content: "Registration for the hackathon can be completed through our official website. Fill in the required details, select your area of interest, and submit your application. Early registration is encouraged as spots are limited.",
        tab: "hackathon",
    },
    {
        title: "How are teams formed?",
        content: "Teams can be pre-formed or created during the event. If you don't have a team, you can join one through our team formation slack available on the beginning day. We encourage collaboration among participants to form diverse and skilled teams.",
        tab: "hackathon",
    },
    {
        title: "What are the different stages?",
        content:
            "The hackathon consists of three main stages: 1) Idea Submission: Teams submit their project ideas and initial plans. 2) Development Phase: Teams work on their projects, with access to mentorship and resources. 3) Final Presentation: Teams present their finished products to a panel of judges who evaluate based on creativity, feasibility, and impact.",
        tab: "hackathon",
    },
    {
        title: "Who is this event for?",
        content: "Fusion Tech Fest is for Gen Z developers, founders, designers, tech enthusiasts, marketers, product managers, and community builders across Africa. Whether you are a student, early-career professional, or seasoned expert, this event offers something for everyone passionate about technology and innovation.",
        tab: "general",
    },
    {
        title: "Who is allowed to apply?",
        content: "Anyone with expertise in technology, innovation, and related fields can apply to speak at Fusion Tech Fest. We welcome applications from industry leaders, experienced professionals, and emerging voices who can share valuable insights and experiences with our diverse audience.",
        tab: "general",
    },
    {
        title: "How do I go about the product showcase?",
        content:
            "To participate in the product showcase, you need to submit an application through our website. Provide details about your product, its innovative features, and how it addresses real-world problems. Once selected, you'll have the opportunity to demonstrate your product to a wide audience of tech enthusiasts and potential investors.",
        tab: "general",
    },
    {
        title: "Still have a question? 🥲",
        content: "If you need further details or have any questions, feel free to reach out to us at hello@genztechies.com.",
        tab: "general",
    },
    {
        title: "Where is the Location?",
        content: "The location for Fusion Tech Fest 2024 will be announced soon. Stay tuned to our website and social media channels for updates.",
        tab: "conference",
    },
    {
        title: "What is the Date and Time?",
        content: "Fusion Tech Fest will take place from August 26th to 31st, 2024. The virtual hackathon runs from August 26th to 30th, with the one-day conference happening on August 31st.",
        tab: "conference",
    },
    {
        title: "How do I Sponsor or Partner for the event?",
        content: "For sponsorship or partnership opportunities, please visit our website's partnership section or contact us directly at afolabi@genztechies.com. We offer various packages that can be tailored to meet your needs and help you reach a broad audience of tech enthusiasts.",
        tab: "conference",
    },
];

export const EventScheduleList = [
    { date: "26th to 30th", fullDate: "August, 2024", event: "HYBRID HACKATHON", details: "This is a week-long collaborative event where developers and people in tech across Africa and beyond come together to build innovative solutions to local & global problems.", startTime: "09:00", endTime: "17:00" },
    { date: "31st", fullDate: "August, 2024", event: "PANEL SESSION", details: " This session brings together industry experts, thought leaders, and professionals to discuss relevant topics, trends, and challenges in the tech industry.", startTime: "09:00", endTime: "17:00" },
    { date: "31st", fullDate: "August, 2024", event: "KEYNOTE/SPEAKING SESSION", details: "These sessions feature keynote presentations from industry experts and general talks by thought leaders in their respective industries.", startTime: "09:00", endTime: "17:00" },
    { date: "31st", fullDate: "August, 2024", event: "PRODUCT SHOWCASE", details: "This showcase is a session where participants can present their ideas, prototypes or demos of disruptive solutions addressing a wide range of domain problems in their communities.", startTime: "09:00", endTime: "17:00" },
];

export const EventDaysList = [
    { date: "26th", fullDate: "August, 2024", event: "HACKATHON STARTS" },
    { date: "30th", fullDate: "August, 2024", event: "HACKATHON ENDS" },
    { date: "31st", fullDate: "August, 2024", event: "CONFERENCE DAY" },
];
