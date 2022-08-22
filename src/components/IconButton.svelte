<script lang="ts">
import { createEventDispatcher } from "svelte";

export let iconName: string;
export let bgColor: string;

const dispatch = createEventDispatcher<{ click: void }>();
</script>

<div
	class="flex {bgColor} cursor-pointer w-fit h-10 rounded content-between items-center pl-2 pr-3"
	on:click={() => dispatch("click")}
>
	<div class="{iconName} text-white w-8 h-8" />
	<span class="text-white grow ml-1"><slot /></span>
</div>
