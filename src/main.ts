import { LineElement } from './rendering';

import { mouse } from './util';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

const line = new LineElement(300, 200, 100, 0);

function draw(): void {
	context.clearRect(0, 0, canvas.width, canvas.height);

	line.follow(mouse.x, mouse.y);
	line.update();
	line.show();

	requestAnimationFrame(draw);
}

draw();
