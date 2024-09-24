const WH = 16, HH = 8;

function drawGrid(px, py) {
	var quadro = Stage.canvas(function(c){
		this.imageSmoothingEnabled = false;
		this.size(600,300)
		c.translate(px,py)
		let tw = 16, th = 16;
		c.beginPath();
		for (let ny = 0;ny<th;ny++){
			c.moveTo((0-ny)*WH, (ny)*HH)
			c.lineTo((0-ny+tw)*WH, (ny+th)*HH)
		}
		for (let nx = 0;nx<tw;nx++){
			c.moveTo((nx)*WH, (nx)*HH);
			c.lineTo((nx-tw)*WH, (nx+th)*HH)
		}
		c.closePath();
		c.strokeStyle = '#444';
		c.stroke();
	})
	return Stage.image(quadro)
}
export {drawGrid};