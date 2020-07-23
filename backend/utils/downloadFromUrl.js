const scrape = require('website-scraper');

const getDirectoryName = url => `./${url.slice(url.lastIndexOf('/') + 1)}`;

const downloadFromUrl = (url) => {
  const directoryName = getDirectoryName(url);
  const options = {
    urls: [url],
    directory: directoryName
  };
  return scrape(options)
}

module.exports = downloadFromUrl
