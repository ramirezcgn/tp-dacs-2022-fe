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
      // eslint-disable-next-line prefer-const
      let [rule, ...params] = val.split(':');
      params = params.map((v) => this.castValue(v));
      if (rule in validationsMap) {
        const validation = ValidationFactory.createInstance(
          rule,
          this.type,
          params as RestParams,
        );
        if (validation) {
          this.validations.add(validation);
        }
      }
    });
  }

  formatEntry(entry) {
    return Object.entries(entry).map(([key, value]) => {
      return `${key}:${(Array.isArray(value) ? value : [value]).join(':')}`;
    });
  }

  castValue(v: string) {
    try {
      return JSON.parse(v);
    } catch (error) {
      return v;
    }
  }

  validate(value: any, result?: ResultEntry): boolean {
    this.type.set(value);
    return this.validations.validate(this.formatter.dump(result));
  }
}
