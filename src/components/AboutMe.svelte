<script>
	import SectionHeader from "./SectionHeader.svelte";
	import SectionText from "./SectionText.svelte";
	import List from "./List.svelte";
	import Card from "./Card.svelte";
	import Carousel from "./Carousel.svelte";
	import LazyImage from "./LazyImage.svelte";
	import { IMAGES } from "../configs/images";
    import SectionSubheader from "./SectionSubheader.svelte";

	const PROF = {
		type: "Professional",
		info: [
			"CSE Student at The Ohio State University",
			"NASA Glenn Research Intern",
			"Hackathon / Coding Competition participant",
			"Code Ninjas Teacher, Honor Golf Caddie, Golf Course Attendant",
		],
		images: [
			IMAGES.fountainGroup,
			IMAGES.sfSign,
			IMAGES.sfGroup,
			IMAGES.thinkAndDrinkDemo,
			IMAGES.hike,
			IMAGES.astronaut,
			IMAGES.engineering,
			IMAGES.glennFront,
			IMAGES.hack,
			IMAGES.makeCar,
		]
	}

	const PERS = {
		type: "Personal",
		info: [
			"Golfer, Snowboarder/Skier, Runner",
			"Fraternity Risk Manager, Website Coordinator, Professional Development Lead",
			"Lacrosse player, Football player, and Cross Country runner",
			"Lifelong Learner and Problem Solver",
		],
		images: [
			IMAGES.hikingJaclyn,
			IMAGES.skiSibs,
			IMAGES.snowboardMe,
			IMAGES.pilam,
			IMAGES.buckeyes,
		]
	} 

	const TYPES = [ PROF, PERS, PROF, PERS ]
</script>

<div class="w-full h-fit">
	<SectionHeader>
		About Me
	</SectionHeader>
	<div class="carousel">
		<Carousel
			swipeable={{
		mobile: true,
		desktop: false
		}}
		animation={{
		slide: true,
		fade: true,
		}}
		lockDuration={500}
		>
		<img slot="prev" class="arrow-img" src="static/icons/caret-left.svg" alt="left"/>
		<svelte:fragment slot="content">
			{#each TYPES as type}
				<Card>
					<div class="w-full h-full flex flex-col md:flex-row gap-2">
						<div class="w-full md:w-2/3 h-full mb-auto">
							<SectionSubheader>
								{type.type}
							</SectionSubheader>
							<List>
								{#each type.info as info}
									<li class="mb-4">
										<SectionText>{info}</SectionText>
									</li>
								{/each}
							</List>
						</div>
						<div class="photos w-full md:w-1/3 h-full overflow-hidden">
							<Carousel
							 swipeable={{ mobile: false, desktop: false }}
							 animation={{ slide: true, fade: true }}
							 autoScroll={{ duration: 5000 }}
							 >
							 <svelte:fragment slot="content">
								 {#each type.images as img}
									 <div class="photo overflow-hidden">
										 <LazyImage url={img.url} loadingSrc={img.loading} alt={img.alt} />
									 </div>
								 {/each}
							 </svelte:fragment>
							</Carousel>
						</div>
					</div>
				</Card>
			{/each}
		</svelte:fragment>
		<img slot="next" class="arrow-img" src="static/icons/caret-right.svg" alt="right"/>
		</Carousel>
	</div>
</div>

<style>
	.photo {
		object-fit: contain;
		aspect-ratio: 1 / 1;
	}

	.photos {
		border-radius: 0.5em;
	}

	.carousel {
		height: 50vh;
		width: 100vw;
		max-height: 720px;
		max-width: 1920px;
		margin-left: -10em;
	}

	.arrow-img {
		margin: auto;
		width: 25px;
		height: 25px;
		border-radius: 50%;
	}

	@media only screen and (max-width: 768px) {
		.carousel {
			margin-left: -2em;
		}
	}

</style>
