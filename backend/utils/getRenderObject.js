const fs = require('fs')

const getRenderObject = path => {
  const data = fs.readFileSync(path, { encoding: 'utf-8' }).toString()
  const rawObject = data.slice(data.indexOf('{'))
  return JSON.parse(rawObject)
}

module.exports = getRenderObject;
