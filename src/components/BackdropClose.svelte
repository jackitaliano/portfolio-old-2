<script>
	export let open;
	export let handleClick
</script>

<button tabindex="0" class="clickoff w-full h-full" class:open on:click={handleClick}>
</button>

<style>
	.clickoff {
		outline: none !important;
		background-color: transparent !important;
		cursor: default;
		visibility: hidden;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;

		z-index: 10;
	}

	.open {
		visibility: visible;
	}
</style>
