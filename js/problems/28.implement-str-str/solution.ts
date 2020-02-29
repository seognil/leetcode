/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} fullStr
 * @param {string} subStr
 * @return {number}
 */
const strStr = (fullStr: string, subStr: string): number => {
  // TODO it's simple loop, try kmp later // seognil LC 2019/06/08

  const fullLen = fullStr.length;
  const subLen = subStr.length;

  if (!subLen) return 0;

  for (let i = 0; i <= fullLen - subLen; i++) {
    let match = true;
    for (let j = 0; j < subLen && match; j++) {
      if (fullStr[i + j] != subStr[j]) match = false;
    }

    if (match) return i;
  }

  // * not found
  return -1;
};

export { strStr };
