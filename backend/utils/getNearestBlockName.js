const minecraft_version = "1.15.2";

const mcData = require("minecraft-data")(minecraft_version)
const levenshtein = require('node-levenshtein')
const { __, includes, pipe, pluck, prop } = require('ramda')

const minecraft_namespace = 'minecraft:';

const removeParenthesis = blockName => {
  return blockName.replace(/\([^)]*\)/g, '').trim();
};

const getBlockDirection = blockName => {
  const result = blockName.match(/north|south|east|west/i)
  return result ? result[0].toLowerCase() : '';
};

const hasFacingProperty = pipe(
  prop(__, mcData.blocksByName),
  prop('states'),
  pluck('name'),
  includes('facing'),
)

const getNearestBySimilarityFunction = (blockName, compareStringAlgorithm) => {
  let nearestBlockName = ""
  let minValue = -1

  Object.values(mcData.blocksByName).map(
    blockInfo => {
      // Try every permutation from block Name to get better results
      // Example: blockName can be 'Gold Block', but the blockInfo.displayName can be 'Block of Gold'
      const words = blockName.split(' ')

      // Gold BLock -> Block of Gold
      const inverseBlockName = (words[words.length - 1] + ' of ' + words.slice(0, words.length - 1).join(' '))

      const wordsPermutation = [blockName, inverseBlockName]
      wordsPermutation.map(permutedBlockName => {
        const newValue = compareStringAlgorithm(permutedBlockName, blockInfo.displayName);
        if (minValue === -1 || newValue < minValue) {
          nearestBlockName = blockInfo.name
          minValue = newValue
        }
      });
    }
  );
  return nearestBlockName;
};

const memo = {}

const getProperty = (blockDirection, nearestBlockName) => {
  if (hasFacingProperty(nearestBlockName) && blockDirection) {
    return `[facing=${blockDirection}]`;
  } else {
    return "";
  }
};

const getNearestBlockName = (blockName, compareStringAlgorithm = levenshtein) => {
  const blockDirection = getBlockDirection(blockName);
  const memoBlockName = removeParenthesis(blockName) + blockDirection

  if (!memo[memoBlockName]) {
    const nearestBlockName = getNearestBySimilarityFunction(removeParenthesis(blockName), compareStringAlgorithm)
    const property = getProperty(blockDirection, nearestBlockName)
    memo[memoBlockName] = minecraft_namespace + nearestBlockName + property
  }
  return memo[memoBlockName];
};

module.exports = {
  getNearestBlockName,
  removeParenthesis,
  getBlockDirection,
  hasFacingProperty,
}
