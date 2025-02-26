// components/Navigation.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import { SerializedSeriesInfo } from "@/app/types";

interface NavigationProps {
    seriesList: SerializedSeriesInfo[];
}

export default function Navigation({ seriesList }: NavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const currentSlug = pathname.split("/").pop() || "";

    return (
        <nav className="bg-white dark:bg-gray-900 py-4 px-6 sticky top-0 z-10 shadow-md mb-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="text-xl font-bold text-gray-900 dark:text-white mr-8"
                    >
                        CUE!
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4">
                        {seriesList.map((series) => (
                            <Link
                                key={series.slug}
                                href={`/${series.slug}`}
                                className={`px-3 py-2 rounded-md text-sm font-medium capitalize ${
                                    currentSlug === series.slug
                                        ? "bg-gray-900 text-white dark:bg-gray-700"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                            >
                                {series.short}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center">
                    <DarkModeToggle />

                    {/* GitHub Icon */}
                    <a
                        href="https://github.com/your-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.563 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.135 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="ml-4 md:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden mt-4">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {seriesList.map((series) => (
                            <Link
                                key={series.slug}
                                href={`/${series.slug}`}
                                className={`block px-3 py-2 rounded-md text-base font-medium capitalize w-full text-left ${
                                    currentSlug === series.slug
                                        ? "bg-gray-900 text-white dark:bg-gray-700"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {series.short}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
