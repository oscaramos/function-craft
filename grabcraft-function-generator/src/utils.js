const path = require('path')

module.exports = {
  getDirectoryHouse: url => path.join('.', 'houses', url.slice(url.lastIndexOf('/') + 1))
}
