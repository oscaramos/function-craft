const getRenderObject = require('./getRenderObject')
const extractBlockInfo = require('./extractBlockInfo')
const createBlocksCommand = require('./createBlocksCommand')
const downloadHouse = require('./downloadHouse')
const path = require('path')

module.exports = {
  getObjectFromOldJSFile: getRenderObject,
  extractBlockInfo,
  createBlocksCommand,
  downloadFromUrl: downloadHouse,
  getDirectoryHouse: url => path.join('.', 'houses', url.slice(url.lastIndexOf('/') + 1))
}
