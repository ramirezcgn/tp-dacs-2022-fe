import type { TypeItem } from '../types';

export type ResultEntry = {
  name: string;
  error: string;
};

export interface IValidation {
  validate(): boolean;
  validateResult(result: ResultEntry): boolean;
}

export abstract class Validation implements IValidation {
  input: TypeItem;

  constructor(input: TypeItem) {
    this.input = input;
  }

  validate(): boolean {
    return this.input.valid();
  }

  validateResult(result: ResultEntry) {
    const valid = this.validate();
    result.error = valid ? '' : `The field ${result.name} is invalid`;
    return valid;
  }
}
