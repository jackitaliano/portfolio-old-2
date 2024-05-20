<script>
	import SectionHeader from "./SectionHeader.svelte";
	import SectionText from "./SectionText.svelte";
	import List from "./List.svelte";
	import Card from "./Card.svelte";
</script>

<div class="w-full h-full">
	<SectionHeader>
		About Me
	</SectionHeader>
	<div class="flex flex-col md:flex-row gap-8 md:gap-0 justify-around">
			<div class="w-full md:w-5/12">
				<Card
			>
			<SectionText>
			 Professional
			</SectionText>
			<List>
				<li>
					 CSE Student at <span class="text-red-600"><strong>The</strong> Ohio State University</span>
				</li>
				<li>
					<span class="text-blue-400">NASA</span> Glenn Research Intern
				</li>
				<li>
					Hackathon / Coding Competition participant
				</li>
				<li>
					Code Ninjas Teacher, Honor Golf Caddie, Golf Course Attendant
				</li>
			</List>
				</Card>
			</div>
			<div class="w-full md:w-5/12">
				<Card>
					<SectionText>
						Personal
					</SectionText>
					<List>
						<li>
							Golfer, Snowboarder/Skier, Runner
						</li>
						<li>
							Fraternity Risk Manager, Website Coordinator, Professional Development Lead
						</li>
						<li>
							Lifelong Learner and Problem Solver
						</li>
						<li>
							Lacrosse player, Football player, and Cross Country runner
						</li>
					</List>
				</Card>
			</div>
		</div>
</div>


<style>
	.photo {
		border-radius: 0.5em;
	}
</style>
