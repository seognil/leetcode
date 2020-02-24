const sleep = (n) => {
  const s = Date.now();
  while (Date.now() < s + n) {}
};

module.exports = {
  sleep,
};
