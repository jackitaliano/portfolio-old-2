<script>
	import BackgroundImage from "./components/BackgroundImage.svelte";
	import Navbar from "./components/Navbar.svelte";
	import Navmenu from "./components/Navmenu.svelte";
	import Content from "./components/Content.svelte";
</script>

<main>
	<div class="background">
		<BackgroundImage image="https://i.imgur.com/NEst8fU.jpg" alt="Nebula"/>
	</div>
	<div class="navbar">
		<Navbar/>
	</div>
	<div class="navmenu">
		<Navmenu/>
	</div>
	<div class="content">
		<Content/>
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100%;

		padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
	}
	.background {
		z-index: 0;
	}

	.content {
		width: 100%;
		margin-inline: auto;
		max-width: 1920px;
		z-index: 10;
	}

	.navbar {
		z-index: 100;
	}

	.navbar {
		display: block;
	}
	.navmenu {
		display: none;
	}

	@media only screen and (max-width: 768px) {
		.navbar {
			display: none;
		}
		.navmenu {
			display: block;
		}
	}
</style>

