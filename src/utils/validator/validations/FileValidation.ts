import { Validation } from './Validation';
import type { TypeItem } from '../valueTypes';
import FileType from '../valueTypes/FileType';
import { FilesRules, ResultEntry } from '../types';

export default class FileValidation extends Validation {
  rules: FilesRules;

  constructor(input: TypeItem, rules: FilesRules) {
    super(input);
    this.rules = rules;
  }

  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid = this.validateFileProps();
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} not match files requirements`;
      }
      return valid;
    }
    return false;
  }

  validateFileProps(): boolean {
    if (!this.rules || !(this.input instanceof FileType)) {
      return true;
    }
    return this.input.data().every((file: File) => {
      const minSizeInvalid =
        Number.isFinite(this.rules.minSize) && file.size < this.rules.minSize!;

      const maxSizeInvalid =
        Number.isFinite(this.rules.maxSize) && file.size > this.rules.maxSize!;

      const extInvalid =
        Array.isArray(this.rules.extensions) &&
        !this.rules.extensions.includes(
          file.name.split('.')[file.name.split('.').length - 1],
        );

      const typeInvalid =
        Array.isArray(this.rules.types) &&
        !this.rules.types.includes(file.type);

      return minSizeInvalid || maxSizeInvalid || extInvalid || typeInvalid;
    });
  }
}
