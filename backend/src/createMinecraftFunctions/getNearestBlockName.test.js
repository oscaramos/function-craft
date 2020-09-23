const { getNearestBlockName, removeParenthesis, getBlockDirection, hasFacingProperty } = require('./getNearestBlockName')

describe('getNearestBlockName()', () => {
  it('Should recognize block names to their block id respective', () => {
    expect(getNearestBlockName('Jungle Leaves (No Decay)')).toBe('minecraft:jungle_leaves')
    expect(getNearestBlockName('Oak Wood Plank')).toBe('minecraft:oak_planks')
    expect(getNearestBlockName('Gold Block')).toBe('minecraft:gold_block')
  })

  it('Should also recognize facing direction', () => {
    expect(getNearestBlockName('Sandstone Stairs(South, Normal)')).toBe('minecraft:sandstone_stairs[facing=south]')
    expect(getNearestBlockName('Sandstone Stairs(East, Normal)')).toBe('minecraft:sandstone_stairs[facing=east]')
    expect(getNearestBlockName('Sandstone Stairs(west, Normal)')).toBe('minecraft:sandstone_stairs[facing=west]')
  })

  it('Should avoid assign property to blocks that does not contain it', () => {
    expect(getNearestBlockName('Spruce Wood (facing north/south)')).toBe('minecraft:spruce_wood')
    expect(getNearestBlockName('Oak Wood (facing east/west)')).toBe('minecraft:oak_wood')
  })

  describe('Should user another minecraft version blocks', () => {
    it('Default version is 1.15.2', () => {
      expect(getNearestBlockName('Jungle Leaves (No Decay)')).toBe('minecraft:jungle_leaves')
      expect(getNearestBlockName('Jungle Leaves (No Decay)', { mc_version: '1.15.2' })).toBe('minecraft:jungle_leaves')
    })

    it('Blocks that exist in 1.15.2', () => {
      expect(getNearestBlockName('Beehives', { mc_version: '1.15.2' })).toBe('minecraft:beehive')
    })

    it('Blocks that does not exist in 1.15.2', () => {
      expect(getNearestBlockName('Beehives', { mc_version: '1.12.2' })).not.toBe('minecraft:beehive')
    })
  })

  // Does not work anymore :(
  // it('Should use memorization for better performance', () => {
  //   const spyMemo = jest.spyOn(getNearest, 'getNearestBySimilarityFunction')
  //   getNearestBlockName('Jungle Leaves (No Decay)')
  //   expect(spyMemo).toBeCalledTimes(1)
  //   getNearestBlockName('Jungle Leaves (No Decay)')
  //   expect(spyMemo).toBeCalledTimes(1)
  // });
})

it('removeParenthesis', () => {
  expect(removeParenthesis('Oak Wood Plank')).toBe('Oak Wood Plank')
  expect(removeParenthesis('Jungle Leaves (No Decay)')).toBe('Jungle Leaves')
  expect(removeParenthesis('Spruce Wood (facing north/south)')).toBe('Spruce Wood')
})

it('getBlockDirection', () => {
  expect(getBlockDirection('Oak Wood Plank')).toBe('')
  expect(getBlockDirection('Jungle Leaves (No Decay)')).toBe('')
  expect(getBlockDirection('Spruce Wood (facing north/south)')).toBe('north')
  expect(getBlockDirection('Sandstone Stairs(North, Normal)')).toBe('north')
  expect(getBlockDirection('Sandstone Stairs(South, Normal)')).toBe('south')
  expect(getBlockDirection('Sandstone Stairs(East, Normal)')).toBe('east')
})

it('hasFacingProperty()', () => {
  expect(hasFacingProperty('sandstone_stairs')).toBe(true)
  expect(hasFacingProperty('oak_wood')).toBe(false)
})
