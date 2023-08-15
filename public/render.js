function Map(map) {
  const cWidth = map.layers[0].width, cHeight = map.layers[0].height;
  let vl = 0, tile = null;
  // cria um canvas com um contexto 'c'
  let cnv = Stage.canvas(function(c) {
    this.size(cWidth*W, cHeight*H)
    c.imageSmoothingEnabled = false;
    // itera sobre todas as camadas, e sobre os dados
    for (const layer of map.layers) {
      layerW = layer.width;
      let x = 0, y = 0;
      for (const value of layer.data) {
        if (x >= layerW) {
          x = 0;
          y++
        }
        if (value == 0) {
          x++;
          continue
        }
        else if (value <= 448) {
          tile = ground;
          vl = value - 1;
        }
        else {
          tile = wall;
          vl = value - 449;
        }
        // calcula coordenadas x e y
        tileX = vl % 8;
        tileY = Math.floor(vl / 8);
        c.drawImage(tile, tileX * W, tileY * H, W, H, x * W, y * H, W, H);
        x++;
      }
    }
  })
  // retorna o objeto canvas
  return cnv
}
function drawElements(base) {

}

function Char(type, image, position) {
  this.body = Stage.box();

  this.hair = Stage.image();
  this.head = Stage.image();
  this.eye = Stage.anim();
  this.torso = Stage.anim();
  this.arm = Stage.anim();
  this.legs = Stage.anim();
  this.foot = Stage.image();

}

function drawFurniture(type, status, position, orientation) { }
