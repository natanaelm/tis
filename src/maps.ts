import Resource from './res'

function drawTiledLayer(width: number, height: number, tileset: number, data: number[]) {
	const c = Resource.getCanvas()
	const img = Resource.getImage(tileset)
	const mLength = width * height;
	if(mLength != data.length) return;
	for(let dy = 0; dy < height; dy++) {
		for(let dx = 0; dx < width; dx++){
			let sx: number, sy: number, tl: number;
			tl = data[(dy * width) + dx]
			sx = tl % 8
			sy = Math.floor(tl / 8)
			c.drawImage(img, sx * 16, sy * 8, 16, 8, dx * 16, dy * 8, 16, 8)
		}
	}
}
function drawObjects() {

}
export default {drawTiledLayer}