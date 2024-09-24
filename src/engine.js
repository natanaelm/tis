import Scene from './scene.js';
import Furniture from './furniture.js';
import { drawGrid } from './debug.js';

const Engine = {
	//properties
	isPlaying: false,
	stage: null,
	ctx: null,
	//functions
	resize: () => {
		Engine.stage.viewbox(window.innerWidth, window.innerHeight, 'in-pad')
		Engine.ctx.imageSmoothingEnabled = false;
	},
	init: function() {
		Stage(this.start)
		//get configs
	},
	start: (stage) => {
		Engine.stage = stage;
		Engine.ctx = window.document.querySelector("canvas").getContext("2d");
		stage.on('viewport',	Engine.resize);
		Scene.init()
		Scene.ready(() => {
			Stage({image: '../public/img/ts.png', textures: {
				"ts": {x:0,y:0,width:240, height:320}
			}})
			Scene.setMap('../public/maps/simple-house.tmj');
			var grid = drawGrid(0,0)
			var tf = new Furniture({name:"st_basin", x:1,y:1});
			window.tf = tf;
			stage.append(grid)
			stage.append(tf.stage)
			stage.on('click', ()=>{
				stage.touch()
			})
		})
	}
}

export default Engine;