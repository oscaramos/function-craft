const fs = require('fs')
const path = require('path')

const datapackInfo =  {
   "pack": {
       "pack_format": 3,
       "description": "Test"
   }
}

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

