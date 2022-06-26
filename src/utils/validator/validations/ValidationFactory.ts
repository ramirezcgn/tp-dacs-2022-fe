import RequiredValidation from './RequiredValidation';
import MinValidation from './MinValidation';
import MaxValidation from './MaxValidation';
import BetweenValidation from './BetweenValidation';
import EqualValidation from './EqualValidation';
import type { TypeItem } from '../valueTypes';

export const validationsMap = {
  required: RequiredValidation,
  min: MinValidation,
  max: MaxValidation,
  between: BetweenValidation,
  equal: EqualValidation,
};

type ExtractValidationInstance<T, K> = T extends new (v?: K) => infer R
  ? R
  : never;
type validationKey = keyof typeof validationsMap;
type typeofValidations = typeof validationsMap[validationKey];
type ValidationItem = ExtractValidationInstance<typeofValidations, any>;
type RestParams = [any?, any?];

export class ValidationFactory {
  static createInstance(
    type: string,
    input: TypeItem,
    params: RestParams,
  ): ValidationItem {
    if (!(type in validationsMap)) {
      throw Error('Invalid validation type');
    }
    return new validationsMap[type as validationKey](input, ...params);
  }
}
