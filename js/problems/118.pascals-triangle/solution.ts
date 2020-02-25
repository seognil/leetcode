/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows: number): number[][] => {
  const result: number[][] = Array.from({ length: numRows }, () => []);

  for (let i = 0; i < numRows; i++) {
    const curRow = result[i];
    curRow[0] = curRow[i] = 1;

    if (i < 2) continue;

    let prevRow = result[i - 1];
    for (let j = 1; j < i; j++) {
      curRow[j] = prevRow[j] + prevRow[j - 1];
    }
  }
  return result;
};

export { generate };
