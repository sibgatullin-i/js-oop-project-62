import StringSchema from './StringSchema.js';
import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  constructor() {
    this.stringSchema = new StringSchema();
    this.numberSchema = new NumberSchema();
    this.arraySchema = new ArraySchema();
    this.objectSchema = new ObjectSchema();
    this.types = ['string', 'number'];
  }

  string() {
    return this.stringSchema;
  }

  number() {
    return this.numberSchema;
  }

  array() {
    return this.arraySchema;
  }

  object() {
    return this.objectSchema;
  }

  addValidator(type, name, fn) {
    if (!this.types.includes(type) || typeof fn !== 'function' || typeof name !== 'string') {
      throw new Error('wrong type or callback function');
    }
    this[`${type}Schema`].customValidators.push({
      name,
      fn,
    });
  }
}
