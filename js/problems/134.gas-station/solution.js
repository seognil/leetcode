/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  if (gas.reduce((a, e) => a + e) < cost.reduce((a, e) => a + e)) return -1;

  let start = 0,
    carry = 0;
  for (let i = 0; i < gas.length; i++) {
    carry += gas[i] - cost[i];
    if (carry < 0) {
      carry = 0;
      start = i + 1;
    }
  }

  console.warn('lcdebug 07-11 212611', '', start);
  return start;
};
