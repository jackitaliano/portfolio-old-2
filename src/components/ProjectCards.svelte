<script>
	import Card from "./Card.svelte";

	let projects = [
		"project 1",
		"project 2",
		"project 3",
		"project 4",
		"project 5",
		"project 6",
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

		if (pos > 0) {
			prevCard = projects[currPos - 1];
		} else {
			prevCard = null;
		}

		if (pos < projects.length - 1) {
			nextCard = projects[currPos + 1];
		} else {
			nextCard = null;
		}
	}

	function moveCurr(dir) {
		const currCardElement = document.getElementById("currCard");
		currCardElement.style.left = "25%";
		currCardElement.style.top = "25%";
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

	async function handleNext(event) {
		if (lock) {
			return;
		}

		const newPos = currPos + 1;
		if (newPos < projects.length) {
			const button = event.currentTarget;
			button.style.opacity = 0;
			lock = true;
			moveCurr("left");
			moveCenter("nextCard");

			if (newPos < projects.length - 1) {
				setTimeout(()=>{
					//button.style.visibility = "visible";
					button.style.opacity = 1;
					button.blur();
				}, 450);
			} else {
				//button.style.visibility = "hidden";
			}
			setTimeout(()=> {
				setCards(newPos);
				lock = false;
			}, 900);
		}
	}

	async function handlePrev(event) {
		if (lock) {
			return;
		}

		const newPos = currPos - 1;
		if (newPos >= 0) {
			const button = event.currentTarget;
			button.style.opacity = 0;
			lock = true;
			moveCurr("right");
			moveCenter("prevCard");

			if (newPos > 0) {
				setTimeout(()=>{
					//button.style.visibility = "visible";
					button.style.opacity = 1;
					button.blur();
				}, 600);
			} else {
				//button.style.visibility = "hidden";
			}
			setTimeout(()=> {
				setCards(newPos);
				lock = false;

			}, 900);
		}
	}
</script>

<div class="flex justify-between items-center w-full h-full">
	<button id="left-arrow" tabindex=0 class="arrow" on:click={handlePrev}><img class="arrow-img" src="static/images/caret-left.svg" alt="left"/></button>
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
<button id="right-arrow" tabindex=0 class="arrow" on:click={handleNext}><img class="arrow-img" src="static/images/caret-right.svg" alt="right"/></button>
</div>

<style>
	.cards {
		background-color: none;
		position: relative;
		width: 100%;
		height: 100%;
	}

	.card {
		position: absolute;
		background-color: none;
		top: 12.5%;
		left: 0;
		width: 100%;
		height: 75%;
		transition: left 0.9s, top 0.9s, opacity 0.7s, width 0.7s, height 0.7s;
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

	.arrow {
		width: 40px;
		height: 50%;
		outline: none;
		background-color: none;
		box-shadow: none;
		border-radius: 2em;

		opacity: 1;
		transition: opacity 0.4s;
	}
	.arrow:focus-visible,
	.arrow:focus,
	.arrow:active {
		outline: none;
		background-color: none;
	}

	.arrow-img {
		margin: auto;
		width: 25px;
		height: 25px;
		border-radius: 50%;
	}
</style>
