/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits: number[]): number[] => {
  // ! this problem seems must to be solved inplace
  // ! my local test did passed, but OJ would not

  // * more js and immutable

  const revArr = [...digits].reverse();

  let carry = 1;

  revArr.map((e, i) => {
    const added = e + carry;
    carry = added < 10 ? 0 : added - 10;
    return added % 10;
  });

  carry != 0 && revArr.push(carry);

  return revArr.reverse();
};

export { plusOne };
