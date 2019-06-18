/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  if (s.length < 2) return [];

  let i = 0,
    j = s.length - 1;

  const swap = (nums, i, j) => {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  };

  while (i < j) {
    swap(s, i, j);
    i++, j--;
  }
};
