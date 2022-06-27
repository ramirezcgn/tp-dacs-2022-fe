import { dateRegex } from '_constants';
import StringType from './TextType';

export default class DateType extends StringType {
  static type = 'date';

  valid() {
    return !this.value || dateRegex.test(this.value);
  }
}
