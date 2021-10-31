import { Vector2 } from '../maths';
import { line } from './renderer';

export class LineElement {
	public parent: LineElement | null = null;
	public child: LineElement | null = null;
	public a: Vector2;
	public b = new Vector2();

	private angle: number;
	private len: number;

	constructor(parent_: LineElement | null, x: number, y: number, _len: number, _angle: number) {
		if (parent_ instanceof LineElement) {
			this.parent = parent_;
			this.a = this.parent.b.copy();
		} else {
			this.a = new Vector2(x, y);
		}

		this.len = _len;
		this.angle = _angle;
		this.calcB();
	}

	public follow(tx?: number, ty?: number) {
		if (typeof tx === 'number' && typeof ty === 'number') {
			const target = new Vector2(tx, ty);
			const dir = target.subtract(this.a);

			this.angle = dir.getAngle();

			dir.setMagnitude(this.len);
			dir.multiplyBy(-1);

			this.a = target.add(dir);
		} else {
			this.follow(this.child?.a.x, this.child?.a.y);
		}
	}

	private calcB() {
		const dx = this.len * Math.cos(this.angle);
		const dy = this.len * Math.sin(this.angle);

		this.b = new Vector2(this.a.x + dx, this.a.y + dy);
	}

	public show(): void {
		line(this.a.x, this.a.y, this.b.x, this.b.y, 5, '#000000');
	}

	public update(): void {
		this.calcB();
	}
}
