# JS 本地刷题

## TypeScript 和 Jest

TypeScript 的静态类型检查和自动完成都是好东西，  
它们能极大地提升开发体验。

但是 LeetCode 还不支持以 TypeScript 提交，  
我配置了一个自动化脚本，拥有以下功能：

- 用 TypeScript 刷题（当然 JavaScript 也支持）
- 自动编译 TS 到 JS 以便能够提交（会多两行模块化代码，不影响提交）
- 自动进行单元测试（有本地测试用例时）
- 在 git commit 的时候自动使用 eslint 和 prettier 对代码进行规范化

## 安装流程

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

单元测试的方式，一开始是设计得完全自动化的，  
有一个唯一的运行文件，各个题目的测试文件中只有测试数据。

然而最终还是决定用手动显式 `import` 的方式，  
这样虽然在每个测试文件中都会重复一些代码，  
但是逻辑上会更清晰一点，  
对于多个 solution 的情况也能更灵活。

而且，刷题的重点和难点在于算法本身不是吗？

```ts
// * in `solution.ts`

const solution = () => {};

export { solution };
```

```ts
// * in `.test.ts`

import { makeTestRunner, TestCases } from '../../helper/test-helper';

// * `__dirname` for detect and display problem title
const { testRunner } = makeTestRunner(__dirname);

// * ------------------------------------------------ test cases

type Input = [string, string];
type Output = number;

const cases: TestCases<Input, Output> = [
  //
  {
    input: ['hello', 'll'],
    output: 2,
  },
  {
    input: ['aaaaa', 'bba'],
    output: -1,
  },
];

// * ------------------------------------------------ run test

import { solution } from './solution';
import { solution as solution2 } from './solution2';
testRunner(cases, solution);
testRunner(cases, solution2, 'pickAnotherFunctionName');
```
