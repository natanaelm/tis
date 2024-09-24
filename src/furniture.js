import Models from './furniture-data.js';
import Util from './util.js';

const inverse = {'n':'w','w':'n','s':'e','e':'s'};
const xinv = {'n':'s','s':'n','w':'e','e':'w'};

function Furniture({name, x, y}) {
	const Model = Models[name];
	var orientation = Model.orientation;
	var {px, py} = Util.mapToScreen(x, y, 16);
	this.isoX = x;
	this.isoY = y;

	this.isoWidth = Model.isoWidth;
	this.isoHeight = Model.isoHeight;
	this.index = 0;
	//this.name = Locale.translate(id);
	this.stage = Stage.create();

	//methods
	const flip = (cond) => {
		if (cond){
			this.isoWidth = Model.isoHeight;
			this.isoHeight = Model.isoWidth;
			this.stage.pin({scaleX: -1, offsetX: px - Model.offsetX - Model.width});
		}
		else {
			this.isoWidth = Model.isoWidth;
			this.isoHeight = Model.isoHeight;
			this.stage.pin({scaleX: 1, offsetX: px + Model.offsetX})
		}
	};
	const showBack = (cond) => {
		if (Model.backParts) {
			if (cond) {
				this.stage.first().hide();
				this.stage.last().show();
			}
			else {
				this.stage.first().show()
				this.stage.last().hide();
			}
	}
	}
	this.setPosition = (cx, cy) => {
		({px, py} = Util.mapToScreen(cx, cy, 16));
		this.stage.pin({offsetX: px + Model.offsetX, offsetY: py + Model.offsetY})
		this.setOrientation(orientation);
	}

	this.setOrientation = (o) => {
		if (Model.sides == 1) {return}
		if (Model.sides == 2 && !(o==Model.orientation || o == inverse[Model.orientation])) {
			o = xinv[o];
		}
		showBack(false)
		if (o == Model.orientation) {
			flip(false)
		}
		else if (o == inverse[Model.orientation]){
			flip(true)
		}
		else if (Model.sides == 4){
			showBack(true)
			if (o == Model.rt_orientation) {
				flip(false)
			}
			else if (o == inverse[Model.rt_orientation]){
				flip(true)
			}
		}
		orientation = o;
	}
	// constructor
	this.stage.pin({
		offsetX: px + Model.offsetX,
		offsetY: py + Model.offsetY,
		width: Model.width, height: Model.height
		//,pivotX: 1, pivotY: 1
	})

	for (let part of Model.parts) {
		const [name, sx, sy, inverted] = part;
		let si = Stage.image(name);
		si.offset(sx, sy);
		if (inverted) si.pin({pivotX: 0.5, scaleX: -1});
		this.stage.append(si)
	}
	if (Model.backParts) {
		let back = Stage.create();
		for (let backPart of Model.backParts) {
			let [name, sx, sy] = backPart;
			let si = Stage.image(name);
			si.offset(sx, sy);
			back.append(si)
		}
		back.hide()
		this.stage.append(back);
	}
}

export default Furniture;