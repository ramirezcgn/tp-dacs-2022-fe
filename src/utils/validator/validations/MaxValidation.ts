import { ResultEntry } from './Validation';
import RequiredValidation from './RequiredValidation';
import type { TypeItem } from '../types';

export default class MaxValidation extends RequiredValidation {
  max: number;

  constructor(input: TypeItem, max: number) {
    super(input);
    this.max = max;
  }

  validate() {
    return super.validate() && this.input.size() <= this.max;
  }

  validateResult(result: ResultEntry) {
    if (super.validateResult(result)) {
      const valid = this.validate();
      result.error = valid
        ? ''
        : `The field ${result.name} should have a value lower than ${this.max}`;
      return valid;
    }
    return false;
  }
}
