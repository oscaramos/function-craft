const fs = require('fs')

const getObjectFromOldJSFile = path => {
  const data = fs.readFileSync(path, { encoding: 'utf-8' }).toString()
  const rawObject = data.slice(data.indexOf('{'))
  return JSON.parse(rawObject)
}

module.exports = getObjectFromOldJSFile;
