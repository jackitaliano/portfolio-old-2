<script>
	import { onMount } from "svelte";

	export let id;

	let section;

	onMount(() => {
		const userAgent = navigator.userAgent.toLowerCase();
		if (/mobile|android|iphone|ipad/.test(userAgent)) {
				return true;
		}

		section.classList.add('faded');

		const observerOptions = {
			root: null, // Use the viewport as the root
			rootMargin: '0px',
			threshold: 0.3 // Trigger when 10% of the element is in view
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in');
				} else {
					entry.target.classList.remove('fade-in');
				}
			});
		}, observerOptions);

		observer.observe(section);

		return () => {
			observer.disconnect(); // Clean up the observer on component destroy
		};
  });
</script>

<div id={id} bind:this={section} class="section">
	<slot/>
</div>

<style>
	.section {
		padding-inline: 10em;
		padding-top: 8em;
		padding-bottom: 4em;
		margin-inline: auto;
		height: 100vh;
		width: 100%;
		max-width: 1920px;
	}

	:global(.faded) {
		transition: opacity 0.6s ease, visibility 0.6s ease;
		opacity: 0;
		visibility: hidden;
	}

	:global(.fade-in) {
		opacity: 1 !important;
		visibility: visible !important;
	}

	@media only screen and (max-width: 768px) {
		.section {
			height: 150vh;
			padding: 2em;
		}
	}

</style>
