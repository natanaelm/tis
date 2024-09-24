/* Furniture data
    model: {
        parts: [spritename, offsetx, offsety, flipped] = atlas
        orientation: ALL | NORTH | WEST | SOUTH | EAST
        isoWidth, isoHeight: number = isometric size
        sides: number = number of sides to rotate
        width, height: number = size in pixels
        actions: string = actions in character
        animation: array = object animation when used

    }
*/
const Models = {
  "st_bed" : {
    parts: [
      ["st_bed0", 0, 0, false],
      ["st_bed1", 46, 33, false]
    ],
    orientation: 's',
    sides: 2,
    isoWidth: 3,
    isoHeight: 2,
    offsetX: -31,
    offsetY: -37,
    width: 80,
    height: 77,
    actions: "sit relax sleep",
    },
  "st_table": {
    parts: [
      ["st_table", 0, 0, true],
      ["st_table", 30, 0, false]
    ],
    orientation: 'a',
    sides: 1,
    isoWidth: 2,
    isoHeight: 2,
    offsetX: -30,
    offsetY: -24,
    width: 60,
    height: 57,
    },
  "st_chair": {
    parts: [['st_chair', 0, 0, false]],
    backParts:[
      ['st_chair0', 0, 16, false],
      ['st_chair1', 11, 6, false]
    ],
    rt_orientation: 'w',
    orientation: 's',
    sides: 4,
    isoWidth: 1,
    isoHeight: 1,
    offsetX: -12,
    offsetY: -27,
    width: 24,
    height: 40,
    },
    "st_basin": {
      parts: [
        ["st_basin", 0, 0, false],
      ],
      orientation: 's',
      sides: 2,
      isoWidth: 1,
      isoHeight: 1,
      offsetX: -11,
      offsetY: -29,
      width: 23,
      height: 39,
      }
  }

  export default Models;