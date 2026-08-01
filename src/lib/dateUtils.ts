const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export function formatMonthYear(value: string): string {
    const [year, month] = value.split("-").map(Number);
    return `${monthNames[month - 1]} ${year}`;
}

export function formatPeriod(startDate: string, endDate?: string): string {
    return `${formatMonthYear(startDate)} — ${
        endDate ? formatMonthYear(endDate) : "Present"
    }`;
}
