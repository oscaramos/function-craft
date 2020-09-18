const downloadFromUrl = require('./downloadHouse')
const fs = require('fs')
const path = require('path')

describe('Given an url from grabcraft.com to a house should download the house', () => {
  it('With a big house', () => {
    const url = 'https://www.grabcraft.com/minecraft/warhammer-40k-armory'
    const houseName = url.slice(url.lastIndexOf('/') + 1)
    const directory = path.join('.', 'houses', houseName)
    // Removes the folder before downloading
    if (fs.existsSync(directory)) {
      fs.rmdirSync(directory, { recursive: true })
    }
    return downloadFromUrl(url)
      .then(results => {
        console.log(results);
      })
  }, 20000);
});
