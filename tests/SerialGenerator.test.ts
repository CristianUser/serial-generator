import { SerialGenerator } from '../src/SerialGenerator';

describe('src/SerialGenerator.ts', () => {
  describe('build', () => {
    const generator = new SerialGenerator('HR-EMP-.XXXX');

    test('should use provided value instead of state', () => {
      expect(generator.build(248)).toBe('HR-EMP-0248');
    });
  });
});
