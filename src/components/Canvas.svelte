<script lang="ts">
import { onMount } from "svelte";
import { settings } from "$stores";

let canvasSize: number;
let radius: number;

// Setup
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let currentFrame: number;

let angle = 0;
let i = 0;

$: if (i >= $settings.iterations) $settings.running = false;

onMount(async () => {
	// Setup canvas
	canvasSize = Math.min(window.innerWidth, window.innerHeight);
	radius = canvasSize / 2 - 50;

	ctx = canvas.getContext("2d")!;
	setupCanvas();

	settings.subscribe(() => {
		setupCanvas();

		if ($settings.running) requestAnimationFrame(draw);
		else if ($settings.hasResetted) {
			// janky ahh way to do this
			cancelAnimationFrame(currentFrame);
			i = 0;
			$settings.hasResetted = false;
		}
	});
});

async function draw(frame: number) {
	currentFrame = frame;
	if (!$settings.running) return;

	if ($settings.delay > 0) await sleep($settings.delay);

	ctx.beginPath();
	ctx.moveTo(...getPoint());
	ctx.lineTo(...getPoint(true));
	ctx.stroke();

	angle += $settings.step;
	i++;

	if ($settings.running && i < $settings.iterations) requestAnimationFrame(draw);
}

function setupCanvas() {
	ctx.fillStyle = $settings.bgColor;
	ctx.fillRect(0, 0, canvasSize, canvasSize);

	ctx.fillStyle = $settings.color;
	ctx.strokeStyle = $settings.color;
	ctx.lineWidth = $settings.lineWidth;
}

function getPoint(isSecond = false): [number, number] {
	const offset = canvasSize / 2;
	if (isSecond) {
		return [
			radius * Math.cos($settings.degreeX * angle) + offset,
			radius * Math.sin($settings.degreeY * angle) + offset,
		];
	} else {
		return [radius * Math.cos(angle) + offset, radius * Math.sin(angle) + offset];
	}
}

async function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
</script>

<canvas bind:this={canvas} width={canvasSize} height={canvasSize} class="flex-1 outline" id="canvas" />
