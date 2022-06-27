export const mapFormElements = (elements) =>
  Object.fromEntries(
    Array.from(elements)
      .filter((item: any) => item.name)
      .map((item: any) => [item.name, item.value]),
  );
