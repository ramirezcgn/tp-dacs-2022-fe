import { Validation } from './Validation';
import type { TypeItem } from '../valueTypes';
import type { Logger } from '../types';

export default class BetweenValidation extends Validation {
  static type = 'between';

  min: number;
  max: number;

  constructor(input: TypeItem, min: number, max: number) {
    super(input);
    this.min = min;
    this.max = max;
  }

  validate(logger: Logger) {
    if (super.validate(logger)) {
      return logger(
        BetweenValidation.type,
        this.input.size() >= this.min && this.input.size() <= this.max,
        {
          min: this.min,
          max: this.max,
        },
      );
    }
    return false;
  }
}
