/**
 * Gets the number of days in the month for a given date.
 * 
 * @param date - The Date object to get the month's day count from.
 * @returns The number of days in the month.
 */
export function getDaysInMonth(date: Date): number {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
}

// Example usage:
// const date = new Date('2024-09-19');
// getDaysInMonth(date); // e.g., 30 (for September)
