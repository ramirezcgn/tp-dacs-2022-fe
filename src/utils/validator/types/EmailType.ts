import { emailRegex } from '_constants';
import StringType from './StringType';

export default class EmailType extends StringType {
  valid() {
    return emailRegex.test(this.value || '');
  }
}
