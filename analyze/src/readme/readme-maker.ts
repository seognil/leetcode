import fs from 'fs';
import path from 'path';
import { mapObjIndexed } from 'ramda';

import { Difficulty } from '../types';

import * as exploreStructure from '../leetcode/explore';
import { Topic, Chapter } from '../leetcode/explore';
import { problemsCn } from '../leetcode/fetch-problems-cn';
import { urlsCn } from '../leetcode/urls-cn';

import { searchLangSolutions, solutionFilePatterns } from '../util/search-solutions';

// * ================================================================================

const relPath = '../../..';

const mapSolutionsToSpan = (
  solutions: Record<string, string[]>,
  lang: string,
  folder: string,
): Record<string, string> => {
  return mapObjIndexed(
    (v) => v.map((e, i) => `[${lang}${i === 0 ? '' : i + 1}](${path.join(folder, e)})`).join(', '),
    solutions,
  );
};

const oneStepMaker = (lang: string): Record<string, string> => {
  const solutions = searchLangSolutions(lang);
  const [folderPath] = solutionFilePatterns[lang];
  const spans = mapSolutionsToSpan(solutions, lang, folderPath);
  return spans;
};

const langs = Object.keys(solutionFilePatterns);

const allSolutionsMarkdown = langs.map((e) => oneStepMaker(e));

const langTh = langs.map((e) => e + '|');
const langHr = langs.map((e) => ':-:|');
const langEmpty = langs.map((e) => ' |');
const langBar = langs.map((e) => '-|');

const solutionsOfNo = (no: string) =>
  ` ${allSolutionsMarkdown.map((pool) => pool[no] || '').join(' | ')} |`;

// * ----------------------------------------------------------------

const parseTopicToMarkdown = (topic: Topic): string => {
  return [
    `### ${topic.title}`,
    ``,
    `专题地址：<${topic.link}>`,
    ``,
    ` [返回目录 ⬆️](#目录)`,
    ``,
    `|  # | ${topic.title} | 锁 | 难度  |` + langTh,
    `| --:| :--            | :-:  | :-: |` + langHr,
    topic.chapters.map(parseChapterToMarkdown).join('\n'),
  ].join('\n');
};

const parseChapterToMarkdown = (chap: Chapter): string => {
  return [
    `| \\#\\# | **${chap.title}** | | |` + langEmpty,
    chap.pages
      .map(parsePageToMarkdown)
      .filter((e) => e)
      .join('\n'),
  ]
    .filter((e) => e)
    .join('\n');
};

const colorMap: Record<Difficulty, string> = {
  简单: `🟩`,
  Easy: `🟩`,
  中等: `🟧`,
  Medium: `🟧`,
  困难: `🟥`,
  Hard: `🟥`,
};

const colorOf = (d: Difficulty) => `${colorMap[d]} ${d}`;

const parsePageToMarkdown = (p: number | string): string => {
  if (isNaN(Number(p))) {
    // return `|  -- | ${p} | -- | -- |` + langBar;
    return '';
  } else {
    const no = String(p);
    const [, title, difficuly, , locked] = problemsCn.find((e) => e[0] === no)!;
    return (
      `| **${no}** | [${title}][${no}] | ${locked ? '🔐' : ''} | ${colorOf(difficuly)} |` +
      solutionsOfNo(no)
    );
  }
};

// * ================================================================================

const allTopics = [
  exploreStructure.ArrayAndString,
  exploreStructure.QueueAndStack,
  exploreStructure.Recursion1,
  exploreStructure.Recursion2,
  exploreStructure.LinkedList,
  exploreStructure.HashTable,
  exploreStructure.BinarySearch,
  exploreStructure.BinaryTree,
  exploreStructure.BinarySearchTree,
  exploreStructure.NaryTree,
  exploreStructure.Trie,
  exploreStructure.Easy,
  exploreStructure.Meidum,
  exploreStructure.Hard,
  exploreStructure.Top,
  exploreStructure.Tencent,
  exploreStructure.ByteDance,
  exploreStructure.Teambition,
]
  .map((e) => parseTopicToMarkdown(e))
  .join('\n\n');

const allLinks = urlsCn.map(([no, url]) => `[${no}]: ${url}`).join('\n');

const mdSkeleton = fs.readFileSync('./readme-skeleton.md', { encoding: 'utf8' });

const output = mdSkeleton
  .replace('<!-- TopicsPlaceHolder -->', allTopics)
  .replace('<!-- LinksPlaceHolder -->', allLinks);

fs.writeFileSync(path.join(relPath, 'readme.md'), output);
