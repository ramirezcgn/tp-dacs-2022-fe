import { ValidationRule } from './validations';
import type { ResultEntry } from './validations';
import { TypeKey } from './types';

export type Rule = {
  type: TypeKey;
  validations: string[];
};

export type Rules = {
  [key: string]: Rule;
};

export type TestValues = {
  [key: string]: string | string[];
};

export type TestResults = {
  [key: string]: ResultEntry;
};

type ValidatorRules = {
  [key: string]: ValidationRule;
};

export class Validator {
  rules: ValidatorRules = {};

  constructor(rules: Rules) {
    this.rules = Object.entries(rules).reduce(
      (acc, [key, { type, validations }]) => ({
        ...acc,
        [key]: new ValidationRule(type, validations),
      }),
      {},
    );
  }

  validate(values: TestValues, results: TestResults) {
    return Object.entries(values).reduce((acc, [key, value]) => {
      let valid = true;
      if (key in this.rules) {
        valid = this.rules[key].validate(
          value,
          key in results ? results[key] : undefined,
        );
      }
      return acc && valid;
    }, true);
  }
}
