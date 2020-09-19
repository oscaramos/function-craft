const createMinecraftFunction = require('./createMinecraftFunction')

describe('create a minecraft function from render object file, and check it with a snapshot', () => {
  it('Object 388', async () => {
    const minecraftFunction = await createMinecraftFunction('https://www.grabcraft.com/minecraft/ww2-queen-elizabeth-class-battleship/warships')
    expect(minecraftFunction).toMatchSnapshot()
  })

  it('Object 397 from ', () => {
    expect(createMinecraftFunction('https://www.grabcraft.com/minecraft/quartz-house-8')).toMatchSnapshot()
  })
});
