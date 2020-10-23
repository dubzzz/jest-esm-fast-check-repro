import fc from 'fast-check'

test('should pass', () => {
    expect(
        fc.sample(fc.constant('Hello World!'))[0]
    ).toBe('Hello World!');
});