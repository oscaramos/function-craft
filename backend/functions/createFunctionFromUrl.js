const fs = require('fs')
const createMinecraftFunction = require('./createMinecraftFunction')
const { downloadFromUrl } = require('../utils')

const getDirectoryName = url => `./${url.slice(url.lastIndexOf('/') + 1)}`;

const getInputFilename = directoryName => {
  const renderObjectName = fs.readdirSync(`./${directoryName}/js/`)
    .filter(
      filename => filename.startsWith('myRenderObject_')
    )[0];

  return `./${directoryName}/js/${renderObjectName}`
};

const createFunctionFromUrl = async (url) => {
  const directoryName = getDirectoryName(url)

  if(!fs.existsSync(`./${directoryName}`))
    await downloadFromUrl(url)

  const inputFilename = getInputFilename(directoryName);
  return createMinecraftFunction(inputFilename)
};

module.exports = createFunctionFromUrl
