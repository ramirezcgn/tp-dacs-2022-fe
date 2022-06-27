import { defaultErrorsMsg, Logger, CustomMessageFormatter } from '../types';
import type { ResultEntry } from '../types';
import type { TypeKey } from '../valueTypes';

export default class ValidationMessage {
  type: TypeKey;
  errorsList: any;
  customMessageFormatter?: CustomMessageFormatter;

  constructor(
    type: TypeKey,
    customMessageFormatter?: CustomMessageFormatter,
    customErrorMsg?: any,
  ) {
    this.type = type;
    this.errorsList = {
      ...defaultErrorsMsg,
      ...(customErrorMsg || {}),
    };
    this.customMessageFormatter = customMessageFormatter;
  }

  getMessage(rule: string): string {
    if (this.type in this.errorsList[rule]) {
      return this.errorsList[rule][this.type];
    } else if ('default' in this.errorsList[rule]) {
      return this.errorsList[rule].default;
    }
    return 'Unknown Error';
  }

  messageFormatter(
    field: string,
    rule: string,
    error: boolean,
    data?: any,
  ): string {
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

  dump(result?: ResultEntry): Logger {
    return (rule: string, error: boolean, data?: any) => {
      if (result) {
        if (this.customMessageFormatter) {
          result.error = this.customMessageFormatter(rule, error, data);
        } else {
          result.error = this.messageFormatter(result.name, rule, error, data);
        }
      }
      return error;
    };
  }
}
