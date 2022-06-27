import { Validation } from './Validation';
import type { TypeItem } from '../valueTypes';
import type { Logger } from '../types';

export default class EqualValidation extends Validation {
  static type = 'equal';

  other: TypeItem;

  constructor(input: TypeItem, other: TypeItem) {
    super(input);
    this.other = other;
  }

  validate(logger: Logger) {
    if (super.validate(logger)) {
      const valid = this.other && this.input.equal(this.other);
      logger(EqualValidation.type, valid, {
        other: this.other.get(),
      });
      return valid;
    }
    return false;
  }
}
