<script>
	import { onMount } from "svelte";
	import Hamburger from "./Hamburger.svelte";
	let open = false;

	let touchstartY = 0
	let touchendY = 0

	onMount(()=> {
		const navmenu = document.getElementById("navmenu");
		navmenu.addEventListener('touchstart', e => {
			touchstartY = e.changedTouches[0].screenY
		})

		navmenu.addEventListener('touchend', e => {
			touchendY = e.changedTouches[0].screenY
			checkSwipe();
		})
	})
			
	function checkSwipe() {
		const swipeThresh = 40;
		if (touchendY < touchstartY && touchstartY - touchendY > swipeThresh) {
			handleMenuClick();
		}
	}

	async function handleMenuClick() {
		open = !open;
		setMenu(open);
	}

	function handleLinkClick(id) {
		open = false;
		setMenu(open);

		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		})
	}

	function setMenu(isOpen) {
		const navmenu = document.getElementById("navmenu");
		const navFilter = document.getElementById("nav-filter");
		if (isOpen) {
			navmenu.style.top = "0";
			navmenu.style.opacity = "1";
			navFilter.style.top = "0";
			navFilter.style.webkitBackdropFilter = "blur(4px)";
		} else {
			navmenu.style.top = "-15em";
			navmenu.style.opacity = "0";
			navFilter.style.top = "-15em";
			navFilter.style.webkitBackdropFilter = "none";
		}
	}
</script>

<div>
	<div class="menu-button">
		<Hamburger handleClick={handleMenuClick} bind:rotated={open} />
	</div>
	<div id="nav-filter">
		<p>test</p>
	</div>
	<nav id="navmenu" class="navmenu flex flex-col">
		<button class="navmenu-item" tabindex="0" on:mouseup={() => handleLinkClick("aboutMe")}>About Me</button>
		<button class="navmenu-item" tabindex="0" on:mouseup={() => handleLinkClick("experience")}>Experience</button>
		<button class="navmenu-item" tabindex="0" on:mouseup={() => handleLinkClick("projects")}>Projects</button>
		<button class="navmenu-item" tabindex="0" on:mouseup={() => handleLinkClick("contact")}>Contact Me</button>
	</nav>
</div>

<style>
	#navmenu {
		transition: top 0.5s ease, opacity 0.4s ease;
		border-bottom: 1px solid rgba(255,255,255,0.9);
	}
	#nav-filter {
		position: fixed;
		transition: top 0.5s ease, backdrop-filter 0.4s ease, -webkit-backdrop-filter 0.4s ease;
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		top: -15em;
		left: 0;
		width: 100%;
		height: 15em;
		z-index: 10;
	}

	.navmenu {
		background-image: linear-gradient(rgba(0,0,0,0.95),rgba(0,0,0,0.7),rgba(0,0,0,0.45),rgba(0,0,0,0.2));
		position: fixed;
		top: -15em;
		left: 0;
		z-index: 20;

		padding: 1em;

		color: white;

		width: 100%;
		height: 15em;
	}

	.navmenu-item {
		padding: 1em;
		height: 3em;
		width: 80%;
		line-height: 1em;
		text-align: left;
		padding-inline: 3em;
		border-radius: 2em;
		transition: background-color 0.5s ease, box-shadow 0.5s ease;
	}

	.navmenu-item:focus-visible,
	.navmenu-item:focus,
	.navmenu-item:hover,
	.navmenu-item:active:hover {
		background-color: black;
		box-shadow: 0 0 20px rgba(255,255,255,0.5);
		border: none;
		outline: none;
	}

	.menu-button {
		position: fixed;
		top: calc(1em + env(safe-area-inset-top));
		left: calc(100% - 3em - env(safe-area-inset-right));

		z-index: 30;
	}
</style>
