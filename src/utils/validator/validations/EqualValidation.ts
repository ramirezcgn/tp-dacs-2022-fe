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
      return logger(
        EqualValidation.type,
        this.other && this.input.equal(this.other),
        {
          other: this.other.get(),
        },
      );
    }
    return false;
  }
}
