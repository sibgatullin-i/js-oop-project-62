import StringSchema from './StringSchema.js';
import NumberSchema from './NumberSchema.js';

export default class Validator {
  string() {
    this.stringSchema = new StringSchema();
    return this.stringSchema;
  }

  number() {
    this.numberSchema = new NumberSchema();
    return this.numberSchema;
  }
}
