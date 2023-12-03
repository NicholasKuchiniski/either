export type Nil = null | undefined;

export const isNil = (value: unknown): value is Nil =>
  value === undefined || value === null;

export const isError = (value: unknown): value is Error =>
  value instanceof Error;
