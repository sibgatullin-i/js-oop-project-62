import { test, expect, describe } from '@jest/globals';

import Validator from '../src/Validator.js';

describe('String Schema', () => {
  const v = new Validator();
  const schema = v.string();

  test('isValid but not required', () => {
    expect(schema.isValid('')).toBe(true);
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid(undefined)).toBe(true);
  });

  schema.required();
  test('isValid and required', () => {
    expect(schema.isValid('what does the fox say')).toBe(true);
    expect(schema.isValid('hexlet')).toBe(true);
    expect(schema.isValid(null)).toBe(false);
    expect(schema.isValid('')).toBe(false);
  });

  test('contains', () => {
    expect(schema.contains('what').isValid('what does the fox say')).toBe(true);
    expect(schema.contains('whatthe').isValid('what does the fox say')).toBe(false);
    expect(schema.isValid('what does the fox say')).toBe(false);
  });
});
