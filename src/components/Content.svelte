<script>
	import Section from "./Section.svelte";
	import AboutMe from "./AboutMe.svelte";
	import Experience from "./Experience.svelte";
	import Projects from "./Projects.svelte";
</script>

<div class="content-container w-full h-full">
	<Section id="aboutMe">
		<AboutMe/>
	</Section>
	<Section id="experience">
		<Experience/>
	</Section>
	<Section id="projects">
		<Projects/>
	</Section>
	<Section id="bottom"></Section>
</div>

<style>
	.content-container {
		padding-inline: 10em;
		color: white;
	}
</style>
