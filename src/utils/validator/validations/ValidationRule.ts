import { ValidationFactory, validationsMap } from './ValidationFactory';
import CompositeValidation from './CompositeValidation';
import ValidationMessage from './ValidationMessage';
import { TypeFactory } from '../valueTypes';
import type { TypeKey, TypeItem } from '../valueTypes';
import type {
  IValidationRule,
  TestValues,
  TestResults,
  ValidatorRules,
  Rule,
} from '../types';

type RestParams = [any?, any?];

export class ValidationRule implements IValidationRule {
  validations: CompositeValidation;
  formatter: ValidationMessage;
  type: TypeItem;
  rules: ValidatorRules;
  name: string;

  constructor(rules: ValidatorRules, rule: Rule, customErrorsMsg?: any) {
    const { name, type, validations, formatMessage } = rule;
    this.rules = rules;
    this.name = name;
    this.type = TypeFactory.createInstance(type as TypeKey);
    this.validations = new CompositeValidation();
    this.formatter = new ValidationMessage(
      name,
      rules,
      type as TypeKey,
      formatMessage,
      customErrorsMsg,
    );
    const validationsList = Array.isArray(validations)
      ? validations
      : this.formatEntry(validations);
    validationsList.forEach((val) => {
      const [ruleName, ...params] = val.split(':');
      if (ruleName in validationsMap) {
        const validation = ValidationFactory.createInstance(
          ruleName,
          this.type,
          this.formatParams(params),
        );
        if (validation) {
          this.validations.add(validation);
        }
      }
    });
  }

  formatParams(params: string[]): RestParams {
    return params.map((v: string) => {
      try {
        return JSON.parse(v);
      } catch (error) {
        return v;
      }
    }) as RestParams;
  }

  formatEntry(entry) {
    return Object.entries(entry).map(
      ([key, value]) =>
        `${key}:${(Array.isArray(value) ? value : [value]).join(':')}`,
    );
  }

  validate(key: string, values: TestValues, results?: TestResults): boolean {
    this.type.set(values[key] as any);
    return this.validations.validate(this.formatter.dump(key, results), values);
  }
}
