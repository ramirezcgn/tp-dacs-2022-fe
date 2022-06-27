import ArrayType from './ArrayType';
import DatetimeType from './DatetimeType';
import DateType from './DateType';
import EmailType from './EmailType';
import FileType from './FileType';
import NumberType from './NumberType';
import PasswordType from './PasswordType';
import TextType from './TextType';
import TimeType from './TimeType';
import UrlType from './UrlType';
import UsernameType from './UsernameType';

const typesMap = {
  [ArrayType.type]: ArrayType,
  [DatetimeType.type]: DatetimeType,
  [DateType.type]: DateType,
  [EmailType.type]: EmailType,
  [FileType.type]: FileType,
  [NumberType.type]: NumberType,
  [PasswordType.type]: PasswordType,
  [TextType.type]: TextType,
  [TimeType.type]: TimeType,
  [UrlType.type]: UrlType,
  [UsernameType.type]: UsernameType,
};

type ExtractTypeInstance<T, K> = T extends new (v?: K) => infer R ? R : never;
export type TypeKey = keyof typeof typesMap;
type typeofTypes = typeof typesMap[TypeKey];
export type TypeItem = ExtractTypeInstance<typeofTypes, any>;

export class TypeFactory {
  static createInstance(type: TypeKey): TypeItem {
    if (!(type in typesMap)) {
      throw Error(`Invalid value type: "${type}"`);
    }
    return new typesMap[type]();
  }
}
