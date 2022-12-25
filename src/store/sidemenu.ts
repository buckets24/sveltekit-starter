import { writable } from 'svelte/store';

function sidebarStore() {
	const { subscribe, set, update } = writable(null);

	return {
		subscribe,
		toggle: () => update((n) => (n = n === null ? true : false)),
		reset: () => set(null)
	};
}

export const sidebarState = sidebarStore();
