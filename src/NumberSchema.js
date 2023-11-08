export default class NumberSchema {
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
    this.validators.push((value) => typeof value === 'number');
    return this;
  }

  positive() {
    this.validators.push((value) => {
      if (typeof value === 'number') {
        return value > 0;
      }
      return true;
    });
    return this;
  }

  range(from, to) {
    this.validators.push((value) => typeof value === 'number' && value >= from && value <= to);
    return this;
  }

  test(customName, customValue) {
    this.customValue = customValue;
    this.customValidator = this.customValidators
      .filter((customValidator) => customValidator.name === customName)[0].fn;
    return this;
  }
}
