const fs = require('fs')

const scrape = require('website-scraper');
const { getDirectoryHouse } = require('../utils')

// Scrape the given url into the directory given
const downloadHouse = async (url) => {
  let directoryHouse = getDirectoryHouse(url)
  if (!fs.existsSync(directoryHouse)) {
    await scrape({
      urls: [url],
      directory: directoryHouse,
    })
  }
}

module.exports = downloadHouse
