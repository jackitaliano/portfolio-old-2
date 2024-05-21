<script>

</script>

<div class="card w-full h-fit">
	<slot/>
</div>

<style>
	.card {
		padding: 1.5em;
		background-color: rgba(0,0,0,0.6);
		box-shadow: 0 0 15px rgba(255,255,255,0.3);
		border-radius: 1em;
		max-width: calc(1920px - 20em);
	}
</style>
