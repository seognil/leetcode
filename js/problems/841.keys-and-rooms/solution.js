'use strict';
/*
 * @lc app=leetcode id=841 lang=javascript
 *
 * [841] Keys and Rooms
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms) => {
  // * ['56 ms', '86.69 %', '35.4 MB', '100 %']
  const keyPool = new Set();
  keyPool.add(0);
  const visited = new Set();
  const checkList = [0];
  while (checkList.length) {
    const roomNumber = checkList.pop();
    if (keyPool.size === rooms.length) break;
    if (!visited.has(roomNumber)) {
      visited.add(roomNumber);
      const keys = rooms[roomNumber];
      keys.forEach((key) => {
        keyPool.add(key);
        checkList.push(key);
      });
    }
  }
  return keyPool.size === rooms.length;
};
exports.canVisitAllRooms = canVisitAllRooms;
