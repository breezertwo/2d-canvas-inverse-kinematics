import { Vec2D } from '../maths/Vec2';
import { line } from './renderer';

export class LineElement {
	private a: Vec2D;
	private b = new Vec2D();

	private angle: number;
	private len: number;

	constructor(x: number, y: number, _len: number, _angle: number) {
		this.a = new Vec2D(x, y);
		this.len = _len;
		this.angle = _angle;
	}

	private calcB() {
		const dx = this.len * Math.cos(this.angle);
		const dy = this.len * Math.sin(this.angle);

		this.b = new Vec2D(this.a.x + dx, this.a.y + dy);
	}

	public show(): void {
		line(this.a.x, this.a.y, this.b.x, this.b.y);
	}

	public update(): void {
		this.calcB();
	}
}
