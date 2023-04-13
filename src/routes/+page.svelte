<script lang="ts">
  import { transition } from "../lib/transition"
  import { blur, fade, fly, scale, slide } from "svelte/transition"

  let displayed = false
</script>

<button on:click={() => displayed = !displayed}>Toggle</button>

<div use:transition={{fn: fade, key: displayed, duration: 4000}}>Toggled content</div>
<div use:transition={{fn: slide, key: displayed, duration: 4000}}>Toggled content</div>
<div use:transition={{fn: blur, key: displayed, duration: 4000}}>Toggled content</div>
<div use:transition={{fn: fly, key: displayed, duration: 4000}}>Toggled content</div>
<div use:transition={{fn: scale, key: displayed, duration: 4000}}>Toggled content</div>
