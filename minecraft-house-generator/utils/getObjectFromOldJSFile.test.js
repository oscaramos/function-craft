const { getObjectFromOldJSFile } = require('./')

it('get javascript object from old javascript file', () => {
  const content = getObjectFromOldJSFile('./TestingData/myRenderObject_388.js');
  expect(content).toBeDefined()
});
