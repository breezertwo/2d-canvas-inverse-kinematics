const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

export function line(
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	width?: number,
	color?: number
): void {
	typeof width === 'number' ? (ctx.lineWidth = width) : (ctx.lineWidth = 5);
	typeof color === 'string' ? (ctx.strokeStyle = color) : '##000000';

	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}
