import { ValidationFactory, validationsMap } from './ValidationFactory';
import CompositeValidation from './CompositeValidation';
import ValidationMessage from './ValidationMessage';
import { TypeFactory } from '../valueTypes';
import type { TypeKey, TypeItem } from '../valueTypes';
import type {
  IValidationRule,
  ValidationEntry,
  ResultEntry,
  CustomMessageFormatter,
  TestValues,
} from '../types';

type RestParams = [any?, any?];

export class ValidationRule implements IValidationRule {
  validations: CompositeValidation;
  formatter: ValidationMessage;
  type: TypeItem;

  constructor(
    type: string,
    entry: ValidationEntry,
    formatter?: CustomMessageFormatter,
    customErrorsMsg?: any,
  ) {
    this.type = TypeFactory.createInstance(type as TypeKey);
    this.validations = new CompositeValidation();
    this.formatter = new ValidationMessage(
      type as TypeKey,
      formatter,
      customErrorsMsg,
    );
    const validations = Array.isArray(entry) ? entry : this.formatEntry(entry);
    validations.forEach((val) => {
      const [rule, ...params] = val.split(':');
      if (rule in validationsMap) {
        const validation = ValidationFactory.createInstance(
          rule,
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

  validate(value: any, values: TestValues, result?: ResultEntry): boolean {
    this.type.set(value);
    return this.validations.validate(this.formatter.dump(result), values);
  }
}
