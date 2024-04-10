<script>
	let images = [ "static/images/test.png", "static/images/bidara.png" ]

	function handleClickRight() {
		console.log("initial array: ");
		console.log(images);
		const nextImage = images.shift();
		console.log("next image:", nextImage);
		images.push(nextImage);
		console.log("new array:");
		console.log(images);
	}

	function handleClickLeft() {
	}
</script>

<div class="carousel-container w-full h-full">
	<button class="arrow left" on:click={handleClickLeft}>
		<img class="arrow-img" src="static/images/chevron-left.svg" alt="left"/>
	</button>
	{#each images as image }
		<div class="item">
			<img src={image} alt="test"/>
		</div>
	{/each}
	<button class="arrow right" on:click={handleClickRight}>
		<img class="arrow-img" src="static/images/chevron-right.svg" alt="right"/>
	</button>
</div>

<style>
	.carousel-container {
		display: grid;
	}

	.item {
		background-color: white;
		width: 400px;
		height: 400px;

		grid-column: 2;
		grid-row: 2;
	}

	.arrow {
		height: 100%;
		width: 2em;
	}

	.arrow-img {
		margin: auto;
		width: 20px;
		height: 20px;
	}

	.left {
		grid-column: 1;
		grid-row: 2;

		border-radius: 1em 0 0 1em;
	}

	.right {
		grid-column: 3;
		grid-row: 2;

		border-radius: 0 1em 1em 0;
	}

	.arrow:focus-visible,
	.arrow:focus,
	.arrow:hover {
		box-shadow: 0 0 20px rgba(255,255,255,0.5);
		border: none;
		outline: none;
	}
</style>
