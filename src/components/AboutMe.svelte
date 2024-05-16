<script>
	import SectionHeader from "./SectionHeader.svelte";
	import SectionText from "./SectionText.svelte";
	import List from "./List.svelte";
</script>

<div class="flex justify-between">
	<div>
		<SectionHeader>Hello,<br/>I'm Jack...</SectionHeader>
		<SectionText>
			I'm a:
		</SectionText>
		<List>
			<li>
				Computer Science & Engineering Student at <span class="text-red-600"><strong>The</strong> Ohio State University</span>
			</li>
			<li>
				AI / Web Dev Intern at NASA Glenn Research
			</li>
		</List>
	</div>
</div>

<style>
</style>
