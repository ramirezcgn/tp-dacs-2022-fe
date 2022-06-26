import { Validation } from './Validation';
import type { Logger } from '../types';

export default class RequiredValidation extends Validation {
  static type = 'required';

  validate(logger: Logger) {
    if (super.validate(logger)) {
      return logger(RequiredValidation.type, !this.input.empty());
    }
    return false;
  }
}
