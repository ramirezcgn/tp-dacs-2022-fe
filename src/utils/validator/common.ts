export type ExtractInstanceType<T, K> = T extends new (v?: K) => infer R
  ? R
  : never;
