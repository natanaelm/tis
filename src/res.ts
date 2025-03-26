import {AtlasSet, AnimSet} from './util'
import Data from './data'

let	Atlas: AtlasSet[];
let	Anims: AnimSet[];
let Images: HTMLImageElement[] = [];

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let ready = {
	atlas: false,
	anims: false,
	images: false
}
let count = {
	img: 0
}
/*
function setTextureAtlas(atlas: AtlasSet[]) {
	Atlas = atlas;
	ready.atlas=true
}
function setAnimSet(anims: AnimSet[]) {
	Anims = anims;
	ready.anims = true
}

function getSprite(sprite: number): AtlasSet{
	if(!ready.atlas) return null;
	return Atlas[sprite]
}
function getColor(color: number): string{
	return Data.Colors[color]
}
function getAnim(anim: number): AnimSet {
	if(!ready.anims) return null;
	return Anims[anim]
}*/
function getImage(image: number): HTMLImageElement {
	if(!ready.images) return null;
	return Images[image]
}

function getCanvas(): CanvasRenderingContext2D{
	return context
}
function fetchImage(img: string) {
	let hi = new Image();
	hi.src = img;
	hi.onload = ()=>{
		count.img++
		if(count.img >= Data.AtlasImage.length) ready.images = true;
	}
	Images.push(hi)
}
function init() {
	canvas = document.createElement('canvas')
	canvas.width = 320;
	canvas.height = 240;
	context = canvas.getContext('2d')
	context.imageSmoothingEnabled = false;
	Data.AtlasImage.forEach(fetchImage)
}

export default {
	//setTextureAtlas, setAnimSet, getSprite, getColor, getAnim,
	getCanvas, getImage, init
}