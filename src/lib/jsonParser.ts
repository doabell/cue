import { load } from "js-yaml";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { ColorData, SeriesInfo } from "@/lib/types";

export function getSeriesList(): SeriesInfo[] {
    const yamlPath = join(process.cwd(), "data", "series.yaml");
    const fileContents = readFileSync(yamlPath, "utf8");
    const data = load(fileContents) as unknown as { series: SeriesInfo[] };
    return data.series;
}

export function getSeriesData(slug: string): ColorData {
    const seriesList = getSeriesList();
    const seriesInfo = seriesList.find((series) => series.slug === slug);

    if (!seriesInfo) {
        throw new Error(`Series not found: ${slug}`);
    }

    const yamlPath = join(process.cwd(), "data", `${slug}.yaml`);

    // Check if file exists
    if (!existsSync(yamlPath)) {
        throw new Error(`Series file not found: ${slug}.yaml`);
    }

    const fileContents = readFileSync(yamlPath, "utf8");
    const data = load(fileContents) as unknown as ColorData;

    // Add the logo from seriesInfo to the data
    data.logo = seriesInfo.logo;

    return data;
}
