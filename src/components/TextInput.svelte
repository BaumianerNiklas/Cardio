<script lang="ts">
export let name: string;
export let value: string;
</script>

<div class="p-4">
	<h4 class="mb-2">{name}</h4>
	<input
		class="border-b-2 border-b-slate-600 border-t-none border-x-none bg-transparent text-base focus:border-blue-400 focus:outline-none transition-all outline-none"
		type="text"
		bind:value
	/>
</div>
