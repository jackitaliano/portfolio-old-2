<script>
	import { loadImage as loader } from "../utils/loader";
	export let image;

	let loaded = false;
	let loadedSrc = null;

	async function loadImage() {
		loadedSrc = await loader(image.name)
		loaded = true;
	}
</script>

{#await loadImage() then}
	{#if loaded}
		<img src={loadedSrc} alt={image.alt} />
	{/if}
{/await}
{#key loaded}
{#if !loaded}
	<img src={image.loadingSrc} alt={image.alt} class="loading" />
{/if}
{/key}

<style>
	.loading {
		filter: blur(5px);
		position: relative;
		top:0;
		left:0;
	}

	img {
		border-radius: 0.5em !important;
		object-fit: cover;
		aspect-ratio: 1 / 1;
		width: auto;
		height: auto;
		min-width: 100%;
		min-height: 100%;
	}
</style>
