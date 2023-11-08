import { test, expect, describe } from '@jest/globals';

import Validator from '../src/Validator.js';

describe('String Schema', () => {

  test('isValid but not required', () => {
    const v = new Validator();
    const schema = v.string();
    expect(schema.isValid('')).toBe(true);
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid(undefined)).toBe(true);
  });

  test('isValid and required', () => {
    const v = new Validator();
    const schema = v.string();
    schema.required();
    expect(schema.isValid('what does the fox say')).toBe(true);
    expect(schema.isValid('hexlet')).toBe(true);
    expect(schema.isValid(null)).toBe(false);
    expect(schema.isValid('')).toBe(false);
  });

  test('contains', () => {
    const v = new Validator();
    const schema = v.string();
    schema.required();
    expect(schema.contains('what').isValid('what does the fox say')).toBe(true);
    expect(schema.contains('whatthe').isValid('what does the fox say')).toBe(false);
    expect(schema.isValid('what does the fox say')).toBe(false);
  });

  test('minLength', () => {
    const v = new Validator();
    const schema = v.string();
    schema.required();
    expect(schema.minLength(5).isValid('one')).toBe(false);
    expect(schema.isValid('one-two-three')).toBe(true);
  })
});
