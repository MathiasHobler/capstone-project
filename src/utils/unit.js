/**
 * Appends the rem unit suffix to a number
 * @param {number} n
 * @return {string}
 * @example
 * rem(10) // "10rem"
 */
export function rem(n) {
	return `${n}rem`;
}

/**
 * Converts a number from pixel to rem and adds the unit suffix.
 *
 * @param {number} pixel
 * @param {number} rootFontSize
 * @return {string}
 * @example
 * pxToRem(16) // "1rem"
 */
export function pxToRem(pixel, rootFontSize = 16) {
	return rem(pixel / rootFontSize);
}
//isActive,setNewEvent,newEvent, categories
export function toggleFilter(isState, setTheState, event, icon) {
	if (isState) {
		setTheState({
			...event,
			categories: event.categories.filter(categorie => {
				return categorie !== icon.categorie;
			}),
		});
	} else {
		setTheState({
			...event,
			categories: [...event.categories, icon.categorie],
		});
	}
}
