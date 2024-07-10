import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                "helvetica-compressed": ["var(--font-helvetica-compressed)"],
            },
            colors: {
                primary: "#635FC9",
                secondary: "#FBB80D",
                text: "#100322",
                background: "#323337", //#FBB80D
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-stars": "url('/images/hero-stars.png')",
            },
        },
    },
    plugins: [],
};
export default config;
