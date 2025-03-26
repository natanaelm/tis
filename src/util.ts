function clamp(value: number, min: number, max: number):number {
	return (value < min) ? min : (value > max) ? max : value
}
enum Direction {North, West, South, East, All}
//direcao invertida
const Invdir = [
	Direction.West,
	Direction.North,
	Direction.East,
	Direction.South,
	Direction.All
]
enum Status {Playing, Static}
enum AnimType {Static, Looped, LoopedSync, Once}
enum ModelType {Furniture, Decoration, Component, NPC}

type AtlasSet = number[]
type DrawEvent = [number, number, number?, number?, number?]
type Frame = {time: number, events: DrawEvent[]}
type AnimSet = Frame[]; //{size: number, frames: Frame[]}

type Model = {
	name: string,
	width: number,
	height: number,
	direction: Direction,
	modelType: ModelType,
	animation: AnimSet
}

export {
	Model, Direction, Status, AnimType, Invdir, DrawEvent, Frame, AtlasSet, AnimSet,
	clamp
}