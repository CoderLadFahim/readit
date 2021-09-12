export default function disableVerticalScroll() {
	document.body.style.overflowY !== 'hidden'
		? (document.body.style.overflowY = 'hidden')
		: (document.body.style.overflowY = 'scroll');
}
