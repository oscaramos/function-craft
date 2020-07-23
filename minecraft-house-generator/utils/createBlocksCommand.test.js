const createBlocksCommand = require('./createBlocksCommand');

it('Should create one single dirt block on front of the command block ', () => {
  const command = createBlocksCommand([{ x: 0, y: 0, z: 1, name: 'dirt'}])
  expect(command).toBe('setblock ~ ~-1 ~1 minecraft:dirt replace')
});

it('Should create multiple dirt blocks on front of the command block ', () => {
  const command = createBlocksCommand([{ x: 0, y: 0, z: 1, name: 'dirt'}, { x: 0, y: 0, z: 2, name: 'dirt'}])
  expect(command).toBe('setblock ~ ~-1 ~1 minecraft:dirt replace\nsetblock ~ ~-1 ~2 minecraft:dirt replace')
});

it('Should create a 3x3 stone floor on front below of the command line', () => {
  const command = createBlocksCommand
  ([
    { x: -1, y: -1, z: -1, name: 'stone'}, { x: -1, y: -1, z: 0, name: 'stone'}, { x: -1, y: -1, z: 1, name: 'stone'},
    { x: 0, y: -1, z: -1, name: 'stone'}, { x: 0, y: -1, z: 0, name: 'stone'}, { x: 0, y: -1, z: 1, name: 'stone'},
    { x: 1, y: -1, z: -1, name: 'stone'}, { x: 1, y: -1, z: 0, name: 'stone'}, { x: 1, y: -1, z: 1, name: 'stone'},
  ])
  expect(command).toBe('setblock ~-1 ~-2 ~-1 minecraft:stone replace\nsetblock ~-1 ~-2 ~ minecraft:stone replace\nsetblock ~-1 ~-2 ~1 minecraft:stone replace\nsetblock ~ ~-2 ~-1 minecraft:stone replace\nsetblock ~ ~-2 ~ minecraft:stone replace\nsetblock ~ ~-2 ~1 minecraft:stone replace\nsetblock ~1 ~-2 ~-1 minecraft:stone replace\nsetblock ~1 ~-2 ~ minecraft:stone replace\nsetblock ~1 ~-2 ~1 minecraft:stone replace')
});
