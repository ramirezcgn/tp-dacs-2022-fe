import StringType from './StringType';
import NumberType from './NumberType';
import ArrayType from './ArrayType';
import EmailType from './EmailType';
import UsernameType from './UsernameType';

const typesMap = {
  text: StringType,
  number: NumberType,
  array: ArrayType,
  email: EmailType,
  username: UsernameType,
};

type ExtractTypeInstance<T, K> = T extends new (v?: K) => infer R ? R : never;
export type TypeKey = keyof typeof typesMap;
type typeofTypes = typeof typesMap[TypeKey];
export type TypeItem = ExtractTypeInstance<typeofTypes, any>;

export class TypeFactory {
  static createInstance(type: TypeKey): TypeItem {
    if (!(type in typesMap)) {
      throw Error('Invalid data type');
    }
    return new typesMap[type]();
  }
}
