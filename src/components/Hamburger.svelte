<script>
	export let handleClick;

	export let rotated;

	function handleClickHamburger() {
		handleClick();

		rotated = !rotated;
		handleRotate(rotated);
	}

	function handleRotate(isRotated) {
		const img = document.getElementById("hamburger-img");

		if (isRotated) {
			img.style.transform = ("rotate(90deg)");
		} else {
			img.style.transform = ("none");
		}
	}
</script>

<button class="hamburger" on:click={handleClickHamburger}>
	<img id="hamburger-img" class="hamburger-img" src="static/images/hamburg.svg" alt="menu button"/>
</button>

<style>
	#hamburger-img {
		transition: transform 0.4s ease;
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
		margin: auto;
		width: 1.5em;
		height: 1.5em;
	}
</style>
