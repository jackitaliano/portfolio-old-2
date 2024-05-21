<script>
</script>

<h2 class="text-lg md:text-2xl">
	<slot/>
</h2>

<style>
	h2 {
		margin-bottom: 1em;
	}

	@media only screen and (max-width: 768px) {
		h2 {
			margin-bottom: 0.75em;
		}
	}

	@media only screen and (min-height: 1440px) {
		h2 {
			font-size: 2.1em;
			margin-bottom: 1.5em;
		}
	}
</style>

