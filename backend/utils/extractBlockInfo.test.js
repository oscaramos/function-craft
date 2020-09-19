const {
  getRenderObject,
  extractHouseBlocks
} = require('./index')

const path = require('path')


it('Should extract block information related to the rendering object', () => {
  const renderObject = getRenderObject(path.join('.', 'datatest', 'myRenderObject_388.js'));
  const houseBlocks = extractHouseBlocks(renderObject)
  expect(houseBlocks).toEqual(expect.arrayContaining([
    {
      x: 19,
      y: 1,
      z: 2,
      name: 'Jungle Leaves (No Decay)'
    }
  ]))
});
