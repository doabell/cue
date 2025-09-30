import type { APIRoute } from "astro";
import { getSeriesData, getSeriesList } from "@/lib/jsonParser";
import type { Color } from "@/lib/types";

export const prerender = true;

export const getStaticPaths = async () => {
    const seriesList = getSeriesList();
    return seriesList.map((series) => ({
        params: { slug: series.slug },
    }));
};

export const GET: APIRoute = ({ params }) => {
    const slug = params.slug;

    if (!slug) {
        return new Response(JSON.stringify({ error: "Slug not provided" }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    try {
        const seriesDataRaw = getSeriesData(slug);
        const seriesData = {
            colors: seriesDataRaw.colors.map((color: Color) => ({
                title: color.title,
                subtitle: color.subtitle,
                hex: color.hex,
                logo: color.logo,
            })),
            logo: seriesDataRaw.logo,
        };

        return new Response(JSON.stringify(seriesData), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(`Error fetching series data for ${slug}:`, error);
        const message =
            error instanceof Error ? error.message : "Unknown error";
        const status = message.includes("not found") ? 404 : 500;

        return new Response(
            JSON.stringify({
                error:
                    status === 404
                        ? "Series not found"
                        : "Failed to fetch series data",
            }),
            {
                status,
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
    }
};
