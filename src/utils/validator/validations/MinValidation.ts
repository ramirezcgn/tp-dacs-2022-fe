import { Validation } from './Validation';
import type { TypeItem } from '../valueTypes';
import type { ResultEntry } from '../types';

export default class MinValidation extends Validation {
  min: number;

  constructor(input: TypeItem, min: number) {
    super(input);
    this.min = min || 0;
  }

  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid = this.input.size() >= this.min;
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} should have a value bigger than ${this.min}`;
      }
      return valid;
    }
    return false;
  }
}
