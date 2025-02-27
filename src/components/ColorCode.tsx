// components/ColorCode.tsx
import { firaCode } from "@/app/fonts";
interface ColorCodeProps {
    value: string;
    label: string;
    copiedField: string | null;
    handleCopy: (text: string, field: string) => void;
    field: string;
}
export default function ColorCode({
    value,
    label,
    copiedField,
    handleCopy,
    field,
}: ColorCodeProps) {
    return (
        <div className="flex rounded-md shadow-sm w-full">
            <input
                type="text"
                readOnly
                value={value}
                className={`${firaCode.className} flex-1 min-w-0 rounded-l-md border border-gray-300 dark:border-gray-600 py-1.5 px-3 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700`}
                aria-label={label}
            />
            <button
                className={`px-3 inline-flex items-center justify-center
                    flex-shrink-0 rounded-r-md border border-gray-300 dark:border-gray-600 py-1.5
                    bg-gray-100 hover:bg-gray-200 text-gray-700
                    dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600
                    text-sm
                `}
                onClick={() => handleCopy(value, field)}
                aria-label={`Copy ${label}`}
            >
                {copiedField === field ? (
                    <svg
                        className="w-5 h-5"
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
                        className="w-5 h-5"
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
    );
}
