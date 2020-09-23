const { getNearestBlockName } = require('./getNearestBlockName')

/**
 * Create Blocks command from house blocks to create an house on minecraft
 * @param {any[]} houseBlocks
 * @returns {string}
 */
const createBlocksCommand = houseBlocks => {
  return houseBlocks.map(blockData => {
    // the minecraft command block handle generates an offset
    blockData.y -= 1

    // Generate x, y and z
    const x = '~' + (blockData.x !== 0 ? blockData.x : '');
    const y = '~' + (blockData.y !== 0 ? blockData.y : '');
    const z = '~' + (blockData.z !== 0 ? blockData.z : '');
    const block = getNearestBlockName(blockData.name);

    // Minecraft command to create a blocks relative to player position
    return `setblock ${x} ${y} ${z} ${block} replace`
  })
    // Join the commands between enters
    .join('\n')
}

module.exports = createBlocksCommand;
