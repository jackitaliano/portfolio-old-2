<script>
	import SectionHeader from "./SectionHeader.svelte";
	import SectionText from "./SectionText.svelte";
	import Carousel from "./Carousel.svelte";

	import { TESTIMONIALS } from "../configs/testimonials.js";
</script>

<div>
	<SectionHeader>
		Experience
	</SectionHeader>
	<SectionText>
		Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
	</SectionText>
	<div class="carousel my-auto">
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
	.carousel {
		height: 10em;
		width: 100%;
	}
</style>
