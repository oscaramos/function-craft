const fs = require('fs')
const path = require('path')

const downloadHouse = require('./createMinecraftFunctions/downloadHouse')
const getRenderObject = require('./createMinecraftFunctions/getRenderObject')
const extractHouseBlocks = require('./createMinecraftFunctions/extractHouseBlocks')
const createBlocksCommand = require('./createMinecraftFunctions/createBlocksCommand')

const { getDirectoryHouse } = require('./utils')

/**
 * Create an minecraft function from an url from grabcraft.com.
 *
 * @param {string} url - Format https://www.grabcraft.com/minecraft/my-category/my-house
 * @returns {Promise<string>} - The downloaded house converted to an group of commands that creates the house
 */
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


