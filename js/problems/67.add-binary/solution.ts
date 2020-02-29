/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a: string, b: string): string => {
  if (a === '' && b === '') return '0';

  const maxLen = Math.max(a.length, b.length);

  const aRemainLen = a.length - maxLen;
  const bRemainLen = b.length - maxLen;

  let result = '';
  let carry = 0;

  for (let point = maxLen - 1; point >= 0; point--) {
    const aCarry = Number(a[aRemainLen + point] || 0);
    const bCarry = Number(b[bRemainLen + point] || 0);
    const subSum = aCarry + bCarry + carry;
    carry = subSum >> 1;
    result = (subSum % 2) + result;
  }

  if (carry) result = '1' + result;

  return result;
};

export { addBinary };
