export default class NumberSchema {
  constructor() {
    this.validators = [];
  }

  isValid(value) {
    this.value = value;
    return this.validators
      .map((validator) => validator(this.value))
      .reduce((acc, result) => acc && result, true);
  }

  required() {
    this.validators.push((value) => typeof value === 'number');
    return this;
  }

  positive() {
    this.validators.push((value) => typeof value === 'number' && value > 0);
    return this;
  }

  range(from, to) {
    this.validators.push((value) => typeof value === 'number' && value >= from && value <= to);
    return this;
  }
}
