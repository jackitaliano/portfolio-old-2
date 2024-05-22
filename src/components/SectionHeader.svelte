<script>
</script>

<h1 class="text-3xl md:text-6xl">
	<slot/>
</h1>

<style>
	h1 {
		margin-bottom: 1em;
	}

	@media only screen and (max-width: 768px) {
		h1 {
			margin-bottom: 0.75em;
		}
	}

	@media only screen and (min-height: 1440px) {
		h1 {
			font-size: 3em;
			line-height: 1.5em;
			margin-bottom: 1.5em;
		}
	}
</style>

