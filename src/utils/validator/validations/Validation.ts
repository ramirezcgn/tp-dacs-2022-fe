import type { TypeItem } from '../valueTypes';
import type { IValidation, Logger } from '../types';

export abstract class Validation implements IValidation {
  static type = 'valid';

  input: TypeItem;

  constructor(input: TypeItem) {
    this.input = input;
  }

  validate(logger: Logger): boolean {
    return logger(Validation.type, this.input.valid());
  }
}
