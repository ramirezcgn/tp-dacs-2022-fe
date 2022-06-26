import { passwordRegex } from '_constants';
import StringType from './TextType';

export default class PasswordType extends StringType {
  static type = 'password';

  valid() {
    return passwordRegex.test(this.value || '');
  }
}
