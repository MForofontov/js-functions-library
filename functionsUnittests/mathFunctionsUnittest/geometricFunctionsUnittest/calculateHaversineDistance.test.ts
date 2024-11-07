import { calculateHaversineDistance } from '../../../mathFunctions/geometricFunctions/calculateHaversineDistance';

describe('calculateHaversineDistance', () => {
    // Test case 1: Distance between two points with positive coordinates
    it('1. should return the correct distance between two points with positive coordinates', () => {
        const lat1: number = 52.5200;
        const lon1: number = 13.4050;
        const lat2: number = 48.8566;
        const lon2: number = 2.3522;
        const expected: number = 878.84; // Approximate distance between Berlin and Paris in kilometers
        const result: number = calculateHaversineDistance(lat1, lon1, lat2, lon2);
        expect(result).toBeCloseTo(expected, 2);
    });

    // Test case 2: Distance between two points with negative coordinates
    it('2. should return the correct distance between two points with negative coordinates', () => {
        const lat1: number = -33.8688;
        const lon1: number = 151.2093;
        const lat2: number = -37.8136;
        const lon2: number = 144.9631;
        const expected: number = 713.77; // Approximate distance between Sydney and Melbourne in kilometers
        const result: number = calculateHaversineDistance(lat1, lon1, lat2, lon2);
        expect(result).toBeCloseTo(expected, 2);
    });

    // Test case 3: Distance between two points with mixed coordinates
    it('3. should return the correct distance between two points with mixed coordinates', () => {
        const lat1: number = 40.7128;
        const lon1: number = -74.0060;
        const lat2: number = -34.6037;
        const lon2: number = -58.3816;
        const expected: number = 8527.91; // Approximate distance between New York and Buenos Aires in kilometers
        const result: number = calculateHaversineDistance(lat1, lon1, lat2, lon2);
        expect(result).toBeCloseTo(expected, 2);
    });

    // Test case 4: Distance between two identical points
    it('4. should return 0 for two identical points', () => {
        const lat1: number = 51.5074;
        const lon1: number = -0.1278;
        const lat2: number = 51.5074;
        const lon2: number = -0.1278;
        const expected: number = 0;
        const result: number = calculateHaversineDistance(lat1, lon1, lat2, lon2);
        expect(result).toBe(expected);
    });

    // Test case 5: Distance between two points with very small differences in coordinates
    it('5. should return the correct distance for very small differences in coordinates', () => {
        const lat1: number = 51.5074;
        const lon1: number = -0.1278;
        const lat2: number = 51.5075;
        const lon2: number = -0.1279;
        const expected: number = 0.013; // Approximate distance in kilometers
        const result: number = calculateHaversineDistance(lat1, lon1, lat2, lon2);
        expect(result).toBeCloseTo(expected, 3);
    });

    // Test case 6: Distance between two points with NaN coordinates (should throw an error)
    it('6. should throw an error for NaN coordinates', () => {
        const lat1: number = NaN;
        const lon1: number = 13.4050;
        const lat2: number = 48.8566;
        const lon2: number = 2.3522;
        expect(() => calculateHaversineDistance(lat1, lon1, lat2, lon2)).toThrow('All inputs must be numbers');
    });

    // Test case 7: Distance between two points with string coordinates (should throw an error)
    it('7. should throw an error for string coordinates', () => {
        const lat1: any = '52.5200';
        const lon1: number = 13.4050;
        const lat2: number = 48.8566;
        const lon2: number = 2.3522;
        expect(() => calculateHaversineDistance(lat1, lon1, lat2, lon2)).toThrow('All inputs must be numbers');
    });

    // Test case 8: Distance between two points with very large coordinates
    it('8. should return the correct distance for very large coordinates', () => {
        const lat1: number = 89.9999;
        const lon1: number = 179.9999;
        const lat2: number = -89.9999;
        const lon2: number = -179.9999;
        const expected: number = 20015.09; // Approximate distance in kilometers (half the Earth's circumference)
        const result: number = calculateHaversineDistance(lat1, lon1, lat2, lon2);
        expect(result).toBeCloseTo(expected, 2);
    });
});
