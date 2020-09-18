const scrape = require('website-scraper');
const path = require('path')

const downloadHouse = (url) => {
  // house name for creating a folder with this name
  const houseName = url.slice(url.lastIndexOf('/') + 1)
  // Scrap the given url into the directory given
  return scrape({
    urls: [url],
    directory: path.join('.', 'houses', houseName)
  })
}

module.exports = downloadHouse
