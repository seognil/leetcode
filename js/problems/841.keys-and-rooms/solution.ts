/*
 * @lc app=leetcode id=841 lang=javascript
 *
 * [841] Keys and Rooms
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms: number[][]): boolean => {
  // * ['56 ms', '86.69 %', '35.4 MB', '100 %']

  const keyPool = new Set<number>();
  keyPool.add(0);

  const visited = new Set<number>();
  const checkList: number[] = [0];

  while (checkList.length) {
    const roomNumber = checkList.pop()!;

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
// @lc code=end

export { canVisitAllRooms };
