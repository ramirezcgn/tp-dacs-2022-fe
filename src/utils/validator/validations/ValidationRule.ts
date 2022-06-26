import { ValidationFactory, validationsMap } from './ValidationFactory';
import CompositeValidation from './CompositeValidation';
import { ResultEntry } from './Validation';
import { TypeFactory } from '../types';
import type { TypeKey, TypeItem } from '../types';

type RestParams = [any?, any?];

export class ValidationRule {
  validations: CompositeValidation;
  type: TypeItem;

  constructor(type: string, validations: string[]) {
    this.type = TypeFactory.createInstance(type as TypeKey);
    this.validations = new CompositeValidation();
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
    if (result) {
      return this.validations.validateResult(result);
    }
    return this.validations.validate();
  }
}
