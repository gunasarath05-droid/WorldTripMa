import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#002366', // Deep Navy
                    foreground: '#ffffff',
                },
                accent: {
                    DEFAULT: '#C5A059', // Champagne Gold
                    foreground: '#ffffff',
                },
                slate: {
                    50: '#FDFBFA', // Warm off-white
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                heading: ['var(--font-playfair)', 'serif'],
            },
        },
    },
    plugins: [],
};
export default config;
