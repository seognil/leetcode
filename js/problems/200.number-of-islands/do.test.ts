import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

import { Grid } from './types';

// * ------------------------------------------------

type Input = Grid;
type Output = number;

// * map '1010' to ['1','0','1','0'] later

const cases = [
  //
  {
    input: [
      //
      '11110',
      '11010',
      '11000',
      '00000',
    ],
    output: 1,
  },
  {
    input: [
      //
      '11000',
      '11000',
      '00100',
      '00011',
    ],
    output: 3,
  },
  {
    input: [
      //
      '00000',
      '00000',
      '00000',
      '00000',
    ],
    output: 0,
  },
  {
    input: [],
    output: 0,
  },
];

const mapToGrid = (g: string[]): Grid => g.map((e) => e.split('')) as Grid;

const caseMapper = (c: { input: string[]; output: number }) => ({
  input: mapToGrid(c.input),
  output: c.output,
});

const realCases = makeTestCasesOfSingleInput<Input, Output>(cases.map(caseMapper));

// * ------------------------------------------------

import { numIslands } from './solution';
import { numIslands as bfs } from './solution-bfs';
testRunner(realCases, numIslands, 'dfsQuick');
testRunner(realCases, bfs, 'bfs');
