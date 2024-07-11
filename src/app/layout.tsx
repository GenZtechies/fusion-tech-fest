import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const helveticaCompressed = localFont({
    src: "../../public/fonts/helvetica-compressed.woff2",
    display: "swap",
    variable: "--font-helvetica-compressed",
});

export const metadata: Metadata = {
    title: "Fusion Tech Fest 2024",
    description: "Get ready to dive into the future at Fusion Tech Fest! Join us for an unforgettable experience where groundbreaking innovation, cutting-edge creativity, and dynamic collaboration converge. Immerse yourself in a world of technological marvels, connect with industry leaders, and be inspired by visionary thinkers. Don't miss this chance to be part of an event that will shape the future of technology.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn(helveticaCompressed.variable)}>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
