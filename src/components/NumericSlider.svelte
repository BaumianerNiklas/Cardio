<script lang="ts">
export let name: string;
export let min: number;
export let max: number;
export let unit: string = "";

export let value: number;
</script>

<div class="w-52 p-4">
	<div class="flex">
		<h4 class="mr-auto">{name}</h4>
		<div class="ml-auto">
			<input
				bind:value
				class="w-12 mr-1 border-b-2 border-slate-300 bg-transparent border-none focus:outline-none text-center text-base "
				type="text"
			/>
			<span>{unit}</span>
		</div>
	</div>
	<input bind:value type="range" class="rounded-full " {min} {max} />
</div>
