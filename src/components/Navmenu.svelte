<script>
	import { onMount } from "svelte";
	import Hamburger from "./Hamburger.svelte";
	let open = false;

	let touchstartY = 0
	let touchendY = 0

	let navmenu;

	onMount(()=> {
		navmenu = document.getElementById("navmenu");
		navmenu.addEventListener('touchstart', e => {
			touchstartY = e.changedTouches[0].screenY
		})

		navmenu.addEventListener('touchend', e => {
			touchendY = e.changedTouches[0].screenY
			checkSwipe();
		})

		navmenu.addEventListener('close', e => setMenu(false));

		navmenu.addEventListener("click", e => {
			const dialogDimensions = navmenu.getBoundingClientRect()
			if (
				e.clientX < dialogDimensions.left ||
				e.clientX > dialogDimensions.right ||
				e.clientY < dialogDimensions.top ||
				e.clientY > dialogDimensions.bottom
			) {
				setMenu(false);
			}
		})
	})
			
	function checkSwipe() {
		const swipeThresh = 30;
		if (touchendY < touchstartY && touchstartY - touchendY > swipeThresh) {
			setMenu(false);
		}
	}

	async function handleMenuClick() {
		setMenu(!open);
	}

	function handleLinkClick(id) {
		setMenu(false);

		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		})
	}

	function setMenu(isOpen) {
		open = isOpen;
		if (isOpen) {
			navmenu.showModal();
		} else {
			navmenu.close();
		}
	}
</script>

<div class="w-full m-0">
	<div class="menu-button">
		<Hamburger bind:rotated={open} handleClick={handleMenuClick}/>
	</div>
	<dialog id="navmenu" class="navmenu flex flex-col">
		<button class="navmenu-item" on:mouseup={() => handleLinkClick("aboutMe")}>About Me</button>
		<button class="navmenu-item" on:mouseup={() => handleLinkClick("experience")}>Experience</button>
		<button class="navmenu-item" on:mouseup={() => handleLinkClick("projects")}>Projects</button>
		<button class="navmenu-item" on:mouseup={() => handleLinkClick("contact")}>Contact Me</button>
		<button class="close-button ml-auto" on:click={() => setMenu(false)}><img class="close-img" src="static/icons/xmark.svg" alt="close" draggable="false" /></button>
	</dialog>
</div>

<style>
	.navmenu {
		transition: top 0.5s ease, opacity 0.4s ease, background-color 1s ease;

		border-bottom: 1px solid rgba(255,255,255,0.9);
		background-image: linear-gradient(rgba(0,0,0,0.95),rgba(0,0,0,0.7),rgba(0,0,0,0.45),rgba(0,0,0,0.2));
		background-color: transparent;
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		opacity: 0;
		color: white;

		padding: 2em 1em 1em 1em;


		margin: 0;
		top: -100%;
		width: 100%;
		max-width: 100%;
		height: fit-content;
	}

	.navmenu[open] {
		top: 0;
		opacity: 1;
	}
	.navmenu::backdrop {
		transition: background-color 1s ease;
		background-color: rgba(0,0,0,0.2);
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

	.close-button {
		width: 60px;
		height: 50px;
	}

	.close-img {
		width: 20px;
		height: 20px;
		margin-left: auto;
	}
</style>
