import { LineElement } from './rendering';

import './style/main.css';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

const seg = new LineElement(300, 200, 100, 0);

function draw(): void {
	context.clearRect(0, 0, canvas.width, canvas.height);

	seg.update();
	seg.show();

	requestAnimationFrame(draw);
}

draw();
