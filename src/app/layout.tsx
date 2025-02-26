// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import { getSeriesList } from "@/lib/jsonParser";
import { SerializedSeriesInfo } from "./types";
import { notoSansJP } from "./fonts";

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
        short: series.short,
        slug: series.slug,
        logo: series.logo,
        desc: series.desc,
    }));

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="color-scheme" content="light dark" />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎐</text></svg>"></link>
            </head>
            <body
                className={`${notoSansJP.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen`}
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
