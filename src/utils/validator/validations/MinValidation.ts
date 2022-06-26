import RequiredValidation from './RequiredValidation';
import type { ResultEntry } from './IValidation';
import type { TypeItem } from '../types';

export default class MinValidation extends RequiredValidation {
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
