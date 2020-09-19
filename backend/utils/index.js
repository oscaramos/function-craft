const getRenderObject = require('./getRenderObject')
const extractHouseBlocks = require('./extractHouseBlocks')
const createBlocksCommand = require('./createBlocksCommand')
const downloadHouse = require('./downloadHouse')
const path = require('path')

module.exports = {
  getRenderObject,
  extractHouseBlocks,
  createBlocksCommand,
  downloadHouse,
  getDirectoryHouse: url => path.join('.', 'houses', url.slice(url.lastIndexOf('/') + 1))
}
