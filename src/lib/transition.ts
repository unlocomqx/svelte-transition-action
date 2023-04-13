import { fade, type TransitionConfig } from "svelte/transition"

type TransitionFN = (node: HTMLElement, Params: Record<string, any>) => TransitionConfig

export type TransitionParams<FN extends TransitionFN> = {
  fn: FN
  key: boolean
} & Parameters<FN>[1]

export function transition<FN extends TransitionFN>(node: HTMLElement, params?: TransitionParams<FN>) {
  console.log(node, params)

  const callback = fade(node)

  console.log(callback)

  return {
    update(newParams: TransitionParams<FN>) {
      console.log(newParams.key)
    },
    destroy() {
      console.log('destroy')
    }
  }
}