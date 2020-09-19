const fs = require('fs')
const path = require('path')

const getRenderObject = require('./createMinecraftFunctions/getRenderObject')
const extractHouseBlocks = require('./createMinecraftFunctions/extractHouseBlocks')
const createBlocksCommand = require('./createMinecraftFunctions/createBlocksCommand')
const downloadHouse = require('./createFunctionFromUrl/downloadHouse')

const { getDirectoryHouse } = require('./utils')

const createMinecraftFunction = async (url) => {
  // Download the house for getting their render object
  await downloadHouse(url)

  // Get the render object path for create the minecraft function
  const directoryHouse = getDirectoryHouse(url)
  const renderObjectName = fs.readdirSync(path.join('.', directoryHouse, 'js'))
    .filter(filename => filename.startsWith('myRenderObject_'))[0];
  const renderObjectPath = path.join('.', directoryHouse, 'js', renderObjectName)

  // Render minecraft function
  const renderObj = getRenderObject(renderObjectPath);
  const houseBlocks = extractHouseBlocks(renderObj);
  return createBlocksCommand(houseBlocks)
};

module.exports = createMinecraftFunction


