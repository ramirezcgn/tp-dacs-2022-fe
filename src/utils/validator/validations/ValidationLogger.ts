import { defaultErrorsMsg } from '../types';
import type { ResultEntry } from '../types';
import type { TypeKey } from '../valueTypes';

export default class ValidationLogger {
  type: TypeKey;
  errorsList: any;

  constructor(type: TypeKey, customErrorMsg?: any) {
    this.type = type;
    this.errorsList = {
      ...defaultErrorsMsg,
      ...(customErrorMsg || {}),
    };
  }

  getMessage(rule) {
    if (this.type in this.errorsList[rule]) {
      return this.errorsList[rule][this.type];
    } else if ('default' in this.errorsList[rule]) {
      return this.errorsList[rule].default;
    }
    return 'Unknown Error';
  }

  format(field: string, rule: string, error: boolean, data?: any): string {
    if (!error) {
      return '';
    }
    let message = '';
    let regex = /:field/gi;
    const replaceFields = {
      field,
      ...(data || {}),
    };
    switch (rule) {
      case 'between': {
        regex = /:field|:max|:min/gi;
        message = this.getMessage('between');
        break;
      }
      case 'max': {
        regex = /:field|:max/gi;
        message = this.getMessage('max');
        break;
      }
      case 'min': {
        regex = /:field|:min/gi;
        message = this.getMessage('min');
        break;
      }
      default:
        message = this.getMessage(rule);
        break;
    }
    if (message && regex) {
      return message.replace(regex, (m) => replaceFields[m]);
    }
    return message;
  }

  dump(result?: ResultEntry) {
    return (rule: string, error: boolean, data?: any) => {
      if (result) {
        result.error = this.format(result.name, rule, error, data);
      }
      return error;
    };
  }
}
