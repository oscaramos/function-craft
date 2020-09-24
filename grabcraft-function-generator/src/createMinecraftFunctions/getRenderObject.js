const fs = require('fs')

/**
 * Get javascript object from old javascript file format
 *
 * The page creators use globals with js files for getting the render object, we eliminate the global part
 * @param {string} path
 * @returns {any}
 */
const getRenderObject = path => {
  const data = fs.readFileSync(path, { encoding: 'utf-8' }).toString()
  const rawObject = data.slice(data.indexOf('{'))
  return JSON.parse(rawObject)
}

module.exports = getRenderObject;
