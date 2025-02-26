// components/CopyButton.tsx
"use client";

import { useState } from "react";

interface CopyButtonProps {
    text: string;
    className?: string;
}

export default function CopyButton({ text, className = "" }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className={`ml-2 text-xs px-2 py-1 rounded-md transition-colors ${
                copied
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            } ${className}`}
        >
            {copied ? "Copied!" : "Copy"}
        </button>
    );
}
