import { ExtractInstanceType } from './common';
import { TypeFactory, TypeKey, TypeItem } from './type';

interface IValidation {
  validate(): boolean;
}

abstract class Validation implements IValidation {
  input: TypeItem;

  constructor(input: TypeItem) {
    this.input = input;
  }

  validate(): boolean {
    return this.input.valid();
  }
}

class RequiredValidation extends Validation {
  validate() {
    return super.validate() && !this.input.empty();
  }
}

class MinValidation extends RequiredValidation {
  min: number;

  constructor(input: TypeItem, min: number) {
    super(input);
    this.min = min;
  }

  validate() {
    return super.validate() && this.input.size() >= this.min;
  }
}

class MaxValidation extends RequiredValidation {
  max: number;

  constructor(input: TypeItem, max: number) {
    super(input);
    this.max = max;
  }

  validate() {
    return super.validate() && this.input.size() <= this.max;
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

  validate() {
    return (
      super.validate() &&
      this.input.size() >= this.min &&
      this.input.size() <= this.max
    );
  }
}

class EqualValidation extends Validation {
  other: TypeItem;

  constructor(input: TypeItem, other: TypeItem) {
    super(input);
    this.other = other;
  }

  validate() {
    if (this.other) {
      return this.input.equal(this.other);
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

  public validate(): boolean {
    return this.children.every((va) => va.validate());
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

export class ValidationFactory {
  static createInstance(
    type: validationKey,
    input: TypeItem,
    ...params: any
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
      const [rule, ...params] = val.split(':');
      if (rule in validationsMap) {
        const validation = ValidationFactory.createInstance(
          rule as validationKey,
          this.type,
          params,
        );
        if (validation) {
          this.validations.add(validation);
        }
      }
    });
  }

  validate(value: any): boolean {
    this.type.set(value);
    return this.validations.validate();
  }
}
