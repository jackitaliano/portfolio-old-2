<script>
	import Card from "./Card.svelte";

	let projects = [
		"project 1",
		"project 2",
		"project 3",
		"project 4",
	];

	let currPos = 0;
	let currCard = null;
	let prevCard = null;
	let nextCard = null;
	let lock = false;

	setCards(0);

	function setCards(pos) {
		currPos = pos;

		currCard = projects[currPos];

		if (currPos > 0) {
			prevCard = projects[currPos - 1];
		} else {
			prevCard = null;
		}

		if (currPos < projects.length - 1) {
			nextCard = projects[currPos + 1];
		} else {
			nextCard = null;
		}
	}

	function moveCurr(dir) {
		const currCardElement = document.getElementById("currCard");
		if (dir === "left") {
			currCardElement.style.left = "-100%";
		} else if (dir === "right") {
			currCardElement.style.left = "150%";
		}
		currCardElement.style.opacity = "0";
		currCardElement.style.width = "50%";
		currCardElement.style.height = "37.5%";
	}

	function moveCenter(id) {
		const currCardElement = document.getElementById(id);
		currCardElement.style.left = "0";
		currCardElement.style.opacity = "1";
		currCardElement.style.width = "100%";
		currCardElement.style.height = "75%";
	}

	async function handleNext() {
		if (lock) {
			return;
		}

		const newPos = currPos + 1;
		if (newPos < projects.length) {
			lock = true;
			moveCurr("left");
			moveCenter("nextCard");
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setCards(newPos);
			lock = false;
		}
	}

	async function handlePrev() {
		if (lock) {
			return;
		}

		const newPos = currPos - 1;
		if (newPos >= 0) {
			lock = true;
			moveCurr("right");
			moveCenter("prevCard");
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setCards(newPos);
			lock = false;
		}
	}
</script>

<div class="w-full h-full">
	<button class="bg-red-400" on:click={handlePrev}>prev</button>
	<button class="bg-red-400" on:click={handleNext}>next</button>
<div class="cards flex justify-between w-full h-full">
	{#key currPos}
	{#if prevCard}
	<div id="prevCard" class="card prev">
		<Card>
			<h1>{ prevCard }</h1>
		</Card>
	</div>
	{/if}
	<div id="currCard" class="card curr">
		<Card>
			<h1>{ currCard }</h1>
		</Card>
	</div>
	{#if nextCard}
	<div id="nextCard" class="card next">
		<Card>
			<h1>{ nextCard }</h1>
		</Card>
	</div>
	{/if}
	{/key}
</div>
</div>

<style>
	.cards {
		z-index: -1;
		background-color: none;
		position: relative;
		width: 100%;
		height: 100%;
	}

	.card {
		position: absolute;
		background-color: none;
		top: 0;
		left: 0;
		width: 100%;
		height: 75%;
		transition: left 1s, opacity 0.75s, width 0.75s, height 0.75s;
		margin: auto;
	}

	.curr {
		left: 0;
		opacity: 1;
	}

	.next {
		left: 150%;
		width: 50%;
		height: 37.5%;
		opacity: 0;
	}

	.prev {
		left: -100%;
		width: 50%;
		height: 37.5%;
		opacity: 0;
	}
</style>
