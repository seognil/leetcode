export const parseAccepted = (str: string): string => {
  const ms = str.match(/cases passed \((.*?)\)/)![1],
    runbeat = str.match(/runtime beats (.*)? of/)![1],
    rambeat = str.match(/usage beats (.*)? of/)![1],
    ram = str.match(/submissions \((.*?)\)/)![1];

  const result = [ms, runbeat, ram, rambeat].map((e) => `'${e}'`).join(', ');
  const printResult = `[${result}]`;
  console.warn();
  console.warn(printResult);
  console.warn();
  return printResult;
};
