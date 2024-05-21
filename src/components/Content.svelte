<script>
	import Section from "./Section.svelte";
	import AboutMe from "./AboutMe.svelte";
	import Experience from "./Experience.svelte";
	import Projects from "./Projects.svelte";
	import Contact from "./Contact.svelte";
	import Landing from "./Landing.svelte";
</script>

<div class="content-container w-full h-full">
	<div class="w-full h-full">
		<Section id="landing">
			<div class="w-full h-full flex justify-center md:items-center">
				<Landing/>
			</div>
		</Section>
	</div>
	<div class="w-full h-full">
		<Section id="aboutMe">
			<div class="w-full h-full flex justify-center md:items-center">
				<AboutMe/>
			</div>
		</Section>
	</div>
	<div class="w-full h-full ">
		<Section id="experience">
			<div class="w-full h-full flex justify-center md:items-center">
				<Experience/>
			</div>
		</Section>
	</div>
	<div class="w-full h-full">
		<Section id="projects">
			<div class="w-full h-full flex justify-center md:items-center">
				<Projects/>
			</div>
		</Section>
	</div>
	<div class="w-full h-full">
		<Section id="contact">
			<div class="w-full h-full flex justify-center md:items-center">
				<Contact/>
			</div>
		</Section>
	</div>
</div>

<style>
	.content-container {
		overflow-x: hidden;
		-webkit-overflow-x: hidden;
		color: white;
	}
</style>
