import { getStartOfWeek } from './getStartOfWeek';

/**
 * Gets the first date of the current week for a given Date object.
 * 
 * @param date - The Date object to get the week's start date for.
 * @param startOfWeek - The start day of the week (0 for Sunday, 1 for Monday, etc.).
 * @returns A new Date object representing the first day of the current week.
 */
export function getFirstDateOfWeek(date: Date, startOfWeek: number = 0): Date {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    if (isNaN(startOfWeek) || startOfWeek < 0 || startOfWeek > 6) {
        throw new Error('Invalid startOfWeek value. It must be a number between 0 (Sunday) and 6 (Saturday).');
    }

    const start = getStartOfWeek(date, startOfWeek);
    return start;
}

// Example usage:
// const date = new Date();
// getFirstDateOfWeek(date); // First date of the week containing today