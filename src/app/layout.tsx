// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import { getSeriesList } from "@/lib/jsonParser";
import { SerializedSeriesInfo } from "./types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CUE!",
    description: "Display and copy hex colors in various formats",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Get series list and serialize it
    const seriesListRaw = getSeriesList();
    const seriesList: SerializedSeriesInfo[] = seriesListRaw.map((series) => ({
        name: series.name,
        slug: series.slug,
        logo: series.logo,
        desc: series.desc,
    }));

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="color-scheme" content="light dark" />
            </head>
            <body
                className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navigation seriesList={seriesList} />
                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
