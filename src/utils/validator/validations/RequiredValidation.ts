import { Validation } from './Validation';
import type { Logger } from '../types';

export default class RequiredValidation extends Validation {
  static type = 'required';

  validate(logger: Logger) {
    if (super.validate(logger)) {
      const valid = !this.input.empty();
      logger(RequiredValidation.type, valid);
      return valid;
    }
    return false;
  }
}
