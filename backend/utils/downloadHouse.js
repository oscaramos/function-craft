const scrape = require('website-scraper');
const { getDirectoryHouse } = require('./index')

// Scrape the given url into the directory given
const downloadHouse = (url) => {
  return scrape({
    urls: [url],
    directory: getDirectoryHouse(url)
  })
}

module.exports = downloadHouse
