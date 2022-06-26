export type ResultEntry = {
  name: string;
  error: string;
};

export interface IValidation {
  validate(result?: ResultEntry): boolean;
}
