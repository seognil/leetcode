[3, 9, 20, null, null, 15, 7];

const arr2tree = (arr, index = 0) => {
  if (arr[index] === null || arr[index] === undefined) return null;

  return {
    val: arr[index],
    left: arr2tree(arr, index * 2 + 1),
    right: arr2tree(arr, index * 2 + 2),
  };
};

module.exports = {
  arr2tree,
};
