<script>
	export let src;
	export let alt;
	export let url;
</script>

<a href="{url}" target="_blank">
	<img src={src} alt={alt} draggable="false"/>
</a>

<style>
	img {
		width: 2em;
		height: 2em;
		margin: auto;
	}

	a {
		padding: 0.5em;
		width: 3em;
		height: 3em;
		border-radius: 50%;
		background-color: rgba(0,0,0,0.6);
		transition: box-shadow 0.3s ease, background-color 0.3s ease;
		margin: 0.5em;
	}

	a:hover {
		box-shadow: 0 0 20px rgba(255,255,255,0.5);
		background-color: black;
	}
</style>
