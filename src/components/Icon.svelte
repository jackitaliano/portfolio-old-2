<script>
	export let src;
	export let alt;
</script>

<div>
	<img src={src} alt={alt} draggable="false"/>
</div>

<style>
	img {
		width: 2em;
		height: 2em;
		margin: auto;
	}

	div {
		padding: 0.5em;
		width: 3em;
		height: 3em;
		border-radius: 50%;
		margin: 0.5em;
	}
</style>
