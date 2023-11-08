import { test, expect, describe } from '@jest/globals';

import Validator from '../src/Validator.js';

describe('StringSchema', () => {
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
  });
});

describe('NumberSchema', () => {
  test('isValid but not required', () => {
    const v = new Validator();
    const schema = v.number();
    expect(schema.isValid(null)).toBe(true);
  });

  test('isValid and required', () => {
    const v = new Validator();
    const schema = v.number();
    schema.required();
    expect(schema.isValid(null)).toBe(false);
    expect(schema.isValid(7)).toBe(true);
  });

  test('positive', () => {
    const v = new Validator();
    const schema = v.number();
    schema.required().positive();
    expect(schema.isValid(10)).toBe(true);
    expect(schema.isValid(-10)).toBe(false);
  });

  test('range', () => {
    const v = new Validator();
    const schema = v.number();
    schema.required().range(-5, 5);
    expect(schema.isValid(0)).toBe(true);
    expect(schema.isValid(100)).toBe(false);
  });

  test('all together', () => {
    const v = new Validator();
    const schema = v.number();
    schema.required().range(-5, 5).positive();
    expect(schema.isValid(-3)).toBe(false);
    expect(schema.isValid(5)).toBe(true);
  });
});

describe('ArraySchema', () => {
  test('isValid but not required', () => {
    const v = new Validator();
    const schema = v.array();
    expect(schema.isValid(null)).toBe(true);
  });

  test('isValid and required', () => {
    const v = new Validator();
    const schema = v.array();
    schema.required();
    expect(schema.isValid(null)).toBe(false);
    expect(schema.isValid([])).toBe(true);
    expect(schema.isValid(['value'])).toBe(true);
  });

  test('sizeof', () => {
    const v = new Validator();
    const schema = v.array();
    schema.required().sizeof(2);
    expect(schema.isValid(['value'])).toBe(false);
    expect(schema.isValid(['value', 123])).toBe(true);
  });
});
