// components/ColorSeries.tsx
import type { Color } from "@/lib/types";
import ColorCard from "./ColorCard";

interface ColorSeriesProps {
    data: {
        colors: Color[];
        logo?: string;
    };
    name: string;
    desc: string;
}

export default function ColorSeries({ data, name, desc }: ColorSeriesProps) {
    const { colors, logo } = data;

    return (
        <section className="mb-12">
            <div className="flex items-start mb-6">
                {logo && (
                    <img
                        src={logo}
                        alt={`${name} series logo`}
                        width={50}
                        height={50}
                        className="mr-4 self-center"
                        style={{ height: "auto" }}
                        loading="lazy"
                    />
                )}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                        {name}
                    </h2>
                    <p className="text-md text-gray-600 dark:text-gray-300">
                        {desc}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {colors.map((color, index) => (
                    <ColorCard key={`${name}-${index}`} color={color} />
                ))}
            </div>
        </section>
    );
}
