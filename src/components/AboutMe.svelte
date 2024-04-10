<script>
	import SectionHeader from "./SectionHeader.svelte";
	import SectionText from "./SectionText.svelte";
	import List from "./List.svelte";
	import Carousel from "./Carousel.svelte";
</script>

<div class="flex justify-between">
	<div>
		<SectionHeader>I'm Jack</SectionHeader>
		<SectionText>
			I'm a:
		</SectionText>
		<List>
			<li>
				Computer Science & Engineering Student at The Ohio State University
			</li>
			<li>
				AI / Web Development Intern at NASA Glenn Research
			</li>
		</List>
	</div>
	<div>
		<Carousel/>
	</div>
</div>

<style>
</style>
