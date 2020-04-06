export type Chapter = {
  title: string;
  pages: (string | number)[];
};

export type Topic = {
  title: string;
  chapters: Chapter[];
  link: string;
};

// * ================================================================================

export const ArrayAndString: Topic = {
  link: 'https://leetcode-cn.com/explore/learn/card/array-and-string/',
  title: '数组和字符串',
  chapters: [
    {
      title: '数组简介',
      pages: ['数组简介', '动态数组简介', 724, 747, 66],
    },
    {
      title: '二维数组简介',
      pages: ['二维数组简介', 498, 54, 118],
    },
    {
      title: '字符串简介',
      pages: ['字符串简介', '不可变字符串 —— 问题和解决方案', 67, 28, 14],
    },
    {
      title: '双指针技巧',
      pages: ['双指针技巧 —— 情景一', 344, 561, 167, '双指针技巧 —— 情景二', 27, 485, 209],
    },
    {
      title: '小结',
      pages: ['数组相关的技术', 189, 119, 151, 557, 26, 283],
    },
  ],
};

export const QueueAndStack: Topic = {
  link: 'https://leetcode-cn.com/explore/learn/card/queue-stack/',
  title: '队列 & 栈',
  chapters: [
    {
      title: '队列：先入先出的数据结构',
      pages: [
        '先入先出的数据结构',
        '队列 - 实现',
        622,
        '设计循环队列',
        '循环队列 - 实现',
        '队列 - 用法',
        346,
      ],
    },
    {
      title: '队列和广度优先搜索',
      pages: ['队列和 BFS', '广度优先搜索 - 模板', 286, 200, 752, 279],
    },
    {
      title: '栈：后入先出的数据结构',
      pages: ['后入先出的数据结构', '栈 - 用法', 155, 20, 739, 150],
    },
    {
      title: '栈和深度优先搜索',
      pages: ['栈和 DFS', 'DFS - 模板 I', 200, 133, 494, 'DFS - 模板 II', 94],
    },
    {
      title: '小结',
      pages: [232, 225, 394, 733, 542, 841],
    },
  ],
};

export const Recursion1: Topic = {
  link: 'https://leetcode.com/explore/learn/card/recursion-i/',
  title: 'Recursion I',
  chapters: [
    {
      title: 'Principle of Recursion',
      pages: ['Principle of Recursion', 344, 'Solution - Reverse String', 'Recursion Function', 24],
    },
    {
      title: 'Recurrence Relation',
      pages: ['Recurrence Relation', 206, 700, 119],
    },
    {
      title: 'Memoization',
      pages: ['Duplicate Calculation in Recursion', 509, 70],
    },
    {
      title: 'Complexity Analysis',
      pages: [
        'Time Complexity - Recursion',
        'Space Complexity - Recursion',
        'Tail Recursion',
        104,
        50,
      ],
    },
    {
      title: 'Conclusion',
      pages: ['Conclusion - Recursion I', 21, 779, 95],
    },
  ],
};

export const Recursion2: Topic = {
  link: 'https://leetcode.com/explore/learn/card/recursion-ii/',
  title: 'Recursion II',
  chapters: [
    {
      title: 'Divide and Conquer',
      pages: [
        'D&C Introduction',
        'Merge Sort',
        912,
        'D&C Template',
        98,
        240,
        'Quick Sort',
        'Master Theorem',
      ],
    },
    {
      title: 'Backtracking',
      pages: ['Backtracking', 52, 'Backtracking Template', 489, 37, 77],
    },
    {
      title: 'Recursion to Iteration',
      pages: ['Unfold Recursion', 100, 22, 94, 102],
    },
    {
      title: 'Conclusion',
      pages: ['Beyond Recursion', 426, 84, 46, 17, 218],
    },
  ],
};

export const LinkedList: Topic = {
  link: 'https://leetcode-cn.com/explore/learn/card/linked-list/',
  title: '链表',
  chapters: [
    {
      title: '单链表',
      pages: ['简介 - 单链表', '添加操作 - 单链表', '删除操作 - 单链表', 707],
    },
    {
      title: '双指针技巧',
      pages: ['链表中的双指针', 141, 142, 160, 19, '小结 - 链表中的双指针'],
    },
    {
      title: '经典问题',
      pages: ['反转链表', 206, 203, 328, 234, '小结 - 链表经典问题'],
    },
    {
      title: '双链表',
      pages: ['简介 - 双链表', '添加操作 - 双链表', '删除操作 - 双链表', 707],
    },
    {
      title: '小结',
      pages: ['小结 - 链表', 21, 2, 430, 138, 61],
    },
  ],
};

export const HashTable: Topic = {
  link: 'https://leetcode-cn.com/explore/learn/card/hash-table/',
  title: '哈希表',
  chapters: [
    {
      title: '设计哈希表',
      pages: ['哈希表的原理', '设计哈希表的关键', 705, 706],
    },
    {
      title: '实际应用 - 哈希集合',
      pages: ['哈希集 - 用法', '使用哈希集查重', 217, 136, 349, 202],
    },
    {
      title: '实际应用 - 哈希映射',
      pages: [
        '哈希映射 - 用法',
        '场景 I - 提供更多信息',
        1,
        205,
        599,
        '场景 II - 按键聚合',
        387,
        350,
        219,
        '日志速率限制器',
      ],
    },
    {
      title: '实际应用 - 设计键',
      pages: ['设计键', 49, '移位字符串分组', 36, 652, '设计键 - 总结'],
    },
    {
      title: '小结',
      pages: [771, 3, '两数之和 III - 数据结构设计', 454, 347, '单词的唯一缩写', 380],
    },
  ],
};

export const BinarySearch: Topic = {
  link: 'https://leetcode-cn.com/explore/learn/card/binary-search/',
  title: '二分查找',
  chapters: [
    {
      title: '背景',
      pages: ['它是如何工作的？', 704, '识别和模板简介'],
    },
    {
      title: '模板 I',
      pages: ['二分查找模板 I', 69, 374, 33],
    },
    {
      title: '模板 II',
      pages: ['二分查找模板 II', 278, 162, 153],
    },
    {
      title: '模板 III',
      pages: ['二分查找模板 III', 34, 658, 162],
    },
    {
      title: '模板分析',
      pages: ['二分查找模板分析', 270, 702],
    },
    {
      title: '小结',
      pages: [50, 367, 744],
    },
    {
      title: '更多练习',
      pages: [153, 154, 349, 350, 167],
    },
    {
      title: '更多练习 II',
      pages: [287, 4, 719, 410],
    },
  ],
};

export const BinaryTree: Topic = {
  link: 'https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/',
  title: '二叉树',
  chapters: [
    {
      title: '树的遍历',
      pages: ['树的遍历 - 介绍', 144, 94, 145, '层序遍历 - 介绍', 102],
    },
    {
      title: '运用递归解决问题',
      pages: ['运用递归解决树的问题', 104, 101, 112],
    },
    {
      title: '总结',
      pages: [106, 105, 116, 117, 236, 297],
    },
  ],
};

export const BinarySearchTree: Topic = {
  link:
    'https://leetcode-cn.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/',
  title: '二叉搜索树',
  chapters: [
    {
      title: '二叉搜索树简介',
      pages: ['二叉搜索树的定义', 98, 173],
    },
    {
      title: '二叉搜索树中的基本操作',
      pages: [
        '在二叉搜索树中实现搜索操作',
        700,
        '在二叉搜索树中实现插入操作 - 介绍',
        701,
        '在二叉搜索树中实现删除操作',
        450,
      ],
    },
    {
      title: '小结',
      pages: ['二叉搜索树简介 - 小结', 703, 235, 220],
    },
    {
      title: '附录：高度平衡的二叉搜索树',
      pages: ['高度平衡的二叉搜索树简介', 110, 108],
    },
  ],
};

export const NaryTree: Topic = {
  link: 'https://leetcode-cn.com/explore/learn/card/n-ary-tree/',
  title: 'N 叉树',
  chapters: [
    {
      title: '遍历',
      pages: ['N 叉树的遍历', 589, 590, 429],
    },
    {
      title: '递归',
      pages: ['N 叉树的经典递归解法', 559],
    },
    {
      title: '小结',
      pages: [428],
    },
  ],
};

export const Trie: Topic = {
  link: 'https://leetcode-cn.com/explore/learn/card/trie/',
  title: '前缀树',
  chapters: [
    {
      title: '前缀树简介',
      pages: ['什么是前缀树?', '如何表示一个前缀树？'],
    },
    {
      title: '基本操作',
      pages: ['Insertion in Trie', 'Search in Trie', 208, 'Implement Trie - Solution'],
    },
    {
      title: '实际应用 I',
      pages: [677, 648, 642, 211],
    },
    {
      title: '实际应用 II',
      pages: [421, 212, 425, 336],
    },
  ],
};

export const Easy: Topic = {
  link: 'https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/',
  title: '初级算法',
  chapters: [
    {
      title: '数组',
      pages: [26, 122, 189, 217, 136, 350, 66, 283, 1, 36, 48],
    },
    {
      title: '字符串',
      pages: [344, 7, 387, 242, 125, 8, 28, 38, 14],
    },
    {
      title: '链表',
      pages: [237, 19, 206, 21, 234, 141],
    },
    {
      title: '树',
      pages: [104, 98, 101, 102, 108],
    },
    {
      title: '排序和搜索',
      pages: [88, 278],
    },
    {
      title: '动态规划',
      pages: [70, 121, 53, 198],
    },
    {
      title: '设计问题',
      pages: [384, 155],
    },
    {
      title: '数学',
      pages: [412, 204, 326, 13],
    },
    {
      title: '其他',
      pages: [191, 461, 190, 118, 20, 268],
    },
  ],
};

export const Meidum: Topic = {
  link: 'https://leetcode-cn.com/explore/interview/card/top-interview-questions-medium/',
  title: '中级算法',
  chapters: [
    {
      title: '数组和字符串',
      pages: [15, 73, 49, 3, 5, 334],
    },
    {
      title: '链表',
      pages: [2, 328, 160],
    },
    {
      title: '树和图',
      pages: [94, 103, 105, 116, 230, 200],
    },
    {
      title: '回溯算法',
      pages: [17, 22, 46, 78, 79],
    },
    {
      title: '排序和搜索',
      pages: [75, 347, 215, 162, 34, 56, 33, 240],
    },
    {
      title: '动态规划',
      pages: [55, 62, 322, 300],
    },
    {
      title: '设计问题',
      pages: [297, 380],
    },
    {
      title: '数学',
      pages: [202, 172, 171, 50, 69, 29, 166],
    },
    {
      title: '其他',
      pages: [371, 150, 169, 621],
    },
  ],
};

export const Hard: Topic = {
  link: 'https://leetcode-cn.com/explore/interview/card/top-interview-questions-hard/',
  title: '高级算法',
  chapters: [
    {
      title: '数组和字符串',
      pages: [238, 54, 454, 11, 289, 41, 128, 287, 227, 239, 76],
    },
    {
      title: '链表',
      pages: [23, 148, 138],
    },
    {
      title: '树和图',
      pages: [127, 130, 236, 124, 547, 207, 210, 329, 315],
    },
    {
      title: '回溯算法',
      pages: [131, 212, 301, 44, 10],
    },
    {
      title: '排序和搜索',
      pages: [324, 378, 4],
    },
    {
      title: '动态规划',
      pages: [152, 309, 279, 139, 140, 312],
    },
    {
      title: '设计问题',
      pages: [146, 208, 341, 295],
    },
    {
      title: '数学',
      pages: [179, 149],
    },
    {
      title: '其他',
      pages: [406, 42, 218, 84],
    },
  ],
};

export const Top: Topic = {
  link: 'https://leetcode-cn.com/explore/interview/card/top-interview-quesitons/',
  title: '算法面试题汇总',
  chapters: [
    {
      title: '开始之前',
      pages: [136, 169, 240, 88, 887],
    },
    {
      title: '主题要点',
      pages: ['首先，理清这些重要问题类型', '其次，掌握你的学习方向'],
    },
    {
      title: '字符串',
      pages: [125, 131, 139, 140, 208, 212, 242, 387, 344],
    },
    {
      title: '数组',
      pages: [152, 169, 189, 217, 283, 384, 350, 334, 240, 238],
    },
    {
      title: '堆、栈与队列',
      pages: [155, 215, 295, 378, 347, 239, 227, 341, 150],
    },
    {
      title: '链表',
      pages: [138, 141, 148, 160, 206, 234, 237, 328],
    },
    {
      title: '哈希与映射',
      pages: [171, 454, 380],
    },
    {
      title: '树',
      pages: [230, 236, 297, 218],
    },
    {
      title: '排序与检索',
      pages: [179, 324, 162, 287, 315],
    },
    {
      title: '动态规划',
      pages: [395, 124, 128, 198, 279, 300, 322, 329],
    },
    {
      title: '图论',
      pages: [127, 200, 207, 210],
    },
    {
      title: '数学 & 位运算',
      pages: [136, 149, 166, 172, 190, 191, 204, 268, 326],
    },
    {
      title: '模拟面试',
      pages: ['开始练习', 202, '？', '？', '？', '？'],
    },
  ],
};

export const Tencent: Topic = {
  link: 'https://leetcode-cn.com/explore/interview/card/tencent/',
  title: '腾讯',
  chapters: [
    {
      title: '数组与字符串',
      pages: [1, 4, 5, 8, 14, 15, 16, 20, 26, 11, 43, 344, 557, 238, 217, 54, 59, 88],
    },
    {
      title: '链表突击',
      pages: [206, 2, 21, 23, 61, 141, 142, 160, 237],
    },
    {
      title: '数学与数字',
      pages: [7, 9, 136, 169, 231],
    },
    {
      title: '排序与搜索',
      pages: [148, 33, 215, 230, 104, 124, 235, 236],
    },
    {
      title: '回溯算法',
      pages: [22, 78, 46, 89],
    },
    {
      title: '动态规划',
      pages: [70, 53, 121, 122, 62, 78],
    },
    {
      title: '设计',
      pages: [146, 155],
    },
    {
      title: '附加',
      pages: [292, '腾讯申请'],
    },
  ],
};

export const ByteDance: Topic = {
  link: 'https://leetcode-cn.com/explore/interview/card/bytedance/',
  title: '字节跳动',
  chapters: [
    {
      title: '挑战字符串',
      pages: [3, 14, 567, 43, 151, 71, 93],
    },
    {
      title: '数组与排序',
      pages: [15, 695, 33, 674, 215, 128, 60, 547, 56, 42],
    },
    {
      title: '链表与树',
      pages: [21, 206, 2, 148, 142, 160, 23, 236, 103],
    },
    {
      title: '动态或贪心',
      pages: [121, 122, 221, 53, 120, 354],
    },
    {
      title: '数据结构',
      pages: [155, 146, 432],
    },
    {
      title: '拓展练习',
      pages: [69, 393, 176],
    },
  ],
};

export const Teambition: Topic = {
  link: 'https://leetcode-cn.com/explore/interview/card/teambition/',
  title: 'Teambition',
  chapters: [
    {
      title: '挑战数据结构',
      pages: [23, 68, 97, 145, 165, 297, 432, 662, 899, 907],
    },
    {
      title: '挑战算法',
      pages: [218, 410, 514, 546, 629, 679, 777, 899, 940, 960],
    },
  ],
};
