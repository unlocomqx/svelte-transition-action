<script>
	import { fade } from 'svelte/transition';
	import { transition } from '$lib';

	let displayed = true;
</script>

<button on:click={() => displayed = !displayed}>Toggle</button>

<h1 use:transition={{ fn: fade, key: displayed, duration: 1000 }}>
	Fade in and out
</h1>