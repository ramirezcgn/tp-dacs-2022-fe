import {
  defaultErrorsMsg,
  Logger,
  CustomMessageFormatter,
  TestResults,
  ValidatorRules,
} from '../types';
import type { TypeKey } from '../valueTypes';

export default class ValidationMessage {
  name: string;
  type: TypeKey;
  errorsList: any;
  customMessageFormatter?: CustomMessageFormatter;
  rules: ValidatorRules;

  constructor(
    name: string,
    rules: ValidatorRules,
    type: TypeKey,
    customMessageFormatter?: CustomMessageFormatter,
    customErrorMsg?: any,
  ) {
    this.name = name;
    this.type = type;
    this.errorsList = {
      ...defaultErrorsMsg,
      ...(customErrorMsg || {}),
    };
    this.customMessageFormatter = customMessageFormatter;
    this.rules = rules;
  }

  getMessage(rule: string): string {
    if (typeof this.errorsList[rule] === 'string') {
      return this.errorsList[rule];
    }
    if (this.type in this.errorsList[rule]) {
      return this.errorsList[rule][this.type];
    } else if ('default' in this.errorsList[rule]) {
      return this.errorsList[rule].default;
    }
    return 'Unknown Error';
  }

  messageFormatter(rule: string, valid: boolean, data?: any): string {
    if (valid) {
      return '';
    }
    let message = '';
    let regex = /:field/gi;
    const replaceFields = {
      field: this.name,
      ...(data || {}),
    };
    switch (rule) {
      case 'between': {
        regex = /:field|:max|:min/gi;
        message = this.getMessage('between');
        break;
      }
      case 'equal': {
        regex = /:field|:other/gi;
        message = this.getMessage('equal');
        if (
          replaceFields.other in this.rules &&
          this.rules[replaceFields.other].name
        ) {
          replaceFields.other = this.rules[replaceFields.other].name;
        }
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
      return message.replace(regex, (m) => replaceFields[m.substring(1)]);
    }
    return message;
  }

  dump(key: string, results?: TestResults): Logger {
    return (rule: string, valid: boolean, data?: any) => {
      if (results && key in results) {
        results[key] = this.customMessageFormatter
          ? this.customMessageFormatter(rule, valid, data)
          : this.messageFormatter(rule, valid, data);
      }
      return valid;
    };
  }
}
