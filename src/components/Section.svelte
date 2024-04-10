<script>
	export let id;
</script>

<div id={id} class="section">
	<slot/>
</div>

<style>
	.section {
		height: calc(100%);
		padding-top: 15em;
	}
</style>
