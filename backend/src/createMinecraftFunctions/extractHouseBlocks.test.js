const path = require('path')
const getRenderObject = require('./getRenderObject')
const extractHouseBlocks = require('./extractHouseBlocks')

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
