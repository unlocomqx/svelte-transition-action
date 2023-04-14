import type { TransitionConfig } from "svelte/transition"
import { create_bidirectional_transition, group_outros } from "svelte/internal"

declare type TransitionOptions = {
	direction: "in" | "out" | "both";
};
declare type TransitionFn = (node: Element, params: any, options: TransitionOptions) => TransitionConfig;

export type TransitionParams<FN extends TransitionFn> = {
	fn: FN
	key: boolean
} & Parameters<FN>[1]

export function transition<FN extends TransitionFn>(node: HTMLElement, params: TransitionParams<FN>) {

	group_outros()
	let transition = create_bidirectional_transition(node, params.fn, params, params.key)

	function handleTransition(key: boolean) {
		transition.run(key ? 1 : 0)
	}

	handleTransition(params.key)

	return {
		update(newParams: TransitionParams<FN>) {
			handleTransition(newParams.key)
		},
		destroy() {
			// @ts-ignore
			transition = undefined
		}
	}
}