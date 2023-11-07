import StringSchema from './StringSchema.js';

export default class Validator {
  constructor() {
    this.validators = [];
  }

  string() {
    this.StringSchema = new StringSchema();
    return this.StringSchema;
  }
}
