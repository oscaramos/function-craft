

const createMinecraftFunction = require('./createMinecraftFunction')
const downloadHouse = require('./createFunctionFromUrl/downloadHouse')

const { getDirectoryHouse } = require('./utils')

const createFunctionFromUrl = async (url) => {


  // Create the minecraft function from the render object
  return createMinecraftFunction(renderObjectPath)
};

module.exports = createFunctionFromUrl
