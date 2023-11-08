export default class StringSchema {
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
    this.validators.push((value) => typeof value === 'string' && value.length > 0);
    return this;
  }

  minLength(num) {
    this.validators.push((value) => typeof value === 'string' && value.length >= num);
    return this;
  }

  contains(pattern) {
    this.validators.push((value => typeof value === 'string' && value.includes(pattern)));
    return this;
  }
}
