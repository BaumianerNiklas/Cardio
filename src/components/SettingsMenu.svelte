<script lang="ts">
import { settings } from "$stores";
import NumericSlider from "./NumericSlider.svelte";
import TextInput from "./TextInput.svelte";
import IconButton from "./IconButton.svelte";

$: running = $settings.running;

function handleSave() {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const dataURL = canvas.toDataURL("image/png");

	const anchor = document.createElement("a");
	anchor.setAttribute("href", dataURL);
	anchor.setAttribute("download", "cardioid");
	anchor.click();
	anchor.remove();
}

function handleDelete() {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const ctx = canvas.getContext("2d");
	if (!ctx) return;

	ctx.beginPath();
	ctx.clearRect(0, 0, 10000, 10000);
	settings.reset();
}
</script>

<div class="w-fit p-2 flex-1">
	<div class="grid grid-cols-3 grid-rows-3 lt-md:grid-rows-2  lt-md:grid-cols-2 mb-4">
		<NumericSlider name="X Degree" min={1} max={20} bind:value={$settings.degreeX} />
		<NumericSlider name="Y Degree" min={1} max={20} bind:value={$settings.degreeY} />
		<NumericSlider name="Iterations" min={1} max={10_000} bind:value={$settings.iterations} />
		<NumericSlider name="Step" min={1} max={15} bind:value={$settings.step} unit="°" />
		<NumericSlider name="Delay" min={0} max={1000} bind:value={$settings.delay} unit="ms" />
		<NumericSlider name="Line Width" min={1} max={4} bind:value={$settings.lineWidth} unit="px" />
		<TextInput name="Color" bind:value={$settings.color} />
		<TextInput name="Background" bind:value={$settings.bgColor} />
	</div>
	<div class="flex gap-3 flex-wrap">
		<IconButton
			iconName={running ? "i-mdi-pause" : "i-mdi-play"}
			bgColor={running ? "bg-slate-600" : "bg-green-600"}
			on:click={() => ($settings.running = !$settings.running)}>{running ? "Pause" : "Run"}</IconButton
		>
		<IconButton iconName="i-mdi-download" bgColor="bg-blue-600" on:click={handleSave}>Download</IconButton>
		<IconButton iconName="i-mdi-trash-can" bgColor="bg-red-600" on:click={handleDelete}>Clear</IconButton>
		<IconButton iconName="i-mdi-restore" bgColor="bg-red-600" on:click={settings.reset}>Restore Defaults</IconButton
		>
	</div>
</div>
