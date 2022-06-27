import { Validation } from './Validation';
import type { TypeItem } from '../valueTypes';
import type { Logger } from '../types';

export default class RegexValidation extends Validation {
  static type = 'regex';

  regex: RegExp;

  constructor(input: TypeItem, regex: string | RegExp) {
    super(input);
    this.regex = regex instanceof RegExp ? regex : new RegExp(regex);
  }

  validate(logger: Logger) {
    if (super.validate(logger)) {
      const valid = this.regex.test(this.input.get()?.toString() || '');
      logger(RegexValidation.type, valid);
      return valid;
    }
    return false;
  }
}
