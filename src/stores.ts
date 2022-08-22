import { writable } from "svelte/store";

const defaults = {
	running: false,
	degreeX: 2,
	degreeY: 2,
	iterations: 1000,
	step: 3,
	delay: 10,
	color: "orange",
	bgColor: "transparent",
	lineWidth: 1,
	hasResetted: false,
};

function createSettingsStore() {
	const { subscribe, set, update } = writable<Settings>({ ...defaults });

	return {
		subscribe,
		set,
		update,
		reset: () => set({ ...defaults, hasResetted: true }),
	};
}

export const settings = createSettingsStore();

interface Settings {
	running: boolean;
	degreeX: number;
	degreeY: number;
	iterations: number;
	step: number;
	delay: number;
	color: string;
	bgColor: string;
	lineWidth: number;
	hasResetted: boolean;
}
