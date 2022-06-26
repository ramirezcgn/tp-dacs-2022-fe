import { Validation } from './Validation';
import type { TypeItem } from '../valueTypes';
import type { Logger } from '../types';

export default class MinValidation extends Validation {
  static type = 'min';

  min: number;

  constructor(input: TypeItem, min: number) {
    super(input);
    this.min = min || 0;
  }

  validate(logger: Logger) {
    if (super.validate(logger)) {
      return logger(MinValidation.type, this.input.size() >= this.min, {
        min: this.min,
      });
    }
    return false;
  }
}
