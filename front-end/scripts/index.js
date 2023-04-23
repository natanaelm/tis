const W = 16, H = 8;
const MALE = 1, FEMALE = 2;
var root;

function drawMap(map) {
  let x = 0, y = 0, vl;
  let cnv = Stage.canvas( (c) => {

    for(let layer of map.layers) {
      for(let value of layer.data) {
        if(value == 0) {
          x++;
          continue
        }
        vl = value - 1;
        tileX = vl % 8;
        tileY = Math.floor( vl / 8 );

        c.drawImage(img, tileX, tileY, 16, 8, x * W, y * H, W, H);
        x++;
        if( x == layer.width ) {
          x = 0;
          y++
        }
      }
      y = 0;
    }
  })
  root.append( Stage.image(cnv).pin('align, 0.5') )
}
function drawElements(base) {

}
function moveChar(char, status, path) {

}
function createChar(type, sprite, position) {
  let base = Stage.column().appendTo(root)
  let head, torso, legs;

  head = Stage.anim();
  torso = Stage.anim();
  legs = Stage.anim();

}

function drawFurniture(type, status, position, orientation) {}

function startGame() {
  var house;
  req = fetch("map.tmj").then( (data) => {
    house = JSON.parse(data)
  })
  drawMap(house)
}