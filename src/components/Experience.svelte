<script>
	import SectionHeader from "./SectionHeader.svelte";
	import SectionText from "./SectionText.svelte";
	import Carousel from "./Carousel.svelte";

	import { TESTIMONIALS } from "../configs/testimonials.js";
	import { EXPERIENCE } from "../configs/experience";
</script>

<div>
	<SectionHeader>
		Experience
	</SectionHeader>
	<div class="experience">
	<Carousel
	 swipeable={{
	 mobile: true,
	 desktop: true
	 }}
	 animation={{
	 slide: true,
	 fade: true
	 }}
	 lockDuration={500}
	 >
		<img slot="prev" class="arrow-img" src="static/images/caret-left.svg" alt="left"/>
	 <svelte:fragment slot="content">
		 {#each EXPERIENCE as exp}
			 <div class="flex flex-col justify-around">
				 <div class="md:flex md:justify-between">
					 <h2>{exp.company}</h2>
					 <p>{exp.role}</p>
				 </div>
				 <p class="md:hidden">{exp.short_desc}</p>
				 <p class="hidden md:block">{exp.long_desc}</p>
			 </div>
		 {/each}
	 </svelte:fragment>
		<img slot="next" class="arrow-img" src="static/images/caret-right.svg" alt="right"/>
	</Carousel>
	</div>
	<div class="testimonial my-auto">
		<Carousel
			swipeable={{
		mobile: true,
		desktop: true
		}}
		animation={{
		slide: true,
		fade: true,
		}}
		autoScroll={{
		duration: 7000,
		reverse: false
		}}
		lockDuration={500}
		>
		<svelte:fragment slot="content">
			{#each TESTIMONIALS as test}
				<div class="flex flex-col justify-center text-center">
					<p>{test.comment}</p>
					<p>- <i>{test.role}</i></p>
				</div>
			{/each}
		</svelte:fragment>
		</Carousel>
	</div>
</div>

<style>
	.experience {
		height: 20em;
		width: 100vw;
		margin-left: -10em;
	}

	.testimonial {
		height: 10em;
		width: 100%;
	}

	.arrow-img {
		margin: auto;
		width: 25px;
		height: 25px;
		border-radius: 50%;
	}

	@media only screen and (max-width: 768px) {
		.experience {
			margin-left: -2em;
		}
	}
</style>
