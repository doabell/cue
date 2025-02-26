// app/api/series/route.ts
import { NextResponse } from "next/server";
import { getSeriesList } from "@/lib/jsonParser";
import { SerializedSeriesInfo } from "@/app/types";

export async function GET() {
    try {
        const seriesListRaw = getSeriesList();

        // Serialize the data to avoid symbol properties
        const seriesList: SerializedSeriesInfo[] = seriesListRaw.map(
            (series) => ({
                name: series.name,
                short: series.short,
                slug: series.slug,
                logo: series.logo,
                desc: series.desc,
            }),
        );

        return NextResponse.json(seriesList);
    } catch (error) {
        console.error("Error fetching series list:", error);
        return NextResponse.json(
            { error: "Failed to fetch series list" },
            { status: 500 },
        );
    }
}
