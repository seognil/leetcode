import path from 'path';
import { mapObjIndexed } from 'ramda';

import { Difficulty } from '../types';

import * as exploreStructure from '../leetcode/explore';
import { Topic, Chapter } from '../leetcode/explore';
import { problemsCn } from '../leetcode/fetch-problems-cn';
import { urlsCn } from '../leetcode/urls-cn';

import { searchLangSolutions, solutionFilePatterns } from '../util/search-solutions';
import { readFile, writeFile } from 'fs/promises';

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

const langs = Object.keys(solutionFilePatterns);

const langSolMdMapList: Record<string, string>[] = langs.map((lang) => {
  const solutions = searchLangSolutions(lang);
  const [folderPath] = solutionFilePatterns[lang];
  const spans = mapSolutionsToSpan(solutions, lang, folderPath);
  return spans;
});

// * langSolMdPoolList:
// [
//   {
//     '1': '[ts](js/problems/1.two-sum/solution.ts)',
//     '2': '[ts](js/problems/2.add-two-numbers/solution.ts)',
//   },
// ];

// * ----------------

const langTh = langs.map((e) => e + '|');
const langHr = langs.map((e) => ':-:|');
const langEmpty = langs.map((e) => ' |');
const langBar = langs.map((e) => '-|');

const allLangSolsOfNo = (PID: string): string =>
  ` ${langSolMdMapList.map((pool) => pool[PID] || '').join(' | ')} |`;

// * ----------------------------------------------------------------



const mapTopicToSolvedProgress = (topic: Topic): string => {
  const allPData = topic.chapters
    .map((e) => e.pages.filter((e) => typeof e === 'number'))
    .flat(Infinity) as number[];
  const allP = allPData.length;
  const allS = allPData.filter((PID) => langSolMdMapList.some((map) => map[PID] !== undefined))
    .length;

  const lockedPData = allPData.filter(
    (PID) => problemsCn.find((e) => Number(e[0]) === PID)?.[4] !== undefined,
  );
  const lockedS = lockedPData.filter((PID) =>
    langSolMdMapList.some((map) => map[PID] !== undefined),
  ).length;
  const lockedP = lockedPData.length;

  const normalP = allP - lockedP;
  const normalS = allS - lockedS;

  return `(${normalS}/${normalP}${lockedP ? `, ${lockedS}/${lockedP}` : ``})`;
};

const parseTopicToMarkdown = (topic: Topic): string => {
  return [
    `### ${topic.title} ${mapTopicToSolvedProgress(topic)}`,
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
    const PID = String(p);
    const e = problemsCn.find((e) => e[0] === PID)!
    if (e===undefined) console.log('lcdebug 6c0aca', e,PID)
    const [, title, difficuly, , locked] = problemsCn.find((e) => e[0] === PID)!;
    return (
      `| **${PID}** | [${title}][${PID}] | ${locked ? '🔐' : ''} | ${colorOf(difficuly)} |` +
      allLangSolsOfNo(PID)
    );
  }
};

// * ================================================================================ output

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

const allLinks = urlsCn.map(([PID, url]) => `[${PID}]: ${url}`).join('\n');

(async () => {
  const mdSkeleton = await readFile('./readme-skeleton.md', { encoding: 'utf8' });

  const output = mdSkeleton
    .replace('<!-- TopicsPlaceHolder -->', allTopics)
    .replace('<!-- LinksPlaceHolder -->', allLinks);

  console.log('lcdebug 01beee', output);

  writeFile(path.join(relPath, 'readme.md'), output);
})();
