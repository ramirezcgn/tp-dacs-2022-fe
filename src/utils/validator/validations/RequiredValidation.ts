import { Validation } from './Validation';
import type { ResultEntry } from './IValidation';

export default class RequiredValidation extends Validation {
  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid = !this.input.empty();
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} should have a value`;
      }
      return valid;
    }
    return false;
  }
}
