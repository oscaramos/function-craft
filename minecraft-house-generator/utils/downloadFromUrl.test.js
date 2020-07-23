const downloadFromUrl = require('./downloadFromUrl')

describe('should given an url from https://www.grabcraft.com should download their website', () => {
  it('should do it from a house', () => {
    return downloadFromUrl('https://www.grabcraft.com/minecraft/warhammer-40k-armory')
      .then(results => {
        console.log(results);
      })
  }, 20000);
});
