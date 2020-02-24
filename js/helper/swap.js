const swap = (nums, i, j) => {
  const t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
};
