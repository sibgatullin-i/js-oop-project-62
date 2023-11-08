export default class ObjectSchema {
  shape(validatorObject) {
    this.validatorObject = validatorObject;
    return this;
  }

  isValid(object) {
    this.object = object;
    if (typeof this.object === 'object' && typeof this.validatorObject === 'object') {
      return Object.keys(this.validatorObject)
        .map((key) => this.validatorObject[key].isValid(this.object[key]))
        .reduce((acc, validator) => acc && validator, true);
    }
    return false;
  }
}
