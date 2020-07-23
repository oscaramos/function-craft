const createMinecraftFunction = require('./createMinecraftFunction')
const fs = require('fs')

describe('create a minecraft function from javascript file, from that website, to a txt file', () => {
  it('Object 388', () => {
    const minecraftFunction = createMinecraftFunction('./TestingData/myRenderObject_388.js', )
    fs.writeFileSync('outputFunction.txt', minecraftFunction)
  })

  it('Object 397 from https://www.grabcraft.com/minecraft/quartz-house-8', () => {
    const minecraftFunction = createMinecraftFunction('./TestingData/myRenderObject_397.js', 'outputFunction.txt')
    fs.writeFileSync('outputFunction.txt', minecraftFunction)
  })
});
