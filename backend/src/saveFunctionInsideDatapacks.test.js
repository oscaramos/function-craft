const loadMinecraftFunctionToWorldDatapack = require('./saveFunctionInsideDatapacks')
const createMinecraftFunction = require('./createMinecraftFunction')

it('Should move the minecraft function to datapack of specified minecraft world', async () => {
  const worldName = 'RemoveThisWorldName';
  const minecraftFunction = await createMinecraftFunction('https://www.grabcraft.com/minecraft/abstract-house-4/other-193');
  await loadMinecraftFunctionToWorldDatapack(worldName, minecraftFunction);
}, 60000);
