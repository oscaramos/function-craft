const fs = require('fs')
const path = require('path')

const datapackInfo =  {
   "pack": {
       "pack_format": 3,
       "description": "Test"
   }
}
/**
 * Move the minecraft function to datapack of specified minecraft world for constructing house without moving files
 * @param {string} worldName - The world target for fill the house
 * @param {string} minecraftFunction - The minecraft function for constructing the house inside the target world
 * @returns {Promise<void>} - Wait until this process is done
 *
 * @example
 *   const worldName = 'My World(1)';
 *   const minecraftFunction = await createMinecraftFunction('https://www.grabcraft.com/minecraft/abstract-house-4/other-193');
 *   await loadMinecraftFunctionToWorldDatapack(worldName, minecraftFunction);
 */
const saveFunctionInsideDatapacks = async (worldName, minecraftFunction) => {
  // Calculate the directories for writing the function
  const appdataDirectory = process.env.APPDATA || (process.platform === 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share")
  const datapackDirectory = path.join(appdataDirectory, '.minecraft', 'saves', worldName, 'datapacks', 'house-generator')
  const functionDirectory = path.join(datapackDirectory, 'data', 'house-generator', 'functions')

  // Write on datapack metadata some metainfo about this minecraft function
  await fs.promises.mkdir(datapackDirectory, { recursive: true });
  fs.writeFileSync(path.join(datapackDirectory, 'pack.mcmeta'), JSON.stringify(datapackInfo, null, 4))

  // Write the minecraft function
  await fs.promises.mkdir(functionDirectory, { recursive: true });
  fs.writeFileSync(path.join(functionDirectory, 'house.mcfunction'), minecraftFunction)
};

module.exports = saveFunctionInsideDatapacks

