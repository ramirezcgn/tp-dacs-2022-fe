import GenericType from './GenericType';

export default class FileType extends GenericType<FileList> {
  files?: File[];

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
    return this.value instanceof FileList;
  }
}
