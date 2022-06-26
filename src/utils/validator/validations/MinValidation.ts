import { ResultEntry } from './Validation';
import RequiredValidation from './RequiredValidation';
import type { TypeItem } from '../types';

export default class MinValidation extends RequiredValidation {
  min: number;

  constructor(input: TypeItem, min: number) {
    super(input);
    this.min = min;
  }

  validate() {
    return super.validate() && this.input.size() >= this.min;
  }

  validateResult(result: ResultEntry) {
    if (super.validateResult(result)) {
      const valid = this.validate();
      result.error = valid
        ? ''
        : `The field ${result.name} should have a value bigger than ${this.min}`;
      return valid;
    }
    return false;
  }
}
