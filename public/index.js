const W = 16, H = 8;
const MALE = 1, FEMALE = 2;
const ground = new Image(), wall = new Image();
var root, context;
ground.src = 'img/ground.png'; wall.src = 'img/wall.png';

function loadMap(src) {
  fetch(src).then(res => res.json())
    .then(data => {
      house = Stage.image().pin('scale', 2)
      house.image(Map(data));
      root.append(house).pin('align', 0);
    })
}
function loadScene(){
  loadMap("maps/simple-house.tmj")
  /*
  loadFurnitures
  loadChars
  */
}
function startGame(stage) {
  root = stage;
  context = document.querySelector("canvas").getContext("2d")
  loadScene()
  root.on('viewport',removeBlur)
}
Stage(startGame);
function removeBlur(){
  context.imageSmoothingEnabled=false;
}