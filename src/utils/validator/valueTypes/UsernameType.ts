import { usernameRegex } from '_constants';
import StringType from './StringType';

export default class UsernameType extends StringType {
  valid() {
    return usernameRegex.test(this.value || '');
  }
}
