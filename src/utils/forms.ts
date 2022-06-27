import type { TestResults } from './validator';

export const flattenValidationResults = (validationResults: TestResults) =>
  Object.entries(validationResults).reduce(
    (acc, [key, { error }]) => ({
      ...acc,
      [key]: error,
    }),
    {},
  );

export const mapFormElements = (elements) =>
  Object.fromEntries(
    Array.from(elements)
      .filter((item: any) => item.name)
      .map((item: any) => [item.name, item.value]),
  );
