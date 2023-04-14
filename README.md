# svelte-transition-action

[![npm version](https://badge.fury.io/js/svelte-transition-action.svg)](https://badge.fury.io/js/svelte-transition-action)

A svelte action that allows you to use any svelte transition as an action without re-rendering the element.

## Installation

```bash
npm install svelte-transition-action
# or
yarn add svelte-transition-action
```

## Usage

```svelte
<script>
    import { fade } from 'svelte/transition';
    import { transition } from 'svelte-transition-action';
  
    let displayed = true;
</script>

<button on:click={() => displayed = !displayed}>Toggle</button>

<h1 use:transition={{ fn: fade, key: displayed, duration: 1000 }}>
    Fade in and out
</h1>
```

[REPL](https://svelte.dev/repl/94016945d3af465c8ffab47854b5771d?version=3.58.0)

You can pass any arguments
that [the transition function accepts](https://svelte.dev/docs#template-syntax-element-directives-transition-fn).

## More examples

```svelte
<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { transition } from 'svelte-transition-action';

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
``` 

[REPL](https://svelte.dev/repl/c3ace6cb2b3d44618f7ba968f4ecedee?version=3.58.0)

### Heads up

Not very well tested. Consider it alpha.