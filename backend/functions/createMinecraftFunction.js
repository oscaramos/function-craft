const {
  getRenderObject,
  extractBlockInfo,
  createBlocksCommand
} = require('../utils')

const createMinecraftFunction = (inputFilename) => {
  const renderObj = getRenderObject(inputFilename);
  const blockDataList = extractBlockInfo(renderObj);
  return createBlocksCommand(blockDataList)
};

module.exports = createMinecraftFunction


