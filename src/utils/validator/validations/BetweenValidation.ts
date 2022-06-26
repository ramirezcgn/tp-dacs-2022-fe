import { ResultEntry } from './Validation';
import RequiredValidation from './RequiredValidation';
import type { TypeItem } from '../types';

export default class BetweenValidation extends RequiredValidation {
  min: number;
  max: number;

  constructor(input: TypeItem, min: number, max: number) {
    super(input);
    this.min = min;
    this.max = max;
  }

  validate() {
    return (
      super.validate() &&
      this.input.size() >= this.min &&
      this.input.size() <= this.max
    );
  }

  validateResult(result: ResultEntry) {
    if (super.validateResult(result)) {
      const valid = this.validate();
      result.error = valid
        ? ''
        : `The field ${result.name} should have a value between ${this.min} and ${this.max}`;
      return valid;
    }
    return false;
  }
}
