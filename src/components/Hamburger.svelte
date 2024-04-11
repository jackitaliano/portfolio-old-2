<script>
	export let handleClick;
</script>

<button class="hamburger" on:click={handleClick}>
	<img class="hamburger-img" src="static/images/hamburg.svg" alt="menu button"/>
</button>

<style>
	.hamburger {
		width: 2em;
		height: 2em;
	}

	.hamburger:focus-visible,
	.hamburger:focus,
	.hamburger:active {
		background-color: none;
		box-shadow: 0 0 25px rgba(255,255,255,0.5);
	}

	.hamburger-img {
		width: 2em;
		height: 2em;
	}
</style>
