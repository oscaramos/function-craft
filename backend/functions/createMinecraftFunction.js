const getRenderObject = require('./createMinecraftFunctions/getRenderObject')
const extractHouseBlocks = require('./createMinecraftFunctions/extractHouseBlocks')

const {
  createBlocksCommand
} = require('./utils')

const createMinecraftFunction = path => {
  const renderObj = getRenderObject(path);
  const houseBlocks = extractHouseBlocks(renderObj);
  return createBlocksCommand(houseBlocks)
};

module.exports = createMinecraftFunction


