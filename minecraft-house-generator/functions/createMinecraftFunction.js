const {
  getObjectFromOldJSFile,
  extractBlockInfo,
  createBlocksCommand
} = require('../utils')

const createMinecraftFunction = (inputFilename) => {
  const renderObj = getObjectFromOldJSFile(inputFilename);
  const blockDataList = extractBlockInfo(renderObj);
  return createBlocksCommand(blockDataList)
};

module.exports = createMinecraftFunction


