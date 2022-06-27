import type { TypeItem } from '../valueTypes';
import type { IValidation, Logger } from '../types';

export abstract class Validation implements IValidation {
  static type = 'valid';

  input: TypeItem;

  constructor(input: TypeItem) {
    this.input = input;
  }

  validate(logger: Logger): boolean {
    const valid = this.input.valid();
    logger(Validation.type, valid);
    return valid;
  }
}
