const swap = (nums: unknown[], i: number, j: number): void => {
  const t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
};
