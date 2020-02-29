# JS 本地刷题

## TypeScript

TypeScript 的静态类型检查和自动完成都是好东西，  
它们能极大地提升开发体验。

但是 LeetCode 还不支持以 TypeScript 提交，  
所以我配置了一个自动化脚本，拥有以下功能：

- 用 TypeScript 刷题（当然 JavaScript 也支持）
- 自动编译 TS 到 JS 以便能够提交
- 自动进行单元测试（有测试用例时）
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

```
npm install
npm run start
```

其中的 `start` 命令就启动了上文中描述的那些自动化任务。
