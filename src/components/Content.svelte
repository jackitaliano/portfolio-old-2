<script>
	import Section from "./Section.svelte";
	import AboutMe from "./AboutMe.svelte";
	import Experience from "./Experience.svelte";
	import Projects from "./Projects.svelte";
	import Contact from "./Contact.svelte";
	import Carousel from "./Carousel.svelte";
	import Card from "./Card.svelte";
</script>

<div class="content-container w-full h-full">
	<Section id="aboutMe">
		<AboutMe/>
	</Section>
	<Section>
		<Carousel
			autoScroll={{
				duration: 5000,
				reverse: false
			}}
			swipeable={{
				mobile: true,
				desktop: true
			}}
			animation={{
				slide: true,
				scale: true,
				fade: true,
			}}
			lockDuration={500}
			>
			<img slot="prev" class="arrow-img" src="static/images/caret-left.svg" alt="left"/>
			<svelte:fragment slot="content">
				<Card>project 1</Card>
				<Card>project 2</Card>
				<Card>project 3</Card>
				<Card>project 4</Card>
				<Card>project 5</Card>
				<Card>project 6</Card>
			</svelte:fragment>
			<img slot="next" class="arrow-img" src="static/images/caret-right.svg" alt="right"/>
		</Carousel>
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
		overflow-x: hidden;
		-webkit-overflow-x: hidden;
		color: white;
	}

	.arrow-img {
		margin: auto;
		width: 25px;
		height: 25px;
		border-radius: 50%;
	}
</style>
