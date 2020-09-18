const {
  getRenderObject,
  extractBlockInfo
} = require('./index')

it('Should extract block information related to the rendering object', () => {
  const renderObject = getRenderObject('./datatest/myRenderObject_388.js');
  const blockInfos = extractBlockInfo(renderObject)
  console.log(blockInfos);
  expect(blockInfos).toEqual(expect.arrayContaining([
    {
      x: 19,
      y: 1,
      z: 2,
      name: 'Jungle Leaves (No Decay)'
    }
  ]))
});
