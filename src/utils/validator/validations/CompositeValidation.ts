import type { IValidation, ResultEntry } from './IValidation';

export default class CompositeValidation implements IValidation {
  protected children: IValidation[] = [];

  public add(validation: IValidation): void {
    this.children.push(validation);
  }

  public remove(validation: IValidation): void {
    const validationIndex = this.children.indexOf(validation);
    this.children.splice(validationIndex, 1);
  }

  public validate(result?: ResultEntry): boolean {
    return this.children.every((va) => va.validate(result));
  }
}
