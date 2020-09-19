const downloadHouse = require('./createFunctionFromUrl/downloadHouse')
const path = require('path')

module.exports = {
  downloadHouse,
  getDirectoryHouse: url => path.join('.', 'houses', url.slice(url.lastIndexOf('/') + 1))
}
