import type { TypeItem } from '../valueTypes';
import type { IValidation, ResultEntry } from '../types';

export abstract class Validation implements IValidation {
  input: TypeItem;

  constructor(input: TypeItem) {
    this.input = input;
  }

  validate(result?: ResultEntry): boolean {
    const valid = this.input.valid();
    if (result) {
      result.error = valid ? '' : `The field ${result.name} is invalid`;
    }
    return valid;
  }
}
