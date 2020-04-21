import { searchLangSolutions } from '../util/search-solutions';
import { problemsEn } from '../leetcode/fetch-problems-en';
import { generateBarChart } from './bar';

const curLang = 'ts';

const solCount = Object.keys(searchLangSolutions(curLang)).length;
const probCount = problemsEn.length;
const bar = generateBarChart((solCount * 100) / probCount, 16);

export const genDesc = () => `progress (${curLang}): ${bar} ${solCount}/${probCount}`;
