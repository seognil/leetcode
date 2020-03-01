/**
 * sync sleep by miliseconds
 */
export const sleep = (n: number = 1000): void => {
  const s = Date.now();
  while (Date.now() < s + n) {}
};
