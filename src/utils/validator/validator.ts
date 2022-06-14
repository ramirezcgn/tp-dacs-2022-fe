import { ValidationRule } from './validation';
import { TypeKey } from './type';

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

  validate(values: TestValues) {
    return Object.entries(values).every(([key, value]) => {
      if (key in this.rules) {
        return this.rules[key].validate(value);
      }
      return true;
    });
  }
}
