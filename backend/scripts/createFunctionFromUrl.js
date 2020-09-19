const fs = require('fs')
const path = require('path')

const createMinecraftFunction = require('./createMinecraftFunction')
const { downloadHouse, getDirectoryHouse } = require('./utils')

const createFunctionFromUrl = async (url) => {
  await downloadHouse(url)

  const directoryHouse = getDirectoryHouse(url)
  const renderObjectName = fs.readdirSync(path.join('.', directoryHouse, 'js'))
    .filter(filename => filename.startsWith('myRenderObject_'))[0];
  const inputFilename = path.join('.', directoryHouse, 'js', renderObjectName)

  return createMinecraftFunction(inputFilename)
};

module.exports = createFunctionFromUrl
