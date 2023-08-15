const fsprite =  {
  parts: [
    ["name", x, y, inverted]
  ],
  side: 'ALL',//[ALL, NORTH, WEST, SOUTH, EAST]
  isoWidth: 2,
  isoHeight: 2,
  padX: 1,
  padY: 1,
  actionType: "eat",
  action: [ // animation
    ["name", x, y, inverted, operation] //OVER || OVER_CHAR || REPLACE
  ]
}
