import BetweenValidation from './BetweenValidation';
import CustomValidation from './CustomValidation';
import EqualValidation from './EqualValidation';
import FileValidation from './FileValidation';
import MaxValidation from './MaxValidation';
import MinValidation from './MinValidation';
import RegexValidation from './RegexValidation';
import RequiredValidation from './RequiredValidation';
import type { TypeItem } from '../valueTypes';

export const validationsMap = {
  [BetweenValidation.type]: BetweenValidation,
  [CustomValidation.type]: CustomValidation,
  [EqualValidation.type]: EqualValidation,
  [FileValidation.type]: FileValidation,
  [MaxValidation.type]: MaxValidation,
  [MinValidation.type]: MinValidation,
  [RegexValidation.type]: RegexValidation,
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
