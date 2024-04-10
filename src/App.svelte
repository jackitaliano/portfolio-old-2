<script>
	import BackgroundImage from "./components/BackgroundImage.svelte";
	import Navbar from "./components/Navbar.svelte";
	import Content from "./components/Content.svelte";
	import Footbar from "./components/Footbar.svelte";
</script>

<main>
	<div class="background">
		<BackgroundImage image="static/images/nebula.jpg" alt="Nebula"/>
	</div>
	<div class="navbar">
		<Navbar/>
	</div>
	<div class="content">
		<Content/>
	</div>
	<div class="footbar">
		<Footbar/>
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
	.background {
		z-index: 0;
	}

	.content {
		width: 100%;
		height: 100%;
		z-index: 10;
	}

	.footbar,
	.navbar {
		z-index: 20;
	}
</style>

