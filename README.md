# svelte-actions

A Prototype svelte actions for inclusion into official actions in future. [See RFC](https://github.com/sveltejs/rfcs/pull/24) and [Discuss High Level Policy](https://github.com/sw-yx/svelte-actions/issues/7).

> ⚠️ Tests are kindly provided by [@geoffrich](https://github.com/sw-yx/svelte-actions/pull/18) - but do not rely on this library yet! APIs may change - this is a strawman for discussion.

## Install Instructions

```bash
npm i svelte-actions
```

Available actions:

| name              | description                                                                                                                                                            |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `clickOutside`    | [Demo](https://svelte.dev/repl/dae848c2157e48ab932106779960f5d5?version=3.19.2) - Call callback when user clicks outside a given element.                              |
| `longpress`       | [Demo](https://svelte.dev/tutorial/adding-parameters-to-actions) - Creates `longpress` event when mousedown above `duration` milliseconds.                             |
| `pannable`        | [Demo](https://svelte.dev/tutorial/actions) - Creates `panstart`, `panmove`, `panend` events so you can drag elements.                                                 |
| `lazyload`        | [Demo](https://svelte.dev/repl/f12988de576b4bf9b541a2a59eb838f6?version=3.23.2) - Lazily attach properties to any DOM element (e.g. `<img>`) when it is in the window. |
| `preventTabClose` | [Demo](https://svelte.dev/repl/a95db12c1b46433baac2817a0963dc93) - Prevent current tab from being closed by user.                                                      |
| `shortcut`        | [Demo](https://svelte.dev/repl/aca51811429c4127b1e7ff7eb67a172f?version=3.38.2) - Add a keyboard shortcut to a div or a button.                                                       |


## Included Actions

### `clickOutside`

```ts
export function clickOutside(node: HTMLElement, params: {
	enabled: boolean, 
	callback?: (node?: HTMLElement) => void;
}): ReturnType<Action>
```

Call callback when user clicks outside a given element.

Demo: https://svelte.dev/repl/dae848c2157e48ab932106779960f5d5?version=3.19.2


```svelte
<script>
  import {clickOutside} from 'svelte-actions'
  let open = true;
</script>


<div use:clickOutside={{ enabled: open, callback: () => open = false }}>
   <button on:click={() => open = true}>Open</button>
   {#if open}
    <span>
      Opened
    </span>
  {/if}
</div>
```

Discuss this action: https://github.com/sw-yx/svelte-actions/issues/4

### `longpress`

`export function longpress(node: HTMLElement, duration: number): ReturnType<Action>`

Creates `longpress` event when mousedown above `duration` milliseconds.

Demo: https://svelte.dev/tutorial/adding-parameters-to-actions

```svelte
<script>
  import {longpress} from 'svelte-actions'
</script>

<button use:longpress={duration}
    on:longpress="{() => pressed = true}"
    on:mouseenter="{() => pressed = false}"
  >press and hold</button>
```

Discuss this action: https://github.com/sw-yx/svelte-actions/issues/3

### `pannable`

`export function pannable(node: HTMLElement): ReturnType<Action>`

Creates `panstart`, `panmove`, `panend` events so you can drag elements. 

Demo: https://svelte.dev/tutorial/actions

```svelte
<div class="box"
	use:pannable
	on:panstart={handlePanStart}
	on:panmove={handlePanMove}
	on:panend={handlePanEnd}
></div>
```

The events contain `clientX` and `clientY` coordinates (or diffs in the case of `panmove`):

- `panstart` event: `{ detail: { x, y }}`
- `panmove` event: `{ detail: { dx, dy }}`
- `panend` event: `{ detail: { x, y }}`

Discuss this action: https://github.com/sw-yx/svelte-actions/issues/6

### `lazyload`

`export function lazyLoad(node: HTMLElement, attributes: Object): ReturnType<Action>`

Lazily attach properties to any DOM element when it is in the window. Useful for lazy loading images, and other properties.

Demo: https://svelte.dev/repl/f12988de576b4bf9b541a2a59eb838f6?version=3.23.2

```svelte
<script>
  import {lazyload} from 'svelte-actions'
</script>

<img use:lazyLoad={{src:"/myimage"}} alt="">
```

Discuss this action: https://github.com/sw-yx/svelte-actions/issues/2

### `preventTabClose`

`export function preventTabClose(_, enabled: boolean)`

Prevent current tab from being closed by user.

Demo: https://svelte.dev/repl/a95db12c1b46433baac2817a0963dc93

```svelte
<script>
  import {preventTabClose} from 'svelte-actions'
  let isOn = false
</script>

<button use:preventTabClose={isOn} on:click={() => isOn = !isOn}>Click me</button>
```

Discuss this action: https://github.com/sw-yx/svelte-actions/pull/11

### `shortcut`

```ts
export function shortcut(node: Action, {
  control?: boolean;
  shift?: boolean;
  alt?: boolean;
  code: string;
  callback?: (node?: HTMLElement) => void;
})
```

Add a keyboard shortcut to a div or a button.

It either calls a callback or clicks on the node it was put on.

Demo: https://svelte.dev/repl/aca51811429c4127b1e7ff7eb67a172f?version=3.38.2

```svelte
<script>
  import {shortcut} from 'svelte-actions'
	let buttonCount = 0, divCount = 0;
</script>

<button use:shortcut={{shift: true, code: 'Digit1'}} on:click={() => buttonCount++}>
	Triggers a click on the button (Shift + 1)				
</button>

Clicked: {buttonCount}
```

## Future actions considering adding

You can vote for or discuss proposed actions:

- `closeOnEscape`/`closeOnScroll`/`closeOnFocusOutside`: https://github.com/sveltejs/rfcs/pull/24#issuecomment-645094235
- `selectTextOnFocus`/`clearTextOnEscape`
- `blurOnEscape`/`blurOnEnter`
- `viewport`: creates `enterViewport`/`leaveViewport` events https://github.com/sveltejs/rfcs/pull/24#issuecomment-645392769
- `activeLink`: adds a class if the current link is "active" https://github.com/sw-yx/svelte-actions/issues/13#issuecomment-767844419
- `focus` as a JS version of `autofocus` HTML attribute https://github.com/sw-yx/svelte-actions/issues/22

Click to vote:

[![](https://api.gh-polls.com/poll/01EP26KTTPK3XJMAV132PP1Z6P/viewport)](https://api.gh-polls.com/poll/01EP26KTTPK3XJMAV132PP1Z6P/viewport/vote)
[![](https://api.gh-polls.com/poll/01EP26KTTPK3XJMAV132PP1Z6P/selectTextOnFocus%2CclearTextOnEscape)](https://api.gh-polls.com/poll/01EP26KTTPK3XJMAV132PP1Z6P/selectTextOnFocus%2CclearTextOnEscape/vote)
[![](https://api.gh-polls.com/poll/01EP26KTTPK3XJMAV132PP1Z6P/blurOnEscape%2CblurOnEnter)](https://api.gh-polls.com/poll/01EP26KTTPK3XJMAV132PP1Z6P/blurOnEscape%2CblurOnEnter/vote)
[![](https://api.gh-polls.com/poll/01EP26KTTPK3XJMAV132PP1Z6P/closeOn%7BEscape%2CScroll%2CFocusOutside%7D)](https://api.gh-polls.com/poll/01EP26KTTPK3XJMAV132PP1Z6P/closeOn%7BEscape%2CScroll%2CFocusOutside%7D/vote)



[Propose a new action here!](https://github.com/sw-yx/svelte-actions/issues/new)
