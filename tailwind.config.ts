import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}", "./public/**/*.html"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Noto Sans JP'", "sans-serif"],
                mono: ["'Fira Code'", "monospace"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};

export default config;
