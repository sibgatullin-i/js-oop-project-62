export default class ArraySchema {
  constructor() {
    this.validators = [];
    this.customValidators = [];
  }

  isValid(value) {
    this.value = value;
    return this.validators
      .map((validator) => validator(this.value))
      .reduce((acc, result) => acc && result, true);
  }

  required() {
    this.validators.push((value) => Array.isArray(value));
    return this;
  }

  sizeof(num) {
    this.validators.push((value) => Array.isArray(value) && value.length >= num);
    return this;
  }
}
