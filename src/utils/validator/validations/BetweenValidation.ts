import RequiredValidation from './RequiredValidation';
import type { ResultEntry } from './IValidation';
import type { TypeItem } from '../types';

export default class BetweenValidation extends RequiredValidation {
  min: number;
  max: number;

  constructor(input: TypeItem, min: number, max: number) {
    super(input);
    this.min = min;
    this.max = max;
  }

  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid =
        this.input.size() >= this.min && this.input.size() <= this.max;
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} should have a value between ${this.min} and ${this.max}`;
      }
      return valid;
    }
    return false;
  }
}
