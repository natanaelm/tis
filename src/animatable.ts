import {Model, Frame, DrawEvent, Status} from './util';
import Resource from './res';

export default class Animatable {
	protected model: Model;
	protected currentFrame: number;
	protected status: Status;
	posX: number;
	posY: number;

	constructor(mod: Model) {
		this.model = mod
	}
	setFrame(f: number) {
		this.currentFrame = f;
	}
	setPosition(x: number, y: number) {
		this.posX = x;
		this.posY = y;
	}
	private draw(e: DrawEvent, c: CanvasRenderingContext2D) {
		c.save()
		c.setTransform(1,0,0,1,300,360)
		switch( e[0] ){
			case 11:
			case 0:
				const s = Resource.getSprite( e[1] ); // s = [imageseq_index, x, y, w, h]
				var img = Resource.getImage( s[0] )
				
				if(img == null || !s) return;
				var dx = e[2], dy = e[3]; // destination x, y
				var dw = s[3], dh = s[4]; //destination width, height
				
				if(e[0] == 11) {//reverse?
					c.scale(-1,1);
					dx = -dx - dw;
				}
				c.drawImage(img, s[1], s[2], s[3], s[4],
					dx, dy, dw, dh);
				break
			case 1:
			case 2:
			case 3: //drawRect
				c.strokeRect(e[1]+0.5,e[2]+0.5,e[3]-1,e[4]-1)
				break;
			case 4: //fillRect
				c.fillRect(e[1],e[2],e[3],e[4])
				break;
			case 5: //drawArc
				c.beginPath()
				c.ellipse(e[1]+0.5+(e[3]/2),e[2]+0.5+(e[4]/2),e[3]/2,e[4]/2,0,0,Math.PI*2)
				c.stroke()
				c.closePath()
				break;
			case 6: //fillArc
				c.beginPath()
				c.ellipse(e[1]+(e[3]/2),e[2]+(e[4]/2),e[3]/2,e[4]/2,0,0,Math.PI*2)
				c.fill()
				c.closePath()
				break;
			case 8: //drawLine
				c.beginPath();
				c.moveTo(e[1]+0.5, e[2]+0.5)
				c.lineTo(e[3]+0.5, e[4]+0.5)
				c.stroke()
				c.closePath()
				break;
			case 7: //
				// this.addAnim(e[1], e[2])
				break;
			case 10:
				c.fillStyle = c.strokeStyle = Resource.getColor(e[1]);break;
			default: break;
		}
		c.restore()
	}
	exec(c: CanvasRenderingContext2D) {
		let draws: DrawEvent[] = this.model.animation[this.currentFrame]['events'];
		for(let d of draws) {
			this.draw(d, c)
		}
	}
}