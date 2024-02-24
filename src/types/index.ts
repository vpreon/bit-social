export * from './posts';

export type BaseAPIEntity = {
  id: number;
  created: string;
  updated: string;
};

export type BaseGetEntity<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};
