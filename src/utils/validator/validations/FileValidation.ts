import { Validation, ResultEntry } from './Validation';
import type { TypeItem } from '../types';

export type FileRule = {
  extensions?: string[];
  types?: string[];
  minSize?: number;
  maxSize?: number;
};

export default class FileValidation extends Validation {
  rules: FileRule;

  constructor(input: TypeItem, rules: FileRule) {
    super(input);
    this.rules = rules;
  }

  validate() {
    if (this.rules) {
      //return this.input.equal(this.other);
    }
    return false;
  }

  validateResult(result: ResultEntry) {
    if (super.validateResult(result)) {
      const valid = this.validate();
      result.error = valid
        ? ''
        : `The field ${result.name} should equal ${this.other}`;
      return valid;
    }
    return false;
  }
}
