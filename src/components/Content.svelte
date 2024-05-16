<script>
	import Section from "./Section.svelte";
	import AboutMe from "./AboutMe.svelte";
	import Experience from "./Experience.svelte";
	import Projects from "./Projects.svelte";
	import Contact from "./Contact.svelte";
</script>

<div class="content-container flex flex-col justify-between w-full h-full">
	<div class="w-full h-full">
		<Section id="aboutMe">
			<AboutMe/>
		</Section>
	</div>
	<div class="light w-full h-full">
		<Section id="experience">
			<Experience/>
		</Section>
	</div>
	<div class="w-full h-full">
		<Section id="projects">
			<Projects/>
		</Section>
	</div>
	<div class="light w-full h-full">
		<Section id="contact">
			<Contact/>
		</Section>
	</div>
</div>

<style>
	.content-container {
		overflow-x: hidden;
		-webkit-overflow-x: hidden;
		color: white;
	}

	.light {
	}
</style>
