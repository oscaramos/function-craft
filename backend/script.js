const { createFunctionFromUrl, loadMinecraftFunctionToWorldDatapack } = require('./functions');

(async () => {
  const url = 'https://www.grabcraft.com/minecraft/quartz-house-8';
  const worldName = 'New World (6)';

  const minecraftFunction = await createFunctionFromUrl(url);
  await loadMinecraftFunctionToWorldDatapack(worldName, minecraftFunction);
})();
