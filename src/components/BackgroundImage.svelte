<script>
	import LazyImage from "./LazyImage.svelte";

	export let image;

</script>

<div class="bg-img-container">
	<div class="bg-filter">
	</div>
	<div class="bg-img">
		<LazyImage url={image.url} loadingSrc={image.loading} alt={image.alt} />
	</div>
</div>

<style>
	.bg-img-container {
		z-index: -3;
		position: absolute;

		width: 100vw;
		height: 100vh;
		padding: 0;
		margin: 0;
	}

	.bg-img {
		z-index: -2;
		
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;

		filter: blur(20px);
	}

	.bg-filter {
		z-index: -1;

		position: fixed;
		left: 0;
		top: 0;
		width: 120%;
		height: 120%;
		margin: 0;
		padding: 0;
		border: none;

		background-color: rgba(0,0,0,0.7);
	}
</style>
