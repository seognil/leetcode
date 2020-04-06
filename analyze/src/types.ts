type Index = string;
type Title = string;
export type Difficulty = 'Easy' | 'Medium' | 'Hard' | '简单' | '中等' | '困难';
type Acceptance = string;
type Locked = 'LOCKED';

export const LOCKED = 'LOCKED';

export type Problem = [Index, Title, Difficulty, Acceptance, Locked?];

export type UrlList = [string, string][];
