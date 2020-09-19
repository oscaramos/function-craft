const loadMinecraftFunctionToWorldDatapack = require('./loadMinecraftFunctionToWorldDatapack')
const { createFunctionFromUrl } = require('./')


it('Should move the minecraft function to datapack of specified minecraft world', async () => {
  const url = 'https://www.grabcraft.com/minecraft/abstract-house-4/other-193';
  const minecraftFunction = await createFunctionFromUrl(url);
  const worldName = 'New World (2)';
  await loadMinecraftFunctionToWorldDatapack(worldName, minecraftFunction);
}, 60000);
