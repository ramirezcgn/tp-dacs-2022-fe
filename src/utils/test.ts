import { Validator } from './validator';
import type {
  Rules,
  TestValues,
  TestResults,
  ErrorMessages,
} from './validator';

export const customErrorsMsg: ErrorMessages = {
  between: {
    text: 'The field :field must contain a minimum of :min and a maximum of :max characters',
    number: 'The field :field should be a number between :min and :max',
    file: 'The field :field expects files count should be between :min and :max',
    array: 'You can select a minimum of :min and a maximum of :max options',
  },
  custom: 'The field :field does not match the custom validation',
  equal: 'The field :field should be equal to :other',
  file: 'The field :field have one or several invalid properties (extension/size/type etc)',
  max: {
    text: 'The field :field must contain a maximum of :max characters',
    number: 'The field :field should be a number less than or equal to :max',
    file: 'The field :field expects files count should be less than or equal to :max',
    array: 'You can select a maximum of :max options',
  },
  min: {
    text: 'The field :field must contain a minimum of :min characters',
    number: 'The field :field should be a number greater than or equal to :min',
    file: 'The field :field expects files count should be greater than or equal to :min',
    array: 'You should select a minimum of :min options',
  },
  regex: 'The field :field does not match the required pattern',
  required: {
    array: 'You must select at least one option',
    default: 'The field :field is required',
  },
  valid: {
    email: 'The field :field has an invalid email format',
    password:
      'The field :field must contain minimum eight characters, at least one letter and one number',
    username: 'The field :field has an invalid username format',
    number: 'The field :field should be a number',
    default: 'The field :field is invalid',
  },
};

const testValidations: Rules = {
  text: {
    type: 'text',
    validations: ['required'],
    /*formatMessage: (rule, valid, data) => {
      console.log(rule, valid, data);
      return '';
    },*/
  },
  minText: {
    type: 'text',
    validations: ['required', 'min:3'],
  },
  maxText: {
    type: 'text',
    validations: ['required', 'max:6'],
  },
  betweenText: {
    type: 'text',
    validations: ['required', 'between:3:6'],
  },
  email: {
    type: 'email',
    validations: ['required'],
  },
  number: {
    type: 'number',
    validations: ['required'],
  },
  minNumber: {
    type: 'number',
    validations: ['required', 'min:3'],
  },
  maxNumber: {
    type: 'number',
    validations: ['required', 'max:6'],
  },
  betweenNumber: {
    type: 'number',
    validations: ['required', 'between:3:6'],
  },
  regex: {
    type: 'text',
    validations: ['regex:a+b'],
  },
};

const results: TestResults = {
  text: {
    name: 'Text',
    error: '',
  },
  minText: {
    name: 'minText',
    error: '',
  },
  maxText: {
    name: 'maxText',
    error: '',
  },
  betweenText: {
    name: 'betweenText',
    error: '',
  },
  email: {
    name: 'email',
    error: '',
  },
  number: {
    name: 'number',
    error: '',
  },
  minNumber: {
    name: 'minNumber',
    error: '',
  },
  maxNumber: {
    name: 'maxNumber',
    error: '',
  },
  betweenNumber: {
    name: 'betweenNumber',
    error: '',
  },
};

const testValues: TestValues = {
  text: '',
  minText: 'ch',
  maxText: 'asdfasdf',
  betweenText: 'asdfasdf',
  email: 'asdf',
  number: 'hola',
  minNumber: '1',
  maxNumber: '11',
  betweenNumber: '11',
};

const v = new Validator(testValidations, customErrorsMsg);
console.log(v.validate(testValues, results), results);
