# function-craft backend

# Usage

### createMinecraftFunction(url)
Create an minecraft function from an url from grabcraft.com.

#### Parameters

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Format https://www.grabcraft.com/minecraft/my-category/my-house |

**Returns**: <code>Promise.&lt;string&gt;</code> - - The downloaded house converted to an group of commands that creates the house

#### Usage
```js
  const minecraftBlocks = await createMinecraftFunction('https://www.grabcraft.com/minecraft/medieval-rural-house-2/medieval-houses')
  console.log(minecraftBlocks)
  // setblock ~1 ~ ~1 minecraft:grass replace
  // setblock ~1 ~ ~2 minecraft:grass replace
  // setblock ~1 ~ ~3 minecraft:grass replace
  //...
  // setblock ~5 ~ ~10 minecraft:spruce_planks replace
  // setblock ~5 ~ ~11 minecraft:spruce_planks replace
  //...
```

### saveFunctionInsideDatapacks(worldName, minecraftFunction)
Move the minecraft function to datapack of specified minecraft world for constructing house without moving files

#### Parameters
| Param | Type | Description |
| --- | --- | --- |
| worldName | <code>string</code> | The world target for fill the house |
| minecraftFunction | <code>string</code> | The minecraft function for constructing the house inside the target world |

**Returns**: <code>Promise.&lt;void&gt;</code> - - Wait until this process is done

#### Usage
```js
  const worldName = 'My World(1)';
  const minecraftFunction = await createMinecraftFunction('https://www.grabcraft.com/minecraft/abstract-house-4/other-193');
  await loadMinecraftFunctionToWorldDatapack(worldName, minecraftFunction);
```
