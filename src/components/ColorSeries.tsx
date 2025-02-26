// components/ColorSeries.tsx
import Image from "next/image";
import { Color, ColorData } from "@/app/types";
import ColorCard from "./ColorCard";

interface ColorSeriesProps {
    data: {
        colors: Color[];
        logo?: string;
    };
    name: string;
}

export default function ColorSeries({ data, name }: ColorSeriesProps) {
    const { colors, logo } = data;

    return (
        <section className="mb-12">
            <div className="flex items-center mb-6">
                {logo && (
                    <Image
                        src={logo}
                        alt={`${name} series logo`}
                        width={50}
                        height={50}
                        className="mr-4"
                    />
                )}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                    {name}
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {colors.map((color, index) => (
                    <ColorCard key={`${name}-${index}`} color={color} />
                ))}
            </div>
        </section>
    );
}
