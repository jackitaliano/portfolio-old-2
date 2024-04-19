<script>
	import { onMount } from "svelte";

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

	let currCardElement;

	const prevButtonId = "prev-arrow";
	const nextButtonId = "next-arrow";
	let prevButtonElement;
	let nextButtonElement;

	let currInitialTop;
	let currInitialLeft;

	onMount(() => {
		prevButtonElement = document.getElementById(prevButtonId);
		nextButtonElement = document.getElementById(nextButtonId);
		console.log(prevButtonElement)
		setCards(0);

		currCardElement = document.getElementById("currCard");
		currInitialTop = currCardElement.style.top;
		currInitialLeft = currCardElement.style.left;
	})


	function setCards(pos) {
		currPos = pos;

		currCard = projects[currPos];

		if (pos > 0) {
			prevCard = projects[currPos - 1];
			prevButtonElement.style.opacity = 1;
		} else {
			prevCard = null;
			prevButtonElement.style.opacity = 0;
		}

		if (pos < projects.length - 1) {
			nextCard = projects[currPos + 1];
			nextButtonElement.style.opacity = 1;
		} else {
			nextCard = null;
			nextButtonElement.style.opacity = 0;
		}

	}

	function setArrows(pos) {
		const delay = 500;
		if (pos > 0) {
			prevButtonElement.style.visibility = "visible";
			setTimeout(() => {
				prevButtonElement.style.opacity = 1;
			}, delay);
		} else {
			prevButtonElement.style.opacity = 0;
			setTimeout(() => {
				prevButtonElement.style.visibility = "hidden";
			}, delay);
		}

		if (pos < projects.length - 1) {
			nextButtonElement.style.visibility = "visible";
			setTimeout(() => {
				nextButtonElement.style.opacity = 1;
			}, delay);
		} else {
			nextButtonElement.style.opacity = 0;
			setTimeout(() => {
				nextButtonElement.style.visibility = "hidden";
			}, delay);
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
		if (lock || !nextCard) {
			return;
		}

		const newPos = currPos + 1;

		nextButtonElement.style.opacity = 0;

		lock = true;
		moveCurr("left");
		moveCenter("nextCard");

		setArrows(newPos);

		setTimeout(()=> {
			setCards(newPos);
			lock = false;
		}, 900);

		nextButtonElement.blur();
	}

	async function handlePrev(event) {
		if (lock || !prevCard) {
			return;
		}

		const newPos = currPos - 1;

		prevButtonElement.style.opacity = 0;

		lock = true;
		moveCurr("left");
		moveCenter("prevCard");

		setArrows(newPos);

		setTimeout(()=> {
			setCards(newPos);
			lock = false;
		}, 900);

		prevButtonElement.blur();
	}

	let moving = false;
	let left = 0;

	function onMouseDown(e) {
		moving = true;
		

		currCardElement.style.transition = "none";
	}

	function onMouseMove(e) {
		if (touching) {
			if (e.totalY > 50 || e.totalY < -50) {
				currCardElement.style.transition = "none";
				console.log("move: ",e.movementY);
				console.log("total: ",e.totalY);
				window.scrollBy(0, -(e.movementY + e.totalY));
				currCardElement.style.transition = "left 0.9s, top 0.9s, opacity 0.7s, width 0.7s, height 0.7s";
			}
		}

		if (moving) {
			left += e.movementX;

			currCardElement.style.left = left + "px";
		}
	}


	function handleSwipe(left) {
		const thresh = 100
		if (left < -thresh) {
			handleNext();

		} else if (left > thresh) {
			handlePrev();
		}
	}

	function onMouseUp(e) {
		moving = false;
		touching = false;
		handleSwipe(left);
		left = 0;
		currCardElement.style.left = "0";
		currCardElement.style.transition = "left 0.9s, top 0.9s, opacity 0.7s, width 0.7s, height 0.7s";
	}

	function onMouseLeave(e) {
		moving = false;
		touching = false;
		handleSwipe(left);
		left = 0;
		currCardElement.style.left = "0";
		currCardElement.style.transition = "left 0.9s, top 0.9s, opacity 0.7s, width 0.7s, height 0.7s";
	}

	let prevTouch;
	let firstTouch;
	let touching = false;
	function onTouchStart(e) {
		firstTouch = e.touches[0];
		prevTouch = firstTouch;
		touching = true;
		onMouseDown(e);
	}

	function onTouchMove(e) {
		const newTouch = e.touches[0];
		e.movementX = newTouch.pageX - prevTouch.pageX;
		e.movementY = newTouch.pageY - prevTouch.pageY;
		e.totalX = newTouch.pageX - firstTouch.pageX;
		e.totalY = newTouch.pageY - firstTouch.pageY;

		onMouseMove(e);

		prevTouch = newTouch;
	}
</script>

<div class="cards-container flex justify-between items-center w-full h-full">
	<button id="prev-arrow" tabindex=0 class="arrow" on:click={handlePrev}><img class="arrow-img" src="static/images/caret-left.svg" alt="left"/></button>
	<div class="cards flex justify-between w-full h-full">
		{#key currPos}
		{#if prevCard}
			<div id="prevCard" class="card prev">
				<Card>
				<h1>{ prevCard }</h1>
				</Card>
			</div>
		{/if}
		<div bind:this={currCardElement} id="currCard" class="card curr draggable" 
			on:mousedown={onMouseDown}
			on:mouseup={onMouseUp}
			on:mousemove={onMouseMove}
			on:mouseleave={onMouseLeave}
			on:touchstart={onTouchStart}
			on:touchmove={onTouchMove}
			on:touchend={onMouseUp}
			on:touchcancel={onMouseLeave}
		 >
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
	<button id="next-arrow" tabindex=0 class="arrow" on:click={handleNext}><img class="arrow-img" src="static/images/caret-right.svg" alt="right"/></button>
</div>

<style>
	.cards-container {
	}

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
		outline: -webkit-ring-color;
		background-color: none;
	}

	.arrow-img {
		margin: auto;
		width: 25px;
		height: 25px;
		border-radius: 50%;
	}
	.draggable {
		-webkit-touch-callout:none;
		-ms-touch-action:none; touch-action:none;
		-moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none;
	}
</style>
