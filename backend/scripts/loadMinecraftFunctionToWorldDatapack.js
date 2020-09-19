const fs = require('fs')

const datapackInfo =  {
   "pack": {
       "pack_format": 3,
       "description": "Test"
   }
}

const loadMinecraftFunctionToWorldDatapack = async (worldName, minecraftFunction) => {
  const appdataDirectory = process.env.APPDATA || (process.platform === 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share")
  const savesDirectory = `${appdataDirectory}\\.minecraft\\saves`
  const selectedHouseGeneratorDatapack = `${(`${savesDirectory}\\${worldName}\\datapacks`)}\\house-generator`
  const selectedFunctionsDirectory = `${selectedHouseGeneratorDatapack}\\data\\house-generator\\functions`

  await fs.promises.mkdir(selectedHouseGeneratorDatapack, { recursive: true }).catch(console.error);
  fs.writeFileSync(`${selectedHouseGeneratorDatapack}\\pack.mcmeta`, JSON.stringify(datapackInfo, null, 4))

  await fs.promises.mkdir(selectedFunctionsDirectory, { recursive: true }).catch(console.error);
  fs.writeFileSync(`${selectedFunctionsDirectory}\\house.mcfunction`, minecraftFunction)
};

module.exports = loadMinecraftFunctionToWorldDatapack

