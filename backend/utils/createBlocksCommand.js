const { getNearestBlockName } = require('./getNearestBlockName')

const createBlocksCommand = (blockDataList) => {
  const commands = blockDataList.map(blockData => {
    // the minecraft command block handle generates an offset
    blockData.y -= 1

    // Generate x, y and z
    const x = '~' + (blockData.x !== 0 ? blockData.x : '');
    const y = '~' + (blockData.y !== 0 ? blockData.y : '');
    const z = '~' + (blockData.z !== 0 ? blockData.z : '');
    const block = getNearestBlockName(blockData.name);

    return `setblock ${x} ${y} ${z} ${block} replace`
  })

  return commands.join('\n')
}

module.exports = createBlocksCommand;
