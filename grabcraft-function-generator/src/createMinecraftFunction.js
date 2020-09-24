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
 * @param {Object} [options]
 * @param {string} options.mc_version - Minecraft version
 * @returns {Promise<string>} - The downloaded house converted to an group of commands that creates the house
 *
 * @example
 *   const minecraftBlocks = await createMinecraftFunction('https://www.grabcraft.com/minecraft/medieval-rural-house-2/medieval-houses')
 *   console.log(minecraftBlocks)
 *   >>> setblock ~1 ~ ~1 minecraft:grass replace
 *   >>> setblock ~1 ~ ~2 minecraft:grass replace
 *   >>> setblock ~1 ~ ~3 minecraft:grass replace
 *   ...
 *   >>> setblock ~5 ~ ~10 minecraft:spruce_planks replace
 *   >>> setblock ~5 ~ ~11 minecraft:spruce_planks replace
 *   ...
 */
const createMinecraftFunction = async (url, options = { mc_version: '1.15.2' }) => {
  // Download the house for getting their render object
  await downloadHouse(url)

  // Get the render object path for create the minecraft function
  const directoryHouse = getDirectoryHouse(url)
  const renderObjects = fs.readdirSync(path.join('.', directoryHouse, 'js'))
    .filter(filename => filename.startsWith('myRenderObject_'))
  const renderObjectPath = path.join('.', directoryHouse, 'js', renderObjects[0])

  // Render minecraft function
  const renderObj = getRenderObject(renderObjectPath)
  const houseBlocks = extractHouseBlocks(renderObj)
  return createBlocksCommand(houseBlocks, options)
}

module.exports = createMinecraftFunction


