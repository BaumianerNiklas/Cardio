<script lang="ts">
import Canvas from "$components/Canvas.svelte";
import SettingsMenu from "$components/SettingsMenu.svelte";
import NavBar from "$components/NavBar.svelte";
</script>

<div class="flex flex-col 2xl:flex-row items-center 2xl:items-start">
	<Canvas />
	<div class="p-2 flex-1 m-auto 2xl:m-0">
		<NavBar />
		<SettingsMenu />
	</div>
</div>
