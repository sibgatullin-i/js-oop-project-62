export default class StringSchema {
  constructor() {
    this.validators = [];
    this.customValidators = [];
    this.customIsValid = true;
  }

  isValid(value) {
    this.value = value;
    if (typeof this.customValidator === 'function') {
      this.customIsValid = this.customValidator(this.value, this.customValue);
    }
    return this.validators
      .map((validator) => validator(this.value))
      .reduce((acc, result) => acc && result, true) && this.customIsValid;
  }

  required() {
    this.validators.push((value) => typeof value === 'string' && value.length > 0);
    return this;
  }

  minLength(num) {
    this.validators.push((value) => typeof value === 'string' && value.length >= num);
    return this;
  }

  contains(pattern) {
    this.validators.push((value) => typeof value === 'string' && value.includes(pattern));
    return this;
  }

  test(customName, customValue) {
    this.customValue = customValue;
    this.customValidator = this.customValidators
      .filter((customValidator) => customValidator.name === customName)[0].fn;
    return this;
  }
}
