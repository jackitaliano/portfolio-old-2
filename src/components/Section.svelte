<script>
	export let id;
</script>

<div id={id} class="section">
	<slot/>
</div>

<style>
	.section {
		padding-top: 10em;
		height: 100%;
	}

	@media only screen and (max-width: 768px) {
		.section {
			padding-top: 3em;
			padding-bottom: 10em;
		}
	}

</style>
