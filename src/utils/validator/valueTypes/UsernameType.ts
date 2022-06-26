import { usernameRegex } from '_constants';
import StringType from './TextType';

export default class UsernameType extends StringType {
  static type = 'username';

  valid() {
    return usernameRegex.test(this.value || '');
  }
}
