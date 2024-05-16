<script>
	import SectionHeader from "./SectionHeader.svelte";
	import Carousel from "./Carousel.svelte";
	import Card from "./Card.svelte";

	import { PROJECTS } from "../configs/projects.js";
</script>

<div class="h-full">
	<SectionHeader>
		Projects
	</SectionHeader>
	<div class="carousel">
		<Carousel
			swipeable={{
		mobile: true,
		desktop: false
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
			{#each PROJECTS as proj}
				<a draggable="false" href="{proj.url}" target="_blank" class="w-full h-full">
					<Card>
						<div class="w-full h-full flex flex-col md:flex-row">
							<div class="w-full md:w-1/2 h-full flex flex-col justify-between pb-2">
								<div>
									<h1 class="pb-2">{proj.name}</h1>
									<h2>{proj.short_desc}</h2>
									<p class={"hidden md:block"}>{proj.long_desc}</p>
								</div>
								<div class="flex gap-2">
									{#each proj.languages as lang}
										<p>{lang}</p>
									{/each}
									{#each proj.tools as tool}
										<p>{tool}</p>
									{/each}
								</div>
							</div>
							<div class="w-full md:w-1/2 h-full overflow-hidden">
								<Carousel
					swipeable={{ mobile: false, desktop: false }}
					animation={{ slide: true }}
					autoScroll={{ duration: 5000 }}
					>
					<svelte:fragment slot="content">
						{#each proj.images as img}
							<h1>image: {img}</h1>
						{/each}
					</svelte:fragment>
								</Carousel>
							</div>
						</div>
					</Card>
				</a>
			{/each}
		</svelte:fragment>
		<img slot="next" class="arrow-img" src="static/images/caret-right.svg" alt="right"/>
		</Carousel>
	</div>
</div>

<style>
	.carousel {
		height: 50%;
		width: 100vw;
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
