const path = require('path')
const getRenderObject = require('./getRenderObject')

it('get javascript object from old javascript file format', () => {
  const content = getRenderObject(path.join('.', 'src', 'datatest', 'myRenderObject_388.js'));
  expect(content).toBeDefined()
});
