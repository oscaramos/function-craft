const createMinecraftFunction = require('./createMinecraftFunction')

describe('create a minecraft function from render object file', () => {
  it('House 1', async () => {
    expect(await createMinecraftFunction('https://www.grabcraft.com/minecraft/ww2-queen-elizabeth-class-battleship/warships'))
      .toMatchSnapshot()
  }, 30000)

  it('House 2', async () => {
    expect(await createMinecraftFunction('https://www.grabcraft.com/minecraft/quartz-house-8'))
      .toMatchSnapshot()
  }, 30000)
});
