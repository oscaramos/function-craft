const { getRenderObject } = require('./')
const path = require('path')

// The page creators use globals with js files for getting the render object, we eliminate the global part
it('get javascript object from old javascript file format', () => {
  const content = getRenderObject(path.join('.', 'datatest', 'myRenderObject_388.js'));
  expect(content).toBeDefined()
});
