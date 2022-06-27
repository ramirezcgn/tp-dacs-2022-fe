export type ResultEntry = {
  name?: string;
  error: string;
};

export type Logger = (rule: string, valid: boolean, data?: any) => boolean;
export type CustomMessageFormatter = (
  rule: string,
  valid: boolean,
  data?: any,
) => string;

export interface IValidation {
  validate(logger: Logger): boolean;
}

export interface IValidationRule {
  validate(value: any, result?: ResultEntry): boolean;
}

export interface IGenericType<T> {
  set(value: T): void;
  get(): T | undefined;
  empty(): boolean;
  size(): number;
  valid(): boolean;
  equal(other: IGenericType<T>): boolean;
}

export type ValidationEntry =
  | string[]
  | {
      between?: [number, number];
      equal: string;
      file: string;
      max?: number;
      min?: number;
      regex?: string | RegExp;
      required?: boolean;
    };

export type Rule = {
  type: string;
  validations: ValidationEntry;
  formatMessage?: CustomMessageFormatter;
};

export type Rules = {
  [key: string]: Rule;
};

export type FilesRules = {
  extensions?: string[];
  types?: string[];
  minSize?: number;
  maxSize?: number;
};

export type TestValues = {
  [key: string]: string | string[];
};

export type TestResults = {
  [key: string]: ResultEntry;
};

export type ValidatorRules = {
  [key: string]: IValidationRule;
};

export const defaultErrorsMsg = {
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
