import { reverseWords } from '../../stringFunctions/reverseWords';

/**
 * Unit tests for the reverseWords function.
 */
describe('reverseWords', () => {
    // Test case 1: Reverse the order of words in a simple string
    it('1. should reverse the order of words in a simple string', () => {
        const str: string = "hello world";
        const expected: string = "world hello";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 2: Reverse the order of words in a string with multiple words
    it('2. should reverse the order of words in a string with multiple words', () => {
        const str: string = "The quick brown fox";
        const expected: string = "fox brown quick The";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 3: Reverse the order of words in a string with leading spaces
    it('3. should reverse the order of words in a string with leading spaces', () => {
        const str: string = "   hello world";
        const expected: string = "world hello   ";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 4: Reverse the order of words in a string with trailing spaces
    it('4. should reverse the order of words in a string with trailing spaces', () => {
        const str: string = "hello world   ";
        const expected: string = "   world hello";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 5: Reverse the order of words in a string with both leading and trailing spaces
    it('5. should reverse the order of words in a string with both leading and trailing spaces', () => {
        const str: string = "   hello world   ";
        const expected: string = "   world hello   ";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 6: Reverse the order of words in a string with special characters
    it('6. should reverse the order of words in a string with special characters', () => {
        const str: string = "hello @world!";
        const expected: string = "@world! hello";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 7: Reverse the order of words in a string with numbers
    it('7. should reverse the order of words in a string with numbers', () => {
        const str: string = "123 456 789";
        const expected: string = "789 456 123";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 8: Reverse the order of words in a string with mixed characters
    it('8. should reverse the order of words in a string with mixed characters', () => {
        const str: string = "a1@ b2# c3$";
        const expected: string = "c3$ b2# a1@";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 9: Reverse the order of words in a string with mixed case
    it('9. should reverse the order of words in a string with mixed case', () => {
        const str: string = "Hello World";
        const expected: string = "World Hello";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 10: Reverse the order of words in a string with punctuation
    it('10. should reverse the order of words in a string with punctuation', () => {
        const str: string = "hello, world!";
        const expected: string = "world! hello,";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 11: Reverse the order of words in an empty string
    it('11. should return an empty string when reversing an empty string', () => {
        const str: string = "";
        const expected: string = "";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 12: Reverse the order of words in a single word string
    it('12. should return the same string when reversing a single word string', () => {
        const str: string = "hello";
        const expected: string = "hello";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 13: Reverse the order of words in a string with multiple spaces between words
    it('13. should reverse the order of words in a string with multiple spaces between words', () => {
        const str: string = "a  b  c";
        const expected: string = "c  b  a";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 14: Reverse the order of words in a string with newline characters
    it('14. should reverse the order of words in a string with newline characters', () => {
        const str: string = "hello\nworld";
        const expected: string = "world hello";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });

    // Test case 15: Reverse the order of words in a string with tab characters
    it('15. should reverse the order of words in a string with tab characters', () => {
        const str: string = "hello\tworld";
        const expected: string = "world hello";
        const result: string = reverseWords(str);
        expect(result).toBe(expected);
    });
});
