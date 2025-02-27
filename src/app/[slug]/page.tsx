// app/series/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getSeriesData, getSeriesList } from "@/lib/jsonParser";
import ColorSeries from "@/components/ColorSeries";
import { Color } from "@/app/types";

interface SeriesPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const series = getSeriesList();
    return series.map((series) => ({
        slug: series.slug,
    }));
}

export async function generateMetadata({ params }: SeriesPageProps) {
    // Await the params object
    const { slug } = await Promise.resolve(params);
    const seriesList = getSeriesList();
    const seriesInfo = seriesList.find((s) => s.slug === slug);

    if (!seriesInfo) {
        return {
            title: "Series Not Found",
        };
    }

    return {
        title: `${seriesInfo.short} | CUE!`,
        description: `View and copy ${seriesInfo.name} color palette in various formats`,
    };
}

export default async function SeriesPage({ params }: SeriesPageProps) {
    // Await the params object
    const { slug } = await Promise.resolve(params);
    const seriesList = getSeriesList();
    const seriesInfo = seriesList.find((s) => s.slug === slug);

    if (!seriesInfo) {
        notFound();
    }

    try {
        const seriesDataRaw = getSeriesData(slug);

        // Serialize the data to avoid symbol properties
        const seriesData = {
            colors: seriesDataRaw.colors.map((color: Color) => ({
                title: color.title,
                subtitle: color.subtitle,
                hex: color.hex,
                logo: color.logo,
            })),
            logo: seriesDataRaw.logo,
        };

        return (
            <ColorSeries
                data={seriesData}
                name={seriesInfo.name}
                desc={seriesInfo.desc}
            />
        );
    } catch (error) {
        console.error("Error loading series data:", error);
        notFound();
    }
}
