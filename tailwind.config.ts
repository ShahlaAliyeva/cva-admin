import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/features/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)"],
            },
            colors: {
                background: "rgb(var(--background) / <alpha-value>)",
                foreground: "rgb(var(--foreground) / <alpha-value>)",

                card: "rgb(var(--card) / <alpha-value>)",
                "card-foreground": "rgb(var(--card-foreground) / <alpha-value>)",

                primary: "rgb(var(--primary) / <alpha-value>)",
                "primary-foreground": "rgb(var(--primary-foreground) / <alpha-value>)",

                border: "rgb(var(--border) / <alpha-value>)",
                muted: "rgb(var(--muted) / <alpha-value>)",
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
            },
            boxShadow: {
                sm: "var(--shadow-sm)",
                md: "var(--shadow-md)",
            },

        },
    },
    plugins: [],
};

export default config;
