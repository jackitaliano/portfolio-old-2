<script>
</script>

<nav class="flex justify-around">
	<a class="nav-item" tabindex="0" href="#aboutMe">About Me</a>
	<a class="nav-item" tabindex="0" href="#experience">Experience</a>
	<a class="nav-item" tabindex="0" href="#projects">Projects</a>
	<a class="nav-item" tabindex="0" href="#contact">Contact Me</a>
</nav>

<style>
	nav {
		background-image: linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.7),rgba(0,0,0,0.4),rgba(0,0,0,0));
		position: fixed;
		top: 0;
		left: 0;

		color: white;

		padding-top: 2em;
		width: 100%;
		height: 10em;
	}

	.nav-item {
		padding: 1em;
		height: 3em;
		line-height: 1em;
		text-align: center;
		padding-inline: 3em;
		border-radius: 2em;
		transition: background-color 0.5s ease, box-shadow 0.5s ease;
	}

	.nav-item:focus-visible,
	.nav-item:focus,
	.nav-item:hover {
		background-color: black;
		box-shadow: 0 0 20px rgba(255,255,255,0.5);
		border: none;
		outline: none;
	}
</style>
