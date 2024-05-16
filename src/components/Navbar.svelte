<script>
	function handleLinkClick(event, id) {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		})

		event.target.blur();
	}
</script>

<nav class="navbar flex justify-around">
	<button class="navbar-item" tabindex="0" on:click={(event) => handleLinkClick(event, "aboutMe")}>About Me</button>
	<button class="navbar-item" tabindex="0" on:click={(event) => handleLinkClick(event, "experience")}>Experience</button>
	<button class="navbar-item" tabindex="0" on:click={(event) => handleLinkClick(event, "projects")}>Projects</button>
	<button class="navbar-item" tabindex="0" on:click={(event) => handleLinkClick(event, "contact")}>Contact Me</button>
</nav>

<style>
	.navbar {
		background-image: linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.7),rgba(0,0,0,0.4),rgba(0,0,0,0.1));
		backdrop-filter: blur(2px);
		position: fixed;
		top: 0;
		left: 0;

		z-index: 10;

		color: white;

		padding-top: 1.5em;
		width: 100%;
		height: 6em;
	}

	.navbar-item {
		padding: 1em;
		height: 3em;
		line-height: 1em;
		text-align: center;
		padding-inline: 3em;
		border-radius: 2em;
		transition: background-color 0.5s ease, box-shadow 0.5s ease;
	}

	.navbar-item:focus-visible,
	.navbar-item:focus,
	.navbar-item:hover {
		background-color: black;
		box-shadow: 0 0 20px rgba(255,255,255,0.5);
		border: none;
		outline: none;
	}
</style>
