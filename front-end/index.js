const W = 16, H = 8;
const MALE = 1, FEMALE = 2;
var root;

function drawMap(map) {
  const ground = new Image();
  const wall = new Image();
  ground.src = '../img/ground.png';
  wall.src = '../img/wall.png';
  let x = 0, y = 0, vl, img = null;
  let cnv = Stage.canvas( (c) => {

    for(let layer of map.layers) {
      for(let value of layer.data) {
        if(value == 0) {
          x++;
          continue
        }

        if(value <= 448) {
          img = ground
          vl = value - 1;
        }
        else {
          img = wall
          vl = value - 449;
        }

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
  root.append( Stage.image(cnv).pin('align', 0.5) )
}
function drawElements(base) {

}
const walking = {
  hair: 'sprite1',

}

function Char(type, image, position) {
  this.base = Stage.column();

  hair = Stage.image()
  head = Stage.row();
  eye = Stage.anim();
  torso = Stage.row();
  legs = Stage.column();

}

function drawFurniture(type, status, position, orientation) {}

function startGame(stage) {
  var house;
  stage.viewport(300, 300);
  /*
  req = fetch("../map/map.tmj").then( (data) => {
    house = JSON.parse(data)
  })
  */
  //drawMap(house)
}