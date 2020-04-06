import fs from 'fs';
import path from 'path';
import glob from 'glob';
const { exec } = require('child_process');

import {
  Chapter,
  Topic,
  ArrayAndString,
  QueueAndStack,
  Recursion1,
  Recursion2,
  LinkedList,
  HashTable,
  BinarySearch,
  BinaryTree,
  BinarySearchTree,
  NaryTree,
  Trie,
  Easy,
  Meidum,
  Hard,
  Top,
  Tencent,
  ByteDance,
  Teambition,
} from './explore';

import { problemsCn } from './fetch-problems-cn';
import { mapObjIndexed } from 'ramda';
import { urlsCn } from './urls-cn';

// * ================================================================================

const relPath = '../..';

const searchAllSolutions = (lang: string, folder: string, files: string) => {
  const repoFolder = path.join(relPath, folder);

  const pool = glob
    .sync(path.join(repoFolder, '*', files))
    .map((e) => path.relative(repoFolder, e))
    .reduce((a: Record<string, string[]>, e) => {
      const no = e.match(/\d+(?=\.)/)![0];
      a[no] = a[no] || [];
      a[no].unshift(e);
      return a;
    }, {});

  return mapObjIndexed(
    (v) => v.map((e, i) => `[${lang}${i === 0 ? '' : i + 1}](${path.join(folder, e)})`).join(', '),
    pool,
  );
};

const langs = ['ts'];

const allSolutionsMarkdown = [searchAllSolutions('ts', 'js/problems/', 'solution*.ts')];

const langTh = langs.map((e) => e + '|');
const langHr = langs.map((e) => ':-:|');
const langBar = langs.map((e) => '--|');

const solutionsOfNo = (no: string) =>
  ` ${allSolutionsMarkdown.map((pool) => pool[no] || '').join(' | ')} |`;

// * ----------------------------------------------------------------

const parseTopicToMarkdown = (topic: Topic): string => {
  return [
    `### ${topic.title}`,
    ``,
    `<${topic.link}>`,
    ``,
    `|  # | ${topic.title} | 难度 |` + langTh,
    `| --:| :--            | :-:  |` + langHr,
    topic.chapters.map(parseChapterToMarkdown).join('\n'),
  ].join('\n');
};

const parseChapterToMarkdown = (chap: Chapter): string => {
  return [
    `| \\#\\# | **${chap.title}** | -- |` + langBar,
    chap.pages.map(parsePageToMarkdown).join('\n'),
  ].join('\n');
};

const parsePageToMarkdown = (p: number | string): string => {
  if (isNaN(Number(p))) {
    return `|  -- | ${p} | -- |` + langBar;
  } else {
    const no = String(p);
    const [, title, difficuly] = problemsCn.find((e) => e[0] === no)!;
    return `| **${no}** | [${title}][${no}] | ${difficuly} |` + solutionsOfNo(no);
  }
};

// * ================================================================================

const allTopics = [
  ArrayAndString,
  QueueAndStack,
  Recursion1,
  Recursion2,
  LinkedList,
  HashTable,
  BinarySearch,
  BinaryTree,
  BinarySearchTree,
  NaryTree,
  Trie,
  Easy,
  Meidum,
  Hard,
  Top,
  Tencent,
  ByteDance,
  Teambition,
]
  .map((e) => parseTopicToMarkdown(e))
  .join('\n\n');

const allLinks = urlsCn.map(([no, url]) => `[${no}]: ${url}`).join('\n');

const mdSkeleton = fs.readFileSync('./readme-skeleton.md', { encoding: 'utf8' });

const output = mdSkeleton
  .replace('<!-- TopicsPlaceHolder -->', allTopics)
  .replace('<!-- LinksPlaceHolder -->', allLinks);

fs.writeFileSync(path.join(relPath, 'readme.md'), output);
