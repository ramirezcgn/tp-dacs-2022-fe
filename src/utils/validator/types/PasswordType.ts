import { passwordRegex } from '_constants';
import StringType from './StringType';

export default class PasswordType extends StringType {
  valid() {
    return passwordRegex.test(this.value || '');
  }
}
