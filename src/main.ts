import { degToRad } from './maths';
import { LineElement } from './rendering';

import { mouse } from './util';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

let end = new LineElement(null, 300, 200, 100, degToRad(0));
for (let i = 0; i < 5; i++) {
	const next = new LineElement(end, 0, 0, 100, degToRad(0));
	end.child = next;
	end = next;
}

function draw(): void {
	context.clearRect(0, 0, canvas.width, canvas.height);

	end.follow(mouse.x, mouse.y);
	end.show();
	end.update();

	let next = end.parent;
	while (next != null) {
		next.update();
		next.show();
		next.follow();
		next = next.parent;
	}

	requestAnimationFrame(draw);
}

draw();
