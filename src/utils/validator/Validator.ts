import { ValidationRule } from './validations';
import type { ValidatorRules, Rules, TestValues, TestResults } from './types';

export class Validator {
  rules: ValidatorRules = {};

  constructor(rules: Rules, customErrorsMsg?: any) {
    this.rules = Object.entries(rules).reduce(
      (acc, [key, { type, validations, formatMessage }]) => ({
        ...acc,
        [key]: new ValidationRule(
          type,
          validations,
          formatMessage,
          customErrorsMsg,
        ),
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
          values,
          key in results ? results[key] : undefined,
        );
      }
      return acc && valid;
    }, true);
  }
}
