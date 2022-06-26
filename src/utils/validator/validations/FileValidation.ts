import { Validation } from './Validation';
import type { ResultEntry } from './IValidation';
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

  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid = true; // this.input.equal(this.rules);
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} should equal ${this.rules}`;
      }
      return valid;
    }
    return false;
  }
}
