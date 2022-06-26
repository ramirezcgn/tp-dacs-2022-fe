import { ValidationRule } from './validations';
import type { ValidatorRules, Rules, TestValues, TestResults } from './types';

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
