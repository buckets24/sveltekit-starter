export function clickOutside(node) {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node));
		}
	};

	document.addEventListener('click', handleClick, true);
	document.getElementById('header-menu').addEventListener('click', null, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
