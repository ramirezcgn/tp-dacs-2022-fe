import { Validation, ResultEntry } from './Validation';
import type { TypeItem } from '../types';

export default class EqualValidation extends Validation {
  other: TypeItem;

  constructor(input: TypeItem, other: TypeItem) {
    super(input);
    this.other = other;
  }

  validate() {
    if (this.other) {
      return this.input.equal(this.other);
    }
    return false;
  }

  validateResult(result: ResultEntry) {
    if (super.validateResult(result)) {
      const valid = this.validate();
      result.error = valid
        ? ''
        : `The field ${result.name} should equal ${this.other}`;
      return valid;
    }
    return false;
  }
}
