const createMinecraftFunction = require('./createMinecraftFunction')
const path = require('path')

describe('create a minecraft function from render object file, and check it with a snapshot', () => {
  it('Object 388', () => {
    expect(createMinecraftFunction(path.join('.', 'datatest', 'myRenderObject_388.js'))).toMatchSnapshot()
  })

  it('Object 397 from https://www.grabcraft.com/minecraft/quartz-house-8', () => {
    expect(createMinecraftFunction(path.join('.', 'datatest', 'myRenderObject_397.js'))).toMatchSnapshot()
  })
});
