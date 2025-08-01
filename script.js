// Navigation scroll effect
window.addEventListener('scroll', () => {
	const nav = document.querySelector('nav');
	if (window.scrollY > 50) {
		nav.classList.add('scrolled');
	} else {
		nav.classList.remove('scrolled');
	}
});

// Mobile menu toggle
function mobile() {
	const nav = document.querySelector('nav ul');
	nav.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});

// Testimonial carousel
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
}, 3000);

// Contact form handling
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
	e.preventDefault();
	
	// Get form data
	const formData = new FormData(this);
	const data = Object.fromEntries(formData);
	
	// Simple validation
	if (!data.name || !data.email || !data.message) {
		alert('Veuillez remplir tous les champs obligatoires.');
		return;
	}
	
	// Simulate form submission
	alert('Merci pour votre message ! Nous vous recontacterons bientôt.');
	this.reset();
});

// Property cards animation on scroll
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = '1';
			entry.target.style.transform = 'translateY(0)';
		}
	});
}, observerOptions);

// Observe property cards and service cards
document.addEventListener('DOMContentLoaded', () => {
	const cards = document.querySelectorAll('.property-card, .service-card');
	cards.forEach(card => {
		card.style.opacity = '0';
		card.style.transform = 'translateY(30px)';
		card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
		observer.observe(card);
	});
});

// CTA button action
document.querySelector('.cta-button')?.addEventListener('click', () => {
	document.querySelector('#biens')?.scrollIntoView({
		behavior: 'smooth'
	});
});

// Property details buttons
document.querySelectorAll('.btn-details').forEach(button => {
	button.addEventListener('click', function() {
		const propertyName = this.closest('.property-card').querySelector('h3').textContent;
		alert(`Vous souhaitez en savoir plus sur : ${propertyName}\nContactez-nous au 07 87 98 02 10`);
	});
});
