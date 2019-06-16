const result = (str) => {
  const ms = str.match(/cases passed \((.*?)\)/)[1],
    runbeat = str.match(/runtime beats (.*)? of/)[1],
    rambeat = str.match(/usage beats (.*)? of/)[1],
    ram = str.match(/submissions \((.*?)\)/)[1];

  const res = `[${[ms, runbeat, ram, rambeat].map((e) => `'${e}'`).join(', ')}]`;
  console.warn(res);
  return res;
};

module.exports = result;
