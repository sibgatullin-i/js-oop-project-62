import StringSchema from './StringSchema.js';

export default class Validator {
  string() {
    this.stringSchema = new StringSchema();
    return this.stringSchema;
  }
}
