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
        <button
            className={`color-code ${copiedField === field ? "is-copied" : ""}`}
            onClick={() => handleCopy(value, field)}
            aria-label={`Copy ${label}: ${value}`}
            type="button"
        >
            <span className="color-code-label">{label}</span>
            <code>{value}</code>
            <span className="color-code-action" aria-hidden="true">
                {copiedField === field ? "Copied" : "Copy"}
            </span>
        </button>
    );
}
