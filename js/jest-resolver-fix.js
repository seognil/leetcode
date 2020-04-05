// * let jest prefer `solution.ts` instead of `solution.js`
// * origin config maybe from `ts-jest`

module.exports = (request, options) => {
  const { defaultResolver } = options;

  // const oldExtensions = ['.js', '.json', '.jsx', '.ts', '.tsx', '.node'];
  const newExtensions = ['.ts', '.tsx', '.node', '.js', '.json', '.jsx'];

  const newOptions = { ...options, extensions: newExtensions };

  return defaultResolver(request, newOptions);
};
