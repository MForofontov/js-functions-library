/**
 * Capitalizes the first letter of each word in a given string.
 * 
 * @param str - The string to capitalize.
 * @returns A new string with the first letter of each word capitalized.
 */
export function capitalizeEachWord(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Example usage:
// capitalizeEachWord("hello world"); // "Hello World"