export type ResultEntry = {
  name: string;
  error: string;
};

export type Logger = (rule: string, error: boolean, data?: any) => boolean;

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

export type Rule = {
  type: string;
  validations: string[];
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
