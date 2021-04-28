import { writeFile } from 'fs/promises';
import fetch from 'node-fetch';
import { resolve } from 'path';
import { Difficulty, ProblemItem, UrlItem } from '../types';

// * ================================================================================

const pListData = fetch('https://leetcode-cn.com/api/problems/algorithms/')
  .then((response) => response.json())
  .then((result: ListFetchResult) =>
    result.stat_status_pairs.sort((a, b) => a.stat.question_id - b.stat.question_id),
  );

// * ----------------

pListData
  .then((list): ProblemItem[] =>
    list.map((e) => [
      e.stat.frontend_question_id,
      e.stat.question__title,
      ['简单', '中等', '困难'][e.difficulty.level - 1] as Difficulty,
      `${((e.stat.total_acs / e.stat.total_submitted) * 100).toFixed(2)}%`,
      e.paid_only ? 'LOCKED' : undefined,
    ]),
  )
  .then(
    (list) => `
import { LOCKED, ProblemItem } from '../types';

export const problemsCn: ProblemItem[] = [
${list
  .map((unit) => `  [ ${unit.map((str) => `"${String(str).replace(/"/g, `'`)}"`).join(', ')} ],`)
  .join(`\n`)
  .replace(/, "undefined"/g, ``)
  .replace(/"LOCKED"/g, `LOCKED`)}
];

`,
  )
  .then((e) => (console.log(e), e))
  .then((content) => {
    writeFile(resolve(__dirname, '../leetcode/fetch-problems-cn.ts'), content, 'utf8');
  });

// * ----------------

pListData
  .then((list): UrlItem[] =>
    list.map((e) => [e.stat.frontend_question_id, e.stat.question__title_slug]),
  )
  .then(
    (list) => `
import { UrlItem } from '../types';

export const urlsCn: UrlItem[] = [
${list.map(([id, slug]) => `  [ "${id}", "https://leetcode-cn.com/problems/${slug}" ],`).join(`\n`)}
];

`,
  )
  .then((e) => (console.log(e), e))
  .then((content) => {
    writeFile(resolve(__dirname, '../leetcode/urls-cn.ts'), content, 'utf8');
  });

// * ================================================================================

interface ListFetchResult {
  user_name: string;
  num_solved: number;
  num_total: number;
  ac_easy: number;
  ac_medium: number;
  ac_hard: number;
  frequency_high: number;
  frequency_mid: number;
  category_slug: string;
  stat_status_pairs: ProblemData[];
}

interface ProblemData {
  stat: {
    question_id: number;
    question__title: string;
    question__title_slug: string;
    question__hide: boolean;
    total_acs: number;
    total_submitted: number;
    total_column_articles: number;
    frontend_question_id: string;
    is_new_question: boolean;
  };
  status: null;
  difficulty: {
    level: 1 | 2 | 3;
  };
  paid_only: boolean;
  is_favor: boolean;
  frequency: number;
  progress: number;
}

// {
//   "stat": {
//     "question_id": 1000224,
//     "question__title": "魔塔游戏",
//     "question__title_slug": "p0NxJO",
//     "question__hide": false,
//     "total_acs": 3276,
//     "total_submitted": 10737,
//     "total_column_articles": 62,
//     "frontend_question_id": "LCP 30",
//     "is_new_question": false
//   },
//   "status": null,
//   "difficulty": {
//     "level": 2
//   },
//   "paid_only": false,
//   "is_favor": false,
//   "frequency": 0,
//   "progress": 0
// },
