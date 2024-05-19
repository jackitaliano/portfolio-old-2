<script>
	import { onMount } from "svelte";

	export let swipeable = { mobile: true, desktop: false };
	export let autoScroll = { duration: 0, reverse: false };
	export let animation = { slide: true, scale: false, fade: false };
	export let lockDuration = 0;

	const prevAnimations = [];
	const nextAnimations = [];

	let autoScrollInterval;

	let currPos = 0;

	let prevButtonElement;
	let nextButtonElement;

	let items;
	let itemsContainer;
	let locked = false;

	onMount(() => {
		items = itemsContainer.children;

		if (animation.scale) {
			prevAnimations.push("prev-scale");
			nextAnimations.push("next-scale");
		}
		if (animation.slide) {
			prevAnimations.push("prev-slide");
			nextAnimations.push("next-slide");
		}
		if (animation.fade) {
			prevAnimations.push("prev-fade");
			nextAnimations.push("next-fade");
		}

		for (let i = 0; i < items.length; i++) {
			items[i].classList.add("item");

			if (swipeable.mobile) {
				items[i].addEventListener("touchstart", (e) => onTouchStart(e));
				items[i].addEventListener("touchmove", (e) => onTouchMove(e));
				items[i].addEventListener("touchend", (e) => onTouchEnd(e));
				items[i].addEventListener("touchcancel", (e) => onTouchEnd(e));
			}
			if (swipeable.desktop) {
				items[i].addEventListener("mousedown", (e) => onMouseDown(e));
				items[i].addEventListener("mousemove", (e) => onMouseMove(e));
				items[i].addEventListener("mouseleave", (e) => onMouseUp(e));
				items[i].addEventListener("mouseup", (e) => onMouseUp(e));
			}
		}

		setCards(currPos);
		setArrows(currPos);
		setAutoScroll(autoScroll.duration)
	})

	function setAutoScroll(duration) {
		if (autoScroll.duration === 0) {
			return;
		}

		if (autoScrollInterval) {
			clearInterval(autoScrollInterval);
		}

		if (autoScroll.reverse) {
			autoScrollInterval = setInterval(handlePrev, duration);
		} else {
			autoScrollInterval = setInterval(handleNext, duration);
		}
	}

	function clearAutoScroll() {
		clearInterval(autoScrollInterval);
		autoScrollInterval = null;
	}

	function setCards(pos) {
		for (let i = 0; i < pos; i++) {
			items[i].classList.remove("curr");
			prevAnimations.forEach((animation) => { items[i].classList.add(animation) });
			nextAnimations.forEach((animation) => { items[i].classList.remove(animation) });
		}

		items[pos].classList.add("curr");
		prevAnimations.forEach((animation) => { items[pos].classList.remove(animation) });
		nextAnimations.forEach((animation) => { items[pos].classList.remove(animation) });

		for (let i = pos + 1; i < items.length; i++) {
			items[i].classList.remove("curr");
			prevAnimations.forEach((animation) => { items[i].classList.remove(animation) });
			nextAnimations.forEach((animation) => { items[i].classList.add(animation) });
		}

		if (pos === items.length - 1) {
			prevAnimations.forEach((animation) => { items[0].classList.remove(animation) });
			nextAnimations.forEach((animation) => { items[0].classList.add(animation) });
		}

		if (pos === 0) {
			prevAnimations.forEach((animation) => { items[items.length - 1].classList.add(animation) });
			nextAnimations.forEach((animation) => { items[items.length - 1].classList.remove(animation) });
		}
	}

	function setArrows() {
		if (nextButtonElement) {
			nextButtonElement.style.visibility = "visible";
			setTimeout(() => {
				nextButtonElement.style.opacity = 1;
				nextButtonElement.style.cursor = "pointer";
			}, 500);
		}

		if (prevButtonElement) {
			prevButtonElement.style.visibility = "visible";
			setTimeout(() => {
				prevButtonElement.style.opacity = 1;
				prevButtonElement.style.cursor = "pointer";
			}, 500);
		}
	}

	async function handleNext() {
		if (locked) {
			return;
		} else {
			locked = true;
			setTimeout(() => locked = false, lockDuration);
		}

		setAutoScroll(autoScroll.duration);

		if (nextButtonElement) {
			nextButtonElement.style.opacity = 0;
			nextButtonElement.style.cursor = "default";
		}

		if (currPos < items.length - 1) {
			currPos += 1;
		} else {
			currPos = 0;
		}

		setCards(currPos);
		setArrows();
	}

	async function handlePrev() {
		if (locked) {
			return;
		} else {
			locked = true;
			setTimeout(() => locked = false, lockDuration);
		}

		if (prevButtonElement) {
			prevButtonElement.style.opacity = 0;
			prevButtonElement.style.cursor = "default";
		}
		
		if (currPos > 0) {
			currPos -= 1;
		} else {
			currPos = items.length - 1; 
		}

		setCards(currPos);
		setArrows();
	}

	function handleSwipe(left) {
		const thresh = 100
		if (left < -thresh) {
			handleNext();
			return true;

		} else if (left > thresh) {
			handlePrev();
			return true;
		}

		return false;
	}

	let moving = false;
	let left = 0;

	function onMouseDown() {
		clearAutoScroll();

		if (nextButtonElement) {
			nextButtonElement.style.opacity = "0.1";
		}
		if (prevButtonElement) {
			prevButtonElement.style.opacity = "0.1";
		}

		moving = true;
		
		items[currPos].style.transition = "none";
	}

	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;

			items[currPos].style.left = left + "px";
		}
	}

	function onMouseUp() {
		moving = false;
		items[currPos].style = "";
		items[currPos].blur();

		const swiped = handleSwipe(left);

		left = 0;

		if (!swiped) {
			if (nextButtonElement) {
				nextButtonElement.style.opacity = "1";
			}

			if (prevButtonElement) {
				prevButtonElement.style.opacity = "1";
			}
		}

		items[currPos].blur();

		setAutoScroll(autoScroll.duration);
	}

	// translate touch events into mouse events
	let prevTouch;
	let firstTouch;
	let touching = false;

	function onTouchStart(e) {
		touching = true;
		firstTouch = e.touches[0];
		prevTouch = firstTouch;
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

	function onTouchEnd(e) {
		onMouseUp(e);

		touching = false;
	}
</script>

<div class="carousel flex justify-between items-center w-full h-full">
	{#if $$slots.prev}
		<button bind:this={prevButtonElement} class="arrow" on:click={handlePrev}>
			<slot name="prev"/>
		</button>
	{/if}
	<div bind:this={itemsContainer} class="items flex justify-between w-full h-full">
		<slot name="content"/>
	</div>
	{#if $$slots.next}
		<button bind:this={nextButtonElement} class="arrow" on:click={handleNext}>
			<slot name="next"/>
		</button>
	{/if}
</div>

<style>
	.carousel {
		z-index: -1;
	}

	.items {
		z-index: 0;
		background-color: none;
		position: relative;
		width: 100%;
		height: 100%;
		max-height: 540px;
	}

	:global(.item){
		position: absolute;
		background-color: none;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: left 0.9s, top 0.9s, opacity 0.7s, width 0.9s, height 0.9s, visibility 0.7s, font-size 0.4s;
		margin: auto;
	}

	:globabl(.item.curr) {
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 1;
		visibility: visible;
	}

	:global(.item.next-slide) {
		left: 150%;
		visibility: hidden;
	}

	:global(.item.next-scale) {
		width: 50%;
		height: 50%;
		font-size: 0.5em !important; 
		visibility: hidden;
	}

	:global(.item.next-fade) {
		opacity: 0%;
		visibility: hidden;
	}

	:global(.item.prev-slide) {
		left: -150%;
		visibility: hidden;
	}

	:global(.item.prev-scale) {
		width: 50%;
		height: 50%;
		font-size: 0.75em !important; 
		visibility: hidden;
	}

	:global(.item.prev-fade) {
		opacity: 0%;
		visibility: hidden;
	}

	.arrow {
		margin: 2em;
		width: 20%;
		height: 75%;
		outline: none;
		background-color: none;
		box-shadow: none;
		border-radius: 2em;

		opacity: 1;
		transition: opacity 0.4s;
	}

	.arrow:focus-visible {
		border-color: red !important;
		background-color: rgba(0,0,0,0.3);
		box-shadow: 0 0 20px rgba(255,255,255,0.5);
	}

	@media only screen and (max-width: 768px) {
		.arrow {
			width: 15%;
			margin: 0;
		}
	}
</style>
