<script>
	import Section from "./Section.svelte";
	import AboutMe from "./AboutMe.svelte";
	import Experience from "./Experience.svelte";
	import Projects from "./Projects.svelte";
	import Contact from "./Contact.svelte";
	import ProjectCards from "./ProjectCards.svelte";
</script>

<div class="content-container w-full h-full">
	<Section id="aboutMe">
		<AboutMe/>
	</Section>
	<Section>
		<ProjectCards/>
	</Section>
	<Section id="experience">
		<Experience/>
	</Section>
	<Section id="projects">
		<Projects/>
	</Section>
	<Section id="contact">
		<Contact/>
	</Section>
</div>

<style>
	.content-container {
		color: white;
	}
</style>
