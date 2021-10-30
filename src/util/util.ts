import './logger';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const canvasOffset = canvas.getBoundingClientRect();
const offsetX = canvasOffset.left;
const offsetY = canvasOffset.top;

export const mouse = { x: 0, y: 0 };

function handleMouseMove(e: MouseEvent): void {
	mouse.x = e.clientX - offsetX;
	mouse.y = e.clientY - offsetY;
}

canvas.addEventListener('mousemove', (e: MouseEvent) => handleMouseMove(e));
//canvas.addEventListener("mousedown", (e: MouseEvent) => handleMouseMove(e));
