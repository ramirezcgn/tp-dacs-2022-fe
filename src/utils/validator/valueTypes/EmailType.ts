import { emailRegex } from '_constants';
import StringType from './TextType';

export default class EmailType extends StringType {
  static type = 'email';

  valid() {
    return emailRegex.test(this.value || '');
  }
}
