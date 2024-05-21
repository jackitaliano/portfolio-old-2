<script>
	import { onMount } from "svelte";

	let navbar;
	let lastScrollY = null;
	let hideNav = false;

	onMount(()=> {
		document.addEventListener("scroll", handleScroll);
		document.addEventListener("mousemove", handleMouse);
		navbar = document.getElementById("navbar");
		navbar.addEventListener("focusin", () => hideNav = false);
	})

	function handleLinkClick(event, id) {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		})

		hideNav = true;
		event.target.blur();
	}

	function handleScroll(e) {
		const newScrollY = window.scrollY;

		if (lastScrollY === null) {
			lastScrollY = newScrollY;
			return;
		}
		const diff = newScrollY - lastScrollY;

		if (hideNav && (newScrollY < 40 || diff < -1)) {
			hideNav = false;
		} else if (!hideNav && (newScrollY > 40 && diff > 1)) {
			hideNav = true;
		}

		lastScrollY = newScrollY;
	}

	function handleMouse(e) {
		if (hideNav === false) {
			return;
		}

		if (e.clientY < 60) {
			hideNav = false;
		}
	}
</script>

<nav id="navbar" class="navbar flex justify-evenly" class:hide-nav={hideNav}>
	<button class="navbar-item" on:click={(event) => handleLinkClick(event, "aboutMe")}>
		<h2 class="navitem-text">
			About Me
		</h2>
	</button>
	<button class="navbar-item" on:click={(event) => handleLinkClick(event, "experience")}>
		<h2 class="navitem-text">
			Experience
		</h2>
	</button>
	<button class="navbar-item" on:click={(event) => handleLinkClick(event, "projects")}>
		<h2 class="navitem-text">
			Projects
		</h2>
	</button>
	<button class="navbar-item" on:click={(event) => handleLinkClick(event, "contact")}>
		<h2 class="navitem-text">
			Contact Me
		</h2>
	</button>
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

		transition: top 0.7s ease;

		padding-top: 1em;
		padding-bottom: 0.75em;
		width: 100%;
		height: fit-content;
	}

	.navbar-item {
		height: 2.5em;
		text-align: center;
		align-content: center;
		padding-inline: 2em;
		border-radius: 5em;
		transition: background-color 0.3s ease, box-shadow 0.3s ease;

		font-size: 1.4em;
		line-height: 150%;
	}

	.hide-nav {
		top: -100%;
	}

	.navbar-item:focus-visible,
	.navbar-item:focus,
	.navbar-item:hover {
		background-color: black;
		box-shadow: 0 0 15px rgba(255,255,255,0.3);
		border: none;
		outline: none;
	}

	@media only screen and (min-width: 1920px) and (min-height: 1440px) {
		.navbar-item {
			height: 3.1em;
			font-size: 2.4em;
		}

	}
</style>
