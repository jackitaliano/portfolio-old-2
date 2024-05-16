<script>
	export let handleClick;

	export let rotated;

	function handleClickHamburger() {
		handleClick();

		rotated = !rotated;
	}
</script>

<button class="hamburger" on:click={handleClickHamburger}>
	<img class="hamburger-img" class:rotated src="static/images/hamburg.svg" alt="menu button"/>
</button>

<style>
	.rotated {
		transform: rotate(90deg);
	}

	.hamburger {
		width: 2.5em;
		height: 2.5em;
	}

	.hamburger:focus-visible,
	.hamburger:focus,
	.hamburger:active {
		background-color: none;
		box-shadow: 0 0 25px rgba(255,255,255,0.5);
	}

	.hamburger-img {
		transition: transform 0.4s ease;
		margin: auto;
		width: 1.5em;
		height: 1.5em;
	}
</style>
