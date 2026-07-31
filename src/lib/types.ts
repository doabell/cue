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
    startDate: string;
    endDate?: string;
}

export interface ColorData {
    colors: Color[];
    logo?: string;
}

export type SerializedSeriesInfo = {
    name: string;
    short: string;
    slug: string;
    logo?: string;
    desc: string;
    startDate: string;
    endDate?: string;
};
