import { Validation, ResultEntry } from './Validation';

export default class RequiredValidation extends Validation {
  validate() {
    return super.validate() && !this.input.empty();
  }

  validateResult(result: ResultEntry) {
    if (super.validateResult(result)) {
      const valid = this.validate();
      result.error = valid
        ? ''
        : `The field ${result.name} should have a value`;
      return valid;
    }
    return false;
  }
}
