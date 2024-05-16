<script>
	export let id;
</script>

<div id={id} class="section">
	<slot/>
</div>

<style>
	.section {
		overflow: hidden;
		padding-inline: 10em;
		padding-top: 8em;
		padding-bottom: 4em;
		height: 150vh;
	}

	@media only screen and (max-width: 768px) {
		.section {
			padding-inline: 2em;
			padding-top: 4em;
			padding-bottom: 4em;
		}
	}

</style>
