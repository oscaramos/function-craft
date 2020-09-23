const { getRenderObject } = require('../utils')
const path = require('path')

it('get javascript object from old javascript file format', () => {
  const content = getRenderObject(path.join('.', 'datatest', 'myRenderObject_388.js'));
  expect(content).toBeDefined()
});
