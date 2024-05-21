<script>
	export let url;
	export let loadingSrc;
	export let alt;

	let loaded = false;
	let loadedSrc = null;

	async function loadImage() {
		try {

			const res = await fetch(url);

			if (!res.ok) {
				return;
			}

			const blob = await res.blob();
			loadedSrc = URL.createObjectURL(blob);
			loaded = true;
		} catch (e) {

		}
	}
</script>

{#await loadImage() then}
	{#if loaded}
		<img src={loadedSrc} alt={alt} />
	{/if}
{/await}
{#key loaded}
{#if !loaded}
	<img src={loadingSrc} alt={alt} class="loading" />
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
