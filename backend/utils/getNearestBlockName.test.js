const levenshtein = require('fastest-levenshtein')
const { getNearestBlockName, removeParenthesis, getBlockDirection, hasFacingProperty} = require('./getNearestBlockName')

describe('Should get the nearest block and property by block name', () => {
  it('Should recognize block names to their block id respective', () => {
    expect(getNearestBlockName('Jungle Leaves (No Decay)')).toBe('minecraft:jungle_leaves')
    expect(getNearestBlockName('Oak Wood Plank')).toBe('minecraft:oak_planks')
    expect(getNearestBlockName('Gold Block')).toBe('minecraft:gold_block')
  });

  it('Should also recognize facing direction', () => {
    expect(getNearestBlockName('Sandstone Stairs(South, Normal)')).toBe('minecraft:sandstone_stairs[facing=south]')
    expect(getNearestBlockName('Sandstone Stairs(East, Normal)')).toBe('minecraft:sandstone_stairs[facing=east]')
    expect(getNearestBlockName('Sandstone Stairs(west, Normal)')).toBe('minecraft:sandstone_stairs[facing=west]')
  });

  it('Should avoid assign property to blocks that does not contain it', () => {
    expect(getNearestBlockName('Spruce Wood (facing north/south)')).toBe('minecraft:spruce_wood')
    expect(getNearestBlockName('Oak Wood (facing east/west)')).toBe('minecraft:oak_wood')
  });

  it('Should use memorization for better performance', () => {
    const levenshteinMock = jest.fn(levenshtein)
    getNearestBlockName('Jungle Leaves (No Decay)')
    getNearestBlockName('Jungle Leaves (No Decay)', levenshteinMock.distance)
    expect(levenshteinMock).not.toBeCalled()
  });
});


it('should remove the parenthesis of a block name', () => {
  expect(removeParenthesis('Oak Wood Plank')).toBe('Oak Wood Plank')
  expect(removeParenthesis('Jungle Leaves (No Decay)')).toBe('Jungle Leaves')
  expect(removeParenthesis('Spruce Wood (facing north/south)')).toBe('Spruce Wood')
});

it('Should recognize the direction of a block name', () => {
  expect(getBlockDirection('Oak Wood Plank')).toBe('')
  expect(getBlockDirection('Jungle Leaves (No Decay)')).toBe('')
  expect(getBlockDirection('Spruce Wood (facing north/south)')).toBe('north')
  expect(getBlockDirection('Sandstone Stairs(North, Normal)')).toBe('north')
  expect(getBlockDirection('Sandstone Stairs(South, Normal)')).toBe('south')
  expect(getBlockDirection('Sandstone Stairs(East, Normal)')).toBe('east')
});

it('Should recognize if a minecraft block has the facing property', () => {
  expect(hasFacingProperty('sandstone_stairs')).toBe(true);
  expect(hasFacingProperty('oak_wood')).toBe(false);
});




// Future work: recognize older versions of blocks. Like "Cyan Stained Clay" is now "Cyan terracotta", but this system fails with output "Cyan stained-glass"
