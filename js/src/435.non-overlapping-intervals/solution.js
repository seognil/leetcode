/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length < 2) return 0;
  intervals.sort(([a], [b]) => a - b);
  let end = intervals[0][1];
  let count = 1;
  for (let i = 1; i < intervals.length; i++) {
    const e = intervals[i];
    if (e[1] < end) {
      end = e[1];
    } else if (end <= e[0]) {
      count++;
      end = e[1];
    }
  }
  return intervals.length - count;
};
