const fs = require('fs')
const createFunctionFromUrl = require('./createFunctionFromUrl')

it('Should create function from url', async () => {
  const minecraftFunction = await createFunctionFromUrl('https://www.grabcraft.com/minecraft/ww2-queen-elizabeth-class-battleship/warships');
  fs.writeFileSync('outputFunction.txt', minecraftFunction)
}, 30000);
