import type { Color } from "@/lib/types";
import { formatMonthYear } from "@/lib/dateUtils";
import type { CSSProperties } from "react";
import ColorCard from "./ColorCard";

interface ColorSeriesProps {
    data: {
        colors: Color[];
        logo?: string;
    };
    name: string;
    desc: string;
    startDate: string;
    endDate?: string;
}

export default function ColorSeries({
    data,
    name,
    desc,
    startDate,
    endDate,
}: ColorSeriesProps) {
    const { colors, logo } = data;

    return (
        <section className="collection-page">
            <div className="breadcrumb">
                <a href="/">Projects</a>
                <span aria-hidden="true">/</span>
                <span>{name}</span>
            </div>

            <header className="collection-header">
                <div className="collection-identity">
                    {logo && (
                        <div className="collection-logo">
                            <img
                                src={logo}
                                alt={`${name} logo`}
                                width={120}
                                height={120}
                            />
                        </div>
                    )}
                    <div className="collection-copy">
                        <p className="kicker">Project</p>
                        <h1>{name}</h1>
                        <p className="collection-description">{desc}</p>
                        <p className="collection-period">
                            <span>Period</span>
                            <time dateTime={startDate}>
                                {formatMonthYear(startDate)}
                            </time>
                            <span aria-hidden="true">—</span>
                            {endDate ? (
                                <time dateTime={endDate}>
                                    {formatMonthYear(endDate)}
                                </time>
                            ) : (
                                <span>Present</span>
                            )}
                        </p>
                    </div>
                </div>
            </header>

            <div className="collection-palette" aria-label={`${name} palette`}>
                {colors.map((color) => (
                    <span
                        key={`${color.title}-${color.hex}`}
                        style={
                            {
                                "--swatch": color.hex,
                            } as CSSProperties
                        }
                        title={`${color.title}: ${color.hex}`}
                    ></span>
                ))}
            </div>

            <div className="colors-heading">
                <h2>Colors</h2>
            </div>

            <div className="color-grid">
                {colors.map((color, index) => (
                    <ColorCard
                        key={`${color.title}-${color.hex}`}
                        index={index}
                        color={color}
                    />
                ))}
            </div>
        </section>
    );
}
