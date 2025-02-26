// Convert hex to RGB
export function hexToRgb(hex: string): string {
    // Remove # if present
    hex = hex.replace("#", "");

    // Parse hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b})`;
}

// Convert hex to Aegisub format
export function hexToAegisub(hex: string): string {
    // Remove # if present
    hex = hex.replace("#", "");

    // Reverse the color order (RGB -> BGR) and add the Aegisub format
    const r = hex.substring(0, 2);
    const g = hex.substring(2, 4);
    const b = hex.substring(4, 6);

    return `&H${b}${g}${r}&`;
}
