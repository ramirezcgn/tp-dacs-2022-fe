import { ValidationFactory, validationsMap } from './ValidationFactory';
import CompositeValidation from './CompositeValidation';
import ValidationLogger from './ValidationLogger';
import { TypeFactory } from '../valueTypes';
import type { TypeKey, TypeItem } from '../valueTypes';
import type { IValidationRule, ResultEntry } from '../types';

type RestParams = [any?, any?];

export class ValidationRule implements IValidationRule {
  validations: CompositeValidation;
  logger: ValidationLogger;
  type: TypeItem;

  constructor(type: string, validations: string[]) {
    this.type = TypeFactory.createInstance(type as TypeKey);
    this.validations = new CompositeValidation();
    this.logger = new ValidationLogger(type as TypeKey);
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

  castValue(v: string) {
    try {
      return JSON.parse(v);
    } catch (error) {
      return v;
    }
  }

  validate(value: any, result?: ResultEntry): boolean {
    this.type.set(value);
    return this.validations.validate(this.logger.dump(result));
  }
}
