<script lang="ts">
  import { transition } from "../lib/transition"
  import { fade, slide } from "svelte/transition"

  let displayed = false
</script>

<button on:click={() => displayed = !displayed}>Toggle</button>

<div use:transition={{fn: fade, key: displayed, duration: 400}}>Toggled content</div>
<div use:transition={{fn: slide, key: displayed, duration: 400}}>Toggled content</div>
