// Based on Vector.js
// by jjgrainger: https://gist.github.com/jjgrainger/808640fcb5764cf92c3cad960682c677
// Translated to Vec2D.ts
// by breezertwo

export class Vec2D {
	public x: number;
	public y: number;

	constructor(x?: number, y?: number) {
		this.x = x || 0;
		this.y = y || 0;
	}

	// return the angle of the vector in radians
	public getDirection() {
		return Math.atan2(this.y, this.x);
	}

	// set the direction of the vector in radians
	public setDirection(direction: number) {
		const magnitude = this.getMagnitude();
		this.x = Math.cos(direction) * magnitude;
		this.y = Math.sin(direction) * magnitude;
	}

	// get the magnitude of the vector
	public getMagnitude() {
		// use pythagoras theorem to work out the magnitude of the vector
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	// set the magnitude of the vector
	public setMagnitude(magnitude: number) {
		const direction = this.getDirection();
		this.x = Math.cos(direction) * magnitude;
		this.y = Math.sin(direction) * magnitude;
	}

	// add two vectors together and return a new one
	public add(v2: Vec2D) {
		return new Vec2D(this.x + v2.x, this.y + v2.y);
	}

	// add a vector to this one
	public addTo(v2: Vec2D) {
		this.x += v2.x;
		this.y += v2.y;
	}

	// subtract two vectors and reutn a new one
	public subtract(v2: Vec2D) {
		return new Vec2D(this.x - v2.x, this.y - v2.y);
	}

	// subtract a vector from this one
	public subtractFrom(v2: Vec2D) {
		this.x -= v2.x;
		this.y -= v2.y;
	}

	// multiply this vector by a scalar and return a new one
	public multiply(scalar: number) {
		return new Vec2D(this.x * scalar, this.y * scalar);
	}

	// multiply this vector by the scalar
	public multiplyBy(scalar: number) {
		this.x *= scalar;
		this.y *= scalar;
	}

	// scale this vector by scalar and return a new vector
	public divide(scalar: number) {
		return new Vec2D(this.x / scalar, this.y / scalar);
	}

	// scale this vector by scalar
	public divideBy(scalar: number) {
		this.x /= scalar;
		this.y /= scalar;
	}

	public normalize() {
		return new Vec2D(
			this.x / Math.sqrt(this.x * this.x + this.y * this.y),
			this.y / Math.sqrt(this.x * this.x + this.y * this.y)
		);
	}

	// Aliases
	public getLength = this.getMagnitude;
	public setLength = this.setMagnitude;
	public getAngle = this.getDirection;
	public setAngle = this.setDirection;

	// Utilities
	public copy() {
		return new Vec2D(this.x, this.y);
	}

	public toString() {
		return 'x: ' + this.x + ', y: ' + this.y;
	}

	public toArray() {
		return [this.x, this.y];
	}

	public toObject() {
		return { x: this.x, y: this.y };
	}
}
