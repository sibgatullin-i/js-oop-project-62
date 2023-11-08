import StringSchema from './StringSchema.js';
import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  string() {
    this.stringSchema = new StringSchema();
    return this.stringSchema;
  }

  number() {
    this.numberSchema = new NumberSchema();
    return this.numberSchema;
  }

  array() {
    this.arraySchema = new ArraySchema();
    return this.arraySchema;
  }

  object() {
    this.objectSchema = new ObjectSchema();
    return this.objectSchema;
  }
}
