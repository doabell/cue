"use client";

import { useState } from "react";
import Image from "next/image";
import { Color } from "@/app/types";
import { hexToRgb, hexToAegisub } from "@/lib/colorUtils";
import ColorCode from "./ColorCode";

interface ColorCardProps {
    color: Color;
}

export default function ColorCard({ color }: ColorCardProps) {
    const { title, subtitle, hex, logo } = color;
    const rgbValue = hexToRgb(hex);
    const aegisubValue = hexToAegisub(hex);

    const [copiedField, setCopiedField] = useState<string | null>(null);

    const handleCopy = async (text: string, field: string) => {
        await navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-4">
                {/* Color Box */}
                <div
                    className="mb-3 rounded-lg mx-auto"
                    style={{ backgroundColor: hex, height: "150px" }}
                ></div>

                {/* Color Name and Description */}
                <div className="mb-4">
                    <div className="flex items-center mb-1">
                        {logo && (
                            <div className="mr-2 flex-shrink-0">
                                <Image
                                    src={logo}
                                    alt={`${title} logo`}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                            </div>
                        )}
                        <div>
                            <p className="text-lg font-medium text-gray-900 dark:text-white">
                                {title}
                            </p>
                            <p className="text-md text-gray-600 dark:text-gray-300">
                                {subtitle}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Input Groups */}
                <div className="space-y-3">
                    <ColorCode
                        value={hex.toUpperCase()}
                        label="Hex Value"
                        copiedField={copiedField}
                        handleCopy={handleCopy}
                        field="hex"
                    />
                    <ColorCode
                        value={rgbValue}
                        label="RGB Value"
                        copiedField={copiedField}
                        handleCopy={handleCopy}
                        field="rgb"
                    />
                    <ColorCode
                        value={aegisubValue}
                        label="ASS Value"
                        copiedField={copiedField}
                        handleCopy={handleCopy}
                        field="aegisub"
                    />
                </div>
            </div>
        </div>
    );
}
