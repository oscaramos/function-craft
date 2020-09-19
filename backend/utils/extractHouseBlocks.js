const { compose, applySpec, map, prop } = require('ramda');

const extractHouseBlocks = (renderObject) => {
  // Returns an array with the objects
  let acum = []
  map(
    map(
      map(
        obj => {
          acum = [...acum, obj]
        }
      )
    )
  )(renderObject)

  return map(
    applySpec({
      x: compose(parseInt, prop('x')),
      y: compose(parseInt, prop('y')),
      z: compose(parseInt, prop('z')),
      name: prop('name')
    })
  )(acum)
}

module.exports = extractHouseBlocks;
