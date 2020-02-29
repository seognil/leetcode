# JS 本地刷题

## 功能

TypeScript 的静态类型检查和自动完成都是好东西，  
它们能极大地提升开发体验，  
但是 LeetCode 还不支持以 TypeScript 提交。

同时最好能先在本地测试代码。

我配置了一个自动化脚本，拥有以下功能：

- 用 TypeScript 刷题（当然 JavaScript 也支持）
- 自动编译 TS 到 JS 以便能够提交（会多两行模块化代码，不影响提交）
- 自动进行单元测试（有本地测试用例时）
- 在 git commit 的时候自动使用 eslint 和 prettier 对代码进行规范化

## 安装

### Step 1

使用 VSCode 并安装插件：

- [VS Code](https://code.visualstudio.com/)
- [LeetCode - VS Code Extension](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-leetcode)

然后调整一下插件的默认配置，比如我的：

```json
{
  "leetcode.defaultLanguage": "javascript",
  "leetcode.workspaceFolder": "[你的文件夹路径]",
  "leetcode.filePath": {
    "javascript": {
      "folder": "./js/problems/${id}.${kebab-case-name}",
      "filename": "solution.ts"
    }
  }
}
```

并登陆 leetcode 账户，这样就能愉快地在本地刷题了。

### Step 2

（假设你已经拥有基本的 TS、JS 和 Node 使用经验。）

下载本仓库，并在这里执行

```bash
npm install
npm run start
```

其中的 `start` 命令就启动了上文中描述的那些自动化任务。

## 单元测试

单元测试的方式，我一开始设计成完全自动化：  
有一个唯一的运行文件，各个题目的测试文件中只有测试数据。

然而最终还是决定改成手动调用的方式，  
这样虽然在每个测试文件中都会重复一些代码，  
但是代码逻辑会更清晰，  
对于多个解答的情况也能更灵活。

而且，刷题的重点和难点在于算法本身不是吗？  
多复制粘贴几个字符花不了多少时间。

```ts
// * in `solution.ts`

const solution = (...input) => {
  // ... complete algorithm logic

  return output;
};

export { solution };
```

```ts
// * in `.test.ts`

import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------ test cases

type Input = [number[], number];
type Output = [number, number];

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [[2, 7, 11, 15], 9],
    output: [0, 1],
  },
  {
    input: [[3, 2, 4], 6],
    output: [1, 2],
  },
  {
    input: [[0, 4, 3, 0], 0],
    output: [0, 3],
  },
]);

// * ------------------------------------------------ it will run test

import { solution } from './solution';
import { solution as solution2 } from './solution-2';
import { solution as solution3 } from './solution-3';
testRunner(cases, solution);
testRunner(cases, solution2, 'displayAnotherFunctionName');
testRunner(cases, solution3, 'anotherSolution');
```

其中有三个 API

- **makeTestCases**

  这个 API 封装测试用例，  
  本身其实不进行任何数据处理，  
  主要用于添加数据类型，并保持一致性。

  函数可能有需要多个参数的情况，  
  多个参数可以以单个数组的形式传递，  
  原理是：

  ```ts
  const myCase = {
    input: [a, b],
    output: c,
  };

  solution(a, b) === c;
  solution(...myCase.input) === c;
  ```

- **makeTestCasesOfSingleInput**

  对于单参数的情况，  
  可以不写最外层干扰视线的方括号，  
  测试用例中可以直接写参数本身。

  ```ts
  const casesA = makeTestCasesOfSingleInput<number, number>([
    {
      input: 2,
      output: 2,
    },
  ]);

  const casesB = makeTestCases<number, number>([
    {
      input: [2],
      output: 2,
    },
  ]);

  const casesC = [
    {
      input: [2],
      output: 2,
    },
  ];

  // * 以上三者都等价
  ```

  数据形状确保是一致的，那么后续进行测试就方便多了。

- **testRunner**

  ```ts
  type TestRunner = (testCases: TestCases, solver: Function, fnName?: string) => void;
  ```

  测试每个用例，并显示测试信息。

  也支持原地算法（直接修改输入数据，不返回新数据）的情况，  
  （如 [第 344 题](https://leetcode-cn.com/problems/reverse-string/)）

  如果需要测试多个解答时，  
  可选的第三个参数能在测试中区分显示函数名。  
  比如：

  ```ts
  import { solution } from './solution';
  import { solution as solution2 } from './solution-2';
  import { solution as solution3 } from './solution-3';
  testRunner(cases, solution);
  testRunner(cases, solution2, 'displayAnotherFunctionName');
  testRunner(cases, solution3, 'anotherSolution');
  ```

## TypeScript

为了支持测试，需要模块化导出，  
模块化的写法需要和声明分开。
比如：

```ts
// * ts
const solution = (str: string): string => {};

export { solution };
```

会编译成以下 JS 代码，这不会影响提交：

```ts
// * js
const solution = (str) => {};

exports.solution = solution;
```

不能写成下面的形式：

```ts
// * ts
export const solution = () => {};
```

不然编译的 JS 代码会提交失败：

```ts
// * js
exports.solution = () => {};
```

虽然显得麻烦一点，  
反正，刷题的重点和难点在于算法本身不是吗？
