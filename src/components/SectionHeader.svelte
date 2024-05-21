<script>
</script>

<h1 class="text-3xl md:text-5xl">
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

	@media only screen and (min-width: 2560px) and (min-height: 1440px) {
		h1 {
			margin-bottom: 1.5em;
		}
	}
</style>

