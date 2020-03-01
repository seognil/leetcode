/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */
/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s: string): string => {
  // * super easy js way
  // TODO try another method later // Seognil LC 2020/03/01

  return s
    .split(' ')
    .filter((e) => e)
    .map((e) =>
      e
        .split('')
        .reverse()
        .join(''),
    )
    .join(' ');
};

export { reverseWords };
