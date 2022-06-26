import { Validation } from './Validation';
import type { ResultEntry } from './IValidation';
import type { TypeItem } from '../types';

export default class EqualValidation extends Validation {
  other: TypeItem;

  constructor(input: TypeItem, other: TypeItem) {
    super(input);
    this.other = other;
  }

  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid = this.other && this.input.equal(this.other);
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} should be equal to ${this.other}`;
      }
      return valid;
    }
    return false;
  }
}
