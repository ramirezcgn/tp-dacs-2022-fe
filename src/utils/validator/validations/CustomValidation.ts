import { Validation } from './Validation';
import type { TypeItem } from '../valueTypes';
import type { Logger } from '../types';

export default class CustomValidation extends Validation {
  static type = 'custom';

  callback: Function = () => true;

  constructor(input: TypeItem, callback: string | Function) {
    super(input);
    if (typeof callback === 'string') {
      try {
        const func = new Function(`{ return ${callback} };`);
        this.callback = func.call(null);
      } catch (e) {
        console.log(e);
      }
    } else {
      this.callback = callback;
    }
  }

  validate(logger: Logger) {
    if (super.validate(logger)) {
      const valid = this.callback(this.input.get());
      logger(CustomValidation.type, valid);
      return valid;
    }
    return false;
  }
}
