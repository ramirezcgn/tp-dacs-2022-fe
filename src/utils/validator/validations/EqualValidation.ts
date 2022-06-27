import { Validation } from './Validation';
import type { TypeItem } from '../valueTypes';
import type { Logger, TestValues } from '../types';

export default class EqualValidation extends Validation {
  static type = 'equal';

  other: string;

  constructor(input: TypeItem, other: any) {
    super(input);
    this.other = other;
  }

  validate(logger: Logger, values?: TestValues) {
    if (super.validate(logger)) {
      let valid = false;
      if (this.other && values && this.other in values) {
        valid = this.input.equal(values[this.other] as any);
      }
      logger(EqualValidation.type, valid, {
        other: this.other,
      });
      return valid;
    }
    return false;
  }
}
