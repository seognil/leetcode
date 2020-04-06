export const parseAccepted = (str: string): string => {
  const ms = str.match(/cases passed \((.*?)\)/)![1];
  const runbeat = str.match(/runtime beats (.*)? of/)![1];
  const rambeat = str.match(/usage beats (.*)? of/)![1];
  const ram = str.match(/submissions \((.*?)\)/)![1];

  const result = [ms, runbeat, ram, rambeat].map((e) => `'${e}'`).join(', ');
  const printResult = `[${result}]`;

  console.log('\n', printResult, '\n');

  return printResult;
};
