import isPrimitive from '../src/is-primitive-x';

const itSymbol = typeof Symbol === 'undefined' ? xit : it;
const itBigInt = typeof BigInt === 'undefined' ? xit : it;

describe('testSubject', function() {
  it('should return true when primitive value', function() {
    expect.assertions(10);
    expect(isPrimitive()).toBe(true);
    expect(isPrimitive(undefined)).toBe(true);
    expect(isPrimitive(null)).toBe(true);
    expect(isPrimitive(0)).toBe(true);
    expect(isPrimitive(1)).toBe(true);
    expect(isPrimitive('foo')).toBe(true);
    expect(isPrimitive(true)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
    expect(isPrimitive(NaN)).toBe(true);
    expect(isPrimitive(Infinity)).toBe(true);
  });

  itSymbol('should return true for symbol', function() {
    expect.assertions(1);
    expect(isPrimitive(Symbol(''))).toBe(true);
  });

  itBigInt('should return true for bigint', function() {
    expect.assertions(1);
    expect(isPrimitive(BigInt(0))).toBe(true);
  });

  it('should return false when not primitive value', function() {
    expect.assertions(8);
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive([])).toBe(false);
    expect(isPrimitive(/./)).toBe(false);
    expect(isPrimitive(function() {})).toBe(false);
    expect(isPrimitive(new Date())).toBe(false);
    expect(isPrimitive(Object(1))).toBe(false);
    expect(isPrimitive(Object(''))).toBe(false);
    expect(isPrimitive(Object(true))).toBe(false);
  });
});
