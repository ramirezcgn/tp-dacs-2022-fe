import BetweenValidation from './BetweenValidation';
import EqualValidation from './EqualValidation';
import FileValidation from './FileValidation';
import MaxValidation from './MaxValidation';
import MinValidation from './MinValidation';
import RequiredValidation from './RequiredValidation';
import type { TypeItem } from '../valueTypes';

export const validationsMap = {
  [BetweenValidation.type]: BetweenValidation,
  [EqualValidation.type]: EqualValidation,
  [FileValidation.type]: FileValidation,
  [MaxValidation.type]: MaxValidation,
  [MinValidation.type]: MinValidation,
  [RequiredValidation.type]: RequiredValidation,
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
