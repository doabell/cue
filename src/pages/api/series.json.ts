import type { APIRoute } from "astro";
import { getSeriesList } from "@/lib/jsonParser";
import type { SerializedSeriesInfo } from "@/lib/types";

const serializeSeriesList = (): SerializedSeriesInfo[] => {
    const seriesListRaw = getSeriesList();
    return seriesListRaw.map((series) => ({
        name: series.name,
        short: series.short,
        slug: series.slug,
        logo: series.logo,
        desc: series.desc,
    }));
};

export const prerender = true;

export const GET: APIRoute = () => {
    try {
        const seriesList = serializeSeriesList();
        return new Response(JSON.stringify(seriesList), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error fetching series list:", error);
        return new Response(
            JSON.stringify({ error: "Failed to fetch series list" }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
    }
};
