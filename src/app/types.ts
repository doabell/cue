// app/types.ts
export interface Color {
    title: string;
    subtitle: string;
    hex: string;
    logo?: string;
}

export interface SeriesInfo {
    name: string;
    short: string;
    slug: string;
    logo?: string;
    desc: string;
}

export interface ColorData {
    colors: Color[];
    logo?: string;
}

// Ensure all types are serializable for client components
export type SerializedSeriesInfo = {
    name: string;
    short: string;
    slug: string;
    logo?: string;
    desc: string;
};
