<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { transition } from '$lib';

	let displayed = true;
</script>

<button on:click={() => displayed = !displayed}>Toggle</button>

<div use:transition="{{fn: slide, key: displayed, delay: 250, duration: 300, easing: quintOut}}">
	slides in and out horizontally
</div>