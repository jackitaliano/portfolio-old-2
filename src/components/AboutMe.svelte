<script>
	import SectionHeader from "./SectionHeader.svelte";
	import SectionText from "./SectionText.svelte";
	import List from "./List.svelte";
	import Carousel from "./Carousel.svelte";
</script>

<div class="w-full h-full">
	<SectionHeader>
		Hello,<br/>I'm Jack...
	</SectionHeader>
	<div class="w-full flex flex-col gap-12 md:gap-0 md:flex-row justify-between">
		<div class="w-full md:h-full">
			<div class="w-full h-full mb-20">
				<SectionText>
					I'm a:
				</SectionText>
				<List>
					<Carousel 
			 slideable={{
			 mobile: false,
			 desktop: false
			 }}
			 animation={{
			 fade: true,
			 slide: false,
			 scale: false,
			 }}
			 autoScroll={{
			 duration: 3000
			 }}
			 >
			 <svelte:fragment slot="content">
			 <li>
				 Computer Science & Engineering Student at <span class="text-red-600"><strong>The</strong> Ohio State University</span>
			 </li>
			 <li>
				 AI / Web Dev Intern at NASA Glenn Research
			 </li>
			 <li>
				 Passionate developer in my free-time
			 </li>
			 <li>
				 Skier, Runner, Gamer
			 </li>
			 <li>
				 Lifetime Learner
			 </li>
			 </svelte:fragment>
					</Carousel>
				</List>
			</div>
			<div class="w-full h-full">
				<SectionText>
					I love:
				</SectionText>
				<List>
					<Carousel 
			 slideable={{
			 mobile: false,
			 desktop: false
			 }}
			 animation={{
			 fade: true,
			 slide: false,
			 scale: false,
			 }}
			 autoScroll={{
			 duration: 3000
			 }}
			 >
			 <svelte:fragment slot="content">
			 <li>
				 Tech, traveling, dogs, ice cream...
			 </li>
			 <li>
			 </li>
			 </svelte:fragment>
					</Carousel>
				</List>
			</div>
		</div>
		<div class="w-full md:w-3/4 h-3/4 flex justify-center items-center">
			<img class="photo w-3/4 h-3/4" src="https://i.imgur.com/OIdbLjE.png" alt="headshot"/>
		</div>
	</div>
</div>


<style>
	.photo {
		border-radius: 0.5em;
	}
</style>
