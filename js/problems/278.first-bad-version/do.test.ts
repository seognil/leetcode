import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type IsBadVersion = (n: number) => boolean;
type Checker = (n: number) => number;
type Solution = (isBadVersion: IsBadVersion) => Checker;

const rawTestRunner = (solution: Solution) => {
  const genTest = (firstBad: number) => {
    const isBadVersion: IsBadVersion = (n) => n >= firstBad;
    const versionCount = ~~(firstBad * (1 + Math.random()));

    test(`have ${versionCount} versions, ${firstBad} is first bad version`, () => {
      expect(solution(isBadVersion)(versionCount)).toEqual(firstBad);
    });
  };

  describe('First Bad Version', () => {
    genTest(1);
    genTest(2);
    genTest(30);
    genTest(200);
    genTest(87);
    genTest(13);
  });
};

// * ------------------------------------------------

import { solution } from './solution';
import { numIslands } from '../200.number-of-islands/solution';
rawTestRunner(solution);
