import GenericType from './GenericType';

export default class FileType extends GenericType<FileList> {
  static type = 'file';

  files: File[] = [];

  set(value: FileList) {
    super.set(value);
    if (this.valid()) {
      this.files = Array.from(value).map((file) => file);
    }
  }

  empty() {
    return !this.value || !this.value.length;
  }

  size() {
    return this.value?.length || 0;
  }

  valid() {
    return !this.value || this.value instanceof FileList;
  }

  data() {
    return this.files;
  }
}
