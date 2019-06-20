/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  // * ---------------- M1 O(k)? O(1)?
  // if (nums.length < 2) return nums;
  // while (k-- > 0) nums.unshift(nums.pop());
  // return nums;
  // * ---------------- M2 O(n) O(n)
  // const l = nums.length;
  // k = k % l;
  // if (k !== 0) {
  //   const mirror = nums.map((e, i) => nums[(l + i - k) % l]);
  //   for (let i = 0; i < l; i++) nums[i] = mirror[i];
  // }
  // return nums;
  // * ---------------- M3 O(n) O(1)
  const len = nums.length;
  k = k % len;
  if (len < 2 && k == 0) return nums;

  for (let i = 0, start = 0; i < len; start++) {
    let cur = start,
      prev = nums[cur];
    do {
      const next = (cur + k) % len;
      const temp = nums[next];
      nums[next] = prev;
      prev = temp;
      cur = next;
      i++;
    } while (start !== cur);
  }

  return nums;
};
