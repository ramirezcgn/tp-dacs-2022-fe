import { Validation } from './Validation';
import type { TypeItem } from '../valueTypes';
import type { ResultEntry } from '../types';

export default class MaxValidation extends Validation {
  max: number;

  constructor(input: TypeItem, max: number) {
    super(input);
    this.max = max || Infinity;
  }

  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid = this.input.size() <= this.max;
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} should have a value lower than ${this.max}`;
      }
      return valid;
    }
    return false;
  }
}
