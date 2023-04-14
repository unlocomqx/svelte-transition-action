<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { transition } from '$lib';

	let displayed = false;
</script>

<button on:click={() => displayed = !displayed}>Toggle</button>

<h1 use:transition="{{
		fn: slide,
		key: displayed,
		delay: 250,
		duration: 1000,
		easing: quintOut
}}">
	Slide in and out with delay
</h1>