import { TEntries } from "../../types";

export const memoizedCheck = <T extends Record<string, unknown>>(
  prev: Record<keyof T, any>,
  next: Record<keyof T, any>,
  key: keyof T
) => {
  const innerPrevItem = prev[key];
  const innerNextItem = next[key];
  const transformedPrevUser = Object.entries(innerPrevItem) as TEntries<T>;
  const isChange = transformedPrevUser.find(
    ([key]) => innerPrevItem[key] !== innerNextItem[key]
  );
  return !isChange;
};
