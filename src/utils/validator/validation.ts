import { ExtractInstanceType } from './common';
import { TypeFactory, TypeKey, TypeItem } from './type';

export type ResultEntry = {
  name: string;
  error: string;
};

interface IValidation {
  validate(result?: ResultEntry): boolean;
}

abstract class Validation implements IValidation {
  input: TypeItem;

  constructor(input: TypeItem) {
    this.input = input;
  }

  validate(result?: ResultEntry): boolean {
    const valid = this.input.valid();
    if (result) {
      result.error = valid ? '' : `The field ${result.name} is invalid`;
    }
    return valid;
  }

  validateResult(result: ResultEntry) {
    const valid = this.validate();
    result.error = valid ? '' : `The field ${result.name} is invalid`;
    return valid;
  }
}

class RequiredValidation extends Validation {
  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid = !this.input.empty();
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} should have a value`;
      }
      return valid;
    }
    return false;
  }
}

class MinValidation extends RequiredValidation {
  min: number;

  constructor(input: TypeItem, min: number) {
    super(input);
    this.min = min;
  }

  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid = this.input.size() >= this.min;
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} should have a value bigger than ${this.min}`;
      }
      return valid;
    }
    return false;
  }
}

class MaxValidation extends RequiredValidation {
  max: number;

  constructor(input: TypeItem, max: number) {
    super(input);
    this.max = max;
  }

  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid = this.input.size() <= this.max;
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} should have a value lower than ${this.max}`;
      }
      return valid;
    }
    return false;
  }
}

class BetweenValidation extends RequiredValidation {
  min: number;
  max: number;

  constructor(input: TypeItem, min: number, max: number) {
    super(input);
    this.min = min;
    this.max = max;
  }

  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid =
        this.input.size() >= this.min && this.input.size() <= this.max;
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} should have a value between ${this.min} and ${this.max}`;
      }
      return valid;
    }
    return false;
  }
}

class EqualValidation extends Validation {
  other: TypeItem;

  constructor(input: TypeItem, other: TypeItem) {
    super(input);
    this.other = other;
  }

  validate(result?: ResultEntry) {
    if (super.validate(result)) {
      const valid = this.other && this.input.equal(this.other);
      if (result) {
        result.error = valid
          ? ''
          : `The field ${result.name} should be equal to ${this.other}`;
      }
      return valid;
    }
    return false;
  }
}

export class CompositeValidation implements IValidation {
  protected children: IValidation[] = [];

  public add(validation: IValidation): void {
    this.children.push(validation);
  }

  public remove(validation: IValidation): void {
    const validationIndex = this.children.indexOf(validation);
    this.children.splice(validationIndex, 1);
  }

  public validate(result?: ResultEntry): boolean {
    return this.children.every((va) => va.validate(result));
  }
}

const validationsMap = {
  required: RequiredValidation,
  min: MinValidation,
  max: MaxValidation,
  between: BetweenValidation,
  equal: EqualValidation,
};

type validationKey = keyof typeof validationsMap;
type typeofValidations = typeof validationsMap[validationKey];
type ValidationItem = ExtractInstanceType<typeofValidations, any>;
type RestParams = [any?, any?];

export class ValidationFactory {
  static createInstance(
    type: validationKey,
    input: TypeItem,
    params: RestParams,
  ): ValidationItem {
    if (!(type in validationsMap)) {
      throw Error('Invalid validation type');
    }
    return new validationsMap[type](input, ...params);
  }
}

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
          rule as validationKey,
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
    return this.validations.validate(result);
  }
}
