export function renderButtonStyle(type: string) {
	switch (type) {
		case "primary":
			return "rounded-md bg-Gold px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-darkGold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ";
		case "secondary":
			return "rounded-md bg-Gold px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-darkGold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ";
		default:
			return "rounded-md bg-Gold px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-darkGold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ";
	}
}
