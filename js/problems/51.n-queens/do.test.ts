import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number;
type Output = string[][];

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: 1,
    output: [['Q']],
  },
  {
    input: 3,
    output: [],
  },
  {
    input: 4,
    output: [
      [
        //
        '.Q..',
        '...Q',
        'Q...',
        '..Q.',
      ],
      [
        //
        '..Q.',
        'Q...',
        '...Q',
        '.Q..',
      ],
    ],
  },
  {
    input: 5,
    output: [
      [
        //
        'Q....',
        '..Q..',
        '....Q',
        '.Q...',
        '...Q.',
      ],
      [
        //
        'Q....',
        '...Q.',
        '.Q...',
        '....Q',
        '..Q..',
      ],
      [
        //
        '.Q...',
        '...Q.',
        'Q....',
        '..Q..',
        '....Q',
      ],
      [
        //
        '.Q...',
        '....Q',
        '..Q..',
        'Q....',
        '...Q.',
      ],
      [
        //
        '..Q..',
        'Q....',
        '...Q.',
        '.Q...',
        '....Q',
      ],
      [
        //
        '..Q..',
        '....Q',
        '.Q...',
        '...Q.',
        'Q....',
      ],
      [
        //
        '...Q.',
        'Q....',
        '..Q..',
        '....Q',
        '.Q...',
      ],
      [
        //
        '...Q.',
        '.Q...',
        '....Q',
        '..Q..',
        'Q....',
      ],
      [
        //
        '....Q',
        '.Q...',
        '...Q.',
        'Q....',
        '..Q..',
      ],
      [
        //
        '....Q',
        '..Q..',
        'Q....',
        '...Q.',
        '.Q...',
      ],
    ],
  },
]);

// * ------------------------------------------------

import { solveNQueens } from './solution';
testRunner(cases, solveNQueens);
