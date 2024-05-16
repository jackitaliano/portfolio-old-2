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
		padding-top: 10em;
		height: 100%;
	}

	@media only screen and (max-width: 768px) {
		.section {
			height: 150%;
			padding-inline: 2em;
			padding-top: 3em;
			padding-bottom: 10em;
		}
	}

</style>
