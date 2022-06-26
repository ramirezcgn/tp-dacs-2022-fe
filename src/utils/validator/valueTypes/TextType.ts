import GenericType from './GenericType';

export default class TextType extends GenericType<string> {
  static type = 'text';

  empty() {
    return !this.value;
  }

  size() {
    return this.value?.length || 0;
  }
}
