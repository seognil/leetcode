import path from 'path';
import glob from 'glob';

const relPath = '../../..';

export const searchLangSolutions = (
  lang: string,
  folder: string,
  pattern: string,
): Record<string, string[]> => {
  const repoFolder = path.join(relPath, folder);

  return glob
    .sync(path.join(repoFolder, '*', pattern))
    .map((e) => path.relative(repoFolder, e))
    .reduce((a: Record<string, string[]>, e) => {
      const no = e.match(/\d+(?=\.)/)![0];
      a[no] = a[no] || [];
      a[no].unshift(e);
      return a;
    }, {});
};
