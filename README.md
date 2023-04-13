# svelte-transition-actions

[![npm version](https://badge.fury.io/js/svelte-transition-actions.svg)](https://badge.fury.io/js/svelte-transition-actions)

A svelte action that allows you to use any svelte transition as an action without re-rendering the element.

## Installation

```bash
npm install svelte-transition-actions
# or
yarn add svelte-transition-actions
```

## Usage

```svelte
<script>
    import { fade } from 'svelte/transition';
    import { transition } from 'svelte-transition-actions';
  
    let displayed = true;
</script>

<button on:click={() => displayed = !displayed}>Toggle</button>

<h1 use:transition={{ fn: fade, key: displayed, duration: 1000 }}>
    Fade in and out
</h1>
``` 

You can pass any arguments
that [the transition function accepts](https://svelte.dev/docs#template-syntax-element-directives-transition-fn).

## More examples

```svelte
<script>
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { transition } from 'svelte-transition-actions';
  
    let displayed = true;
</script>

<button on:click={() => displayed = !displayed}>Toggle</button>

<div use:transition="{{fn: slide, delay: 250, duration: 300, easing: quintOut, axis: 'x'}}">
    slides in and out horizontally
</div>
``` 

### Heads up

Not very well tested. Consider it alpha.