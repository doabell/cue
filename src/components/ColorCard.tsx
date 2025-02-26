"use client";

import { useState } from "react";
import Image from "next/image";
import { Color } from "@/app/types";
import { hexToRgb, hexToAegisub } from "@/lib/colorUtils";

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
                    {/* Hex Format */}
                    <div className="flex rounded-md shadow-sm w-full">
                        <input
                            type="text"
                            readOnly
                            value={hex.toUpperCase()}
                            className="flex-1 min-w-0 rounded-l-md border-0 py-1.5 px-3 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 ring-1 ring-inset ring-gray-300 dark:ring-gray-600"
                            aria-label="Hex Value"
                        />
                        <button
                            className={`px-3 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-r-md border-0 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 ${
                                copiedField === "hex"
                                    ? "bg-green-500 dark:bg-green-600 text-white"
                                    : ""
                            }`}
                            onClick={() => handleCopy(hex.toUpperCase(), "hex")}
                            aria-label="Copy Hex Value"
                        >
                            {copiedField === "hex" ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* RGB Format */}
                    <div className="flex rounded-md shadow-sm w-full">
                        <input
                            type="text"
                            readOnly
                            value={rgbValue}
                            className="flex-1 min-w-0 rounded-l-md border-0 py-1.5 px-3 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 ring-1 ring-inset ring-gray-300 dark:ring-gray-600"
                            aria-label="RGB Value"
                        />
                        <button
                            className={`px-3 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-r-md border-0 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 ${
                                copiedField === "rgb"
                                    ? "bg-green-500 dark:bg-green-600 text-white"
                                    : ""
                            }`}
                            onClick={() => handleCopy(rgbValue, "rgb")}
                            aria-label="Copy RGB Value"
                        >
                            {copiedField === "rgb" ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Aegisub Format */}
                    <div className="flex rounded-md shadow-sm w-full">
                        <input
                            type="text"
                            readOnly
                            value={aegisubValue}
                            className="flex-1 min-w-0 rounded-l-md border-0 py-1.5 px-3 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 ring-1 ring-inset ring-gray-300 dark:ring-gray-600"
                            aria-label="ASS Value"
                        />
                        <button
                            className={`px-3 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-r-md border-0 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 ${
                                copiedField === "aegisub"
                                    ? "bg-green-500 dark:bg-green-600 text-white"
                                    : ""
                            }`}
                            onClick={() => handleCopy(aegisubValue, "aegisub")}
                            aria-label="Copy ASS Value"
                        >
                            {copiedField === "aegisub" ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
