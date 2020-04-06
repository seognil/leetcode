# LeetCode 刷题

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [说明](#%E8%AF%B4%E6%98%8E)
- [专题](#%E4%B8%93%E9%A2%98)
  - [数组和字符串](#%E6%95%B0%E7%BB%84%E5%92%8C%E5%AD%97%E7%AC%A6%E4%B8%B2)
  - [队列 & 栈](#%E9%98%9F%E5%88%97--%E6%A0%88)
  - [Recursion I](#recursion-i)
  - [Recursion II](#recursion-ii)
  - [链表](#%E9%93%BE%E8%A1%A8)
  - [哈希表](#%E5%93%88%E5%B8%8C%E8%A1%A8)
  - [二分查找](#%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE)
  - [二叉树](#%E4%BA%8C%E5%8F%89%E6%A0%91)
  - [二叉搜索树](#%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91)
  - [N 叉树](#n-%E5%8F%89%E6%A0%91)
  - [前缀树](#%E5%89%8D%E7%BC%80%E6%A0%91)
  - [初级算法](#%E5%88%9D%E7%BA%A7%E7%AE%97%E6%B3%95)
  - [中级算法](#%E4%B8%AD%E7%BA%A7%E7%AE%97%E6%B3%95)
  - [高级算法](#%E9%AB%98%E7%BA%A7%E7%AE%97%E6%B3%95)
  - [算法面试题汇总](#%E7%AE%97%E6%B3%95%E9%9D%A2%E8%AF%95%E9%A2%98%E6%B1%87%E6%80%BB)
  - [腾讯](#%E8%85%BE%E8%AE%AF)
  - [字节跳动](#%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8)
  - [Teambition](#teambition)
- [题库](#%E9%A2%98%E5%BA%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 说明

## 专题

### 数组和字符串

<https://leetcode-cn.com/explore/learn/card/array-and-string/>

|       # | 数组和字符串                      | 难度 |                                                                              ts                                                                              |
| ------: | :-------------------------------- | :--: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **数组简介**                      |  --  |                                                                              --                                                                              |
|      -- | 数组简介                          |  --  |                                                                              --                                                                              |
|      -- | 动态数组简介                      |  --  |                                                                              --                                                                              |
| **724** | [寻找数组的中心索引][724]         | 简单 |                                                      [ts](js/problems/724.find-pivot-index/solution.ts)                                                      |
| **747** | [至少是其他数字两倍的最大数][747] | 简单 |   [ts](js/problems/747.largest-number-at-least-twice-of-others/solution.ts), [ts2](js/problems/747.largest-number-at-least-twice-of-others/solution-2.ts)    |
|  **66** | [加一][66]                        | 简单 |                                    [ts](js/problems/66.plus-one/solution2.ts), [ts2](js/problems/66.plus-one/solution.ts)                                    |
|    \#\# | **二维数组简介**                  |  --  |                                                                              --                                                                              |
|      -- | 二维数组简介                      |  --  |                                                                              --                                                                              |
| **498** | [对角线遍历][498]                 | 中等 |                                                     [ts](js/problems/498.diagonal-traverse/solution.ts)                                                      |
|  **54** | [螺旋矩阵][54]                    | 中等 |                                                        [ts](js/problems/54.spiral-matrix/solution.ts)                                                        |
| **118** | [杨辉三角][118]                   | 简单 |                                                      [ts](js/problems/118.pascals-triangle/solution.ts)                                                      |
|    \#\# | **字符串简介**                    |  --  |                                                                              --                                                                              |
|      -- | 字符串简介                        |  --  |                                                                              --                                                                              |
|      -- | 不可变字符串 —— 问题和解决方案    |  --  |                                                                              --                                                                              |
|  **67** | [二进制求和][67]                  | 简单 |                                                         [ts](js/problems/67.add-binary/solution.ts)                                                          |
|  **28** | [实现 strStr()][28]               | 简单 |                                                      [ts](js/problems/28.implement-str-str/solution.ts)                                                      |
|  **14** | [最长公共前缀][14]                | 简单 |                                                    [ts](js/problems/14.longest-common-prefix/solution.ts)                                                    |
|    \#\# | **双指针技巧**                    |  --  |                                                                              --                                                                              |
|      -- | 双指针技巧 —— 情景一              |  --  |                                                                              --                                                                              |
| **344** | [反转字符串][344]                 | 简单 |                                                       [ts](js/problems/344.reverse-string/solution.ts)                                                       |
| **561** | [数组拆分 I][561]                 | 简单 |                                                     [ts](js/problems/561.array-partition-i/solution.ts)                                                      |
| **167** | [两数之和 II - 输入有序数组][167] | 简单 |                                              [ts](js/problems/167.two-sum-ii-input-array-is-sorted/solution.ts)                                              |
|      -- | 双指针技巧 —— 情景二              |  --  |                                                                              --                                                                              |
|  **27** | [移除元素][27]                    | 简单 |                                                       [ts](js/problems/27.remove-element/solution.ts)                                                        |
| **485** | [最大连续 1 的个数][485]          | 简单 |                                                    [ts](js/problems/485.max-consecutive-ones/solution.ts)                                                    |
| **209** | [长度最小的子数组][209]           | 中等 |                                                 [ts](js/problems/209.minimum-size-subarray-sum/solution.ts)                                                  |
|    \#\# | **小结**                          |  --  |                                                                              --                                                                              |
|      -- | 数组相关的技术                    |  --  |                                                                              --                                                                              |
| **189** | [旋转数组][189]                   | 简单 | [ts](js/problems/189.rotate-array/solution.ts), [ts2](js/problems/189.rotate-array/solution-pointer.ts), [ts3](js/problems/189.rotate-array/solution-map.ts) |
| **119** | [杨辉三角 II][119]                | 简单 |                                                    [ts](js/problems/119.pascals-triangle-ii/solution.ts)                                                     |
| **151** | [翻转字符串里的单词][151]         | 中等 |                                                 [ts](js/problems/151.reverse-words-in-a-string/solution.ts)                                                  |
| **557** | [反转字符串中的单词 III][557]     | 简单 |                                               [ts](js/problems/557.reverse-words-in-a-string-iii/solution.ts)                                                |
|  **26** | [删除排序数组中的重复项][26]      | 简单 |                                             [ts](js/problems/26.remove-duplicates-from-sorted-array/solution.ts)                                             |
| **283** | [移动零][283]                     | 简单 |                                                        [ts](js/problems/283.move-zeroes/solution.ts)                                                         |

### 队列 & 栈

<https://leetcode-cn.com/explore/learn/card/queue-stack/>

|       # | 队列 & 栈                    | 难度 |                                                                                   ts                                                                                   |
| ------: | :--------------------------- | :--: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **队列：先入先出的数据结构** |  --  |                                                                                   --                                                                                   |
|      -- | 先入先出的数据结构           |  --  |                                                                                   --                                                                                   |
|      -- | 队列 - 实现                  |  --  |                                                                                   --                                                                                   |
| **622** | [设计循环队列][622]          | 中等 |                        [ts](js/problems/622.design-circular-queue/solution.ts), [ts2](js/problems/622.design-circular-queue/solution-class.ts)                         |
|      -- | 设计循环队列                 |  --  |                                                                                   --                                                                                   |
|      -- | 循环队列 - 实现              |  --  |                                                                                   --                                                                                   |
|      -- | 队列 - 用法                  |  --  |                                                                                   --                                                                                   |
| **346** | [数据流中的移动平均值][346]  | 简单 |                                                                                                                                                                        |
|    \#\# | **队列和广度优先搜索**       |  --  |                                                                                   --                                                                                   |
|      -- | 队列和 BFS                   |  --  |                                                                                   --                                                                                   |
|      -- | 广度优先搜索 - 模板          |  --  |                                                                                   --                                                                                   |
| **286** | [墙与门][286]                | 中等 |                                                                                                                                                                        |
| **200** | [岛屿数量][200]              | 中等 |                             [ts](js/problems/200.number-of-islands/solution.ts), [ts2](js/problems/200.number-of-islands/solution-bfs.ts)                              |
| **752** | [打开转盘锁][752]            | 中等 |    [ts](js/problems/752.open-the-lock/solution.ts), [ts2](js/problems/752.open-the-lock/solution-normal.ts), [ts3](js/problems/752.open-the-lock/solution-naive.ts)    |
| **279** | [完全平方数][279]            | 中等 | [ts](js/problems/279.perfect-squares/solution.ts), [ts2](js/problems/279.perfect-squares/solution-bfs.ts), [ts3](js/problems/279.perfect-squares/solution-bfs-opts.ts) |
|    \#\# | **栈：后入先出的数据结构**   |  --  |                                                                                   --                                                                                   |
|      -- | 后入先出的数据结构           |  --  |                                                                                   --                                                                                   |
|      -- | 栈 - 用法                    |  --  |                                                                                   --                                                                                   |
| **155** | [最小栈][155]                | 简单 |                                    [ts](js/problems/155.min-stack/solution.ts), [ts2](js/problems/155.min-stack/solution-class.ts)                                     |
|  **20** | [有效的括号][20]             | 简单 |                                                           [ts](js/problems/20.valid-parentheses/solution.ts)                                                           |
| **739** | [每日温度][739]              | 中等 |                           [ts](js/problems/739.daily-temperatures/solution.ts), [ts2](js/problems/739.daily-temperatures/solution-simple.ts)                           |
| **150** | [逆波兰表达式求值][150]      | 中等 |                                                   [ts](js/problems/150.evaluate-reverse-polish-notation/solution.ts)                                                   |
|    \#\# | **栈和深度优先搜索**         |  --  |                                                                                   --                                                                                   |
|      -- | 栈和 DFS                     |  --  |                                                                                   --                                                                                   |
|      -- | DFS - 模板 I                 |  --  |                                                                                   --                                                                                   |
| **200** | [岛屿数量][200]              | 中等 |                             [ts](js/problems/200.number-of-islands/solution.ts), [ts2](js/problems/200.number-of-islands/solution-bfs.ts)                              |
| **133** | [克隆图][133]                | 中等 |                                                             [ts](js/problems/133.clone-graph/solution.ts)                                                              |
| **494** | [目标和][494]                | 中等 |                                                              [ts](js/problems/494.target-sum/solution.ts)                                                              |
|      -- | DFS - 模板 II                |  --  |                                                                                   --                                                                                   |
|  **94** | [二叉树的中序遍历][94]       | 中等 |               [ts](js/problems/94.binary-tree-inorder-traversal/solution.ts), [ts2](js/problems/94.binary-tree-inorder-traversal/solution-recursive.ts)                |
|    \#\# | **小结**                     |  --  |                                                                                   --                                                                                   |
| **232** | [用栈实现队列][232]          | 简单 |                 [ts](js/problems/232.implement-queue-using-stacks/solution.ts), [ts2](js/problems/232.implement-queue-using-stacks/solution-class.ts)                  |
| **225** | [用队列实现栈][225]          | 简单 |                 [ts](js/problems/225.implement-stack-using-queues/solution.ts), [ts2](js/problems/225.implement-stack-using-queues/solution-class.ts)                  |
| **394** | [字符串解码][394]            | 中等 |                                                            [ts](js/problems/394.decode-string/solution.ts)                                                             |
| **733** | [图像渲染][733]              | 简单 |                                                              [ts](js/problems/733.flood-fill/solution.ts)                                                              |
| **542** | [01 矩阵][542]               | 中等 |                                                              [ts](js/problems/542.01-matrix/solution.ts)                                                               |
| **841** | [钥匙和房间][841]            | 中等 |                                                            [ts](js/problems/841.keys-and-rooms/solution.ts)                                                            |

### Recursion I

<https://leetcode.com/explore/learn/card/recursion-i/>

|       # | Recursion I                        | 难度 |                                                                   ts                                                                    |
| ------: | :--------------------------------- | :--: | :-------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **Principle of Recursion**         |  --  |                                                                   --                                                                    |
|      -- | Principle of Recursion             |  --  |                                                                   --                                                                    |
| **344** | [反转字符串][344]                  | 简单 |                                            [ts](js/problems/344.reverse-string/solution.ts)                                             |
|      -- | Solution - Reverse String          |  --  |                                                                   --                                                                    |
|      -- | Recursion Function                 |  --  |                                                                   --                                                                    |
|  **24** | [两两交换链表中的节点][24]         | 中等 |                                          [ts](js/problems/24.swap-nodes-in-pairs/solution.ts)                                           |
|    \#\# | **Recurrence Relation**            |  --  |                                                                   --                                                                    |
|      -- | Recurrence Relation                |  --  |                                                                   --                                                                    |
| **206** | [反转链表][206]                    | 简单 |                                          [ts](js/problems/206.reverse-linked-list/solution.ts)                                          |
| **700** | [二叉搜索树中的搜索][700]          | 简单 | [ts](js/problems/700.search-in-a-binary-search-tree/solution.ts), [ts2](js/problems/700.search-in-a-binary-search-tree/solution-bfs.ts) |
| **119** | [杨辉三角 II][119]                 | 简单 |                                          [ts](js/problems/119.pascals-triangle-ii/solution.ts)                                          |
|    \#\# | **Memoization**                    |  --  |                                                                   --                                                                    |
|      -- | Duplicate Calculation in Recursion |  --  |                                                                   --                                                                    |
| **509** | [斐波那契数][509]                  | 简单 |                                           [ts](js/problems/509.fibonacci-number/solution.ts)                                            |
|  **70** | [爬楼梯][70]                       | 简单 |                                            [ts](js/problems/70.climbing-stairs/solution.ts)                                             |
|    \#\# | **Complexity Analysis**            |  --  |                                                                   --                                                                    |
|      -- | Time Complexity - Recursion        |  --  |                                                                   --                                                                    |
|      -- | Space Complexity - Recursion       |  --  |                                                                   --                                                                    |
|      -- | Tail Recursion                     |  --  |                                                                   --                                                                    |
| **104** | [二叉树的最大深度][104]            | 简单 |                                     [ts](js/problems/104.maximum-depth-of-binary-tree/solution.ts)                                      |
|  **50** | [Pow(x, n)][50]                    | 中等 |                                                [ts](js/problems/50.pow-x-n/solution.ts)                                                 |
|    \#\# | **Conclusion**                     |  --  |                                                                   --                                                                    |
|      -- | Conclusion - Recursion I           |  --  |                                                                   --                                                                    |
|  **21** | [合并两个有序链表][21]             | 简单 |                                         [ts](js/problems/21.merge-two-sorted-lists/solution.ts)                                         |
| **779** | [第 K 个语法符号][779]             | 中等 |      [ts](js/problems/779.k-th-symbol-in-grammar/solution.ts), [ts2](js/problems/779.k-th-symbol-in-grammar/solution-readable.ts)       |
|  **95** | [不同的二叉搜索树 II][95]          | 中等 |                                     [ts](js/problems/95.unique-binary-search-trees-ii/solution.ts)                                      |

### Recursion II

<https://leetcode.com/explore/learn/card/recursion-ii/>

|       # | Recursion II                            | 难度 |                                                                    ts                                                                     |
| ------: | :-------------------------------------- | :--: | :---------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **Divide and Conquer**                  |  --  |                                                                    --                                                                     |
|      -- | D&C Introduction                        |  --  |                                                                    --                                                                     |
|      -- | Merge Sort                              |  --  |                                                                    --                                                                     |
| **912** | [排序数组][912]                         | 中等 |                                                                                                                                           |
|      -- | D&C Template                            |  --  |                                                                    --                                                                     |
|  **98** | [验证二叉搜索树][98]                    | 中等 |                                                                                                                                           |
| **240** | [搜索二维矩阵 II][240]                  | 中等 |                                                                                                                                           |
|      -- | Quick Sort                              |  --  |                                                                    --                                                                     |
|      -- | Master Theorem                          |  --  |                                                                    --                                                                     |
|    \#\# | **Backtracking**                        |  --  |                                                                    --                                                                     |
|      -- | Backtracking                            |  --  |                                                                    --                                                                     |
|  **52** | [N 皇后 II][52]                         | 困难 |                                                                                                                                           |
|      -- | Backtracking Template                   |  --  |                                                                    --                                                                     |
| **489** | [扫地机器人][489]                       | 困难 |                                                                                                                                           |
|  **37** | [解数独][37]                            | 困难 |                                                                                                                                           |
|  **77** | [组合][77]                              | 中等 |                                                                                                                                           |
|    \#\# | **Recursion to Iteration**              |  --  |                                                                    --                                                                     |
|      -- | Unfold Recursion                        |  --  |                                                                    --                                                                     |
| **100** | [相同的树][100]                         | 简单 |                                                                                                                                           |
|  **22** | [括号生成][22]                          | 中等 |                                                                                                                                           |
|  **94** | [二叉树的中序遍历][94]                  | 中等 | [ts](js/problems/94.binary-tree-inorder-traversal/solution.ts), [ts2](js/problems/94.binary-tree-inorder-traversal/solution-recursive.ts) |
| **102** | [二叉树的层序遍历][102]                 | 中等 |                                                                                                                                           |
|    \#\# | **Conclusion**                          |  --  |                                                                    --                                                                     |
|      -- | Beyond Recursion                        |  --  |                                                                    --                                                                     |
| **426** | [将二叉搜索树转化为排序的双向链表][426] | 中等 |                                                                                                                                           |
|  **84** | [柱状图中最大的矩形][84]                | 困难 |                                                                                                                                           |
|  **46** | [全排列][46]                            | 中等 |                                                                                                                                           |
|  **17** | [电话号码的字母组合][17]                | 中等 |                                                                                                                                           |
| **218** | [天际线问题][218]                       | 困难 |                                                                                                                                           |

### 链表

<https://leetcode-cn.com/explore/learn/card/linked-list/>

|       # | 链表                            | 难度 |                                                                                                ts                                                                                                |
| ------: | :------------------------------ | :--: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **单链表**                      |  --  |                                                                                                --                                                                                                |
|      -- | 简介 - 单链表                   |  --  |                                                                                                --                                                                                                |
|      -- | 添加操作 - 单链表               |  --  |                                                                                                --                                                                                                |
|      -- | 删除操作 - 单链表               |  --  |                                                                                                --                                                                                                |
| **707** | [设计链表][707]                 | 中等 | [ts](js/problems/707.design-linked-list/solution.ts), [ts2](js/problems/707.design-linked-list/solution-singly-head-tail.ts), [ts3](js/problems/707.design-linked-list/solution-singly-dummy.ts) |
|    \#\# | **双指针技巧**                  |  --  |                                                                                                --                                                                                                |
|      -- | 链表中的双指针                  |  --  |                                                                                                --                                                                                                |
| **141** | [环形链表][141]                 | 简单 |                                                                       [ts](js/problems/141.linked-list-cycle/solution.ts)                                                                        |
| **142** | [环形链表 II][142]              | 中等 |                                                                      [ts](js/problems/142.linked-list-cycle-ii/solution.ts)                                                                      |
| **160** | [相交链表][160]                 | 简单 |                                                                [ts](js/problems/160.intersection-of-two-linked-lists/solution.ts)                                                                |
|  **19** | [删除链表的倒数第 N 个节点][19] | 中等 |                        [ts](js/problems/19.remove-nth-node-from-end-of-list/solution.ts), [ts2](js/problems/19.remove-nth-node-from-end-of-list/solution-check-input.ts)                         |
|      -- | 小结 - 链表中的双指针           |  --  |                                                                                                --                                                                                                |
|    \#\# | **经典问题**                    |  --  |                                                                                                --                                                                                                |
|      -- | 反转链表                        |  --  |                                                                                                --                                                                                                |
| **206** | [反转链表][206]                 | 简单 |                                                                      [ts](js/problems/206.reverse-linked-list/solution.ts)                                                                       |
| **203** | [移除链表元素][203]             | 简单 |                                                                  [ts](js/problems/203.remove-linked-list-elements/solution.ts)                                                                   |
| **328** | [奇偶链表][328]                 | 中等 |                                                                      [ts](js/problems/328.odd-even-linked-list/solution.ts)                                                                      |
| **234** | [回文链表][234]                 | 简单 |                                    [ts](js/problems/234.palindrome-linked-list/solution.ts), [ts2](js/problems/234.palindrome-linked-list/solution-unsafe.ts)                                    |
|      -- | 小结 - 链表经典问题             |  --  |                                                                                                --                                                                                                |
|    \#\# | **双链表**                      |  --  |                                                                                                --                                                                                                |
|      -- | 简介 - 双链表                   |  --  |                                                                                                --                                                                                                |
|      -- | 添加操作 - 双链表               |  --  |                                                                                                --                                                                                                |
|      -- | 删除操作 - 双链表               |  --  |                                                                                                --                                                                                                |
| **707** | [设计链表][707]                 | 中等 | [ts](js/problems/707.design-linked-list/solution.ts), [ts2](js/problems/707.design-linked-list/solution-singly-head-tail.ts), [ts3](js/problems/707.design-linked-list/solution-singly-dummy.ts) |
|    \#\# | **小结**                        |  --  |                                                                                                --                                                                                                |
|      -- | 小结 - 链表                     |  --  |                                                                                                --                                                                                                |
|  **21** | [合并两个有序链表][21]          | 简单 |                                                                     [ts](js/problems/21.merge-two-sorted-lists/solution.ts)                                                                      |
|   **2** | [两数相加][2]                   | 中等 |                                                                         [ts](js/problems/2.add-two-numbers/solution.ts)                                                                          |
| **430** | [扁平化多级双向链表][430]       | 中等 |                                                            [ts](js/problems/430.flatten-a-multilevel-doubly-linked-list/solution.ts)                                                             |
| **138** | [复制带随机指针的链表][138]     | 中等 |                                                                 [ts](js/problems/138.copy-list-with-random-pointer/solution.ts)                                                                  |
|  **61** | [旋转链表][61]                  | 中等 |                                                                           [ts](js/problems/61.rotate-list/solution.ts)                                                                           |

### 哈希表

<https://leetcode-cn.com/explore/learn/card/hash-table/>

|       # | 哈希表                                  | 难度 |                                                                   ts                                                                    |
| ------: | :-------------------------------------- | :--: | :-------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **设计哈希表**                          |  --  |                                                                   --                                                                    |
|      -- | 哈希表的原理                            |  --  |                                                                   --                                                                    |
|      -- | 设计哈希表的关键                        |  --  |                                                                   --                                                                    |
| **705** | [设计哈希集合][705]                     | 简单 |                                                                                                                                         |
| **706** | [设计哈希映射][706]                     | 简单 |                                                                                                                                         |
|    \#\# | **实际应用 - 哈希集合**                 |  --  |                                                                   --                                                                    |
|      -- | 哈希集 - 用法                           |  --  |                                                                   --                                                                    |
|      -- | 使用哈希集查重                          |  --  |                                                                   --                                                                    |
| **217** | [存在重复元素][217]                     | 简单 |                                                                                                                                         |
| **136** | [只出现一次的数字][136]                 | 简单 |                                                                                                                                         |
| **349** | [两个数组的交集][349]                   | 简单 | [ts](js/problems/349.intersection-of-two-arrays/solution.ts), [ts2](js/problems/349.intersection-of-two-arrays/solution-two-pointer.ts) |
| **202** | [快乐数][202]                           | 简单 |                                                                                                                                         |
|    \#\# | **实际应用 - 哈希映射**                 |  --  |                                                                   --                                                                    |
|      -- | 哈希映射 - 用法                         |  --  |                                                                   --                                                                    |
|      -- | 场景 I - 提供更多信息                   |  --  |                                                                   --                                                                    |
|   **1** | [两数之和][1]                           | 简单 |                                                 [ts](js/problems/1.two-sum/solution.ts)                                                 |
| **205** | [同构字符串][205]                       | 简单 |                                                                                                                                         |
| **599** | [两个列表的最小索引总和][599]           | 简单 |                                                                                                                                         |
|      -- | 场景 II - 按键聚合                      |  --  |                                                                   --                                                                    |
| **387** | [字符串中的第一个唯一字符][387]         | 简单 |                                                                                                                                         |
| **350** | [两个数组的交集 II][350]                | 简单 |                                     [ts](js/problems/350.intersection-of-two-arrays-ii/solution.ts)                                     |
| **219** | [存在重复元素 II][219]                  | 简单 |                                                                                                                                         |
|      -- | 日志速率限制器                          |  --  |                                                                   --                                                                    |
|    \#\# | **实际应用 - 设计键**                   |  --  |                                                                   --                                                                    |
|      -- | 设计键                                  |  --  |                                                                   --                                                                    |
|  **49** | [字母异位词分组][49]                    | 中等 |                                                                                                                                         |
|      -- | 移位字符串分组                          |  --  |                                                                   --                                                                    |
|  **36** | [有效的数独][36]                        | 中等 |                                                                                                                                         |
| **652** | [寻找重复的子树][652]                   | 中等 |                                                                                                                                         |
|      -- | 设计键 - 总结                           |  --  |                                                                   --                                                                    |
|    \#\# | **小结**                                |  --  |                                                                   --                                                                    |
| **771** | [宝石与石头][771]                       | 简单 |                                                                                                                                         |
|   **3** | [无重复字符的最长子串][3]               | 中等 |                                                                                                                                         |
|      -- | 两数之和 III - 数据结构设计             |  --  |                                                                   --                                                                    |
| **454** | [四数相加 II][454]                      | 中等 |                                               [ts](js/problems/454.4-sum-ii/solution.ts)                                                |
| **347** | [前 K 个高频元素][347]                  | 中等 |                                                                                                                                         |
|      -- | 单词的唯一缩写                          |  --  |                                                                   --                                                                    |
| **380** | [常数时间插入、删除和获取随机元素][380] | 中等 |                                                                                                                                         |

### 二分查找

<https://leetcode-cn.com/explore/learn/card/binary-search/>

|       # | 二分查找                                         | 难度 |                                                                                             ts                                                                                              |
| ------: | :----------------------------------------------- | :--: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **背景**                                         |  --  |                                                                                             --                                                                                              |
|      -- | 它是如何工作的？                                 |  --  |                                                                                             --                                                                                              |
| **704** | [二分查找][704]                                  | 简单 |                                                                       [ts](js/problems/704.binary-search/solution.ts)                                                                       |
|      -- | 识别和模板简介                                   |  --  |                                                                                             --                                                                                              |
|    \#\# | **模板 I**                                       |  --  |                                                                                             --                                                                                              |
|      -- | 二分查找模板 I                                   |  --  |                                                                                             --                                                                                              |
|  **69** | [x 的平方根][69]                                 | 简单 |                                                [ts](js/problems/69.sqrt-x/solution.ts), [ts2](js/problems/69.sqrt-x/solution-newton-int.ts)                                                 |
| **374** | [猜数字大小][374]                                | 简单 |                                                               [ts](js/problems/374.guess-number-higher-or-lower/solution.ts)                                                                |
|  **33** | [搜索旋转排序数组][33]                           | 中等 |                                                               [ts](js/problems/33.search-in-rotated-sorted-array/solution.ts)                                                               |
|    \#\# | **模板 II**                                      |  --  |                                                                                             --                                                                                              |
|      -- | 二分查找模板 II                                  |  --  |                                                                                             --                                                                                              |
| **278** | [第一个错误的版本][278]                          | 简单 |                                                                     [ts](js/problems/278.first-bad-version/solution.ts)                                                                     |
| **162** | [寻找峰值][162]                                  | 中等 |                                                                     [ts](js/problems/162.find-peak-element/solution.ts)                                                                     |
| **153** | [寻找旋转排序数组中的最小值][153]                | 中等 |                                                           [ts](js/problems/153.find-minimum-in-rotated-sorted-array/solution.ts)                                                            |
|    \#\# | **模板 III**                                     |  --  |                                                                                             --                                                                                              |
|      -- | 二分查找模板 III                                 |  --  |                                                                                             --                                                                                              |
|  **34** | [在排序数组中查找元素的第一个和最后一个位置][34] | 中等 | [ts](js/problems/34.find-first-and-last-position-of-element-in-sorted-array/solution.ts), [ts2](js/problems/34.find-first-and-last-position-of-element-in-sorted-array/solution-semi-bs.ts) |
| **658** | [找到 K 个最接近的元素][658]                     | 中等 |                                                                  [ts](js/problems/658.find-k-closest-elements/solution.ts)                                                                  |
| **162** | [寻找峰值][162]                                  | 中等 |                                                                     [ts](js/problems/162.find-peak-element/solution.ts)                                                                     |
|    \#\# | **模板分析**                                     |  --  |                                                                                             --                                                                                              |
|      -- | 二分查找模板分析                                 |  --  |                                                                                             --                                                                                              |
| **270** | [最接近的二叉搜索树值][270]                      | 简单 |                                                                                                                                                                                             |
| **702** | [搜索长度未知的有序数组][702]                    | 中等 |                                                                                                                                                                                             |
|    \#\# | **小结**                                         |  --  |                                                                                             --                                                                                              |
|  **50** | [Pow(x, n)][50]                                  | 中等 |                                                                          [ts](js/problems/50.pow-x-n/solution.ts)                                                                           |
| **367** | [有效的完全平方数][367]                          | 简单 |                                                                   [ts](js/problems/367.valid-perfect-square/solution.ts)                                                                    |
| **744** | [寻找比目标字母大的最小字母][744]                | 简单 |                                                         [ts](js/problems/744.find-smallest-letter-greater-than-target/solution.ts)                                                          |
|    \#\# | **更多练习**                                     |  --  |                                                                                             --                                                                                              |
| **153** | [寻找旋转排序数组中的最小值][153]                | 中等 |                                                           [ts](js/problems/153.find-minimum-in-rotated-sorted-array/solution.ts)                                                            |
| **154** | [寻找旋转排序数组中的最小值 II][154]             | 困难 |                                                          [ts](js/problems/154.find-minimum-in-rotated-sorted-array-ii/solution.ts)                                                          |
| **349** | [两个数组的交集][349]                            | 简单 |                           [ts](js/problems/349.intersection-of-two-arrays/solution.ts), [ts2](js/problems/349.intersection-of-two-arrays/solution-two-pointer.ts)                           |
| **350** | [两个数组的交集 II][350]                         | 简单 |                                                               [ts](js/problems/350.intersection-of-two-arrays-ii/solution.ts)                                                               |
| **167** | [两数之和 II - 输入有序数组][167]                | 简单 |                                                             [ts](js/problems/167.two-sum-ii-input-array-is-sorted/solution.ts)                                                              |
|    \#\# | **更多练习 II**                                  |  --  |                                                                                             --                                                                                              |
| **287** | [寻找重复数][287]                                | 中等 |                                                                 [ts](js/problems/287.find-the-duplicate-number/solution.ts)                                                                 |
|   **4** | [寻找两个有序数组的中位数][4]                    | 困难 |                                                                 [ts](js/problems/4.median-of-two-sorted-arrays/solution.ts)                                                                 |
| **719** | [找出第 k 小的距离对][719]                       | 困难 |                                                             [ts](js/problems/719.find-k-th-smallest-pair-distance/solution.ts)                                                              |
| **410** | [分割数组的最大值][410]                          | 困难 |                                                                                                                                                                                             |

### 二叉树

<https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/>

|       # | 二叉树                                     | 难度 |                                                                    ts                                                                     |
| ------: | :----------------------------------------- | :--: | :---------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **树的遍历**                               |  --  |                                                                    --                                                                     |
|      -- | 树的遍历 - 介绍                            |  --  |                                                                    --                                                                     |
| **144** | [二叉树的前序遍历][144]                    | 中等 |                                                                                                                                           |
|  **94** | [二叉树的中序遍历][94]                     | 中等 | [ts](js/problems/94.binary-tree-inorder-traversal/solution.ts), [ts2](js/problems/94.binary-tree-inorder-traversal/solution-recursive.ts) |
| **145** | [二叉树的后序遍历][145]                    | 困难 |                                                                                                                                           |
|      -- | 层序遍历 - 介绍                            |  --  |                                                                    --                                                                     |
| **102** | [二叉树的层序遍历][102]                    | 中等 |                                                                                                                                           |
|    \#\# | **运用递归解决问题**                       |  --  |                                                                    --                                                                     |
|      -- | 运用递归解决树的问题                       |  --  |                                                                    --                                                                     |
| **104** | [二叉树的最大深度][104]                    | 简单 |                                      [ts](js/problems/104.maximum-depth-of-binary-tree/solution.ts)                                       |
| **101** | [对称二叉树][101]                          | 简单 |                                                                                                                                           |
| **112** | [路径总和][112]                            | 简单 |                                                                                                                                           |
|    \#\# | **总结**                                   |  --  |                                                                    --                                                                     |
| **106** | [从中序与后序遍历序列构造二叉树][106]      | 中等 |                                                                                                                                           |
| **105** | [从前序与中序遍历序列构造二叉树][105]      | 中等 |                                                                                                                                           |
| **116** | [填充每个节点的下一个右侧节点指针][116]    | 中等 |                                                                                                                                           |
| **117** | [填充每个节点的下一个右侧节点指针 II][117] | 中等 |                                                                                                                                           |
| **236** | [二叉树的最近公共祖先][236]                | 中等 |                                                                                                                                           |
| **297** | [二叉树的序列化与反序列化][297]            | 困难 |                                                                                                                                           |

### 二叉搜索树

<https://leetcode-cn.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/>

|       # | 二叉搜索树                        | 难度 |                                                                   ts                                                                    |
| ------: | :-------------------------------- | :--: | :-------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **二叉搜索树简介**                |  --  |                                                                   --                                                                    |
|      -- | 二叉搜索树的定义                  |  --  |                                                                   --                                                                    |
|  **98** | [验证二叉搜索树][98]              | 中等 |                                                                                                                                         |
| **173** | [二叉搜索树迭代器][173]           | 中等 |                                                                                                                                         |
|    \#\# | **二叉搜索树中的基本操作**        |  --  |                                                                   --                                                                    |
|      -- | 在二叉搜索树中实现搜索操作        |  --  |                                                                   --                                                                    |
| **700** | [二叉搜索树中的搜索][700]         | 简单 | [ts](js/problems/700.search-in-a-binary-search-tree/solution.ts), [ts2](js/problems/700.search-in-a-binary-search-tree/solution-bfs.ts) |
|      -- | 在二叉搜索树中实现插入操作 - 介绍 |  --  |                                                                   --                                                                    |
| **701** | [二叉搜索树中的插入操作][701]     | 中等 |                                                                                                                                         |
|      -- | 在二叉搜索树中实现删除操作        |  --  |                                                                   --                                                                    |
| **450** | [删除二叉搜索树中的节点][450]     | 中等 |                                                                                                                                         |
|    \#\# | **小结**                          |  --  |                                                                   --                                                                    |
|      -- | 二叉搜索树简介 - 小结             |  --  |                                                                   --                                                                    |
| **703** | [数据流中的第 K 大元素][703]      | 简单 |                                                                                                                                         |
| **235** | [二叉搜索树的最近公共祖先][235]   | 简单 |                                                                                                                                         |
| **220** | [存在重复元素 III][220]           | 中等 |                                                                                                                                         |
|    \#\# | **附录：高度平衡的二叉搜索树**    |  --  |                                                                   --                                                                    |
|      -- | 高度平衡的二叉搜索树简介          |  --  |                                                                   --                                                                    |
| **110** | [平衡二叉树][110]                 | 简单 |                                                                                                                                         |
| **108** | [将有序数组转换为二叉搜索树][108] | 简单 |                                                                                                                                         |

### N 叉树

<https://leetcode-cn.com/explore/learn/card/n-ary-tree/>

|       # | N 叉树                         | 难度 | ts  |
| ------: | :----------------------------- | :--: | :-: |
|    \#\# | **遍历**                       |  --  | --  |
|      -- | N 叉树的遍历                   |  --  | --  |
| **589** | [N 叉树的前序遍历][589]        | 简单 |     |
| **590** | [N 叉树的后序遍历][590]        | 简单 |     |
| **429** | [N 叉树的层序遍历][429]        | 中等 |     |
|    \#\# | **递归**                       |  --  | --  |
|      -- | N 叉树的经典递归解法           |  --  | --  |
| **559** | [N 叉树的最大深度][559]        | 简单 |     |
|    \#\# | **小结**                       |  --  | --  |
| **428** | [序列化和反序列化 N 叉树][428] | 困难 |     |

### 前缀树

<https://leetcode-cn.com/explore/learn/card/trie/>

|       # | 前缀树                               | 难度 | ts  |
| ------: | :----------------------------------- | :--: | :-: |
|    \#\# | **前缀树简介**                       |  --  | --  |
|      -- | 什么是前缀树?                        |  --  | --  |
|      -- | 如何表示一个前缀树？                 |  --  | --  |
|    \#\# | **基本操作**                         |  --  | --  |
|      -- | Insertion in Trie                    |  --  | --  |
|      -- | Search in Trie                       |  --  | --  |
| **208** | [实现 Trie (前缀树)][208]            | 中等 |     |
|      -- | Implement Trie - Solution            |  --  | --  |
|    \#\# | **实际应用 I**                       |  --  | --  |
| **677** | [键值映射][677]                      | 中等 |     |
| **648** | [单词替换][648]                      | 中等 |     |
| **642** | [设计搜索自动补全系统][642]          | 困难 |     |
| **211** | [添加与搜索单词 - 数据结构设计][211] | 中等 |     |
|    \#\# | **实际应用 II**                      |  --  | --  |
| **421** | [数组中两个数的最大异或值][421]      | 中等 |     |
| **212** | [单词搜索 II][212]                   | 困难 |     |
| **425** | [单词方块][425]                      | 困难 |     |
| **336** | [回文对][336]                        | 困难 |     |

### 初级算法

<https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/>

|       # | 初级算法                          | 难度 |                                                                              ts                                                                              |
| ------: | :-------------------------------- | :--: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **数组**                          |  --  |                                                                              --                                                                              |
|  **26** | [删除排序数组中的重复项][26]      | 简单 |                                             [ts](js/problems/26.remove-duplicates-from-sorted-array/solution.ts)                                             |
| **122** | [买卖股票的最佳时机 II][122]      | 简单 |                                                                                                                                                              |
| **189** | [旋转数组][189]                   | 简单 | [ts](js/problems/189.rotate-array/solution.ts), [ts2](js/problems/189.rotate-array/solution-pointer.ts), [ts3](js/problems/189.rotate-array/solution-map.ts) |
| **217** | [存在重复元素][217]               | 简单 |                                                                                                                                                              |
| **136** | [只出现一次的数字][136]           | 简单 |                                                                                                                                                              |
| **350** | [两个数组的交集 II][350]          | 简单 |                                               [ts](js/problems/350.intersection-of-two-arrays-ii/solution.ts)                                                |
|  **66** | [加一][66]                        | 简单 |                                    [ts](js/problems/66.plus-one/solution2.ts), [ts2](js/problems/66.plus-one/solution.ts)                                    |
| **283** | [移动零][283]                     | 简单 |                                                        [ts](js/problems/283.move-zeroes/solution.ts)                                                         |
|   **1** | [两数之和][1]                     | 简单 |                                                           [ts](js/problems/1.two-sum/solution.ts)                                                            |
|  **36** | [有效的数独][36]                  | 中等 |                                                                                                                                                              |
|  **48** | [旋转图像][48]                    | 中等 |                                                                                                                                                              |
|    \#\# | **字符串**                        |  --  |                                                                              --                                                                              |
| **344** | [反转字符串][344]                 | 简单 |                                                       [ts](js/problems/344.reverse-string/solution.ts)                                                       |
|   **7** | [整数反转][7]                     | 简单 |                                                                                                                                                              |
| **387** | [字符串中的第一个唯一字符][387]   | 简单 |                                                                                                                                                              |
| **242** | [有效的字母异位词][242]           | 简单 |                                                                                                                                                              |
| **125** | [验证回文串][125]                 | 简单 |                                                                                                                                                              |
|   **8** | [字符串转换整数 (atoi)][8]        | 中等 |                                                                                                                                                              |
|  **28** | [实现 strStr()][28]               | 简单 |                                                      [ts](js/problems/28.implement-str-str/solution.ts)                                                      |
|  **38** | [外观数列][38]                    | 简单 |                                                                                                                                                              |
|  **14** | [最长公共前缀][14]                | 简单 |                                                    [ts](js/problems/14.longest-common-prefix/solution.ts)                                                    |
|    \#\# | **链表**                          |  --  |                                                                              --                                                                              |
| **237** | [删除链表中的节点][237]           | 简单 |                                                                                                                                                              |
|  **19** | [删除链表的倒数第 N 个节点][19]   | 中等 |      [ts](js/problems/19.remove-nth-node-from-end-of-list/solution.ts), [ts2](js/problems/19.remove-nth-node-from-end-of-list/solution-check-input.ts)       |
| **206** | [反转链表][206]                   | 简单 |                                                    [ts](js/problems/206.reverse-linked-list/solution.ts)                                                     |
|  **21** | [合并两个有序链表][21]            | 简单 |                                                   [ts](js/problems/21.merge-two-sorted-lists/solution.ts)                                                    |
| **234** | [回文链表][234]                   | 简单 |                  [ts](js/problems/234.palindrome-linked-list/solution.ts), [ts2](js/problems/234.palindrome-linked-list/solution-unsafe.ts)                  |
| **141** | [环形链表][141]                   | 简单 |                                                     [ts](js/problems/141.linked-list-cycle/solution.ts)                                                      |
|    \#\# | **树**                            |  --  |                                                                              --                                                                              |
| **104** | [二叉树的最大深度][104]           | 简单 |                                                [ts](js/problems/104.maximum-depth-of-binary-tree/solution.ts)                                                |
|  **98** | [验证二叉搜索树][98]              | 中等 |                                                                                                                                                              |
| **101** | [对称二叉树][101]                 | 简单 |                                                                                                                                                              |
| **102** | [二叉树的层序遍历][102]           | 中等 |                                                                                                                                                              |
| **108** | [将有序数组转换为二叉搜索树][108] | 简单 |                                                                                                                                                              |
|    \#\# | **排序和搜索**                    |  --  |                                                                              --                                                                              |
|  **88** | [合并两个有序数组][88]            | 简单 |                                                                                                                                                              |
| **278** | [第一个错误的版本][278]           | 简单 |                                                     [ts](js/problems/278.first-bad-version/solution.ts)                                                      |
|    \#\# | **动态规划**                      |  --  |                                                                              --                                                                              |
|  **70** | [爬楼梯][70]                      | 简单 |                                                       [ts](js/problems/70.climbing-stairs/solution.ts)                                                       |
| **121** | [买卖股票的最佳时机][121]         | 简单 |                                                                                                                                                              |
|  **53** | [最大子序和][53]                  | 简单 |                                                                                                                                                              |
| **198** | [打家劫舍][198]                   | 简单 |                                                                                                                                                              |
|    \#\# | **设计问题**                      |  --  |                                                                              --                                                                              |
| **384** | [打乱数组][384]                   | 中等 |                                                                                                                                                              |
| **155** | [最小栈][155]                     | 简单 |                               [ts](js/problems/155.min-stack/solution.ts), [ts2](js/problems/155.min-stack/solution-class.ts)                                |
|    \#\# | **数学**                          |  --  |                                                                              --                                                                              |
| **412** | [Fizz Buzz][412]                  | 简单 |                                                                                                                                                              |
| **204** | [计数质数][204]                   | 简单 |                                                                                                                                                              |
| **326** | [3 的幂][326]                     | 简单 |                                                                                                                                                              |
|  **13** | [罗马数字转整数][13]              | 简单 |                                                                                                                                                              |
|    \#\# | **其他**                          |  --  |                                                                              --                                                                              |
| **191** | [位 1 的个数][191]                | 简单 |                                                                                                                                                              |
| **461** | [汉明距离][461]                   | 简单 |                                                                                                                                                              |
| **190** | [颠倒二进制位][190]               | 简单 |                                                                                                                                                              |
| **118** | [杨辉三角][118]                   | 简单 |                                                      [ts](js/problems/118.pascals-triangle/solution.ts)                                                      |
|  **20** | [有效的括号][20]                  | 简单 |                                                      [ts](js/problems/20.valid-parentheses/solution.ts)                                                      |
| **268** | [缺失数字][268]                   | 简单 |                                                                                                                                                              |

### 中级算法

<https://leetcode-cn.com/explore/interview/card/top-interview-questions-medium/>

|       # | 中级算法                                         | 难度 |                                                                                             ts                                                                                              |
| ------: | :----------------------------------------------- | :--: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **数组和字符串**                                 |  --  |                                                                                             --                                                                                              |
|  **15** | [三数之和][15]                                   | 中等 |                                                                                                                                                                                             |
|  **73** | [矩阵置零][73]                                   | 中等 |                                                                                                                                                                                             |
|  **49** | [字母异位词分组][49]                             | 中等 |                                                                                                                                                                                             |
|   **3** | [无重复字符的最长子串][3]                        | 中等 |                                                                                                                                                                                             |
|   **5** | [最长回文子串][5]                                | 中等 |                                                                                                                                                                                             |
| **334** | [递增的三元子序列][334]                          | 中等 |                                                                                                                                                                                             |
|    \#\# | **链表**                                         |  --  |                                                                                             --                                                                                              |
|   **2** | [两数相加][2]                                    | 中等 |                                                                       [ts](js/problems/2.add-two-numbers/solution.ts)                                                                       |
| **328** | [奇偶链表][328]                                  | 中等 |                                                                   [ts](js/problems/328.odd-even-linked-list/solution.ts)                                                                    |
| **160** | [相交链表][160]                                  | 简单 |                                                             [ts](js/problems/160.intersection-of-two-linked-lists/solution.ts)                                                              |
|    \#\# | **树和图**                                       |  --  |                                                                                             --                                                                                              |
|  **94** | [二叉树的中序遍历][94]                           | 中等 |                          [ts](js/problems/94.binary-tree-inorder-traversal/solution.ts), [ts2](js/problems/94.binary-tree-inorder-traversal/solution-recursive.ts)                          |
| **103** | [二叉树的锯齿形层次遍历][103]                    | 中等 |                                                                                                                                                                                             |
| **105** | [从前序与中序遍历序列构造二叉树][105]            | 中等 |                                                                                                                                                                                             |
| **116** | [填充每个节点的下一个右侧节点指针][116]          | 中等 |                                                                                                                                                                                             |
| **230** | [二叉搜索树中第 K 小的元素][230]                 | 中等 |                                                                                                                                                                                             |
| **200** | [岛屿数量][200]                                  | 中等 |                                        [ts](js/problems/200.number-of-islands/solution.ts), [ts2](js/problems/200.number-of-islands/solution-bfs.ts)                                        |
|    \#\# | **回溯算法**                                     |  --  |                                                                                             --                                                                                              |
|  **17** | [电话号码的字母组合][17]                         | 中等 |                                                                                                                                                                                             |
|  **22** | [括号生成][22]                                   | 中等 |                                                                                                                                                                                             |
|  **46** | [全排列][46]                                     | 中等 |                                                                                                                                                                                             |
|  **78** | [子集][78]                                       | 中等 |                                                                                                                                                                                             |
|  **79** | [单词搜索][79]                                   | 中等 |                                                                                                                                                                                             |
|    \#\# | **排序和搜索**                                   |  --  |                                                                                             --                                                                                              |
|  **75** | [颜色分类][75]                                   | 中等 |                                                                                                                                                                                             |
| **347** | [前 K 个高频元素][347]                           | 中等 |                                                                                                                                                                                             |
| **215** | [数组中的第 K 个最大元素][215]                   | 中等 |                                                                                                                                                                                             |
| **162** | [寻找峰值][162]                                  | 中等 |                                                                     [ts](js/problems/162.find-peak-element/solution.ts)                                                                     |
|  **34** | [在排序数组中查找元素的第一个和最后一个位置][34] | 中等 | [ts](js/problems/34.find-first-and-last-position-of-element-in-sorted-array/solution.ts), [ts2](js/problems/34.find-first-and-last-position-of-element-in-sorted-array/solution-semi-bs.ts) |
|  **56** | [合并区间][56]                                   | 中等 |                                                                                                                                                                                             |
|  **33** | [搜索旋转排序数组][33]                           | 中等 |                                                               [ts](js/problems/33.search-in-rotated-sorted-array/solution.ts)                                                               |
| **240** | [搜索二维矩阵 II][240]                           | 中等 |                                                                                                                                                                                             |
|    \#\# | **动态规划**                                     |  --  |                                                                                             --                                                                                              |
|  **55** | [跳跃游戏][55]                                   | 中等 |                                                                                                                                                                                             |
|  **62** | [不同路径][62]                                   | 中等 |                                                                                                                                                                                             |
| **322** | [零钱兑换][322]                                  | 中等 |                                                                                                                                                                                             |
| **300** | [最长上升子序列][300]                            | 中等 |                                                                                                                                                                                             |
|    \#\# | **设计问题**                                     |  --  |                                                                                             --                                                                                              |
| **297** | [二叉树的序列化与反序列化][297]                  | 困难 |                                                                                                                                                                                             |
| **380** | [常数时间插入、删除和获取随机元素][380]          | 中等 |                                                                                                                                                                                             |
|    \#\# | **数学**                                         |  --  |                                                                                             --                                                                                              |
| **202** | [快乐数][202]                                    | 简单 |                                                                                                                                                                                             |
| **172** | [阶乘后的零][172]                                | 简单 |                                                                                                                                                                                             |
| **171** | [Excel 表列序号][171]                            | 简单 |                                                                                                                                                                                             |
|  **50** | [Pow(x, n)][50]                                  | 中等 |                                                                          [ts](js/problems/50.pow-x-n/solution.ts)                                                                           |
|  **69** | [x 的平方根][69]                                 | 简单 |                                                [ts](js/problems/69.sqrt-x/solution.ts), [ts2](js/problems/69.sqrt-x/solution-newton-int.ts)                                                 |
|  **29** | [两数相除][29]                                   | 中等 |                                                                                                                                                                                             |
| **166** | [分数到小数][166]                                | 中等 |                                                                                                                                                                                             |
|    \#\# | **其他**                                         |  --  |                                                                                             --                                                                                              |
| **371** | [两整数之和][371]                                | 简单 |                                                                                                                                                                                             |
| **150** | [逆波兰表达式求值][150]                          | 中等 |                                                             [ts](js/problems/150.evaluate-reverse-polish-notation/solution.ts)                                                              |
| **169** | [多数元素][169]                                  | 简单 |                                                                                                                                                                                             |
| **621** | [任务调度器][621]                                | 中等 |                                                                                                                                                                                             |

### 高级算法

<https://leetcode-cn.com/explore/interview/card/top-interview-questions-hard/>

|       # | 高级算法                          | 难度 |                                                                                   ts                                                                                   |
| ------: | :-------------------------------- | :--: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **数组和字符串**                  |  --  |                                                                                   --                                                                                   |
| **238** | [除自身以外数组的乘积][238]       | 中等 |                                                                                                                                                                        |
|  **54** | [螺旋矩阵][54]                    | 中等 |                                                             [ts](js/problems/54.spiral-matrix/solution.ts)                                                             |
| **454** | [四数相加 II][454]                | 中等 |                                                               [ts](js/problems/454.4-sum-ii/solution.ts)                                                               |
|  **11** | [盛最多水的容器][11]              | 中等 |                                                                                                                                                                        |
| **289** | [生命游戏][289]                   | 中等 |                                                                                                                                                                        |
|  **41** | [缺失的第一个正数][41]            | 困难 |                                                                                                                                                                        |
| **128** | [最长连续序列][128]               | 困难 |                                                                                                                                                                        |
| **287** | [寻找重复数][287]                 | 中等 |                                                      [ts](js/problems/287.find-the-duplicate-number/solution.ts)                                                       |
| **227** | [基本计算器 II][227]              | 中等 |                                                                                                                                                                        |
| **239** | [滑动窗口最大值][239]             | 困难 |                                                                                                                                                                        |
|  **76** | [最小覆盖子串][76]                | 困难 |                                                                                                                                                                        |
|    \#\# | **链表**                          |  --  |                                                                                   --                                                                                   |
|  **23** | [合并 K 个排序链表][23]           | 困难 |                                                                                                                                                                        |
| **148** | [排序链表][148]                   | 中等 |                                                                                                                                                                        |
| **138** | [复制带随机指针的链表][138]       | 中等 |                                                    [ts](js/problems/138.copy-list-with-random-pointer/solution.ts)                                                     |
|    \#\# | **树和图**                        |  --  |                                                                                   --                                                                                   |
| **127** | [单词接龙][127]                   | 中等 |                                                                                                                                                                        |
| **130** | [被围绕的区域][130]               | 中等 |                                                                                                                                                                        |
| **236** | [二叉树的最近公共祖先][236]       | 中等 |                                                                                                                                                                        |
| **124** | [二叉树中的最大路径和][124]       | 困难 |                                                                                                                                                                        |
| **547** | [朋友圈][547]                     | 中等 |                                                                                                                                                                        |
| **207** | [课程表][207]                     | 中等 |                                                                                                                                                                        |
| **210** | [课程表 II][210]                  | 中等 |                                                                                                                                                                        |
| **329** | [矩阵中的最长递增路径][329]       | 困难 |                                                                                                                                                                        |
| **315** | [计算右侧小于当前元素的个数][315] | 困难 |                                                                                                                                                                        |
|    \#\# | **回溯算法**                      |  --  |                                                                                   --                                                                                   |
| **131** | [分割回文串][131]                 | 中等 |                                                                                                                                                                        |
| **212** | [单词搜索 II][212]                | 困难 |                                                                                                                                                                        |
| **301** | [删除无效的括号][301]             | 困难 |                                                                                                                                                                        |
|  **44** | [通配符匹配][44]                  | 困难 |                                                                                                                                                                        |
|  **10** | [正则表达式匹配][10]              | 困难 |                                                                                                                                                                        |
|    \#\# | **排序和搜索**                    |  --  |                                                                                   --                                                                                   |
| **324** | [摆动排序 II][324]                | 中等 |                                                                                                                                                                        |
| **378** | [有序矩阵中第 K 小的元素][378]    | 中等 |                                                                                                                                                                        |
|   **4** | [寻找两个有序数组的中位数][4]     | 困难 |                                                      [ts](js/problems/4.median-of-two-sorted-arrays/solution.ts)                                                       |
|    \#\# | **动态规划**                      |  --  |                                                                                   --                                                                                   |
| **152** | [乘积最大子数组][152]             | 中等 |                                                                                                                                                                        |
| **309** | [最佳买卖股票时机含冷冻期][309]   | 中等 |                                                                                                                                                                        |
| **279** | [完全平方数][279]                 | 中等 | [ts](js/problems/279.perfect-squares/solution.ts), [ts2](js/problems/279.perfect-squares/solution-bfs.ts), [ts3](js/problems/279.perfect-squares/solution-bfs-opts.ts) |
| **139** | [单词拆分][139]                   | 中等 |                                                                                                                                                                        |
| **140** | [单词拆分 II][140]                | 困难 |                                                                                                                                                                        |
| **312** | [戳气球][312]                     | 困难 |                                                                                                                                                                        |
|    \#\# | **设计问题**                      |  --  |                                                                                   --                                                                                   |
| **146** | [LRU 缓存机制][146]               | 中等 |                                                                                                                                                                        |
| **208** | [实现 Trie (前缀树)][208]         | 中等 |                                                                                                                                                                        |
| **341** | [扁平化嵌套列表迭代器][341]       | 中等 |                                                                                                                                                                        |
| **295** | [数据流的中位数][295]             | 困难 |                                                                                                                                                                        |
|    \#\# | **数学**                          |  --  |                                                                                   --                                                                                   |
| **179** | [最大数][179]                     | 中等 |                                                                                                                                                                        |
| **149** | [直线上最多的点数][149]           | 困难 |                                                                                                                                                                        |
|    \#\# | **其他**                          |  --  |                                                                                   --                                                                                   |
| **406** | [根据身高重建队列][406]           | 中等 |                                                                                                                                                                        |
|  **42** | [接雨水][42]                      | 困难 |                                                                                                                                                                        |
| **218** | [天际线问题][218]                 | 困难 |                                                                                                                                                                        |
|  **84** | [柱状图中最大的矩形][84]          | 困难 |                                                                                                                                                                        |

### 算法面试题汇总

<https://leetcode-cn.com/explore/interview/card/top-interview-quesitons/>

|       # | 算法面试题汇总                          | 难度 |                                                                                   ts                                                                                   |
| ------: | :-------------------------------------- | :--: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    \#\# | **开始之前**                            |  --  |                                                                                   --                                                                                   |
| **136** | [只出现一次的数字][136]                 | 简单 |                                                                                                                                                                        |
| **169** | [多数元素][169]                         | 简单 |                                                                                                                                                                        |
| **240** | [搜索二维矩阵 II][240]                  | 中等 |                                                                                                                                                                        |
|  **88** | [合并两个有序数组][88]                  | 简单 |                                                                                                                                                                        |
| **887** | [鸡蛋掉落][887]                         | 困难 |                                                                                                                                                                        |
|    \#\# | **主题要点**                            |  --  |                                                                                   --                                                                                   |
|      -- | 首先，理清这些重要问题类型              |  --  |                                                                                   --                                                                                   |
|      -- | 其次，掌握你的学习方向                  |  --  |                                                                                   --                                                                                   |
|    \#\# | **字符串**                              |  --  |                                                                                   --                                                                                   |
| **125** | [验证回文串][125]                       | 简单 |                                                                                                                                                                        |
| **131** | [分割回文串][131]                       | 中等 |                                                                                                                                                                        |
| **139** | [单词拆分][139]                         | 中等 |                                                                                                                                                                        |
| **140** | [单词拆分 II][140]                      | 困难 |                                                                                                                                                                        |
| **208** | [实现 Trie (前缀树)][208]               | 中等 |                                                                                                                                                                        |
| **212** | [单词搜索 II][212]                      | 困难 |                                                                                                                                                                        |
| **242** | [有效的字母异位词][242]                 | 简单 |                                                                                                                                                                        |
| **387** | [字符串中的第一个唯一字符][387]         | 简单 |                                                                                                                                                                        |
| **344** | [反转字符串][344]                       | 简单 |                                                            [ts](js/problems/344.reverse-string/solution.ts)                                                            |
|    \#\# | **数组**                                |  --  |                                                                                   --                                                                                   |
| **152** | [乘积最大子数组][152]                   | 中等 |                                                                                                                                                                        |
| **169** | [多数元素][169]                         | 简单 |                                                                                                                                                                        |
| **189** | [旋转数组][189]                         | 简单 |      [ts](js/problems/189.rotate-array/solution.ts), [ts2](js/problems/189.rotate-array/solution-pointer.ts), [ts3](js/problems/189.rotate-array/solution-map.ts)      |
| **217** | [存在重复元素][217]                     | 简单 |                                                                                                                                                                        |
| **283** | [移动零][283]                           | 简单 |                                                             [ts](js/problems/283.move-zeroes/solution.ts)                                                              |
| **384** | [打乱数组][384]                         | 中等 |                                                                                                                                                                        |
| **350** | [两个数组的交集 II][350]                | 简单 |                                                    [ts](js/problems/350.intersection-of-two-arrays-ii/solution.ts)                                                     |
| **334** | [递增的三元子序列][334]                 | 中等 |                                                                                                                                                                        |
| **240** | [搜索二维矩阵 II][240]                  | 中等 |                                                                                                                                                                        |
| **238** | [除自身以外数组的乘积][238]             | 中等 |                                                                                                                                                                        |
|    \#\# | **堆、栈与队列**                        |  --  |                                                                                   --                                                                                   |
| **155** | [最小栈][155]                           | 简单 |                                    [ts](js/problems/155.min-stack/solution.ts), [ts2](js/problems/155.min-stack/solution-class.ts)                                     |
| **215** | [数组中的第 K 个最大元素][215]          | 中等 |                                                                                                                                                                        |
| **295** | [数据流的中位数][295]                   | 困难 |                                                                                                                                                                        |
| **378** | [有序矩阵中第 K 小的元素][378]          | 中等 |                                                                                                                                                                        |
| **347** | [前 K 个高频元素][347]                  | 中等 |                                                                                                                                                                        |
| **239** | [滑动窗口最大值][239]                   | 困难 |                                                                                                                                                                        |
| **227** | [基本计算器 II][227]                    | 中等 |                                                                                                                                                                        |
| **341** | [扁平化嵌套列表迭代器][341]             | 中等 |                                                                                                                                                                        |
| **150** | [逆波兰表达式求值][150]                 | 中等 |                                                   [ts](js/problems/150.evaluate-reverse-polish-notation/solution.ts)                                                   |
|    \#\# | **链表**                                |  --  |                                                                                   --                                                                                   |
| **138** | [复制带随机指针的链表][138]             | 中等 |                                                    [ts](js/problems/138.copy-list-with-random-pointer/solution.ts)                                                     |
| **141** | [环形链表][141]                         | 简单 |                                                          [ts](js/problems/141.linked-list-cycle/solution.ts)                                                           |
| **148** | [排序链表][148]                         | 中等 |                                                                                                                                                                        |
| **160** | [相交链表][160]                         | 简单 |                                                   [ts](js/problems/160.intersection-of-two-linked-lists/solution.ts)                                                   |
| **206** | [反转链表][206]                         | 简单 |                                                         [ts](js/problems/206.reverse-linked-list/solution.ts)                                                          |
| **234** | [回文链表][234]                         | 简单 |                       [ts](js/problems/234.palindrome-linked-list/solution.ts), [ts2](js/problems/234.palindrome-linked-list/solution-unsafe.ts)                       |
| **237** | [删除链表中的节点][237]                 | 简单 |                                                                                                                                                                        |
| **328** | [奇偶链表][328]                         | 中等 |                                                         [ts](js/problems/328.odd-even-linked-list/solution.ts)                                                         |
|    \#\# | **哈希与映射**                          |  --  |                                                                                   --                                                                                   |
| **171** | [Excel 表列序号][171]                   | 简单 |                                                                                                                                                                        |
| **454** | [四数相加 II][454]                      | 中等 |                                                               [ts](js/problems/454.4-sum-ii/solution.ts)                                                               |
| **380** | [常数时间插入、删除和获取随机元素][380] | 中等 |                                                                                                                                                                        |
|    \#\# | **树**                                  |  --  |                                                                                   --                                                                                   |
| **230** | [二叉搜索树中第 K 小的元素][230]        | 中等 |                                                                                                                                                                        |
| **236** | [二叉树的最近公共祖先][236]             | 中等 |                                                                                                                                                                        |
| **297** | [二叉树的序列化与反序列化][297]         | 困难 |                                                                                                                                                                        |
| **218** | [天际线问题][218]                       | 困难 |                                                                                                                                                                        |
|    \#\# | **排序与检索**                          |  --  |                                                                                   --                                                                                   |
| **179** | [最大数][179]                           | 中等 |                                                                                                                                                                        |
| **324** | [摆动排序 II][324]                      | 中等 |                                                                                                                                                                        |
| **162** | [寻找峰值][162]                         | 中等 |                                                          [ts](js/problems/162.find-peak-element/solution.ts)                                                           |
| **287** | [寻找重复数][287]                       | 中等 |                                                      [ts](js/problems/287.find-the-duplicate-number/solution.ts)                                                       |
| **315** | [计算右侧小于当前元素的个数][315]       | 困难 |                                                                                                                                                                        |
|    \#\# | **动态规划**                            |  --  |                                                                                   --                                                                                   |
| **395** | [至少有 K 个重复字符的最长子串][395]    | 中等 |                                                                                                                                                                        |
| **124** | [二叉树中的最大路径和][124]             | 困难 |                                                                                                                                                                        |
| **128** | [最长连续序列][128]                     | 困难 |                                                                                                                                                                        |
| **198** | [打家劫舍][198]                         | 简单 |                                                                                                                                                                        |
| **279** | [完全平方数][279]                       | 中等 | [ts](js/problems/279.perfect-squares/solution.ts), [ts2](js/problems/279.perfect-squares/solution-bfs.ts), [ts3](js/problems/279.perfect-squares/solution-bfs-opts.ts) |
| **300** | [最长上升子序列][300]                   | 中等 |                                                                                                                                                                        |
| **322** | [零钱兑换][322]                         | 中等 |                                                                                                                                                                        |
| **329** | [矩阵中的最长递增路径][329]             | 困难 |                                                                                                                                                                        |
|    \#\# | **图论**                                |  --  |                                                                                   --                                                                                   |
| **127** | [单词接龙][127]                         | 中等 |                                                                                                                                                                        |
| **200** | [岛屿数量][200]                         | 中等 |                             [ts](js/problems/200.number-of-islands/solution.ts), [ts2](js/problems/200.number-of-islands/solution-bfs.ts)                              |
| **207** | [课程表][207]                           | 中等 |                                                                                                                                                                        |
| **210** | [课程表 II][210]                        | 中等 |                                                                                                                                                                        |
|    \#\# | **数学 & 位运算**                       |  --  |                                                                                   --                                                                                   |
| **136** | [只出现一次的数字][136]                 | 简单 |                                                                                                                                                                        |
| **149** | [直线上最多的点数][149]                 | 困难 |                                                                                                                                                                        |
| **166** | [分数到小数][166]                       | 中等 |                                                                                                                                                                        |
| **172** | [阶乘后的零][172]                       | 简单 |                                                                                                                                                                        |
| **190** | [颠倒二进制位][190]                     | 简单 |                                                                                                                                                                        |
| **191** | [位 1 的个数][191]                      | 简单 |                                                                                                                                                                        |
| **204** | [计数质数][204]                         | 简单 |                                                                                                                                                                        |
| **268** | [缺失数字][268]                         | 简单 |                                                                                                                                                                        |
| **326** | [3 的幂][326]                           | 简单 |                                                                                                                                                                        |
|    \#\# | **模拟面试**                            |  --  |                                                                                   --                                                                                   |
|      -- | 开始练习                                |  --  |                                                                                   --                                                                                   |
| **202** | [快乐数][202]                           | 简单 |                                                                                                                                                                        |
|      -- | ？                                      |  --  |                                                                                   --                                                                                   |
|      -- | ？                                      |  --  |                                                                                   --                                                                                   |
|      -- | ？                                      |  --  |                                                                                   --                                                                                   |
|      -- | ？                                      |  --  |                                                                                   --                                                                                   |

### 腾讯

<https://leetcode-cn.com/explore/interview/card/tencent/>

|       # | 腾讯                             | 难度 |                                               ts                                                |
| ------: | :------------------------------- | :--: | :---------------------------------------------------------------------------------------------: |
|    \#\# | **数组与字符串**                 |  --  |                                               --                                                |
|   **1** | [两数之和][1]                    | 简单 |                             [ts](js/problems/1.two-sum/solution.ts)                             |
|   **4** | [寻找两个有序数组的中位数][4]    | 困难 |                   [ts](js/problems/4.median-of-two-sorted-arrays/solution.ts)                   |
|   **5** | [最长回文子串][5]                | 中等 |                                                                                                 |
|   **8** | [字符串转换整数 (atoi)][8]       | 中等 |                                                                                                 |
|  **14** | [最长公共前缀][14]               | 简单 |                     [ts](js/problems/14.longest-common-prefix/solution.ts)                      |
|  **15** | [三数之和][15]                   | 中等 |                                                                                                 |
|  **16** | [最接近的三数之和][16]           | 中等 |                                                                                                 |
|  **20** | [有效的括号][20]                 | 简单 |                       [ts](js/problems/20.valid-parentheses/solution.ts)                        |
|  **26** | [删除排序数组中的重复项][26]     | 简单 |              [ts](js/problems/26.remove-duplicates-from-sorted-array/solution.ts)               |
|  **11** | [盛最多水的容器][11]             | 中等 |                                                                                                 |
|  **43** | [字符串相乘][43]                 | 中等 |                                                                                                 |
| **344** | [反转字符串][344]                | 简单 |                        [ts](js/problems/344.reverse-string/solution.ts)                         |
| **557** | [反转字符串中的单词 III][557]    | 简单 |                 [ts](js/problems/557.reverse-words-in-a-string-iii/solution.ts)                 |
| **238** | [除自身以外数组的乘积][238]      | 中等 |                                                                                                 |
| **217** | [存在重复元素][217]              | 简单 |                                                                                                 |
|  **54** | [螺旋矩阵][54]                   | 中等 |                         [ts](js/problems/54.spiral-matrix/solution.ts)                          |
|  **59** | [螺旋矩阵 II][59]                | 中等 |                                                                                                 |
|  **88** | [合并两个有序数组][88]           | 简单 |                                                                                                 |
|    \#\# | **链表突击**                     |  --  |                                               --                                                |
| **206** | [反转链表][206]                  | 简单 |                      [ts](js/problems/206.reverse-linked-list/solution.ts)                      |
|   **2** | [两数相加][2]                    | 中等 |                         [ts](js/problems/2.add-two-numbers/solution.ts)                         |
|  **21** | [合并两个有序链表][21]           | 简单 |                     [ts](js/problems/21.merge-two-sorted-lists/solution.ts)                     |
|  **23** | [合并 K 个排序链表][23]          | 困难 |                                                                                                 |
|  **61** | [旋转链表][61]                   | 中等 |                          [ts](js/problems/61.rotate-list/solution.ts)                           |
| **141** | [环形链表][141]                  | 简单 |                       [ts](js/problems/141.linked-list-cycle/solution.ts)                       |
| **142** | [环形链表 II][142]               | 中等 |                     [ts](js/problems/142.linked-list-cycle-ii/solution.ts)                      |
| **160** | [相交链表][160]                  | 简单 |               [ts](js/problems/160.intersection-of-two-linked-lists/solution.ts)                |
| **237** | [删除链表中的节点][237]          | 简单 |                                                                                                 |
|    \#\# | **数学与数字**                   |  --  |                                               --                                                |
|   **7** | [整数反转][7]                    | 简单 |                                                                                                 |
|   **9** | [回文数][9]                      | 简单 |                                                                                                 |
| **136** | [只出现一次的数字][136]          | 简单 |                                                                                                 |
| **169** | [多数元素][169]                  | 简单 |                                                                                                 |
| **231** | [2 的幂][231]                    | 简单 |                                                                                                 |
|    \#\# | **排序与搜索**                   |  --  |                                               --                                                |
| **148** | [排序链表][148]                  | 中等 |                                                                                                 |
|  **33** | [搜索旋转排序数组][33]           | 中等 |                 [ts](js/problems/33.search-in-rotated-sorted-array/solution.ts)                 |
| **215** | [数组中的第 K 个最大元素][215]   | 中等 |                                                                                                 |
| **230** | [二叉搜索树中第 K 小的元素][230] | 中等 |                                                                                                 |
| **104** | [二叉树的最大深度][104]          | 简单 |                 [ts](js/problems/104.maximum-depth-of-binary-tree/solution.ts)                  |
| **124** | [二叉树中的最大路径和][124]      | 困难 |                                                                                                 |
| **235** | [二叉搜索树的最近公共祖先][235]  | 简单 |                                                                                                 |
| **236** | [二叉树的最近公共祖先][236]      | 中等 |                                                                                                 |
|    \#\# | **回溯算法**                     |  --  |                                               --                                                |
|  **22** | [括号生成][22]                   | 中等 |                                                                                                 |
|  **78** | [子集][78]                       | 中等 |                                                                                                 |
|  **46** | [全排列][46]                     | 中等 |                                                                                                 |
|  **89** | [格雷编码][89]                   | 中等 |                                                                                                 |
|    \#\# | **动态规划**                     |  --  |                                               --                                                |
|  **70** | [爬楼梯][70]                     | 简单 |                        [ts](js/problems/70.climbing-stairs/solution.ts)                         |
|  **53** | [最大子序和][53]                 | 简单 |                                                                                                 |
| **121** | [买卖股票的最佳时机][121]        | 简单 |                                                                                                 |
| **122** | [买卖股票的最佳时机 II][122]     | 简单 |                                                                                                 |
|  **62** | [不同路径][62]                   | 中等 |                                                                                                 |
|  **78** | [子集][78]                       | 中等 |                                                                                                 |
|    \#\# | **设计**                         |  --  |                                               --                                                |
| **146** | [LRU 缓存机制][146]              | 中等 |                                                                                                 |
| **155** | [最小栈][155]                    | 简单 | [ts](js/problems/155.min-stack/solution.ts), [ts2](js/problems/155.min-stack/solution-class.ts) |
|    \#\# | **附加**                         |  --  |                                               --                                                |
| **292** | [Nim 游戏][292]                  | 简单 |                                                                                                 |
|      -- | 腾讯申请                         |  --  |                                               --                                                |

### 字节跳动

<https://leetcode-cn.com/explore/interview/card/bytedance/>

|       # | 字节跳动                       | 难度 |                                               ts                                                |
| ------: | :----------------------------- | :--: | :---------------------------------------------------------------------------------------------: |
|    \#\# | **挑战字符串**                 |  --  |                                               --                                                |
|   **3** | [无重复字符的最长子串][3]      | 中等 |                                                                                                 |
|  **14** | [最长公共前缀][14]             | 简单 |                     [ts](js/problems/14.longest-common-prefix/solution.ts)                      |
| **567** | [字符串的排列][567]            | 中等 |                                                                                                 |
|  **43** | [字符串相乘][43]               | 中等 |                                                                                                 |
| **151** | [翻转字符串里的单词][151]      | 中等 |                   [ts](js/problems/151.reverse-words-in-a-string/solution.ts)                   |
|  **71** | [简化路径][71]                 | 中等 |                                                                                                 |
|  **93** | [复原 IP 地址][93]             | 中等 |                                                                                                 |
|    \#\# | **数组与排序**                 |  --  |                                               --                                                |
|  **15** | [三数之和][15]                 | 中等 |                                                                                                 |
| **695** | [岛屿的最大面积][695]          | 中等 |                                                                                                 |
|  **33** | [搜索旋转排序数组][33]         | 中等 |                 [ts](js/problems/33.search-in-rotated-sorted-array/solution.ts)                 |
| **674** | [最长连续递增序列][674]        | 简单 |                                                                                                 |
| **215** | [数组中的第 K 个最大元素][215] | 中等 |                                                                                                 |
| **128** | [最长连续序列][128]            | 困难 |                                                                                                 |
|  **60** | [第 k 个排列][60]              | 中等 |                                                                                                 |
| **547** | [朋友圈][547]                  | 中等 |                                                                                                 |
|  **56** | [合并区间][56]                 | 中等 |                                                                                                 |
|  **42** | [接雨水][42]                   | 困难 |                                                                                                 |
|    \#\# | **链表与树**                   |  --  |                                               --                                                |
|  **21** | [合并两个有序链表][21]         | 简单 |                     [ts](js/problems/21.merge-two-sorted-lists/solution.ts)                     |
| **206** | [反转链表][206]                | 简单 |                      [ts](js/problems/206.reverse-linked-list/solution.ts)                      |
|   **2** | [两数相加][2]                  | 中等 |                         [ts](js/problems/2.add-two-numbers/solution.ts)                         |
| **148** | [排序链表][148]                | 中等 |                                                                                                 |
| **142** | [环形链表 II][142]             | 中等 |                     [ts](js/problems/142.linked-list-cycle-ii/solution.ts)                      |
| **160** | [相交链表][160]                | 简单 |               [ts](js/problems/160.intersection-of-two-linked-lists/solution.ts)                |
|  **23** | [合并 K 个排序链表][23]        | 困难 |                                                                                                 |
| **236** | [二叉树的最近公共祖先][236]    | 中等 |                                                                                                 |
| **103** | [二叉树的锯齿形层次遍历][103]  | 中等 |                                                                                                 |
|    \#\# | **动态或贪心**                 |  --  |                                               --                                                |
| **121** | [买卖股票的最佳时机][121]      | 简单 |                                                                                                 |
| **122** | [买卖股票的最佳时机 II][122]   | 简单 |                                                                                                 |
| **221** | [最大正方形][221]              | 中等 |                                                                                                 |
|  **53** | [最大子序和][53]               | 简单 |                                                                                                 |
| **120** | [三角形最小路径和][120]        | 中等 |                                                                                                 |
| **354** | [俄罗斯套娃信封问题][354]      | 困难 |                                                                                                 |
|    \#\# | **数据结构**                   |  --  |                                               --                                                |
| **155** | [最小栈][155]                  | 简单 | [ts](js/problems/155.min-stack/solution.ts), [ts2](js/problems/155.min-stack/solution-class.ts) |
| **146** | [LRU 缓存机制][146]            | 中等 |                                                                                                 |
| **432** | [全 O(1) 的数据结构][432]      | 困难 |                                                                                                 |
|    \#\# | **拓展练习**                   |  --  |                                               --                                                |
|  **69** | [x 的平方根][69]               | 简单 |  [ts](js/problems/69.sqrt-x/solution.ts), [ts2](js/problems/69.sqrt-x/solution-newton-int.ts)   |
| **393** | [UTF-8 编码验证][393]          | 中等 |                                                                                                 |
| **176** | [第二高的薪水][176]            | 简单 |                                                                                                 |

### Teambition

<https://leetcode-cn.com/explore/interview/card/teambition/>

|       # | Teambition                        | 难度 | ts  |
| ------: | :-------------------------------- | :--: | :-: |
|    \#\# | **挑战数据结构**                  |  --  | --  |
|  **23** | [合并 K 个排序链表][23]           | 困难 |     |
|  **68** | [文本左右对齐][68]                | 困难 |     |
|  **97** | [交错字符串][97]                  | 困难 |     |
| **145** | [二叉树的后序遍历][145]           | 困难 |     |
| **165** | [比较版本号][165]                 | 中等 |     |
| **297** | [二叉树的序列化与反序列化][297]   | 困难 |     |
| **432** | [全 O(1) 的数据结构][432]         | 困难 |     |
| **662** | [二叉树最大宽度][662]             | 中等 |     |
| **899** | [有序队列][899]                   | 困难 |     |
| **907** | [子数组的最小值之和][907]         | 中等 |     |
|    \#\# | **挑战算法**                      |  --  | --  |
| **218** | [天际线问题][218]                 | 困难 |     |
| **410** | [分割数组的最大值][410]           | 困难 |     |
| **514** | [自由之路][514]                   | 困难 |     |
| **546** | [移除盒子][546]                   | 困难 |     |
| **629** | [K 个逆序对数组][629]             | 困难 |     |
| **679** | [24 点游戏][679]                  | 困难 |     |
| **777** | [在 LR 字符串中交换相邻字符][777] | 中等 |     |
| **899** | [有序队列][899]                   | 困难 |     |
| **940** | [不同的子序列 II][940]            | 困难 |     |
| **960** | [删列造序 III][960]               | 困难 |     |

## 题库

[1]: https://leetcode-cn.com/problems/two-sum
[2]: https://leetcode-cn.com/problems/add-two-numbers
[3]: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
[4]: https://leetcode-cn.com/problems/median-of-two-sorted-arrays
[5]: https://leetcode-cn.com/problems/longest-palindromic-substring
[6]: https://leetcode-cn.com/problems/zigzag-conversion
[7]: https://leetcode-cn.com/problems/reverse-integer
[8]: https://leetcode-cn.com/problems/string-to-integer-atoi
[9]: https://leetcode-cn.com/problems/palindrome-number
[10]: https://leetcode-cn.com/problems/regular-expression-matching
[11]: https://leetcode-cn.com/problems/container-with-most-water
[12]: https://leetcode-cn.com/problems/integer-to-roman
[13]: https://leetcode-cn.com/problems/roman-to-integer
[14]: https://leetcode-cn.com/problems/longest-common-prefix
[15]: https://leetcode-cn.com/problems/3sum
[16]: https://leetcode-cn.com/problems/3sum-closest
[17]: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
[18]: https://leetcode-cn.com/problems/4sum
[19]: https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
[20]: https://leetcode-cn.com/problems/valid-parentheses
[21]: https://leetcode-cn.com/problems/merge-two-sorted-lists
[22]: https://leetcode-cn.com/problems/generate-parentheses
[23]: https://leetcode-cn.com/problems/merge-k-sorted-lists
[24]: https://leetcode-cn.com/problems/swap-nodes-in-pairs
[25]: https://leetcode-cn.com/problems/reverse-nodes-in-k-group
[26]: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
[27]: https://leetcode-cn.com/problems/remove-element
[28]: https://leetcode-cn.com/problems/implement-strstr
[29]: https://leetcode-cn.com/problems/divide-two-integers
[30]: https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words
[31]: https://leetcode-cn.com/problems/next-permutation
[32]: https://leetcode-cn.com/problems/longest-valid-parentheses
[33]: https://leetcode-cn.com/problems/search-in-rotated-sorted-array
[34]: https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
[35]: https://leetcode-cn.com/problems/search-insert-position
[36]: https://leetcode-cn.com/problems/valid-sudoku
[37]: https://leetcode-cn.com/problems/sudoku-solver
[38]: https://leetcode-cn.com/problems/count-and-say
[39]: https://leetcode-cn.com/problems/combination-sum
[40]: https://leetcode-cn.com/problems/combination-sum-ii
[41]: https://leetcode-cn.com/problems/first-missing-positive
[42]: https://leetcode-cn.com/problems/trapping-rain-water
[43]: https://leetcode-cn.com/problems/multiply-strings
[44]: https://leetcode-cn.com/problems/wildcard-matching
[45]: https://leetcode-cn.com/problems/jump-game-ii
[46]: https://leetcode-cn.com/problems/permutations
[47]: https://leetcode-cn.com/problems/permutations-ii
[48]: https://leetcode-cn.com/problems/rotate-image
[49]: https://leetcode-cn.com/problems/group-anagrams
[50]: https://leetcode-cn.com/problems/powx-n
[51]: https://leetcode-cn.com/problems/n-queens
[52]: https://leetcode-cn.com/problems/n-queens-ii
[53]: https://leetcode-cn.com/problems/maximum-subarray
[54]: https://leetcode-cn.com/problems/spiral-matrix
[55]: https://leetcode-cn.com/problems/jump-game
[56]: https://leetcode-cn.com/problems/merge-intervals
[57]: https://leetcode-cn.com/problems/insert-interval
[58]: https://leetcode-cn.com/problems/length-of-last-word
[59]: https://leetcode-cn.com/problems/spiral-matrix-ii
[60]: https://leetcode-cn.com/problems/permutation-sequence
[61]: https://leetcode-cn.com/problems/rotate-list
[62]: https://leetcode-cn.com/problems/unique-paths
[63]: https://leetcode-cn.com/problems/unique-paths-ii
[64]: https://leetcode-cn.com/problems/minimum-path-sum
[65]: https://leetcode-cn.com/problems/valid-number
[66]: https://leetcode-cn.com/problems/plus-one
[67]: https://leetcode-cn.com/problems/add-binary
[68]: https://leetcode-cn.com/problems/text-justification
[69]: https://leetcode-cn.com/problems/sqrtx
[70]: https://leetcode-cn.com/problems/climbing-stairs
[71]: https://leetcode-cn.com/problems/simplify-path
[72]: https://leetcode-cn.com/problems/edit-distance
[73]: https://leetcode-cn.com/problems/set-matrix-zeroes
[74]: https://leetcode-cn.com/problems/search-a-2d-matrix
[75]: https://leetcode-cn.com/problems/sort-colors
[76]: https://leetcode-cn.com/problems/minimum-window-substring
[77]: https://leetcode-cn.com/problems/combinations
[78]: https://leetcode-cn.com/problems/subsets
[79]: https://leetcode-cn.com/problems/word-search
[80]: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii
[81]: https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii
[82]: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
[83]: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
[84]: https://leetcode-cn.com/problems/largest-rectangle-in-histogram
[85]: https://leetcode-cn.com/problems/maximal-rectangle
[86]: https://leetcode-cn.com/problems/partition-list
[87]: https://leetcode-cn.com/problems/scramble-string
[88]: https://leetcode-cn.com/problems/merge-sorted-array
[89]: https://leetcode-cn.com/problems/gray-code
[90]: https://leetcode-cn.com/problems/subsets-ii
[91]: https://leetcode-cn.com/problems/decode-ways
[92]: https://leetcode-cn.com/problems/reverse-linked-list-ii
[93]: https://leetcode-cn.com/problems/restore-ip-addresses
[94]: https://leetcode-cn.com/problems/binary-tree-inorder-traversal
[95]: https://leetcode-cn.com/problems/unique-binary-search-trees-ii
[96]: https://leetcode-cn.com/problems/unique-binary-search-trees
[97]: https://leetcode-cn.com/problems/interleaving-string
[98]: https://leetcode-cn.com/problems/validate-binary-search-tree
[99]: https://leetcode-cn.com/problems/recover-binary-search-tree
[100]: https://leetcode-cn.com/problems/same-tree
[101]: https://leetcode-cn.com/problems/symmetric-tree
[102]: https://leetcode-cn.com/problems/binary-tree-level-order-traversal
[103]: https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal
[104]: https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
[105]: https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
[106]: https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
[107]: https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii
[108]: https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree
[109]: https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree
[110]: https://leetcode-cn.com/problems/balanced-binary-tree
[111]: https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
[112]: https://leetcode-cn.com/problems/path-sum
[113]: https://leetcode-cn.com/problems/path-sum-ii
[114]: https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list
[115]: https://leetcode-cn.com/problems/distinct-subsequences
[116]: https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node
[117]: https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii
[118]: https://leetcode-cn.com/problems/pascals-triangle
[119]: https://leetcode-cn.com/problems/pascals-triangle-ii
[120]: https://leetcode-cn.com/problems/triangle
[121]: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
[122]: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
[123]: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii
[124]: https://leetcode-cn.com/problems/binary-tree-maximum-path-sum
[125]: https://leetcode-cn.com/problems/valid-palindrome
[126]: https://leetcode-cn.com/problems/word-ladder-ii
[127]: https://leetcode-cn.com/problems/word-ladder
[128]: https://leetcode-cn.com/problems/longest-consecutive-sequence
[129]: https://leetcode-cn.com/problems/sum-root-to-leaf-numbers
[130]: https://leetcode-cn.com/problems/surrounded-regions
[131]: https://leetcode-cn.com/problems/palindrome-partitioning
[132]: https://leetcode-cn.com/problems/palindrome-partitioning-ii
[133]: https://leetcode-cn.com/problems/clone-graph
[134]: https://leetcode-cn.com/problems/gas-station
[135]: https://leetcode-cn.com/problems/candy
[136]: https://leetcode-cn.com/problems/single-number
[137]: https://leetcode-cn.com/problems/single-number-ii
[138]: https://leetcode-cn.com/problems/copy-list-with-random-pointer
[139]: https://leetcode-cn.com/problems/word-break
[140]: https://leetcode-cn.com/problems/word-break-ii
[141]: https://leetcode-cn.com/problems/linked-list-cycle
[142]: https://leetcode-cn.com/problems/linked-list-cycle-ii
[143]: https://leetcode-cn.com/problems/reorder-list
[144]: https://leetcode-cn.com/problems/binary-tree-preorder-traversal
[145]: https://leetcode-cn.com/problems/binary-tree-postorder-traversal
[146]: https://leetcode-cn.com/problems/lru-cache
[147]: https://leetcode-cn.com/problems/insertion-sort-list
[148]: https://leetcode-cn.com/problems/sort-list
[149]: https://leetcode-cn.com/problems/max-points-on-a-line
[150]: https://leetcode-cn.com/problems/evaluate-reverse-polish-notation
[151]: https://leetcode-cn.com/problems/reverse-words-in-a-string
[152]: https://leetcode-cn.com/problems/maximum-product-subarray
[153]: https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array
[154]: https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii
[155]: https://leetcode-cn.com/problems/min-stack
[156]: https://leetcode-cn.com/problems/binary-tree-upside-down
[157]: https://leetcode-cn.com/problems/read-n-characters-given-read4
[158]: https://leetcode-cn.com/problems/read-n-characters-given-read4-ii-call-multiple-times
[159]: https://leetcode-cn.com/problems/longest-substring-with-at-most-two-distinct-characters
[160]: https://leetcode-cn.com/problems/intersection-of-two-linked-lists
[161]: https://leetcode-cn.com/problems/one-edit-distance
[162]: https://leetcode-cn.com/problems/find-peak-element
[163]: https://leetcode-cn.com/problems/missing-ranges
[164]: https://leetcode-cn.com/problems/maximum-gap
[165]: https://leetcode-cn.com/problems/compare-version-numbers
[166]: https://leetcode-cn.com/problems/fraction-to-recurring-decimal
[167]: https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
[168]: https://leetcode-cn.com/problems/excel-sheet-column-title
[169]: https://leetcode-cn.com/problems/majority-element
[170]: https://leetcode-cn.com/problems/two-sum-iii-data-structure-design
[171]: https://leetcode-cn.com/problems/excel-sheet-column-number
[172]: https://leetcode-cn.com/problems/factorial-trailing-zeroes
[173]: https://leetcode-cn.com/problems/binary-search-tree-iterator
[174]: https://leetcode-cn.com/problems/dungeon-game
[175]: https://leetcode-cn.com/problems/combine-two-tables
[176]: https://leetcode-cn.com/problems/second-highest-salary
[177]: https://leetcode-cn.com/problems/nth-highest-salary
[178]: https://leetcode-cn.com/problems/rank-scores
[179]: https://leetcode-cn.com/problems/largest-number
[180]: https://leetcode-cn.com/problems/consecutive-numbers
[181]: https://leetcode-cn.com/problems/employees-earning-more-than-their-managers
[182]: https://leetcode-cn.com/problems/duplicate-emails
[183]: https://leetcode-cn.com/problems/customers-who-never-order
[184]: https://leetcode-cn.com/problems/department-highest-salary
[185]: https://leetcode-cn.com/problems/department-top-three-salaries
[186]: https://leetcode-cn.com/problems/reverse-words-in-a-string-ii
[187]: https://leetcode-cn.com/problems/repeated-dna-sequences
[188]: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv
[189]: https://leetcode-cn.com/problems/rotate-array
[190]: https://leetcode-cn.com/problems/reverse-bits
[191]: https://leetcode-cn.com/problems/number-of-1-bits
[192]: https://leetcode-cn.com/problems/word-frequency
[193]: https://leetcode-cn.com/problems/valid-phone-numbers
[194]: https://leetcode-cn.com/problems/transpose-file
[195]: https://leetcode-cn.com/problems/tenth-line
[196]: https://leetcode-cn.com/problems/delete-duplicate-emails
[197]: https://leetcode-cn.com/problems/rising-temperature
[198]: https://leetcode-cn.com/problems/house-robber
[199]: https://leetcode-cn.com/problems/binary-tree-right-side-view
[200]: https://leetcode-cn.com/problems/number-of-islands
[201]: https://leetcode-cn.com/problems/bitwise-and-of-numbers-range
[202]: https://leetcode-cn.com/problems/happy-number
[203]: https://leetcode-cn.com/problems/remove-linked-list-elements
[204]: https://leetcode-cn.com/problems/count-primes
[205]: https://leetcode-cn.com/problems/isomorphic-strings
[206]: https://leetcode-cn.com/problems/reverse-linked-list
[207]: https://leetcode-cn.com/problems/course-schedule
[208]: https://leetcode-cn.com/problems/implement-trie-prefix-tree
[209]: https://leetcode-cn.com/problems/minimum-size-subarray-sum
[210]: https://leetcode-cn.com/problems/course-schedule-ii
[211]: https://leetcode-cn.com/problems/add-and-search-word-data-structure-design
[212]: https://leetcode-cn.com/problems/word-search-ii
[213]: https://leetcode-cn.com/problems/house-robber-ii
[214]: https://leetcode-cn.com/problems/shortest-palindrome
[215]: https://leetcode-cn.com/problems/kth-largest-element-in-an-array
[216]: https://leetcode-cn.com/problems/combination-sum-iii
[217]: https://leetcode-cn.com/problems/contains-duplicate
[218]: https://leetcode-cn.com/problems/the-skyline-problem
[219]: https://leetcode-cn.com/problems/contains-duplicate-ii
[220]: https://leetcode-cn.com/problems/contains-duplicate-iii
[221]: https://leetcode-cn.com/problems/maximal-square
[222]: https://leetcode-cn.com/problems/count-complete-tree-nodes
[223]: https://leetcode-cn.com/problems/rectangle-area
[224]: https://leetcode-cn.com/problems/basic-calculator
[225]: https://leetcode-cn.com/problems/implement-stack-using-queues
[226]: https://leetcode-cn.com/problems/invert-binary-tree
[227]: https://leetcode-cn.com/problems/basic-calculator-ii
[228]: https://leetcode-cn.com/problems/summary-ranges
[229]: https://leetcode-cn.com/problems/majority-element-ii
[230]: https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst
[231]: https://leetcode-cn.com/problems/power-of-two
[232]: https://leetcode-cn.com/problems/implement-queue-using-stacks
[233]: https://leetcode-cn.com/problems/number-of-digit-one
[234]: https://leetcode-cn.com/problems/palindrome-linked-list
[235]: https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree
[236]: https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree
[237]: https://leetcode-cn.com/problems/delete-node-in-a-linked-list
[238]: https://leetcode-cn.com/problems/product-of-array-except-self
[239]: https://leetcode-cn.com/problems/sliding-window-maximum
[240]: https://leetcode-cn.com/problems/search-a-2d-matrix-ii
[241]: https://leetcode-cn.com/problems/different-ways-to-add-parentheses
[242]: https://leetcode-cn.com/problems/valid-anagram
[243]: https://leetcode-cn.com/problems/shortest-word-distance
[244]: https://leetcode-cn.com/problems/shortest-word-distance-ii
[245]: https://leetcode-cn.com/problems/shortest-word-distance-iii
[246]: https://leetcode-cn.com/problems/strobogrammatic-number
[247]: https://leetcode-cn.com/problems/strobogrammatic-number-ii
[248]: https://leetcode-cn.com/problems/strobogrammatic-number-iii
[249]: https://leetcode-cn.com/problems/group-shifted-strings
[250]: https://leetcode-cn.com/problems/count-univalue-subtrees
[251]: https://leetcode-cn.com/problems/flatten-2d-vector
[252]: https://leetcode-cn.com/problems/meeting-rooms
[253]: https://leetcode-cn.com/problems/meeting-rooms-ii
[254]: https://leetcode-cn.com/problems/factor-combinations
[255]: https://leetcode-cn.com/problems/verify-preorder-sequence-in-binary-search-tree
[256]: https://leetcode-cn.com/problems/paint-house
[257]: https://leetcode-cn.com/problems/binary-tree-paths
[258]: https://leetcode-cn.com/problems/add-digits
[259]: https://leetcode-cn.com/problems/3sum-smaller
[260]: https://leetcode-cn.com/problems/single-number-iii
[261]: https://leetcode-cn.com/problems/graph-valid-tree
[262]: https://leetcode-cn.com/problems/trips-and-users
[263]: https://leetcode-cn.com/problems/ugly-number
[264]: https://leetcode-cn.com/problems/ugly-number-ii
[265]: https://leetcode-cn.com/problems/paint-house-ii
[266]: https://leetcode-cn.com/problems/palindrome-permutation
[267]: https://leetcode-cn.com/problems/palindrome-permutation-ii
[268]: https://leetcode-cn.com/problems/missing-number
[269]: https://leetcode-cn.com/problems/alien-dictionary
[270]: https://leetcode-cn.com/problems/closest-binary-search-tree-value
[271]: https://leetcode-cn.com/problems/encode-and-decode-strings
[272]: https://leetcode-cn.com/problems/closest-binary-search-tree-value-ii
[273]: https://leetcode-cn.com/problems/integer-to-english-words
[274]: https://leetcode-cn.com/problems/h-index
[275]: https://leetcode-cn.com/problems/h-index-ii
[276]: https://leetcode-cn.com/problems/paint-fence
[277]: https://leetcode-cn.com/problems/find-the-celebrity
[278]: https://leetcode-cn.com/problems/first-bad-version
[279]: https://leetcode-cn.com/problems/perfect-squares
[280]: https://leetcode-cn.com/problems/wiggle-sort
[281]: https://leetcode-cn.com/problems/zigzag-iterator
[282]: https://leetcode-cn.com/problems/expression-add-operators
[283]: https://leetcode-cn.com/problems/move-zeroes
[284]: https://leetcode-cn.com/problems/peeking-iterator
[285]: https://leetcode-cn.com/problems/inorder-successor-in-bst
[286]: https://leetcode-cn.com/problems/walls-and-gates
[287]: https://leetcode-cn.com/problems/find-the-duplicate-number
[288]: https://leetcode-cn.com/problems/unique-word-abbreviation
[289]: https://leetcode-cn.com/problems/game-of-life
[290]: https://leetcode-cn.com/problems/word-pattern
[291]: https://leetcode-cn.com/problems/word-pattern-ii
[292]: https://leetcode-cn.com/problems/nim-game
[293]: https://leetcode-cn.com/problems/flip-game
[294]: https://leetcode-cn.com/problems/flip-game-ii
[295]: https://leetcode-cn.com/problems/find-median-from-data-stream
[296]: https://leetcode-cn.com/problems/best-meeting-point
[297]: https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree
[298]: https://leetcode-cn.com/problems/binary-tree-longest-consecutive-sequence
[299]: https://leetcode-cn.com/problems/bulls-and-cows
[300]: https://leetcode-cn.com/problems/longest-increasing-subsequence
[301]: https://leetcode-cn.com/problems/remove-invalid-parentheses
[302]: https://leetcode-cn.com/problems/smallest-rectangle-enclosing-black-pixels
[303]: https://leetcode-cn.com/problems/range-sum-query-immutable
[304]: https://leetcode-cn.com/problems/range-sum-query-2d-immutable
[305]: https://leetcode-cn.com/problems/number-of-islands-ii
[306]: https://leetcode-cn.com/problems/additive-number
[307]: https://leetcode-cn.com/problems/range-sum-query-mutable
[308]: https://leetcode-cn.com/problems/range-sum-query-2d-mutable
[309]: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown
[310]: https://leetcode-cn.com/problems/minimum-height-trees
[311]: https://leetcode-cn.com/problems/sparse-matrix-multiplication
[312]: https://leetcode-cn.com/problems/burst-balloons
[313]: https://leetcode-cn.com/problems/super-ugly-number
[314]: https://leetcode-cn.com/problems/binary-tree-vertical-order-traversal
[315]: https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self
[316]: https://leetcode-cn.com/problems/remove-duplicate-letters
[317]: https://leetcode-cn.com/problems/shortest-distance-from-all-buildings
[318]: https://leetcode-cn.com/problems/maximum-product-of-word-lengths
[319]: https://leetcode-cn.com/problems/bulb-switcher
[320]: https://leetcode-cn.com/problems/generalized-abbreviation
[321]: https://leetcode-cn.com/problems/create-maximum-number
[322]: https://leetcode-cn.com/problems/coin-change
[323]: https://leetcode-cn.com/problems/number-of-connected-components-in-an-undirected-graph
[324]: https://leetcode-cn.com/problems/wiggle-sort-ii
[325]: https://leetcode-cn.com/problems/maximum-size-subarray-sum-equals-k
[326]: https://leetcode-cn.com/problems/power-of-three
[327]: https://leetcode-cn.com/problems/count-of-range-sum
[328]: https://leetcode-cn.com/problems/odd-even-linked-list
[329]: https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix
[330]: https://leetcode-cn.com/problems/patching-array
[331]: https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree
[332]: https://leetcode-cn.com/problems/reconstruct-itinerary
[333]: https://leetcode-cn.com/problems/largest-bst-subtree
[334]: https://leetcode-cn.com/problems/increasing-triplet-subsequence
[335]: https://leetcode-cn.com/problems/self-crossing
[336]: https://leetcode-cn.com/problems/palindrome-pairs
[337]: https://leetcode-cn.com/problems/house-robber-iii
[338]: https://leetcode-cn.com/problems/counting-bits
[339]: https://leetcode-cn.com/problems/nested-list-weight-sum
[340]: https://leetcode-cn.com/problems/longest-substring-with-at-most-k-distinct-characters
[341]: https://leetcode-cn.com/problems/flatten-nested-list-iterator
[342]: https://leetcode-cn.com/problems/power-of-four
[343]: https://leetcode-cn.com/problems/integer-break
[344]: https://leetcode-cn.com/problems/reverse-string
[345]: https://leetcode-cn.com/problems/reverse-vowels-of-a-string
[346]: https://leetcode-cn.com/problems/moving-average-from-data-stream
[347]: https://leetcode-cn.com/problems/top-k-frequent-elements
[348]: https://leetcode-cn.com/problems/design-tic-tac-toe
[349]: https://leetcode-cn.com/problems/intersection-of-two-arrays
[350]: https://leetcode-cn.com/problems/intersection-of-two-arrays-ii
[351]: https://leetcode-cn.com/problems/android-unlock-patterns
[352]: https://leetcode-cn.com/problems/data-stream-as-disjoint-intervals
[353]: https://leetcode-cn.com/problems/design-snake-game
[354]: https://leetcode-cn.com/problems/russian-doll-envelopes
[355]: https://leetcode-cn.com/problems/design-twitter
[356]: https://leetcode-cn.com/problems/line-reflection
[357]: https://leetcode-cn.com/problems/count-numbers-with-unique-digits
[358]: https://leetcode-cn.com/problems/rearrange-string-k-distance-apart
[359]: https://leetcode-cn.com/problems/logger-rate-limiter
[360]: https://leetcode-cn.com/problems/sort-transformed-array
[361]: https://leetcode-cn.com/problems/bomb-enemy
[362]: https://leetcode-cn.com/problems/design-hit-counter
[363]: https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k
[364]: https://leetcode-cn.com/problems/nested-list-weight-sum-ii
[365]: https://leetcode-cn.com/problems/water-and-jug-problem
[366]: https://leetcode-cn.com/problems/find-leaves-of-binary-tree
[367]: https://leetcode-cn.com/problems/valid-perfect-square
[368]: https://leetcode-cn.com/problems/largest-divisible-subset
[369]: https://leetcode-cn.com/problems/plus-one-linked-list
[370]: https://leetcode-cn.com/problems/range-addition
[371]: https://leetcode-cn.com/problems/sum-of-two-integers
[372]: https://leetcode-cn.com/problems/super-pow
[373]: https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums
[374]: https://leetcode-cn.com/problems/guess-number-higher-or-lower
[375]: https://leetcode-cn.com/problems/guess-number-higher-or-lower-ii
[376]: https://leetcode-cn.com/problems/wiggle-subsequence
[377]: https://leetcode-cn.com/problems/combination-sum-iv
[378]: https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix
[379]: https://leetcode-cn.com/problems/design-phone-directory
[380]: https://leetcode-cn.com/problems/insert-delete-getrandom-o1
[381]: https://leetcode-cn.com/problems/insert-delete-getrandom-o1-duplicates-allowed
[382]: https://leetcode-cn.com/problems/linked-list-random-node
[383]: https://leetcode-cn.com/problems/ransom-note
[384]: https://leetcode-cn.com/problems/shuffle-an-array
[385]: https://leetcode-cn.com/problems/mini-parser
[386]: https://leetcode-cn.com/problems/lexicographical-numbers
[387]: https://leetcode-cn.com/problems/first-unique-character-in-a-string
[388]: https://leetcode-cn.com/problems/longest-absolute-file-path
[389]: https://leetcode-cn.com/problems/find-the-difference
[390]: https://leetcode-cn.com/problems/elimination-game
[391]: https://leetcode-cn.com/problems/perfect-rectangle
[392]: https://leetcode-cn.com/problems/is-subsequence
[393]: https://leetcode-cn.com/problems/utf-8-validation
[394]: https://leetcode-cn.com/problems/decode-string
[395]: https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters
[396]: https://leetcode-cn.com/problems/rotate-function
[397]: https://leetcode-cn.com/problems/integer-replacement
[398]: https://leetcode-cn.com/problems/random-pick-index
[399]: https://leetcode-cn.com/problems/evaluate-division
[400]: https://leetcode-cn.com/problems/nth-digit
[401]: https://leetcode-cn.com/problems/binary-watch
[402]: https://leetcode-cn.com/problems/remove-k-digits
[403]: https://leetcode-cn.com/problems/frog-jump
[404]: https://leetcode-cn.com/problems/sum-of-left-leaves
[405]: https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal
[406]: https://leetcode-cn.com/problems/queue-reconstruction-by-height
[407]: https://leetcode-cn.com/problems/trapping-rain-water-ii
[408]: https://leetcode-cn.com/problems/valid-word-abbreviation
[409]: https://leetcode-cn.com/problems/longest-palindrome
[410]: https://leetcode-cn.com/problems/split-array-largest-sum
[411]: https://leetcode-cn.com/problems/minimum-unique-word-abbreviation
[412]: https://leetcode-cn.com/problems/fizz-buzz
[413]: https://leetcode-cn.com/problems/arithmetic-slices
[414]: https://leetcode-cn.com/problems/third-maximum-number
[415]: https://leetcode-cn.com/problems/add-strings
[416]: https://leetcode-cn.com/problems/partition-equal-subset-sum
[417]: https://leetcode-cn.com/problems/pacific-atlantic-water-flow
[418]: https://leetcode-cn.com/problems/sentence-screen-fitting
[419]: https://leetcode-cn.com/problems/battleships-in-a-board
[420]: https://leetcode-cn.com/problems/strong-password-checker
[421]: https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array
[422]: https://leetcode-cn.com/problems/valid-word-square
[423]: https://leetcode-cn.com/problems/reconstruct-original-digits-from-english
[424]: https://leetcode-cn.com/problems/longest-repeating-character-replacement
[425]: https://leetcode-cn.com/problems/word-squares
[426]: https://leetcode-cn.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list
[427]: https://leetcode-cn.com/problems/construct-quad-tree
[428]: https://leetcode-cn.com/problems/serialize-and-deserialize-n-ary-tree
[429]: https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal
[430]: https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list
[431]: https://leetcode-cn.com/problems/encode-n-ary-tree-to-binary-tree
[432]: https://leetcode-cn.com/problems/all-oone-data-structure
[433]: https://leetcode-cn.com/problems/minimum-genetic-mutation
[434]: https://leetcode-cn.com/problems/number-of-segments-in-a-string
[435]: https://leetcode-cn.com/problems/non-overlapping-intervals
[436]: https://leetcode-cn.com/problems/find-right-interval
[437]: https://leetcode-cn.com/problems/path-sum-iii
[438]: https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
[439]: https://leetcode-cn.com/problems/ternary-expression-parser
[440]: https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order
[441]: https://leetcode-cn.com/problems/arranging-coins
[442]: https://leetcode-cn.com/problems/find-all-duplicates-in-an-array
[443]: https://leetcode-cn.com/problems/string-compression
[444]: https://leetcode-cn.com/problems/sequence-reconstruction
[445]: https://leetcode-cn.com/problems/add-two-numbers-ii
[446]: https://leetcode-cn.com/problems/arithmetic-slices-ii-subsequence
[447]: https://leetcode-cn.com/problems/number-of-boomerangs
[448]: https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array
[449]: https://leetcode-cn.com/problems/serialize-and-deserialize-bst
[450]: https://leetcode-cn.com/problems/delete-node-in-a-bst
[451]: https://leetcode-cn.com/problems/sort-characters-by-frequency
[452]: https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons
[453]: https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements
[454]: https://leetcode-cn.com/problems/4sum-ii
[455]: https://leetcode-cn.com/problems/assign-cookies
[456]: https://leetcode-cn.com/problems/132-pattern
[457]: https://leetcode-cn.com/problems/circular-array-loop
[458]: https://leetcode-cn.com/problems/poor-pigs
[459]: https://leetcode-cn.com/problems/repeated-substring-pattern
[460]: https://leetcode-cn.com/problems/lfu-cache
[461]: https://leetcode-cn.com/problems/hamming-distance
[462]: https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements-ii
[463]: https://leetcode-cn.com/problems/island-perimeter
[464]: https://leetcode-cn.com/problems/can-i-win
[465]: https://leetcode-cn.com/problems/optimal-account-balancing
[466]: https://leetcode-cn.com/problems/count-the-repetitions
[467]: https://leetcode-cn.com/problems/unique-substrings-in-wraparound-string
[468]: https://leetcode-cn.com/problems/validate-ip-address
[469]: https://leetcode-cn.com/problems/convex-polygon
[470]: https://leetcode-cn.com/problems/implement-rand10-using-rand7
[471]: https://leetcode-cn.com/problems/encode-string-with-shortest-length
[472]: https://leetcode-cn.com/problems/concatenated-words
[473]: https://leetcode-cn.com/problems/matchsticks-to-square
[474]: https://leetcode-cn.com/problems/ones-and-zeroes
[475]: https://leetcode-cn.com/problems/heaters
[476]: https://leetcode-cn.com/problems/number-complement
[477]: https://leetcode-cn.com/problems/total-hamming-distance
[478]: https://leetcode-cn.com/problems/generate-random-point-in-a-circle
[479]: https://leetcode-cn.com/problems/largest-palindrome-product
[480]: https://leetcode-cn.com/problems/sliding-window-median
[481]: https://leetcode-cn.com/problems/magical-string
[482]: https://leetcode-cn.com/problems/license-key-formatting
[483]: https://leetcode-cn.com/problems/smallest-good-base
[484]: https://leetcode-cn.com/problems/find-permutation
[485]: https://leetcode-cn.com/problems/max-consecutive-ones
[486]: https://leetcode-cn.com/problems/predict-the-winner
[487]: https://leetcode-cn.com/problems/max-consecutive-ones-ii
[488]: https://leetcode-cn.com/problems/zuma-game
[489]: https://leetcode-cn.com/problems/robot-room-cleaner
[490]: https://leetcode-cn.com/problems/the-maze
[491]: https://leetcode-cn.com/problems/increasing-subsequences
[492]: https://leetcode-cn.com/problems/construct-the-rectangle
[493]: https://leetcode-cn.com/problems/reverse-pairs
[494]: https://leetcode-cn.com/problems/target-sum
[495]: https://leetcode-cn.com/problems/teemo-attacking
[496]: https://leetcode-cn.com/problems/next-greater-element-i
[497]: https://leetcode-cn.com/problems/random-point-in-non-overlapping-rectangles
[498]: https://leetcode-cn.com/problems/diagonal-traverse
[499]: https://leetcode-cn.com/problems/the-maze-iii
[500]: https://leetcode-cn.com/problems/keyboard-row
[501]: https://leetcode-cn.com/problems/find-mode-in-binary-search-tree
[502]: https://leetcode-cn.com/problems/ipo
[503]: https://leetcode-cn.com/problems/next-greater-element-ii
[504]: https://leetcode-cn.com/problems/base-7
[505]: https://leetcode-cn.com/problems/the-maze-ii
[506]: https://leetcode-cn.com/problems/relative-ranks
[507]: https://leetcode-cn.com/problems/perfect-number
[508]: https://leetcode-cn.com/problems/most-frequent-subtree-sum
[509]: https://leetcode-cn.com/problems/fibonacci-number
[510]: https://leetcode-cn.com/problems/inorder-successor-in-bst-ii
[511]: https://leetcode-cn.com/problems/game-play-analysis-i
[512]: https://leetcode-cn.com/problems/game-play-analysis-ii
[513]: https://leetcode-cn.com/problems/find-bottom-left-tree-value
[514]: https://leetcode-cn.com/problems/freedom-trail
[515]: https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row
[516]: https://leetcode-cn.com/problems/longest-palindromic-subsequence
[517]: https://leetcode-cn.com/problems/super-washing-machines
[518]: https://leetcode-cn.com/problems/coin-change-2
[519]: https://leetcode-cn.com/problems/random-flip-matrix
[520]: https://leetcode-cn.com/problems/detect-capital
[521]: https://leetcode-cn.com/problems/longest-uncommon-subsequence-i
[522]: https://leetcode-cn.com/problems/longest-uncommon-subsequence-ii
[523]: https://leetcode-cn.com/problems/continuous-subarray-sum
[524]: https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting
[525]: https://leetcode-cn.com/problems/contiguous-array
[526]: https://leetcode-cn.com/problems/beautiful-arrangement
[527]: https://leetcode-cn.com/problems/word-abbreviation
[528]: https://leetcode-cn.com/problems/random-pick-with-weight
[529]: https://leetcode-cn.com/problems/minesweeper
[530]: https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst
[531]: https://leetcode-cn.com/problems/lonely-pixel-i
[532]: https://leetcode-cn.com/problems/k-diff-pairs-in-an-array
[533]: https://leetcode-cn.com/problems/lonely-pixel-ii
[534]: https://leetcode-cn.com/problems/game-play-analysis-iii
[535]: https://leetcode-cn.com/problems/encode-and-decode-tinyurl
[536]: https://leetcode-cn.com/problems/construct-binary-tree-from-string
[537]: https://leetcode-cn.com/problems/complex-number-multiplication
[538]: https://leetcode-cn.com/problems/convert-bst-to-greater-tree
[539]: https://leetcode-cn.com/problems/minimum-time-difference
[540]: https://leetcode-cn.com/problems/single-element-in-a-sorted-array
[541]: https://leetcode-cn.com/problems/reverse-string-ii
[542]: https://leetcode-cn.com/problems/01-matrix
[543]: https://leetcode-cn.com/problems/diameter-of-binary-tree
[544]: https://leetcode-cn.com/problems/output-contest-matches
[545]: https://leetcode-cn.com/problems/boundary-of-binary-tree
[546]: https://leetcode-cn.com/problems/remove-boxes
[547]: https://leetcode-cn.com/problems/friend-circles
[548]: https://leetcode-cn.com/problems/split-array-with-equal-sum
[549]: https://leetcode-cn.com/problems/binary-tree-longest-consecutive-sequence-ii
[550]: https://leetcode-cn.com/problems/game-play-analysis-iv
[551]: https://leetcode-cn.com/problems/student-attendance-record-i
[552]: https://leetcode-cn.com/problems/student-attendance-record-ii
[553]: https://leetcode-cn.com/problems/optimal-division
[554]: https://leetcode-cn.com/problems/brick-wall
[555]: https://leetcode-cn.com/problems/split-concatenated-strings
[556]: https://leetcode-cn.com/problems/next-greater-element-iii
[557]: https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
[558]: https://leetcode-cn.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees
[559]: https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree
[560]: https://leetcode-cn.com/problems/subarray-sum-equals-k
[561]: https://leetcode-cn.com/problems/array-partition-i
[562]: https://leetcode-cn.com/problems/longest-line-of-consecutive-one-in-matrix
[563]: https://leetcode-cn.com/problems/binary-tree-tilt
[564]: https://leetcode-cn.com/problems/find-the-closest-palindrome
[565]: https://leetcode-cn.com/problems/array-nesting
[566]: https://leetcode-cn.com/problems/reshape-the-matrix
[567]: https://leetcode-cn.com/problems/permutation-in-string
[568]: https://leetcode-cn.com/problems/maximum-vacation-days
[569]: https://leetcode-cn.com/problems/median-employee-salary
[570]: https://leetcode-cn.com/problems/managers-with-at-least-5-direct-reports
[571]: https://leetcode-cn.com/problems/find-median-given-frequency-of-numbers
[572]: https://leetcode-cn.com/problems/subtree-of-another-tree
[573]: https://leetcode-cn.com/problems/squirrel-simulation
[574]: https://leetcode-cn.com/problems/winning-candidate
[575]: https://leetcode-cn.com/problems/distribute-candies
[576]: https://leetcode-cn.com/problems/out-of-boundary-paths
[577]: https://leetcode-cn.com/problems/employee-bonus
[578]: https://leetcode-cn.com/problems/get-highest-answer-rate-question
[579]: https://leetcode-cn.com/problems/find-cumulative-salary-of-an-employee
[580]: https://leetcode-cn.com/problems/count-student-number-in-departments
[581]: https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray
[582]: https://leetcode-cn.com/problems/kill-process
[583]: https://leetcode-cn.com/problems/delete-operation-for-two-strings
[584]: https://leetcode-cn.com/problems/find-customer-referee
[585]: https://leetcode-cn.com/problems/investments-in-2016
[586]: https://leetcode-cn.com/problems/customer-placing-the-largest-number-of-orders
[587]: https://leetcode-cn.com/problems/erect-the-fence
[588]: https://leetcode-cn.com/problems/design-in-memory-file-system
[589]: https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal
[590]: https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal
[591]: https://leetcode-cn.com/problems/tag-validator
[592]: https://leetcode-cn.com/problems/fraction-addition-and-subtraction
[593]: https://leetcode-cn.com/problems/valid-square
[594]: https://leetcode-cn.com/problems/longest-harmonious-subsequence
[595]: https://leetcode-cn.com/problems/big-countries
[596]: https://leetcode-cn.com/problems/classes-more-than-5-students
[597]: https://leetcode-cn.com/problems/friend-requests-i-overall-acceptance-rate
[598]: https://leetcode-cn.com/problems/range-addition-ii
[599]: https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists
[600]: https://leetcode-cn.com/problems/non-negative-integers-without-consecutive-ones
[601]: https://leetcode-cn.com/problems/human-traffic-of-stadium
[602]: https://leetcode-cn.com/problems/friend-requests-ii-who-has-the-most-friends
[603]: https://leetcode-cn.com/problems/consecutive-available-seats
[604]: https://leetcode-cn.com/problems/design-compressed-string-iterator
[605]: https://leetcode-cn.com/problems/can-place-flowers
[606]: https://leetcode-cn.com/problems/construct-string-from-binary-tree
[607]: https://leetcode-cn.com/problems/sales-person
[608]: https://leetcode-cn.com/problems/tree-node
[609]: https://leetcode-cn.com/problems/find-duplicate-file-in-system
[610]: https://leetcode-cn.com/problems/triangle-judgement
[611]: https://leetcode-cn.com/problems/valid-triangle-number
[612]: https://leetcode-cn.com/problems/shortest-distance-in-a-plane
[613]: https://leetcode-cn.com/problems/shortest-distance-in-a-line
[614]: https://leetcode-cn.com/problems/second-degree-follower
[615]: https://leetcode-cn.com/problems/average-salary-departments-vs-company
[616]: https://leetcode-cn.com/problems/add-bold-tag-in-string
[617]: https://leetcode-cn.com/problems/merge-two-binary-trees
[618]: https://leetcode-cn.com/problems/students-report-by-geography
[619]: https://leetcode-cn.com/problems/biggest-single-number
[620]: https://leetcode-cn.com/problems/not-boring-movies
[621]: https://leetcode-cn.com/problems/task-scheduler
[622]: https://leetcode-cn.com/problems/design-circular-queue
[623]: https://leetcode-cn.com/problems/add-one-row-to-tree
[624]: https://leetcode-cn.com/problems/maximum-distance-in-arrays
[625]: https://leetcode-cn.com/problems/minimum-factorization
[626]: https://leetcode-cn.com/problems/exchange-seats
[627]: https://leetcode-cn.com/problems/swap-salary
[628]: https://leetcode-cn.com/problems/maximum-product-of-three-numbers
[629]: https://leetcode-cn.com/problems/k-inverse-pairs-array
[630]: https://leetcode-cn.com/problems/course-schedule-iii
[631]: https://leetcode-cn.com/problems/design-excel-sum-formula
[632]: https://leetcode-cn.com/problems/smallest-range-covering-elements-from-k-lists
[633]: https://leetcode-cn.com/problems/sum-of-square-numbers
[634]: https://leetcode-cn.com/problems/find-the-derangement-of-an-array
[635]: https://leetcode-cn.com/problems/design-log-storage-system
[636]: https://leetcode-cn.com/problems/exclusive-time-of-functions
[637]: https://leetcode-cn.com/problems/average-of-levels-in-binary-tree
[638]: https://leetcode-cn.com/problems/shopping-offers
[639]: https://leetcode-cn.com/problems/decode-ways-ii
[640]: https://leetcode-cn.com/problems/solve-the-equation
[641]: https://leetcode-cn.com/problems/design-circular-deque
[642]: https://leetcode-cn.com/problems/design-search-autocomplete-system
[643]: https://leetcode-cn.com/problems/maximum-average-subarray-i
[644]: https://leetcode-cn.com/problems/maximum-average-subarray-ii
[645]: https://leetcode-cn.com/problems/set-mismatch
[646]: https://leetcode-cn.com/problems/maximum-length-of-pair-chain
[647]: https://leetcode-cn.com/problems/palindromic-substrings
[648]: https://leetcode-cn.com/problems/replace-words
[649]: https://leetcode-cn.com/problems/dota2-senate
[650]: https://leetcode-cn.com/problems/2-keys-keyboard
[651]: https://leetcode-cn.com/problems/4-keys-keyboard
[652]: https://leetcode-cn.com/problems/find-duplicate-subtrees
[653]: https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst
[654]: https://leetcode-cn.com/problems/maximum-binary-tree
[655]: https://leetcode-cn.com/problems/print-binary-tree
[656]: https://leetcode-cn.com/problems/coin-path
[657]: https://leetcode-cn.com/problems/robot-return-to-origin
[658]: https://leetcode-cn.com/problems/find-k-closest-elements
[659]: https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences
[660]: https://leetcode-cn.com/problems/remove-9
[661]: https://leetcode-cn.com/problems/image-smoother
[662]: https://leetcode-cn.com/problems/maximum-width-of-binary-tree
[663]: https://leetcode-cn.com/problems/equal-tree-partition
[664]: https://leetcode-cn.com/problems/strange-printer
[665]: https://leetcode-cn.com/problems/non-decreasing-array
[666]: https://leetcode-cn.com/problems/path-sum-iv
[667]: https://leetcode-cn.com/problems/beautiful-arrangement-ii
[668]: https://leetcode-cn.com/problems/kth-smallest-number-in-multiplication-table
[669]: https://leetcode-cn.com/problems/trim-a-binary-search-tree
[670]: https://leetcode-cn.com/problems/maximum-swap
[671]: https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree
[672]: https://leetcode-cn.com/problems/bulb-switcher-ii
[673]: https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence
[674]: https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence
[675]: https://leetcode-cn.com/problems/cut-off-trees-for-golf-event
[676]: https://leetcode-cn.com/problems/implement-magic-dictionary
[677]: https://leetcode-cn.com/problems/map-sum-pairs
[678]: https://leetcode-cn.com/problems/valid-parenthesis-string
[679]: https://leetcode-cn.com/problems/24-game
[680]: https://leetcode-cn.com/problems/valid-palindrome-ii
[681]: https://leetcode-cn.com/problems/next-closest-time
[682]: https://leetcode-cn.com/problems/baseball-game
[683]: https://leetcode-cn.com/problems/k-empty-slots
[684]: https://leetcode-cn.com/problems/redundant-connection
[685]: https://leetcode-cn.com/problems/redundant-connection-ii
[686]: https://leetcode-cn.com/problems/repeated-string-match
[687]: https://leetcode-cn.com/problems/longest-univalue-path
[688]: https://leetcode-cn.com/problems/knight-probability-in-chessboard
[689]: https://leetcode-cn.com/problems/maximum-sum-of-3-non-overlapping-subarrays
[690]: https://leetcode-cn.com/problems/employee-importance
[691]: https://leetcode-cn.com/problems/stickers-to-spell-word
[692]: https://leetcode-cn.com/problems/top-k-frequent-words
[693]: https://leetcode-cn.com/problems/binary-number-with-alternating-bits
[694]: https://leetcode-cn.com/problems/number-of-distinct-islands
[695]: https://leetcode-cn.com/problems/max-area-of-island
[696]: https://leetcode-cn.com/problems/count-binary-substrings
[697]: https://leetcode-cn.com/problems/degree-of-an-array
[698]: https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets
[699]: https://leetcode-cn.com/problems/falling-squares
[700]: https://leetcode-cn.com/problems/search-in-a-binary-search-tree
[701]: https://leetcode-cn.com/problems/insert-into-a-binary-search-tree
[702]: https://leetcode-cn.com/problems/search-in-a-sorted-array-of-unknown-size
[703]: https://leetcode-cn.com/problems/kth-largest-element-in-a-stream
[704]: https://leetcode-cn.com/problems/binary-search
[705]: https://leetcode-cn.com/problems/design-hashset
[706]: https://leetcode-cn.com/problems/design-hashmap
[707]: https://leetcode-cn.com/problems/design-linked-list
[708]: https://leetcode-cn.com/problems/insert-into-a-sorted-circular-linked-list
[709]: https://leetcode-cn.com/problems/to-lower-case
[710]: https://leetcode-cn.com/problems/random-pick-with-blacklist
[711]: https://leetcode-cn.com/problems/number-of-distinct-islands-ii
[712]: https://leetcode-cn.com/problems/minimum-ascii-delete-sum-for-two-strings
[713]: https://leetcode-cn.com/problems/subarray-product-less-than-k
[714]: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee
[715]: https://leetcode-cn.com/problems/range-module
[716]: https://leetcode-cn.com/problems/max-stack
[717]: https://leetcode-cn.com/problems/1-bit-and-2-bit-characters
[718]: https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray
[719]: https://leetcode-cn.com/problems/find-k-th-smallest-pair-distance
[720]: https://leetcode-cn.com/problems/longest-word-in-dictionary
[721]: https://leetcode-cn.com/problems/accounts-merge
[722]: https://leetcode-cn.com/problems/remove-comments
[723]: https://leetcode-cn.com/problems/candy-crush
[724]: https://leetcode-cn.com/problems/find-pivot-index
[725]: https://leetcode-cn.com/problems/split-linked-list-in-parts
[726]: https://leetcode-cn.com/problems/number-of-atoms
[727]: https://leetcode-cn.com/problems/minimum-window-subsequence
[728]: https://leetcode-cn.com/problems/self-dividing-numbers
[729]: https://leetcode-cn.com/problems/my-calendar-i
[730]: https://leetcode-cn.com/problems/count-different-palindromic-subsequences
[731]: https://leetcode-cn.com/problems/my-calendar-ii
[732]: https://leetcode-cn.com/problems/my-calendar-iii
[733]: https://leetcode-cn.com/problems/flood-fill
[734]: https://leetcode-cn.com/problems/sentence-similarity
[735]: https://leetcode-cn.com/problems/asteroid-collision
[736]: https://leetcode-cn.com/problems/parse-lisp-expression
[737]: https://leetcode-cn.com/problems/sentence-similarity-ii
[738]: https://leetcode-cn.com/problems/monotone-increasing-digits
[739]: https://leetcode-cn.com/problems/daily-temperatures
[740]: https://leetcode-cn.com/problems/delete-and-earn
[741]: https://leetcode-cn.com/problems/cherry-pickup
[742]: https://leetcode-cn.com/problems/closest-leaf-in-a-binary-tree
[743]: https://leetcode-cn.com/problems/network-delay-time
[744]: https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target
[745]: https://leetcode-cn.com/problems/prefix-and-suffix-search
[746]: https://leetcode-cn.com/problems/min-cost-climbing-stairs
[747]: https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others
[748]: https://leetcode-cn.com/problems/shortest-completing-word
[749]: https://leetcode-cn.com/problems/contain-virus
[750]: https://leetcode-cn.com/problems/number-of-corner-rectangles
[751]: https://leetcode-cn.com/problems/ip-to-cidr
[752]: https://leetcode-cn.com/problems/open-the-lock
[753]: https://leetcode-cn.com/problems/cracking-the-safe
[754]: https://leetcode-cn.com/problems/reach-a-number
[755]: https://leetcode-cn.com/problems/pour-water
[756]: https://leetcode-cn.com/problems/pyramid-transition-matrix
[757]: https://leetcode-cn.com/problems/set-intersection-size-at-least-two
[758]: https://leetcode-cn.com/problems/bold-words-in-string
[759]: https://leetcode-cn.com/problems/employee-free-time
[760]: https://leetcode-cn.com/problems/find-anagram-mappings
[761]: https://leetcode-cn.com/problems/special-binary-string
[762]: https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation
[763]: https://leetcode-cn.com/problems/partition-labels
[764]: https://leetcode-cn.com/problems/largest-plus-sign
[765]: https://leetcode-cn.com/problems/couples-holding-hands
[766]: https://leetcode-cn.com/problems/toeplitz-matrix
[767]: https://leetcode-cn.com/problems/reorganize-string
[768]: https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii
[769]: https://leetcode-cn.com/problems/max-chunks-to-make-sorted
[770]: https://leetcode-cn.com/problems/basic-calculator-iv
[771]: https://leetcode-cn.com/problems/jewels-and-stones
[772]: https://leetcode-cn.com/problems/basic-calculator-iii
[773]: https://leetcode-cn.com/problems/sliding-puzzle
[774]: https://leetcode-cn.com/problems/minimize-max-distance-to-gas-station
[775]: https://leetcode-cn.com/problems/global-and-local-inversions
[776]: https://leetcode-cn.com/problems/split-bst
[777]: https://leetcode-cn.com/problems/swap-adjacent-in-lr-string
[778]: https://leetcode-cn.com/problems/swim-in-rising-water
[779]: https://leetcode-cn.com/problems/k-th-symbol-in-grammar
[780]: https://leetcode-cn.com/problems/reaching-points
[781]: https://leetcode-cn.com/problems/rabbits-in-forest
[782]: https://leetcode-cn.com/problems/transform-to-chessboard
[783]: https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes
[784]: https://leetcode-cn.com/problems/letter-case-permutation
[785]: https://leetcode-cn.com/problems/is-graph-bipartite
[786]: https://leetcode-cn.com/problems/k-th-smallest-prime-fraction
[787]: https://leetcode-cn.com/problems/cheapest-flights-within-k-stops
[788]: https://leetcode-cn.com/problems/rotated-digits
[789]: https://leetcode-cn.com/problems/escape-the-ghosts
[790]: https://leetcode-cn.com/problems/domino-and-tromino-tiling
[791]: https://leetcode-cn.com/problems/custom-sort-string
[792]: https://leetcode-cn.com/problems/number-of-matching-subsequences
[793]: https://leetcode-cn.com/problems/preimage-size-of-factorial-zeroes-function
[794]: https://leetcode-cn.com/problems/valid-tic-tac-toe-state
[795]: https://leetcode-cn.com/problems/number-of-subarrays-with-bounded-maximum
[796]: https://leetcode-cn.com/problems/rotate-string
[797]: https://leetcode-cn.com/problems/all-paths-from-source-to-target
[798]: https://leetcode-cn.com/problems/smallest-rotation-with-highest-score
[799]: https://leetcode-cn.com/problems/champagne-tower
[800]: https://leetcode-cn.com/problems/similar-rgb-color
[801]: https://leetcode-cn.com/problems/minimum-swaps-to-make-sequences-increasing
[802]: https://leetcode-cn.com/problems/find-eventual-safe-states
[803]: https://leetcode-cn.com/problems/bricks-falling-when-hit
[804]: https://leetcode-cn.com/problems/unique-morse-code-words
[805]: https://leetcode-cn.com/problems/split-array-with-same-average
[806]: https://leetcode-cn.com/problems/number-of-lines-to-write-string
[807]: https://leetcode-cn.com/problems/max-increase-to-keep-city-skyline
[808]: https://leetcode-cn.com/problems/soup-servings
[809]: https://leetcode-cn.com/problems/expressive-words
[810]: https://leetcode-cn.com/problems/chalkboard-xor-game
[811]: https://leetcode-cn.com/problems/subdomain-visit-count
[812]: https://leetcode-cn.com/problems/largest-triangle-area
[813]: https://leetcode-cn.com/problems/largest-sum-of-averages
[814]: https://leetcode-cn.com/problems/binary-tree-pruning
[815]: https://leetcode-cn.com/problems/bus-routes
[816]: https://leetcode-cn.com/problems/ambiguous-coordinates
[817]: https://leetcode-cn.com/problems/linked-list-components
[818]: https://leetcode-cn.com/problems/race-car
[819]: https://leetcode-cn.com/problems/most-common-word
[820]: https://leetcode-cn.com/problems/short-encoding-of-words
[821]: https://leetcode-cn.com/problems/shortest-distance-to-a-character
[822]: https://leetcode-cn.com/problems/card-flipping-game
[823]: https://leetcode-cn.com/problems/binary-trees-with-factors
[824]: https://leetcode-cn.com/problems/goat-latin
[825]: https://leetcode-cn.com/problems/friends-of-appropriate-ages
[826]: https://leetcode-cn.com/problems/most-profit-assigning-work
[827]: https://leetcode-cn.com/problems/making-a-large-island
[828]: https://leetcode-cn.com/problems/count-unique-characters-of-all-substrings-of-a-given-string
[829]: https://leetcode-cn.com/problems/consecutive-numbers-sum
[830]: https://leetcode-cn.com/problems/positions-of-large-groups
[831]: https://leetcode-cn.com/problems/masking-personal-information
[832]: https://leetcode-cn.com/problems/flipping-an-image
[833]: https://leetcode-cn.com/problems/find-and-replace-in-string
[834]: https://leetcode-cn.com/problems/sum-of-distances-in-tree
[835]: https://leetcode-cn.com/problems/image-overlap
[836]: https://leetcode-cn.com/problems/rectangle-overlap
[837]: https://leetcode-cn.com/problems/new-21-game
[838]: https://leetcode-cn.com/problems/push-dominoes
[839]: https://leetcode-cn.com/problems/similar-string-groups
[840]: https://leetcode-cn.com/problems/magic-squares-in-grid
[841]: https://leetcode-cn.com/problems/keys-and-rooms
[842]: https://leetcode-cn.com/problems/split-array-into-fibonacci-sequence
[843]: https://leetcode-cn.com/problems/guess-the-word
[844]: https://leetcode-cn.com/problems/backspace-string-compare
[845]: https://leetcode-cn.com/problems/longest-mountain-in-array
[846]: https://leetcode-cn.com/problems/hand-of-straights
[847]: https://leetcode-cn.com/problems/shortest-path-visiting-all-nodes
[848]: https://leetcode-cn.com/problems/shifting-letters
[849]: https://leetcode-cn.com/problems/maximize-distance-to-closest-person
[850]: https://leetcode-cn.com/problems/rectangle-area-ii
[851]: https://leetcode-cn.com/problems/loud-and-rich
[852]: https://leetcode-cn.com/problems/peak-index-in-a-mountain-array
[853]: https://leetcode-cn.com/problems/car-fleet
[854]: https://leetcode-cn.com/problems/k-similar-strings
[855]: https://leetcode-cn.com/problems/exam-room
[856]: https://leetcode-cn.com/problems/score-of-parentheses
[857]: https://leetcode-cn.com/problems/minimum-cost-to-hire-k-workers
[858]: https://leetcode-cn.com/problems/mirror-reflection
[859]: https://leetcode-cn.com/problems/buddy-strings
[860]: https://leetcode-cn.com/problems/lemonade-change
[861]: https://leetcode-cn.com/problems/score-after-flipping-matrix
[862]: https://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k
[863]: https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree
[864]: https://leetcode-cn.com/problems/shortest-path-to-get-all-keys
[865]: https://leetcode-cn.com/problems/smallest-subtree-with-all-the-deepest-nodes
[866]: https://leetcode-cn.com/problems/prime-palindrome
[867]: https://leetcode-cn.com/problems/transpose-matrix
[868]: https://leetcode-cn.com/problems/binary-gap
[869]: https://leetcode-cn.com/problems/reordered-power-of-2
[870]: https://leetcode-cn.com/problems/advantage-shuffle
[871]: https://leetcode-cn.com/problems/minimum-number-of-refueling-stops
[872]: https://leetcode-cn.com/problems/leaf-similar-trees
[873]: https://leetcode-cn.com/problems/length-of-longest-fibonacci-subsequence
[874]: https://leetcode-cn.com/problems/walking-robot-simulation
[875]: https://leetcode-cn.com/problems/koko-eating-bananas
[876]: https://leetcode-cn.com/problems/middle-of-the-linked-list
[877]: https://leetcode-cn.com/problems/stone-game
[878]: https://leetcode-cn.com/problems/nth-magical-number
[879]: https://leetcode-cn.com/problems/profitable-schemes
[880]: https://leetcode-cn.com/problems/decoded-string-at-index
[881]: https://leetcode-cn.com/problems/boats-to-save-people
[882]: https://leetcode-cn.com/problems/reachable-nodes-in-subdivided-graph
[883]: https://leetcode-cn.com/problems/projection-area-of-3d-shapes
[884]: https://leetcode-cn.com/problems/uncommon-words-from-two-sentences
[885]: https://leetcode-cn.com/problems/spiral-matrix-iii
[886]: https://leetcode-cn.com/problems/possible-bipartition
[887]: https://leetcode-cn.com/problems/super-egg-drop
[888]: https://leetcode-cn.com/problems/fair-candy-swap
[889]: https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal
[890]: https://leetcode-cn.com/problems/find-and-replace-pattern
[891]: https://leetcode-cn.com/problems/sum-of-subsequence-widths
[892]: https://leetcode-cn.com/problems/surface-area-of-3d-shapes
[893]: https://leetcode-cn.com/problems/groups-of-special-equivalent-strings
[894]: https://leetcode-cn.com/problems/all-possible-full-binary-trees
[895]: https://leetcode-cn.com/problems/maximum-frequency-stack
[896]: https://leetcode-cn.com/problems/monotonic-array
[897]: https://leetcode-cn.com/problems/increasing-order-search-tree
[898]: https://leetcode-cn.com/problems/bitwise-ors-of-subarrays
[899]: https://leetcode-cn.com/problems/orderly-queue
[900]: https://leetcode-cn.com/problems/rle-iterator
[901]: https://leetcode-cn.com/problems/online-stock-span
[902]: https://leetcode-cn.com/problems/numbers-at-most-n-given-digit-set
[903]: https://leetcode-cn.com/problems/valid-permutations-for-di-sequence
[904]: https://leetcode-cn.com/problems/fruit-into-baskets
[905]: https://leetcode-cn.com/problems/sort-array-by-parity
[906]: https://leetcode-cn.com/problems/super-palindromes
[907]: https://leetcode-cn.com/problems/sum-of-subarray-minimums
[908]: https://leetcode-cn.com/problems/smallest-range-i
[909]: https://leetcode-cn.com/problems/snakes-and-ladders
[910]: https://leetcode-cn.com/problems/smallest-range-ii
[911]: https://leetcode-cn.com/problems/online-election
[912]: https://leetcode-cn.com/problems/sort-an-array
[913]: https://leetcode-cn.com/problems/cat-and-mouse
[914]: https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
[915]: https://leetcode-cn.com/problems/partition-array-into-disjoint-intervals
[916]: https://leetcode-cn.com/problems/word-subsets
[917]: https://leetcode-cn.com/problems/reverse-only-letters
[918]: https://leetcode-cn.com/problems/maximum-sum-circular-subarray
[919]: https://leetcode-cn.com/problems/complete-binary-tree-inserter
[920]: https://leetcode-cn.com/problems/number-of-music-playlists
[921]: https://leetcode-cn.com/problems/minimum-add-to-make-parentheses-valid
[922]: https://leetcode-cn.com/problems/sort-array-by-parity-ii
[923]: https://leetcode-cn.com/problems/3sum-with-multiplicity
[924]: https://leetcode-cn.com/problems/minimize-malware-spread
[925]: https://leetcode-cn.com/problems/long-pressed-name
[926]: https://leetcode-cn.com/problems/flip-string-to-monotone-increasing
[927]: https://leetcode-cn.com/problems/three-equal-parts
[928]: https://leetcode-cn.com/problems/minimize-malware-spread-ii
[929]: https://leetcode-cn.com/problems/unique-email-addresses
[930]: https://leetcode-cn.com/problems/binary-subarrays-with-sum
[931]: https://leetcode-cn.com/problems/minimum-falling-path-sum
[932]: https://leetcode-cn.com/problems/beautiful-array
[933]: https://leetcode-cn.com/problems/number-of-recent-calls
[934]: https://leetcode-cn.com/problems/shortest-bridge
[935]: https://leetcode-cn.com/problems/knight-dialer
[936]: https://leetcode-cn.com/problems/stamping-the-sequence
[937]: https://leetcode-cn.com/problems/reorder-data-in-log-files
[938]: https://leetcode-cn.com/problems/range-sum-of-bst
[939]: https://leetcode-cn.com/problems/minimum-area-rectangle
[940]: https://leetcode-cn.com/problems/distinct-subsequences-ii
[941]: https://leetcode-cn.com/problems/valid-mountain-array
[942]: https://leetcode-cn.com/problems/di-string-match
[943]: https://leetcode-cn.com/problems/find-the-shortest-superstring
[944]: https://leetcode-cn.com/problems/delete-columns-to-make-sorted
[945]: https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique
[946]: https://leetcode-cn.com/problems/validate-stack-sequences
[947]: https://leetcode-cn.com/problems/most-stones-removed-with-same-row-or-column
[948]: https://leetcode-cn.com/problems/bag-of-tokens
[949]: https://leetcode-cn.com/problems/largest-time-for-given-digits
[950]: https://leetcode-cn.com/problems/reveal-cards-in-increasing-order
[951]: https://leetcode-cn.com/problems/flip-equivalent-binary-trees
[952]: https://leetcode-cn.com/problems/largest-component-size-by-common-factor
[953]: https://leetcode-cn.com/problems/verifying-an-alien-dictionary
[954]: https://leetcode-cn.com/problems/array-of-doubled-pairs
[955]: https://leetcode-cn.com/problems/delete-columns-to-make-sorted-ii
[956]: https://leetcode-cn.com/problems/tallest-billboard
[957]: https://leetcode-cn.com/problems/prison-cells-after-n-days
[958]: https://leetcode-cn.com/problems/check-completeness-of-a-binary-tree
[959]: https://leetcode-cn.com/problems/regions-cut-by-slashes
[960]: https://leetcode-cn.com/problems/delete-columns-to-make-sorted-iii
[961]: https://leetcode-cn.com/problems/n-repeated-element-in-size-2n-array
[962]: https://leetcode-cn.com/problems/maximum-width-ramp
[963]: https://leetcode-cn.com/problems/minimum-area-rectangle-ii
[964]: https://leetcode-cn.com/problems/least-operators-to-express-number
[965]: https://leetcode-cn.com/problems/univalued-binary-tree
[966]: https://leetcode-cn.com/problems/vowel-spellchecker
[967]: https://leetcode-cn.com/problems/numbers-with-same-consecutive-differences
[968]: https://leetcode-cn.com/problems/binary-tree-cameras
[969]: https://leetcode-cn.com/problems/pancake-sorting
[970]: https://leetcode-cn.com/problems/powerful-integers
[971]: https://leetcode-cn.com/problems/flip-binary-tree-to-match-preorder-traversal
[972]: https://leetcode-cn.com/problems/equal-rational-numbers
[973]: https://leetcode-cn.com/problems/k-closest-points-to-origin
[974]: https://leetcode-cn.com/problems/subarray-sums-divisible-by-k
[975]: https://leetcode-cn.com/problems/odd-even-jump
[976]: https://leetcode-cn.com/problems/largest-perimeter-triangle
[977]: https://leetcode-cn.com/problems/squares-of-a-sorted-array
[978]: https://leetcode-cn.com/problems/longest-turbulent-subarray
[979]: https://leetcode-cn.com/problems/distribute-coins-in-binary-tree
[980]: https://leetcode-cn.com/problems/unique-paths-iii
[981]: https://leetcode-cn.com/problems/time-based-key-value-store
[982]: https://leetcode-cn.com/problems/triples-with-bitwise-and-equal-to-zero
[983]: https://leetcode-cn.com/problems/minimum-cost-for-tickets
[984]: https://leetcode-cn.com/problems/string-without-aaa-or-bbb
[985]: https://leetcode-cn.com/problems/sum-of-even-numbers-after-queries
[986]: https://leetcode-cn.com/problems/interval-list-intersections
[987]: https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree
[988]: https://leetcode-cn.com/problems/smallest-string-starting-from-leaf
[989]: https://leetcode-cn.com/problems/add-to-array-form-of-integer
[990]: https://leetcode-cn.com/problems/satisfiability-of-equality-equations
[991]: https://leetcode-cn.com/problems/broken-calculator
[992]: https://leetcode-cn.com/problems/subarrays-with-k-different-integers
[993]: https://leetcode-cn.com/problems/cousins-in-binary-tree
[994]: https://leetcode-cn.com/problems/rotting-oranges
[995]: https://leetcode-cn.com/problems/minimum-number-of-k-consecutive-bit-flips
[996]: https://leetcode-cn.com/problems/number-of-squareful-arrays
[997]: https://leetcode-cn.com/problems/find-the-town-judge
[998]: https://leetcode-cn.com/problems/maximum-binary-tree-ii
[999]: https://leetcode-cn.com/problems/available-captures-for-rook
[1000]: https://leetcode-cn.com/problems/minimum-cost-to-merge-stones
[1001]: https://leetcode-cn.com/problems/grid-illumination
[1002]: https://leetcode-cn.com/problems/find-common-characters
[1003]: https://leetcode-cn.com/problems/check-if-word-is-valid-after-substitutions
[1004]: https://leetcode-cn.com/problems/max-consecutive-ones-iii
[1005]: https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations
[1006]: https://leetcode-cn.com/problems/clumsy-factorial
[1007]: https://leetcode-cn.com/problems/minimum-domino-rotations-for-equal-row
[1008]: https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal
[1009]: https://leetcode-cn.com/problems/complement-of-base-10-integer
[1010]: https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60
[1011]: https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days
[1012]: https://leetcode-cn.com/problems/numbers-with-repeated-digits
[1013]: https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum
[1014]: https://leetcode-cn.com/problems/best-sightseeing-pair
[1015]: https://leetcode-cn.com/problems/smallest-integer-divisible-by-k
[1016]: https://leetcode-cn.com/problems/binary-string-with-substrings-representing-1-to-n
[1017]: https://leetcode-cn.com/problems/convert-to-base-2
[1018]: https://leetcode-cn.com/problems/binary-prefix-divisible-by-5
[1019]: https://leetcode-cn.com/problems/next-greater-node-in-linked-list
[1020]: https://leetcode-cn.com/problems/number-of-enclaves
[1021]: https://leetcode-cn.com/problems/remove-outermost-parentheses
[1022]: https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers
[1023]: https://leetcode-cn.com/problems/camelcase-matching
[1024]: https://leetcode-cn.com/problems/video-stitching
[1025]: https://leetcode-cn.com/problems/divisor-game
[1026]: https://leetcode-cn.com/problems/maximum-difference-between-node-and-ancestor
[1027]: https://leetcode-cn.com/problems/longest-arithmetic-sequence
[1028]: https://leetcode-cn.com/problems/recover-a-tree-from-preorder-traversal
[1029]: https://leetcode-cn.com/problems/two-city-scheduling
[1030]: https://leetcode-cn.com/problems/matrix-cells-in-distance-order
[1031]: https://leetcode-cn.com/problems/maximum-sum-of-two-non-overlapping-subarrays
[1032]: https://leetcode-cn.com/problems/stream-of-characters
[1033]: https://leetcode-cn.com/problems/moving-stones-until-consecutive
[1034]: https://leetcode-cn.com/problems/coloring-a-border
[1035]: https://leetcode-cn.com/problems/uncrossed-lines
[1036]: https://leetcode-cn.com/problems/escape-a-large-maze
[1037]: https://leetcode-cn.com/problems/valid-boomerang
[1038]: https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree
[1039]: https://leetcode-cn.com/problems/minimum-score-triangulation-of-polygon
[1040]: https://leetcode-cn.com/problems/moving-stones-until-consecutive-ii
[1041]: https://leetcode-cn.com/problems/robot-bounded-in-circle
[1042]: https://leetcode-cn.com/problems/flower-planting-with-no-adjacent
[1043]: https://leetcode-cn.com/problems/partition-array-for-maximum-sum
[1044]: https://leetcode-cn.com/problems/longest-duplicate-substring
[1045]: https://leetcode-cn.com/problems/customers-who-bought-all-products
[1046]: https://leetcode-cn.com/problems/last-stone-weight
[1047]: https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string
[1048]: https://leetcode-cn.com/problems/longest-string-chain
[1049]: https://leetcode-cn.com/problems/last-stone-weight-ii
[1050]: https://leetcode-cn.com/problems/actors-and-directors-who-cooperated-at-least-three-times
[1051]: https://leetcode-cn.com/problems/height-checker
[1052]: https://leetcode-cn.com/problems/grumpy-bookstore-owner
[1053]: https://leetcode-cn.com/problems/previous-permutation-with-one-swap
[1054]: https://leetcode-cn.com/problems/distant-barcodes
[1055]: https://leetcode-cn.com/problems/shortest-way-to-form-string
[1056]: https://leetcode-cn.com/problems/confusing-number
[1057]: https://leetcode-cn.com/problems/campus-bikes
[1058]: https://leetcode-cn.com/problems/minimize-rounding-error-to-meet-target
[1059]: https://leetcode-cn.com/problems/all-paths-from-source-lead-to-destination
[1060]: https://leetcode-cn.com/problems/missing-element-in-sorted-array
[1061]: https://leetcode-cn.com/problems/lexicographically-smallest-equivalent-string
[1062]: https://leetcode-cn.com/problems/longest-repeating-substring
[1063]: https://leetcode-cn.com/problems/number-of-valid-subarrays
[1064]: https://leetcode-cn.com/problems/fixed-point
[1065]: https://leetcode-cn.com/problems/index-pairs-of-a-string
[1066]: https://leetcode-cn.com/problems/campus-bikes-ii
[1067]: https://leetcode-cn.com/problems/digit-count-in-range
[1068]: https://leetcode-cn.com/problems/product-sales-analysis-i
[1069]: https://leetcode-cn.com/problems/product-sales-analysis-ii
[1070]: https://leetcode-cn.com/problems/product-sales-analysis-iii
[1071]: https://leetcode-cn.com/problems/greatest-common-divisor-of-strings
[1072]: https://leetcode-cn.com/problems/flip-columns-for-maximum-number-of-equal-rows
[1073]: https://leetcode-cn.com/problems/adding-two-negabinary-numbers
[1074]: https://leetcode-cn.com/problems/number-of-submatrices-that-sum-to-target
[1075]: https://leetcode-cn.com/problems/project-employees-i
[1076]: https://leetcode-cn.com/problems/project-employees-ii
[1077]: https://leetcode-cn.com/problems/project-employees-iii
[1078]: https://leetcode-cn.com/problems/occurrences-after-bigram
[1079]: https://leetcode-cn.com/problems/letter-tile-possibilities
[1080]: https://leetcode-cn.com/problems/insufficient-nodes-in-root-to-leaf-paths
[1081]: https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters
[1082]: https://leetcode-cn.com/problems/sales-analysis-i
[1083]: https://leetcode-cn.com/problems/sales-analysis-ii
[1084]: https://leetcode-cn.com/problems/sales-analysis-iii
[1085]: https://leetcode-cn.com/problems/sum-of-digits-in-the-minimum-number
[1086]: https://leetcode-cn.com/problems/high-five
[1087]: https://leetcode-cn.com/problems/brace-expansion
[1088]: https://leetcode-cn.com/problems/confusing-number-ii
[1089]: https://leetcode-cn.com/problems/duplicate-zeros
[1090]: https://leetcode-cn.com/problems/largest-values-from-labels
[1091]: https://leetcode-cn.com/problems/shortest-path-in-binary-matrix
[1092]: https://leetcode-cn.com/problems/shortest-common-supersequence
[1093]: https://leetcode-cn.com/problems/statistics-from-a-large-sample
[1094]: https://leetcode-cn.com/problems/car-pooling
[1095]: https://leetcode-cn.com/problems/find-in-mountain-array
[1096]: https://leetcode-cn.com/problems/brace-expansion-ii
[1097]: https://leetcode-cn.com/problems/game-play-analysis-v
[1098]: https://leetcode-cn.com/problems/unpopular-books
[1099]: https://leetcode-cn.com/problems/two-sum-less-than-k
[1100]: https://leetcode-cn.com/problems/find-k-length-substrings-with-no-repeated-characters
[1101]: https://leetcode-cn.com/problems/the-earliest-moment-when-everyone-become-friends
[1102]: https://leetcode-cn.com/problems/path-with-maximum-minimum-value
[1103]: https://leetcode-cn.com/problems/distribute-candies-to-people
[1104]: https://leetcode-cn.com/problems/path-in-zigzag-labelled-binary-tree
[1105]: https://leetcode-cn.com/problems/filling-bookcase-shelves
[1106]: https://leetcode-cn.com/problems/parsing-a-boolean-expression
[1107]: https://leetcode-cn.com/problems/new-users-daily-count
[1108]: https://leetcode-cn.com/problems/defanging-an-ip-address
[1109]: https://leetcode-cn.com/problems/corporate-flight-bookings
[1110]: https://leetcode-cn.com/problems/delete-nodes-and-return-forest
[1111]: https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings
[1112]: https://leetcode-cn.com/problems/highest-grade-for-each-student
[1113]: https://leetcode-cn.com/problems/reported-posts
[1114]: https://leetcode-cn.com/problems/print-in-order
[1115]: https://leetcode-cn.com/problems/print-foobar-alternately
[1116]: https://leetcode-cn.com/problems/print-zero-even-odd
[1117]: https://leetcode-cn.com/problems/building-h2o
[1118]: https://leetcode-cn.com/problems/number-of-days-in-a-month
[1119]: https://leetcode-cn.com/problems/remove-vowels-from-a-string
[1120]: https://leetcode-cn.com/problems/maximum-average-subtree
[1121]: https://leetcode-cn.com/problems/divide-array-into-increasing-sequences
[1122]: https://leetcode-cn.com/problems/relative-sort-array
[1123]: https://leetcode-cn.com/problems/lowest-common-ancestor-of-deepest-leaves
[1124]: https://leetcode-cn.com/problems/longest-well-performing-interval
[1125]: https://leetcode-cn.com/problems/smallest-sufficient-team
[1126]: https://leetcode-cn.com/problems/active-businesses
[1127]: https://leetcode-cn.com/problems/user-purchase-platform
[1128]: https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs
[1129]: https://leetcode-cn.com/problems/shortest-path-with-alternating-colors
[1130]: https://leetcode-cn.com/problems/minimum-cost-tree-from-leaf-values
[1131]: https://leetcode-cn.com/problems/maximum-of-absolute-value-expression
[1132]: https://leetcode-cn.com/problems/reported-posts-ii
[1133]: https://leetcode-cn.com/problems/largest-unique-number
[1134]: https://leetcode-cn.com/problems/armstrong-number
[1135]: https://leetcode-cn.com/problems/connecting-cities-with-minimum-cost
[1136]: https://leetcode-cn.com/problems/parallel-courses
[1137]: https://leetcode-cn.com/problems/n-th-tribonacci-number
[1138]: https://leetcode-cn.com/problems/alphabet-board-path
[1139]: https://leetcode-cn.com/problems/largest-1-bordered-square
[1140]: https://leetcode-cn.com/problems/stone-game-ii
[1141]: https://leetcode-cn.com/problems/user-activity-for-the-past-30-days-i
[1142]: https://leetcode-cn.com/problems/user-activity-for-the-past-30-days-ii
[1143]: https://leetcode-cn.com/problems/longest-common-subsequence
[1144]: https://leetcode-cn.com/problems/decrease-elements-to-make-array-zigzag
[1145]: https://leetcode-cn.com/problems/binary-tree-coloring-game
[1146]: https://leetcode-cn.com/problems/snapshot-array
[1147]: https://leetcode-cn.com/problems/longest-chunked-palindrome-decomposition
[1148]: https://leetcode-cn.com/problems/article-views-i
[1149]: https://leetcode-cn.com/problems/article-views-ii
[1150]: https://leetcode-cn.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array
[1151]: https://leetcode-cn.com/problems/minimum-swaps-to-group-all-1s-together
[1152]: https://leetcode-cn.com/problems/analyze-user-website-visit-pattern
[1153]: https://leetcode-cn.com/problems/string-transforms-into-another-string
[1154]: https://leetcode-cn.com/problems/day-of-the-year
[1155]: https://leetcode-cn.com/problems/number-of-dice-rolls-with-target-sum
[1156]: https://leetcode-cn.com/problems/swap-for-longest-repeated-character-substring
[1157]: https://leetcode-cn.com/problems/online-majority-element-in-subarray
[1158]: https://leetcode-cn.com/problems/market-analysis-i
[1159]: https://leetcode-cn.com/problems/market-analysis-ii
[1160]: https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters
[1161]: https://leetcode-cn.com/problems/maximum-level-sum-of-a-binary-tree
[1162]: https://leetcode-cn.com/problems/as-far-from-land-as-possible
[1163]: https://leetcode-cn.com/problems/last-substring-in-lexicographical-order
[1164]: https://leetcode-cn.com/problems/product-price-at-a-given-date
[1165]: https://leetcode-cn.com/problems/single-row-keyboard
[1166]: https://leetcode-cn.com/problems/design-file-system
[1167]: https://leetcode-cn.com/problems/minimum-cost-to-connect-sticks
[1168]: https://leetcode-cn.com/problems/optimize-water-distribution-in-a-village
[1169]: https://leetcode-cn.com/problems/invalid-transactions
[1170]: https://leetcode-cn.com/problems/compare-strings-by-frequency-of-the-smallest-character
[1171]: https://leetcode-cn.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list
[1172]: https://leetcode-cn.com/problems/dinner-plate-stacks
[1173]: https://leetcode-cn.com/problems/immediate-food-delivery-i
[1174]: https://leetcode-cn.com/problems/immediate-food-delivery-ii
[1175]: https://leetcode-cn.com/problems/prime-arrangements
[1176]: https://leetcode-cn.com/problems/diet-plan-performance
[1177]: https://leetcode-cn.com/problems/can-make-palindrome-from-substring
[1178]: https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle
[1179]: https://leetcode-cn.com/problems/reformat-department-table
[1180]: https://leetcode-cn.com/problems/count-substrings-with-only-one-distinct-letter
[1181]: https://leetcode-cn.com/problems/before-and-after-puzzle
[1182]: https://leetcode-cn.com/problems/shortest-distance-to-target-color
[1183]: https://leetcode-cn.com/problems/maximum-number-of-ones
[1184]: https://leetcode-cn.com/problems/distance-between-bus-stops
[1185]: https://leetcode-cn.com/problems/day-of-the-week
[1186]: https://leetcode-cn.com/problems/maximum-subarray-sum-with-one-deletion
[1187]: https://leetcode-cn.com/problems/make-array-strictly-increasing
[1188]: https://leetcode-cn.com/problems/design-bounded-blocking-queue
[1189]: https://leetcode-cn.com/problems/maximum-number-of-balloons
[1190]: https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses
[1191]: https://leetcode-cn.com/problems/k-concatenation-maximum-sum
[1192]: https://leetcode-cn.com/problems/critical-connections-in-a-network
[1193]: https://leetcode-cn.com/problems/monthly-transactions-i
[1194]: https://leetcode-cn.com/problems/tournament-winners
[1195]: https://leetcode-cn.com/problems/fizz-buzz-multithreaded
[1196]: https://leetcode-cn.com/problems/how-many-apples-can-you-put-into-the-basket
[1197]: https://leetcode-cn.com/problems/minimum-knight-moves
[1198]: https://leetcode-cn.com/problems/find-smallest-common-element-in-all-rows
[1199]: https://leetcode-cn.com/problems/minimum-time-to-build-blocks
[1200]: https://leetcode-cn.com/problems/minimum-absolute-difference
[1201]: https://leetcode-cn.com/problems/ugly-number-iii
[1202]: https://leetcode-cn.com/problems/smallest-string-with-swaps
[1203]: https://leetcode-cn.com/problems/sort-items-by-groups-respecting-dependencies
[1204]: https://leetcode-cn.com/problems/last-person-to-fit-in-the-elevator
[1205]: https://leetcode-cn.com/problems/monthly-transactions-ii
[1206]: https://leetcode-cn.com/problems/design-skiplist
[1207]: https://leetcode-cn.com/problems/unique-number-of-occurrences
[1208]: https://leetcode-cn.com/problems/get-equal-substrings-within-budget
[1209]: https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string-ii
[1210]: https://leetcode-cn.com/problems/minimum-moves-to-reach-target-with-rotations
[1211]: https://leetcode-cn.com/problems/queries-quality-and-percentage
[1212]: https://leetcode-cn.com/problems/team-scores-in-football-tournament
[1213]: https://leetcode-cn.com/problems/intersection-of-three-sorted-arrays
[1214]: https://leetcode-cn.com/problems/two-sum-bsts
[1215]: https://leetcode-cn.com/problems/stepping-numbers
[1216]: https://leetcode-cn.com/problems/valid-palindrome-iii
[1217]: https://leetcode-cn.com/problems/play-with-chips
[1218]: https://leetcode-cn.com/problems/longest-arithmetic-subsequence-of-given-difference
[1219]: https://leetcode-cn.com/problems/path-with-maximum-gold
[1220]: https://leetcode-cn.com/problems/count-vowels-permutation
[1221]: https://leetcode-cn.com/problems/split-a-string-in-balanced-strings
[1222]: https://leetcode-cn.com/problems/queens-that-can-attack-the-king
[1223]: https://leetcode-cn.com/problems/dice-roll-simulation
[1224]: https://leetcode-cn.com/problems/maximum-equal-frequency
[1225]: https://leetcode-cn.com/problems/report-contiguous-dates
[1226]: https://leetcode-cn.com/problems/the-dining-philosophers
[1227]: https://leetcode-cn.com/problems/airplane-seat-assignment-probability
[1228]: https://leetcode-cn.com/problems/missing-number-in-arithmetic-progression
[1229]: https://leetcode-cn.com/problems/meeting-scheduler
[1230]: https://leetcode-cn.com/problems/toss-strange-coins
[1231]: https://leetcode-cn.com/problems/divide-chocolate
[1232]: https://leetcode-cn.com/problems/check-if-it-is-a-straight-line
[1233]: https://leetcode-cn.com/problems/remove-sub-folders-from-the-filesystem
[1234]: https://leetcode-cn.com/problems/replace-the-substring-for-balanced-string
[1235]: https://leetcode-cn.com/problems/maximum-profit-in-job-scheduling
[1236]: https://leetcode-cn.com/problems/web-crawler
[1237]: https://leetcode-cn.com/problems/find-positive-integer-solution-for-a-given-equation
[1238]: https://leetcode-cn.com/problems/circular-permutation-in-binary-representation
[1239]: https://leetcode-cn.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters
[1240]: https://leetcode-cn.com/problems/tiling-a-rectangle-with-the-fewest-squares
[1241]: https://leetcode-cn.com/problems/number-of-comments-per-post
[1242]: https://leetcode-cn.com/problems/web-crawler-multithreaded
[1243]: https://leetcode-cn.com/problems/array-transformation
[1244]: https://leetcode-cn.com/problems/design-a-leaderboard
[1245]: https://leetcode-cn.com/problems/tree-diameter
[1246]: https://leetcode-cn.com/problems/palindrome-removal
[1247]: https://leetcode-cn.com/problems/minimum-swaps-to-make-strings-equal
[1248]: https://leetcode-cn.com/problems/count-number-of-nice-subarrays
[1249]: https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses
[1250]: https://leetcode-cn.com/problems/check-if-it-is-a-good-array
[1251]: https://leetcode-cn.com/problems/average-selling-price
[1252]: https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix
[1253]: https://leetcode-cn.com/problems/reconstruct-a-2-row-binary-matrix
[1254]: https://leetcode-cn.com/problems/number-of-closed-islands
[1255]: https://leetcode-cn.com/problems/maximum-score-words-formed-by-letters
[1256]: https://leetcode-cn.com/problems/encode-number
[1257]: https://leetcode-cn.com/problems/smallest-common-region
[1258]: https://leetcode-cn.com/problems/synonymous-sentences
[1259]: https://leetcode-cn.com/problems/handshakes-that-dont-cross
[1260]: https://leetcode-cn.com/problems/shift-2d-grid
[1261]: https://leetcode-cn.com/problems/find-elements-in-a-contaminated-binary-tree
[1262]: https://leetcode-cn.com/problems/greatest-sum-divisible-by-three
[1263]: https://leetcode-cn.com/problems/minimum-moves-to-move-a-box-to-their-target-location
[1264]: https://leetcode-cn.com/problems/page-recommendations
[1265]: https://leetcode-cn.com/problems/print-immutable-linked-list-in-reverse
[1266]: https://leetcode-cn.com/problems/minimum-time-visiting-all-points
[1267]: https://leetcode-cn.com/problems/count-servers-that-communicate
[1268]: https://leetcode-cn.com/problems/search-suggestions-system
[1269]: https://leetcode-cn.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps
[1270]: https://leetcode-cn.com/problems/all-people-report-to-the-given-manager
[1271]: https://leetcode-cn.com/problems/hexspeak
[1272]: https://leetcode-cn.com/problems/remove-interval
[1273]: https://leetcode-cn.com/problems/delete-tree-nodes
[1274]: https://leetcode-cn.com/problems/number-of-ships-in-a-rectangle
[1275]: https://leetcode-cn.com/problems/find-winner-on-a-tic-tac-toe-game
[1276]: https://leetcode-cn.com/problems/number-of-burgers-with-no-waste-of-ingredients
[1277]: https://leetcode-cn.com/problems/count-square-submatrices-with-all-ones
[1278]: https://leetcode-cn.com/problems/palindrome-partitioning-iii
[1279]: https://leetcode-cn.com/problems/traffic-light-controlled-intersection
[1280]: https://leetcode-cn.com/problems/students-and-examinations
[1281]: https://leetcode-cn.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer
[1282]: https://leetcode-cn.com/problems/group-the-people-given-the-group-size-they-belong-to
[1283]: https://leetcode-cn.com/problems/find-the-smallest-divisor-given-a-threshold
[1284]: https://leetcode-cn.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix
[1285]: https://leetcode-cn.com/problems/find-the-start-and-end-number-of-continuous-ranges
[1286]: https://leetcode-cn.com/problems/iterator-for-combination
[1287]: https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array
[1288]: https://leetcode-cn.com/problems/remove-covered-intervals
[1289]: https://leetcode-cn.com/problems/minimum-falling-path-sum-ii
[1290]: https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer
[1291]: https://leetcode-cn.com/problems/sequential-digits
[1292]: https://leetcode-cn.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold
[1293]: https://leetcode-cn.com/problems/shortest-path-in-a-grid-with-obstacles-elimination
[1294]: https://leetcode-cn.com/problems/weather-type-in-each-country
[1295]: https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits
[1296]: https://leetcode-cn.com/problems/divide-array-in-sets-of-k-consecutive-numbers
[1297]: https://leetcode-cn.com/problems/maximum-number-of-occurrences-of-a-substring
[1298]: https://leetcode-cn.com/problems/maximum-candies-you-can-get-from-boxes
[1299]: https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side
[1300]: https://leetcode-cn.com/problems/sum-of-mutated-array-closest-to-target
[1301]: https://leetcode-cn.com/problems/number-of-paths-with-max-score
[1302]: https://leetcode-cn.com/problems/deepest-leaves-sum
[1303]: https://leetcode-cn.com/problems/find-the-team-size
[1304]: https://leetcode-cn.com/problems/find-n-unique-integers-sum-up-to-zero
[1305]: https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees
[1306]: https://leetcode-cn.com/problems/jump-game-iii
[1307]: https://leetcode-cn.com/problems/verbal-arithmetic-puzzle
[1308]: https://leetcode-cn.com/problems/running-total-for-different-genders
[1309]: https://leetcode-cn.com/problems/decrypt-string-from-alphabet-to-integer-mapping
[1310]: https://leetcode-cn.com/problems/xor-queries-of-a-subarray
[1311]: https://leetcode-cn.com/problems/get-watched-videos-by-your-friends
[1312]: https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome
[1313]: https://leetcode-cn.com/problems/decompress-run-length-encoded-list
[1314]: https://leetcode-cn.com/problems/matrix-block-sum
[1315]: https://leetcode-cn.com/problems/sum-of-nodes-with-even-valued-grandparent
[1316]: https://leetcode-cn.com/problems/distinct-echo-substrings
[1317]: https://leetcode-cn.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers
[1318]: https://leetcode-cn.com/problems/minimum-flips-to-make-a-or-b-equal-to-c
[1319]: https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected
[1320]: https://leetcode-cn.com/problems/minimum-distance-to-type-a-word-using-two-fingers
[1321]: https://leetcode-cn.com/problems/restaurant-growth
[1322]: https://leetcode-cn.com/problems/ads-performance
[1323]: https://leetcode-cn.com/problems/maximum-69-number
[1324]: https://leetcode-cn.com/problems/print-words-vertically
[1325]: https://leetcode-cn.com/problems/delete-leaves-with-a-given-value
[1326]: https://leetcode-cn.com/problems/minimum-number-of-taps-to-open-to-water-a-garden
[1327]: https://leetcode-cn.com/problems/list-the-products-ordered-in-a-period
[1328]: https://leetcode-cn.com/problems/break-a-palindrome
[1329]: https://leetcode-cn.com/problems/sort-the-matrix-diagonally
[1330]: https://leetcode-cn.com/problems/reverse-subarray-to-maximize-array-value
[1331]: https://leetcode-cn.com/problems/rank-transform-of-an-array
[1332]: https://leetcode-cn.com/problems/remove-palindromic-subsequences
[1333]: https://leetcode-cn.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance
[1334]: https://leetcode-cn.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance
[1335]: https://leetcode-cn.com/problems/minimum-difficulty-of-a-job-schedule
[1336]: https://leetcode-cn.com/problems/number-of-transactions-per-visit
[1337]: https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix
[1338]: https://leetcode-cn.com/problems/reduce-array-size-to-the-half
[1339]: https://leetcode-cn.com/problems/maximum-product-of-splitted-binary-tree
[1340]: https://leetcode-cn.com/problems/jump-game-v
[1341]: https://leetcode-cn.com/problems/movie-rating
[1342]: https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero
[1343]: https://leetcode-cn.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold
[1344]: https://leetcode-cn.com/problems/angle-between-hands-of-a-clock
[1345]: https://leetcode-cn.com/problems/jump-game-iv
[1346]: https://leetcode-cn.com/problems/check-if-n-and-its-double-exist
[1347]: https://leetcode-cn.com/problems/minimum-number-of-steps-to-make-two-strings-anagram
[1348]: https://leetcode-cn.com/problems/tweet-counts-per-frequency
[1349]: https://leetcode-cn.com/problems/maximum-students-taking-exam
[1350]: https://leetcode-cn.com/problems/students-with-invalid-departments
[1351]: https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix
[1352]: https://leetcode-cn.com/problems/product-of-the-last-k-numbers
[1353]: https://leetcode-cn.com/problems/maximum-number-of-events-that-can-be-attended
[1354]: https://leetcode-cn.com/problems/construct-target-array-with-multiple-sums
[1355]: https://leetcode-cn.com/problems/activity-participants
[1356]: https://leetcode-cn.com/problems/sort-integers-by-the-number-of-1-bits
[1357]: https://leetcode-cn.com/problems/apply-discount-every-n-orders
[1358]: https://leetcode-cn.com/problems/number-of-substrings-containing-all-three-characters
[1359]: https://leetcode-cn.com/problems/count-all-valid-pickup-and-delivery-options
[1360]: https://leetcode-cn.com/problems/number-of-days-between-two-dates
[1361]: https://leetcode-cn.com/problems/validate-binary-tree-nodes
[1362]: https://leetcode-cn.com/problems/closest-divisors
[1363]: https://leetcode-cn.com/problems/largest-multiple-of-three
[1364]: https://leetcode-cn.com/problems/number-of-trusted-contacts-of-a-customer
[1365]: https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number
[1366]: https://leetcode-cn.com/problems/rank-teams-by-votes
[1367]: https://leetcode-cn.com/problems/linked-list-in-binary-tree
[1368]: https://leetcode-cn.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid
[1369]: https://leetcode-cn.com/problems/get-the-second-most-recent-activity
[1370]: https://leetcode-cn.com/problems/increasing-decreasing-string
[1371]: https://leetcode-cn.com/problems/find-the-longest-substring-containing-vowels-in-even-counts
[1372]: https://leetcode-cn.com/problems/longest-zigzag-path-in-a-binary-tree
[1373]: https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree
[1374]: https://leetcode-cn.com/problems/generate-a-string-with-characters-that-have-odd-counts
[1375]: https://leetcode-cn.com/problems/bulb-switcher-iii
[1376]: https://leetcode-cn.com/problems/time-needed-to-inform-all-employees
[1377]: https://leetcode-cn.com/problems/frog-position-after-t-seconds
[1378]: https://leetcode-cn.com/problems/replace-employee-id-with-the-unique-identifier
[1379]: https://leetcode-cn.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree
[1380]: https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix
[1381]: https://leetcode-cn.com/problems/design-a-stack-with-increment-operation
[1382]: https://leetcode-cn.com/problems/balance-a-binary-search-tree
[1383]: https://leetcode-cn.com/problems/maximum-performance-of-a-team
[1384]: https://leetcode-cn.com/problems/total-sales-amount-by-year
[1385]: https://leetcode-cn.com/problems/find-the-distance-value-between-two-arrays
[1386]: https://leetcode-cn.com/problems/cinema-seat-allocation
[1387]: https://leetcode-cn.com/problems/sort-integers-by-the-power-value
[1388]: https://leetcode-cn.com/problems/pizza-with-3n-slices
[1389]: https://leetcode-cn.com/problems/create-target-array-in-the-given-order
[1390]: https://leetcode-cn.com/problems/four-divisors
[1391]: https://leetcode-cn.com/problems/check-if-there-is-a-valid-path-in-a-grid
[1392]: https://leetcode-cn.com/problems/longest-happy-prefix
[1393]: https://leetcode-cn.com/problems/capital-gainloss
[1394]: https://leetcode-cn.com/problems/find-lucky-integer-in-an-array
[1395]: https://leetcode-cn.com/problems/count-number-of-teams
[1396]: https://leetcode-cn.com/problems/design-underground-system
[1397]: https://leetcode-cn.com/problems/find-all-good-strings
[1398]: https://leetcode-cn.com/problems/customers-who-bought-products-a-and-b-but-not-c
[1399]: https://leetcode-cn.com/problems/count-largest-group
[1400]: https://leetcode-cn.com/problems/construct-k-palindrome-strings
[1401]: https://leetcode-cn.com/problems/circle-and-rectangle-overlapping
[1402]: https://leetcode-cn.com/problems/reducing-dishes
[1403]: https://leetcode-cn.com/problems/minimum-subsequence-in-non-increasing-order
[1404]: https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one
[1405]: https://leetcode-cn.com/problems/longest-happy-string
[1406]: https://leetcode-cn.com/problems/stone-game-iii
[lcp 1]: https://leetcode-cn.com/problems/guess-numbers
[lcp 2]: https://leetcode-cn.com/problems/deep-dark-fraction
[lcp 3]: https://leetcode-cn.com/problems/programmable-robot
[lcp 4]: https://leetcode-cn.com/problems/broken-board-dominoes
[lcp 5]: https://leetcode-cn.com/problems/coin-bonus
[面试题 01.01]: https://leetcode-cn.com/problems/is-unique-lcci
[面试题 01.02]: https://leetcode-cn.com/problems/check-permutation-lcci
[面试题 01.03]: https://leetcode-cn.com/problems/string-to-url-lcci
[面试题 01.04]: https://leetcode-cn.com/problems/palindrome-permutation-lcci
[面试题 01.05]: https://leetcode-cn.com/problems/one-away-lcci
[面试题 01.06]: https://leetcode-cn.com/problems/compress-string-lcci
[面试题 01.07]: https://leetcode-cn.com/problems/rotate-matrix-lcci
[面试题 01.08]: https://leetcode-cn.com/problems/zero-matrix-lcci
[面试题 01.09]: https://leetcode-cn.com/problems/string-rotation-lcci
[面试题 02.01]: https://leetcode-cn.com/problems/remove-duplicate-node-lcci
[面试题 02.02]: https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci
[面试题 02.03]: https://leetcode-cn.com/problems/delete-middle-node-lcci
[面试题 02.04]: https://leetcode-cn.com/problems/partition-list-lcci
[面试题 02.05]: https://leetcode-cn.com/problems/sum-lists-lcci
[面试题 02.06]: https://leetcode-cn.com/problems/palindrome-linked-list-lcci
[面试题 02.07]: https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci
[面试题 02.08]: https://leetcode-cn.com/problems/linked-list-cycle-lcci
[面试题 03.01]: https://leetcode-cn.com/problems/three-in-one-lcci
[面试题 03.02]: https://leetcode-cn.com/problems/min-stack-lcci
[面试题 03.03]: https://leetcode-cn.com/problems/stack-of-plates-lcci
[面试题 03.04]: https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
[面试题 03.05]: https://leetcode-cn.com/problems/sort-of-stacks-lcci
[面试题 03.06]: https://leetcode-cn.com/problems/animal-shelter-lcci
[面试题 04.01]: https://leetcode-cn.com/problems/route-between-nodes-lcci
[面试题 04.02]: https://leetcode-cn.com/problems/minimum-height-tree-lcci
[面试题 04.03]: https://leetcode-cn.com/problems/list-of-depth-lcci
[面试题 04.04]: https://leetcode-cn.com/problems/check-balance-lcci
[面试题 04.05]: https://leetcode-cn.com/problems/legal-binary-search-tree-lcci
[面试题 04.06]: https://leetcode-cn.com/problems/successor-lcci
[面试题 04.08]: https://leetcode-cn.com/problems/first-common-ancestor-lcci
[面试题 04.09]: https://leetcode-cn.com/problems/bst-sequences-lcci
[面试题 04.10]: https://leetcode-cn.com/problems/check-subtree-lcci
[面试题 04.12]: https://leetcode-cn.com/problems/paths-with-sum-lcci
[面试题 05.01]: https://leetcode-cn.com/problems/insert-into-bits-lcci
[面试题 05.02]: https://leetcode-cn.com/problems/bianry-number-to-string-lcci
[面试题 05.03]: https://leetcode-cn.com/problems/reverse-bits-lcci
[面试题 05.04]: https://leetcode-cn.com/problems/closed-number-lcci
[面试题 05.06]: https://leetcode-cn.com/problems/convert-integer-lcci
[面试题 05.07]: https://leetcode-cn.com/problems/exchange-lcci
[面试题 05.08]: https://leetcode-cn.com/problems/draw-line-lcci
[面试题 08.01]: https://leetcode-cn.com/problems/three-steps-problem-lcci
[面试题 08.02]: https://leetcode-cn.com/problems/robot-in-a-grid-lcci
[面试题 08.03]: https://leetcode-cn.com/problems/magic-index-lcci
[面试题 08.04]: https://leetcode-cn.com/problems/power-set-lcci
[面试题 08.05]: https://leetcode-cn.com/problems/recursive-mulitply-lcci
[面试题 08.06]: https://leetcode-cn.com/problems/hanota-lcci
[面试题 08.07]: https://leetcode-cn.com/problems/permutation-i-lcci
[面试题 08.08]: https://leetcode-cn.com/problems/permutation-ii-lcci
[面试题 08.09]: https://leetcode-cn.com/problems/bracket-lcci
[面试题 08.10]: https://leetcode-cn.com/problems/color-fill-lcci
[面试题 08.11]: https://leetcode-cn.com/problems/coin-lcci
[面试题 08.12]: https://leetcode-cn.com/problems/eight-queens-lcci
[面试题 08.13]: https://leetcode-cn.com/problems/pile-box-lcci
[面试题 08.14]: https://leetcode-cn.com/problems/boolean-evaluation-lcci
[面试题 10.01]: https://leetcode-cn.com/problems/sorted-merge-lcci
[面试题 10.02]: https://leetcode-cn.com/problems/group-anagrams-lcci
[面试题 10.03]: https://leetcode-cn.com/problems/search-rotate-array-lcci
[面试题 10.05]: https://leetcode-cn.com/problems/sparse-array-search-lcci
[面试题 10.09]: https://leetcode-cn.com/problems/sorted-matrix-search-lcci
[面试题 10.10]: https://leetcode-cn.com/problems/rank-from-stream-lcci
[面试题 10.11]: https://leetcode-cn.com/problems/peaks-and-valleys-lcci
[面试题 16.01]: https://leetcode-cn.com/problems/swap-numbers-lcci
[面试题 16.02]: https://leetcode-cn.com/problems/words-frequency-lcci
[面试题 16.03]: https://leetcode-cn.com/problems/intersection-lcci
[面试题 16.04]: https://leetcode-cn.com/problems/tic-tac-toe-lcci
[面试题 16.05]: https://leetcode-cn.com/problems/factorial-zeros-lcci
[面试题 16.06]: https://leetcode-cn.com/problems/smallest-difference-lcci
[面试题 16.07]: https://leetcode-cn.com/problems/maximum-lcci
[面试题 16.08]: https://leetcode-cn.com/problems/english-int-lcci
[面试题 16.09]: https://leetcode-cn.com/problems/operations-lcci
[面试题 16.10]: https://leetcode-cn.com/problems/living-people-lcci
[面试题 16.11]: https://leetcode-cn.com/problems/diving-board-lcci
[面试题 16.13]: https://leetcode-cn.com/problems/bisect-squares-lcci
[面试题 16.14]: https://leetcode-cn.com/problems/best-line-lcci
[面试题 16.15]: https://leetcode-cn.com/problems/master-mind-lcci
[面试题 16.16]: https://leetcode-cn.com/problems/sub-sort-lcci
[面试题 16.17]: https://leetcode-cn.com/problems/contiguous-sequence-lcci
[面试题 16.18]: https://leetcode-cn.com/problems/pattern-matching-lcci
[面试题 16.19]: https://leetcode-cn.com/problems/pond-sizes-lcci
[面试题 16.20]: https://leetcode-cn.com/problems/t9-lcci
[面试题 16.21]: https://leetcode-cn.com/problems/sum-swap-lcci
[面试题 16.22]: https://leetcode-cn.com/problems/langtons-ant-lcci
[面试题 16.24]: https://leetcode-cn.com/problems/pairs-with-sum-lcci
[面试题 16.25]: https://leetcode-cn.com/problems/lru-cache-lcci
[面试题 16.26]: https://leetcode-cn.com/problems/calculator-lcci
[面试题 17.01]: https://leetcode-cn.com/problems/add-without-plus-lcci
[面试题 17.04]: https://leetcode-cn.com/problems/missing-number-lcci
[面试题 17.05]: https://leetcode-cn.com/problems/find-longest-subarray-lcci
[面试题 17.06]: https://leetcode-cn.com/problems/number-of-2s-in-range-lcci
[面试题 17.07]: https://leetcode-cn.com/problems/baby-names-lcci
[面试题 17.08]: https://leetcode-cn.com/problems/circus-tower-lcci
[面试题 17.09]: https://leetcode-cn.com/problems/get-kth-magic-number-lcci
[面试题 17.10]: https://leetcode-cn.com/problems/find-majority-element-lcci
[面试题 17.11]: https://leetcode-cn.com/problems/find-closest-lcci
[面试题 17.12]: https://leetcode-cn.com/problems/binode-lcci
[面试题 17.13]: https://leetcode-cn.com/problems/re-space-lcci
[面试题 17.14]: https://leetcode-cn.com/problems/smallest-k-lcci
[面试题 17.15]: https://leetcode-cn.com/problems/longest-word-lcci
[面试题 17.16]: https://leetcode-cn.com/problems/the-masseuse-lcci
[面试题 17.17]: https://leetcode-cn.com/problems/multi-search-lcci
[面试题 17.18]: https://leetcode-cn.com/problems/shortest-supersequence-lcci
[面试题 17.19]: https://leetcode-cn.com/problems/missing-two-lcci
[面试题 17.20]: https://leetcode-cn.com/problems/continuous-median-lcci
[面试题 17.21]: https://leetcode-cn.com/problems/volume-of-histogram-lcci
[面试题 17.22]: https://leetcode-cn.com/problems/word-transformer-lcci
[面试题 17.23]: https://leetcode-cn.com/problems/max-black-square-lcci
[面试题 17.24]: https://leetcode-cn.com/problems/max-submatrix-lcci
[面试题 17.25]: https://leetcode-cn.com/problems/word-rectangle-lcci
[面试题 17.26]: https://leetcode-cn.com/problems/sparse-similarity-lcci
[面试题03]: https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
[面试题04]: https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof
[面试题05]: https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof
[面试题06]: https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof
[面试题07]: https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof
[面试题09]: https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
[面试题10- i]: https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof
[面试题10- ii]: https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof
[面试题11]: https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
[面试题12]: https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof
[面试题13]: https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof
[面试题14- i]: https://leetcode-cn.com/problems/jian-sheng-zi-lcof
[面试题14- ii]: https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof
[面试题15]: https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof
[面试题16]: https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof
[面试题17]: https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof
[面试题18]: https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof
[面试题19]: https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof
[面试题20]: https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof
[面试题21]: https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof
[面试题22]: https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof
[面试题24]: https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof
[面试题25]: https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
[面试题26]: https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof
[面试题27]: https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof
[面试题28]: https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof
[面试题29]: https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
[面试题30]: https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof
[面试题31]: https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof
[面试题32 - i]: https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof
[面试题32 - ii]: https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof
[面试题32 - iii]: https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof
[面试题33]: https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof
[面试题34]: https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof
[面试题35]: https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof
[面试题36]: https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof
[面试题37]: https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof
[面试题38]: https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
[面试题39]: https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof
[面试题40]: https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof
[面试题41]: https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof
[面试题42]: https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof
[面试题43]: https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof
[面试题44]: https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof
[面试题45]: https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof
[面试题46]: https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof
[面试题47]: https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof
[面试题48]: https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof
[面试题49]: https://leetcode-cn.com/problems/chou-shu-lcof
[面试题50]: https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof
[面试题51]: https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof
[面试题52]: https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof
[面试题53 - i]: https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof
[面试题53 - ii]: https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof
[面试题54]: https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof
[面试题55 - i]: https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof
[面试题55 - ii]: https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof
[面试题56 - i]: https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof
[面试题56 - ii]: https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof
[面试题57]: https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof
[面试题57 - ii]: https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
[面试题58 - i]: https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof
[面试题58 - ii]: https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof
[面试题59 - i]: https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
[面试题59 - ii]: https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof
[面试题60]: https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof
[面试题61]: https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof
[面试题62]: https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof
[面试题63]: https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof
[面试题64]: https://leetcode-cn.com/problems/qiu-12n-lcof
[面试题65]: https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof
[面试题66]: https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof
[面试题67]: https://leetcode-cn.com/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof
[面试题68 - i]: https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof
[面试题68 - ii]: https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof
