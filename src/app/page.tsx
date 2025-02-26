// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getSeriesList } from "@/lib/jsonParser";
import { SerializedSeriesInfo } from "./types";

export default function Home() {
    const seriesListRaw = getSeriesList();

    // Serialize the data to avoid symbol properties
    const seriesList: SerializedSeriesInfo[] = seriesListRaw.map((series) => ({
        name: series.name,
        short: series.short,
        slug: series.slug,
        logo: series.logo,
        desc: series.desc,
    }));

    return (
        <div className="py-10">
            <h1 className="text-3xl font-bold text-center mb-12">CUE!</h1>
            <p className="text-center text-lg mb-8">
                Color palettes for franchises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {seriesList.map((series) => (
                    <Link
                        href={`/${series.slug}`}
                        key={series.slug}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center mb-4">
                            {series.logo && (
                                <Image
                                    src={series.logo}
                                    alt={`${series.name} logo`}
                                    width={50}
                                    height={50}
                                    className="mr-3"
                                />
                            )}
                            <h2 className="text-xl font-semibold capitalize">
                                {series.name}
                            </h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            {series.desc}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
