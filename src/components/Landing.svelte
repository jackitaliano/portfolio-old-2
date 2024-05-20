<script>
	import SectionHeader from "./SectionHeader.svelte";
	import SectionText from "./SectionText.svelte";
	import LinkIcon from "./LinkIcon.svelte";
    import Icon from "./Icon.svelte";
</script>

<div class="landing flex flex-col gap-16 md:gap-32">
	<div class="flex flex-col md:flex-row w-full h-1/2 justify-between">
		<div class="w-full md:w-2/3 h-full flex flex-col justify-between">
			<div class="w-full h-full pb-4 flex justify-between">
				<SectionHeader>
					Hello,<br/>I'm Jack
				</SectionHeader>
			</div>
			<div class="w-full h-full">
				<SectionText>
					I'm a Computer Science and Engineering Student at <strong>The</strong> Ohio State University, and an intern at NASA Glenn Research Center.
				</SectionText>
				<SectionText>
					I have experience in Web Development, Generative AI, and Machine Learning. 
				</SectionText>
				<SectionText>
					I'm currently looking for a full-time dev position starting January 2025.
				</SectionText>
			</div>
		</div>
		<div class="w-full md:w-1/4 h-full shrink-0 mi-auto">
			<img class="headshot w-40 h-40 mt-10 md:mt-0 shrink-0" src="https://i.imgur.com/OIdbLjE.png" alt="headshot" draggable="false"/>
			<div class="w-full flex flex-wrap justify-center mt-10">
				<LinkIcon
					src="static/images/github.svg"
					alt="github"
					url="https://github.com/jackitaliano"
			 />
			 <LinkIcon
				 src="static/images/linkedin-in.svg"
				 alt="linkedin"
				 url="https://linkedin.com/in/jackitaliano"
			 />
			 <LinkIcon
				 src="static/images/resume.svg"
				 alt="resume"
				 url="static/Jack Italiano - Resume.pdf"
			 />
			</div>
		</div>
	</div>
	<div class="w-full h-fit flex flex-wrap justify-center">
		<Icon
			src="static/images/python.svg"
		 alt="python"
		/>
		<Icon
		 src="static/images/golang.svg"
		 alt="GoLang"
		/>
		<Icon
		 src="static/images/c-sharp.svg"
		 alt="C-Sharp"
		/>
		<Icon
		 src="static/images/java.svg"
		 alt="Java"
		/>
		<Icon
		 src="static/images/js.svg"
		 alt="JavaScript"
		/>
		<Icon
		 src="static/images/react.svg"
		 alt="React"
		/>
		<Icon
		 src="static/images/svelte.svg"
		 alt="Svelte"
		/>
		<Icon
		 src="static/images/aws.svg"
		 alt="AWS"
		/>
		<Icon
		 src="static/images/gcp.svg"
		 alt="GCP"
		/>
		<Icon
		 src="static/images/terraform.svg"
		 alt="Terraform"
		/>
		<Icon
		 src="static/images/linux.svg"
		 alt="Linux"
		/>
		<Icon
		 src="static/images/openai.svg"
		 alt="OpenAI"
		/>
		<Icon
		 src="static/images/machine-learning.svg"
		 alt="Machine Learning"
		/>
	</div>
</div>

<style>
	.headshot {
		border-radius: 50%;
		background-color: rgba(0,0,0,0.5);
		box-shadow: 0 0 20px rgba(255,255,255,0.5);
		margin-inline: auto;
	}
</style>
