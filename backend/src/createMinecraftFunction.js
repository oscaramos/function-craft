const fs = require('fs')
const path = require('path')

const getRenderObject = require('./createMinecraftFunctions/getRenderObject')
const extractHouseBlocks = require('./createMinecraftFunctions/extractHouseBlocks')
const createBlocksCommand = require('./createMinecraftFunctions/createBlocksCommand')
const downloadHouse = require('./createMinecraftFunctions/downloadHouse')

const { getDirectoryHouse } = require('./utils')

const createMinecraftFunction = async (url) => {
  // Download the house for getting their render object
  await downloadHouse(url)

  // Get the render object path for create the minecraft function
  const directoryHouse = getDirectoryHouse(url)
  const renderObjects = fs.readdirSync(path.join('.', directoryHouse, 'js'))
    .filter(filename => filename.startsWith('myRenderObject_'));
  const renderObjectPath = path.join('.', directoryHouse, 'js', renderObjects[0])

  // Render minecraft function
  const renderObj = getRenderObject(renderObjectPath);
  const houseBlocks = extractHouseBlocks(renderObj);
  return createBlocksCommand(houseBlocks)
};

module.exports = createMinecraftFunction


