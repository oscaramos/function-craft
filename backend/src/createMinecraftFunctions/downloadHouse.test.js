const downloadHouse = require('./downloadHouse')
const fs = require('fs')
const { getDirectoryHouse } = require('../utils')

describe('Given an url from grabcraft.com to a house should download the house', () => {
  it('Download', async () => {
    const url = 'https://www.grabcraft.com/minecraft/warhammer-40k-armory'
    const directoryHouse = getDirectoryHouse(url)
    // Removes the folder before downloading
    if (fs.existsSync(directoryHouse)) {
      fs.rmdirSync(directoryHouse, { recursive: true })
    }
    await downloadHouse(url)
    expect(fs.existsSync(directoryHouse)).toBe(true)
  }, 20000);

  it('Dont download because it was already downloaded', async () => {
    const url = 'https://www.grabcraft.com/minecraft/warhammer-40k-armory'
    await downloadHouse(url)
    expect(fs.existsSync(getDirectoryHouse(url))).toBe(true)
  })
});
