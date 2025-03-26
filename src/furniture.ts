import Animatable from './animatable'
import {Model, Direction, Status, Invdir} from './util'

export default class Furniture extends Animatable{
	private direction: Direction;
	private sides: number;

	constructor(mod: Model, posx: number, posy: number) {
		super(mod)
		this.setPosition(posx, posy)
	}
	private flip(fliped: boolean) {
		if(fliped) {

		}
		else {

		}
	}
	public rotate() {
		if(this.direction == Direction.All) return;

		if(this.direction == this.model.direction) {
			this.direction = Invdir[this.direction]
			this.flip(true)
		}
		else{
			this.direction = this.model.direction;
			this.flip(false)
		}
	}
	setStatus(status: Status) {
		this.status = status
	}
}