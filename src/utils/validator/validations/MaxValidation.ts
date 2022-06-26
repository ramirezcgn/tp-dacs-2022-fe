import { Validation } from './Validation';
import type { TypeItem } from '../valueTypes';
import type { Logger } from '../types';

export default class MaxValidation extends Validation {
  static type = 'max';

  max: number;

  constructor(input: TypeItem, max: number) {
    super(input);
    this.max = max || Infinity;
  }

  validate(logger: Logger) {
    if (super.validate(logger)) {
      return logger(MaxValidation.type, this.input.size() <= this.max, {
        max: this.max,
      });
    }
    return false;
  }
}
