<script>
	import Hamburger from "./Hamburger.svelte";
	let open = false;

	async function handleMenuClick() {
		console.log("click");
		open = !open;
		setMenu(open);
	}

	function handleLinkClick(id, isTop) {
		open = false;
		setMenu(open);

		const element = document.getElementById(id);
		const navmenu = document.getElementById("navmenu");

		if (!isTop){
			navmenu.style.transition = "none";

			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			})

			navmenu.style.transition = "margin-top 0.5s ease";
		}
	}

	function setMenu(isOpen) {
		const navmenu = document.getElementById("navmenu");
		if (isOpen) {
			navmenu.style.marginTop = "0";
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			navmenu.style.marginTop = "-100%";
		}
	}
</script>

<div>
	<div class="menu-button">
		<Hamburger handleClick={handleMenuClick} />
	</div>
	<nav id="navmenu" class="navmenu flex flex-col">
		<button class="navmenu-item" tabindex="0" on:mouseup={() => handleLinkClick("aboutMe", true)}>About Me</button>
		<button class="navmenu-item" tabindex="0" on:mouseup={() => handleLinkClick("experience")}>Experience</button>
		<button class="navmenu-item" tabindex="0" on:mouseup={() => handleLinkClick("projects")}>Projects</button>
		<button class="navmenu-item" tabindex="0" on:mouseup={() => handleLinkClick("contact")}>Contact Me</button>
	</nav>
</div>

<style>
	#navmenu {
		margin-top: -100%;
		transition: margin-top 0.5s;
	}

	.navmenu {
		background-image: linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.7),rgba(0,0,0,0.4),rgba(0,0,0,0));

		padding: 1em;

		color: white;

		width: 100%;
		height: 20%;
	}

	.navmenu-item {
		padding: 1em;
		height: 3em;
		width: 50%;
		line-height: 1em;
		text-align: center;
		padding-inline: 3em;
		border-radius: 2em;
		transition: background-color 0.5s ease, box-shadow 0.5s ease;
	}

	.navmenu-item:focus-visible,
	.navmenu-item:focus,
	.navmenu-item:hover {
		background-color: black;
		box-shadow: 0 0 20px rgba(255,255,255,0.5);
		border: none;
		outline: none;
	}

	.menu-button {
		position: fixed;
		top: 1em;
		left: calc(100% - 3em);

		z-index: 20;
	}
</style>
