// app/api/series/[slug]/route.ts
import { NextResponse } from "next/server";
import { getSeriesData } from "@/lib/jsonParser";
import { Color } from "@/app/types";

export async function GET(
    request: Request,
) {
    try {
        // Extract the slug from the URL
        const url = new URL(request.url);
        const slug = url.pathname.split('/').pop();
        if (!slug) throw new Error("Slug not found");

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

        return NextResponse.json(seriesData);
    } catch (error) {
        console.error(
            `Error fetching series data:`,
            error,
        );

        // If file not found, return 404
        if ((error as Error).message.includes("not found")) {
            return NextResponse.json(
                { error: "Series not found" },
                { status: 404 },
            );
        }

        // Otherwise return 500
        return NextResponse.json(
            { error: "Failed to fetch series data" },
            { status: 500 },
        );
    }
}
