/* Testimonial */
setInterval(() => {
	const testimonials = [
		document.querySelector('#one'),
		document.querySelector('#two'),
		document.querySelector('#three'),
	];

	for (let i = 0; i < testimonials.length; i++) {
		const displayValue = getComputedStyle(testimonials[i]).display;

		if (displayValue === 'flex') {
			testimonials[i].style.display = 'none';
			const isNotTheLastValue = i + 1 <= testimonials.length - 1;

			isNotTheLastValue
				? (testimonials[i + 1].style.display = 'flex')
				: (testimonials[0].style.display = 'flex');

			return;
		}
	}
}, 2000);

/* Responsive Navbar Mobile */
function mobile() {
	var x = document.getElementById('nav');
	if (x.className === 'nav') {
		x.className += ' responsive';
	} else {
		x.className = 'nav';
	}
}
