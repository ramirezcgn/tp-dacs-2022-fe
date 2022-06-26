import type { ResultEntry } from '../types';
import type { TypeKey } from '../valueTypes';

export default class ValidationLogger {
  type: TypeKey;

  constructor(type: TypeKey) {
    this.type = type;
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
        switch (this.type) {
          case 'text':
            message =
              'The field :field must contain a minium of :min and a maximum of :max characters';
            break;
          case 'number':
            message =
              'The field :field should be a number between :min and :max';
            break;
          case 'file':
            message =
              'The field :field expects files count should be between :min and :max';
            break;
          case 'array':
            message =
              'You can select a minium of :min and a maximum of :max options';
            break;
          default:
            break;
        }
        break;
      }
      case 'equal':
        message = 'The field :field should be equal to :other';
        break;
      case 'file':
        message =
          'The field :field have one or several invalid properties (extension/size/type etc)';
        break;
      case 'max': {
        regex = /:field|:max/gi;
        switch (this.type) {
          case 'text':
            message =
              'The field :field must contain a maximum of :max characters';
            break;
          case 'number':
            message =
              'The field :field should be a number less or equal than :max';
            break;
          case 'file':
            message =
              'The field :field expects files count should be less or equal than :max';
            break;
          case 'array':
            message = 'You can select a maximum of :max options';
            break;
          default:
            break;
        }
        break;
      }
      case 'min': {
        regex = /:field|:min/gi;
        switch (this.type) {
          case 'text':
            message =
              'The field :field must contain a minium of :min characters';
            break;
          case 'number':
            message =
              'The field :field should be a number more or equal than :min';
            break;
          case 'file':
            message =
              'The field :field expects files count should be more or equal than :min';
            break;
          case 'array':
            message = 'You should select a minium of :min options';
            break;
          default:
            break;
        }
        break;
      }
      case 'required': {
        switch (this.type) {
          case 'array':
            message = 'You must select at least one option';
            break;
          default:
            message = 'The field :field is required';
            break;
        }
        break;
      }
      case 'valid': {
        switch (this.type) {
          case 'email':
            message = 'The field :field has an invalid email format';
            break;
          case 'password':
            message =
              'The field :field must contain minimum eight characters, at least one letter and one number';
            break;
          case 'username':
            message = 'The field :field has an invalid username format';
            break;
          case 'number':
            message = 'The field :field should be a number';
            break;
          default:
            message = 'The field :field is invalid';
            break;
        }
        break;
      }
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
