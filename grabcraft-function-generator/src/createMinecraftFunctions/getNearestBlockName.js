let mcData = require("minecraft-data")
const levenshtein = require('fastest-levenshtein')
const { __, includes, pipe, pluck, prop, ifElse, has, always } = require('ramda')

const default_minecraft_version = "1.15.2";
const minecraft_namespace = 'minecraft:';

/**
 * Remove the parenthesis of a block name
 * @param {string} blockName
 * @returns {string}
 */
const removeParenthesis = blockName => {
  return blockName.replace(/\([^)]*\)/g, '').trim();
};

/**
 * Recognize the direction of a block name
 * @param {string} blockName
 * @returns {string}
 */
const getBlockDirection = blockName => {
  const result = blockName.match(/north|south|east|west/i)
  return result ? result[0].toLowerCase() : '';
};

/**
 * Recognize if a minecraft block has the facing property
 * @param {string} blockName
 * @param {string} mcVersion
 * @returns {boolean}
 */
const hasFacingProperty = (blockName, mcVersion = default_minecraft_version) => {
  return pipe(
    prop(__, mcData(mcVersion).blocksByName),
    ifElse(
      has('states'),
      pipe(
        prop('states'),
        pluck('name'),
        includes('facing'),
      ),
      always(false)
    ),
  )(blockName)
}

/**
 * Get the nearest block name using an similarity function(levenshtein distance)
 * @param {string} blockName - Minecraft block name(without parenthesis)
 * @param {string} mcVersion - Minecraft version
 * @returns {string}
 */
const getNearestUsingSimilarityFunction = (blockName, mcVersion=default_minecraft_version) => {
  let nearestBlockName = ""
  let minValue = -1

  // For every minecraft block in the game
  Object.values(mcData(mcVersion).blocksByName).map(
    blockInfo => {
      // Also try the inverse of the block name, example: Gold Block -> Block of Gold
      const words = blockName.split(' ')
      const inverseBlockName = (`${words[words.length - 1]} of ${words.slice(0, words.length - 1).join(' ')}`)

      const wordsPermutation = [blockName, inverseBlockName]
      wordsPermutation.map(permutedBlockName => {
        const newValue = levenshtein.distance(permutedBlockName, blockInfo.displayName);
        if (minValue === -1 || newValue < minValue) {
          nearestBlockName = blockInfo.name
          minValue = newValue
        }
      });
    }
  );
  return nearestBlockName;
};

/**
 * Get the facing direction of a block if it exists
 * @param {string} blockDirection
 * @param {string} nearestBlockName
 * @param {string} mcVersion - Minecraft version
 * @returns {string}
 */
const getFacingDirection = (blockDirection, nearestBlockName, mcVersion) => {
  return hasFacingProperty(nearestBlockName, mcVersion) && blockDirection ? `[facing=${blockDirection}]` : ''
};

let prev_minecraft_version = ''
let minecraft_version = ''
let memo = {}
/**
 * Get the nearest block name from a block name as input
 * @param {string} blockName
 * @param {Object} [options]
 * @param {string} options.mc_version - Minecraft version
 * @returns {string} - The nearest block name
 */
const getNearestBlockName = (blockName, options) => {
  minecraft_version = options && options.mc_version != null ? options.mc_version : default_minecraft_version

  if (minecraft_version !== prev_minecraft_version) {
    // clear memorization for avoid secondary effect
    memo = {}
  }

  const blockDirection = getBlockDirection(blockName);
  const memoBlockName = removeParenthesis(blockName) + blockDirection

  if (!memo[memoBlockName]) {
    const nearestBlockName = getNearestUsingSimilarityFunction(removeParenthesis(blockName), minecraft_version)
    memo[memoBlockName] = minecraft_namespace + nearestBlockName + getFacingDirection(blockDirection, nearestBlockName, minecraft_version)
  }
  return memo[memoBlockName];
};


module.exports = {
  getNearestBlockName,
  removeParenthesis,
  getBlockDirection,
  hasFacingProperty
}
