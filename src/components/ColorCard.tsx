import { useState, type CSSProperties } from "react";
import type { Color } from "@/lib/types";
import { hexToRgb, hexToAegisub } from "@/lib/colorUtils";
import ColorCode from "./ColorCode";

interface ColorCardProps {
    color: Color;
    index: number;
}

const getInkColor = (hex: string) => {
    const value = hex.replace("#", "");
    const red = Number.parseInt(value.slice(0, 2), 16);
    const green = Number.parseInt(value.slice(2, 4), 16);
    const blue = Number.parseInt(value.slice(4, 6), 16);
    const luminance = (red * 299 + green * 587 + blue * 114) / 1000;

    return luminance > 154 ? "#171714" : "#ffffff";
};

export default function ColorCard({ color, index }: ColorCardProps) {
    const { title, subtitle, hex, logo } = color;
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const cardStyle = {
        "--swatch": hex,
        "--swatch-ink": getInkColor(hex),
    } as CSSProperties;

    const handleCopy = async (text: string, field: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedField(field);
            window.setTimeout(() => setCopiedField(null), 1600);
        } catch {
            setCopiedField(null);
        }
    };

    const values = [
        { field: "hex", label: "HEX", value: hex.toUpperCase() },
        { field: "rgb", label: "RGB", value: hexToRgb(hex) },
        { field: "aegisub", label: "ASS", value: hexToAegisub(hex) },
    ];

    return (
        <article className="color-card" style={cardStyle}>
            <div className="character-panel">
                <span className="color-card-index">
                    {String(index + 1).padStart(2, "0")}
                </span>
                {logo ? (
                    <img
                        className="character-logo"
                        src={logo}
                        alt=""
                        width={140}
                        height={140}
                        loading="lazy"
                    />
                ) : (
                    <span className="color-placeholder" aria-hidden="true" />
                )}
            </div>

            <button
                className="color-swatch"
                onClick={() => handleCopy(hex.toUpperCase(), "swatch")}
                aria-label={`Copy ${title} HEX value ${hex.toUpperCase()}`}
                type="button"
            >
                <span className="swatch-status">
                    {copiedField === "swatch" ? "Copied" : "Copy HEX"}
                </span>
                <code>{hex.toUpperCase()}</code>
            </button>

            <div className="color-card-body">
                <div className="color-title">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>

                <div className="color-values">
                    {values.map((item) => (
                        <ColorCode
                            key={item.field}
                            value={item.value}
                            label={item.label}
                            copiedField={copiedField}
                            handleCopy={handleCopy}
                            field={item.field}
                        />
                    ))}
                </div>
            </div>
        </article>
    );
}
