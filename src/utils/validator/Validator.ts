import { ValidationRule } from './validations';
import type { ValidatorRules, Rules, TestValues, TestResults } from './types';

export class Validator {
  rules: ValidatorRules = {};

  constructor(rules: Rules, customErrorsMsg?: any) {
    this.rules = Object.entries(rules).reduce(
      (acc: ValidatorRules, [key, value]) => {
        acc[key] = new ValidationRule(this.rules, value, customErrorsMsg);
        return acc;
      },
      this.rules,
    );
  }

  validate(values: TestValues, results?: TestResults) {
    return Object.keys(values).reduce((acc, key) => {
      let valid = true;
      if (key in this.rules) {
        valid = this.rules[key].validate(key, values, results);
      }
      return acc && valid;
    }, true);
  }
}
