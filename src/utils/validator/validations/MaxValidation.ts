import RequiredValidation from './RequiredValidation';
import type { ResultEntry } from './IValidation';
import type { TypeItem } from '../types';

export default class MaxValidation extends RequiredValidation {
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
