export type StartWithSlash<T extends string | number = string> = `/${T}`;
export type ColorValueHex = `#${string}`;
export type Nullable<T> = T | null;
export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;
