<script lang="ts">
  import { transition } from "../lib/transition"
  import { fade } from "svelte/transition"

  let displayed = true
</script>

<button on:click={() => displayed = !displayed}>Toggle</button>

<div use:transition={{fn: fade, key: displayed}}>Toggled content</div>

{#if displayed}
  <div transition:fade={{duration: 150}}>Toggled content</div>
{/if}
